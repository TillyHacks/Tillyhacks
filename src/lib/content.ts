import { promises as fs } from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypeRaw from "rehype-raw";

const CONTENT_DIR = path.join(process.cwd(), "content");

export type Links = Record<string, string>;

let _linksCache: Links | null = null;
export async function getLinks(): Promise<Links> {
  if (_linksCache) return _linksCache;
  const raw = await fs.readFile(
    path.join(CONTENT_DIR, "links.json"),
    "utf8",
  );
  _linksCache = JSON.parse(raw) as Links;
  return _linksCache;
}

/**
 * Resolve a link that may be either a literal URL (http*, mailto:, /, #)
 * or a key from links.json (e.g. "register").
 */
export function resolveLink(value: string, links: Links): string {
  if (!value) return "#";
  if (/^(https?:|mailto:|\/|#)/.test(value)) return value;
  return links[value] ?? "#";
}

async function markdownToHtml(md: string, links: Links): Promise<string> {
  const file = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeStringify)
    .process(md);
  let html = String(file);
  html = html.replace(/href="([^"]+)"/g, (_match, href: string) => {
    const resolved = resolveLink(href, links);
    const isExternal = /^https?:/.test(resolved);
    const attrs = isExternal
      ? ' target="_blank" rel="noopener noreferrer"'
      : "";
    return `href="${resolved}"${attrs}`;
  });
  return html;
}

export interface SiteConfig {
  title: string;
  description: string;
  eventName: string;
  eventDates: string;
  eventLocation: string;
}

export async function getSiteConfig(): Promise<SiteConfig> {
  const raw = await fs.readFile(path.join(CONTENT_DIR, "site.md"), "utf8");
  const { data } = matter(raw);
  return data as SiteConfig;
}

export interface MarkdownDoc<TData = Record<string, unknown>> {
  data: TData;
  html: string;
  raw: string;
}

async function readMarkdownDoc<TData>(
  relativePath: string,
): Promise<MarkdownDoc<TData>> {
  const full = path.join(CONTENT_DIR, relativePath);
  const raw = await fs.readFile(full, "utf8");
  const { data, content } = matter(raw);
  const links = await getLinks();
  const html = await markdownToHtml(content, links);
  return { data: data as TData, html, raw: content };
}

export interface HeroData {
  eyebrow: string;
  titleLeft: string;
  titleRight: string;
  primaryCta: { label: string; link: string };
  secondaryCta: { label: string; link: string };
}
export const getHero = () => readMarkdownDoc<HeroData>("home/hero.md");

export interface AboutData {
  eyebrow: string;
  title: string;
  stats?: { label: string; value: string }[];
}
export const getAbout = () => readMarkdownDoc<AboutData>("home/about.md");

export interface TrackEntry {
  name: string;
  prize: string;
  description: string;
}
export interface TracksData {
  eyebrow: string;
  title: string;
  tracks: TrackEntry[];
}
export const getTracks = () => readMarkdownDoc<TracksData>("home/tracks.md");

export interface SponsorEntry {
  name: string;
  link?: string;
  image?: string;
}
export interface SponsorsData {
  eyebrow: string;
  title: string;
  sponsors: SponsorEntry[];
}
export const getSponsors = () =>
  readMarkdownDoc<SponsorsData>("home/sponsors.md");

export type ScheduleEventType =
  | "talk"
  | "meal"
  | "activity"
  | "ceremony"
  | "deadline";

export interface ScheduleEvent {
  time: string;
  title: string;
  location?: string;
  type?: ScheduleEventType;
}
export interface ScheduleDay {
  date: string;
  label: string;
  events: ScheduleEvent[];
}
export interface ScheduleData {
  eyebrow: string;
  title: string;
  subtitle?: string;
  timezone?: string;
  days: ScheduleDay[];
}
export const getSchedule = () =>
  readMarkdownDoc<ScheduleData>("schedule.md");

export interface FaqItem {
  question: string;
  html: string;
  slug: string;
}

export interface FaqsData {
  title: string;
  subtitle?: string;
  items: FaqItem[];
}

function slugify(s: string): string {
  return s
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export async function getFaqs(): Promise<FaqsData> {
  const raw = await fs.readFile(path.join(CONTENT_DIR, "faqs.md"), "utf8");
  const { data, content } = matter(raw);
  const links = await getLinks();

  // Split the body on top-level `## ` headings. Each heading becomes a
  // question; everything beneath it (until the next `## `) is the answer.
  const sections = content.split(/^##\s+/m).slice(1);

  const items: FaqItem[] = await Promise.all(
    sections.map(async (section) => {
      const newlineIdx = section.indexOf("\n");
      const question =
        newlineIdx === -1
          ? section.trim()
          : section.slice(0, newlineIdx).trim();
      const body =
        newlineIdx === -1 ? "" : section.slice(newlineIdx + 1).trim();
      const html = await markdownToHtml(body, links);
      return { question, html, slug: slugify(question) };
    }),
  );

  return {
    title: String(data.title ?? "Questions"),
    subtitle: data.subtitle ? String(data.subtitle) : undefined,
    items,
  };
}
