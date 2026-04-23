import {
  getAbout,
  getFaqs,
  getHero,
  getLinks,
  getSchedule,
  getSiteConfig,
  getSponsors,
  getTracks,
  resolveLink,
} from "@/lib/content";

import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Tracks } from "@/components/Tracks";
import { Schedule } from "@/components/Schedule";
import { Sponsors } from "@/components/Sponsors";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";

export default async function Home() {
  const [site, links, hero, about, tracks, schedule, sponsors, faq] =
    await Promise.all([
      getSiteConfig(),
      getLinks(),
      getHero(),
      getAbout(),
      getTracks(),
      getSchedule(),
      getSponsors(),
      getFaqs(),
    ]);

  const registerHref = resolveLink(hero.data.primaryCta.link, links);
  const sponsorHref = resolveLink("sponsor", links);

  const socials = [
    links.discord && { label: "Discord", href: links.discord },
    links.instagram && { label: "Instagram", href: links.instagram },
    links.twitter && { label: "Twitter", href: links.twitter },
    links.github && { label: "GitHub", href: links.github },
    links.devpost && { label: "Devpost", href: links.devpost },
  ].filter(Boolean) as { label: string; href: string }[];

  return (
    <>
      <Nav registerHref={registerHref} />

      <main>
        <Hero
          eyebrow={hero.data.eyebrow}
          titleLeft={hero.data.titleLeft}
          titleRight={hero.data.titleRight}
          primary={{
            label: hero.data.primaryCta.label,
            href: resolveLink(hero.data.primaryCta.link, links),
          }}
          secondary={{
            label: hero.data.secondaryCta.label,
            href: resolveLink(hero.data.secondaryCta.link, links),
          }}
          eventLocation={site.eventLocation}
        />

        <About
          eyebrow={about.data.eyebrow}
          title={about.data.title}
          bodyHtml={about.html}
          stats={about.data.stats}
        />

        <Schedule
          eyebrow={schedule.data.eyebrow}
          title={schedule.data.title}
          subtitle={schedule.data.subtitle}
          timezone={schedule.data.timezone}
          days={schedule.data.days}
        />
        {/*
        <Tracks
          eyebrow={tracks.data.eyebrow}
          title={tracks.data.title}
          bodyHtml={tracks.html}
          tracks={tracks.data.tracks}
        />

        {/* Sponsors section hidden for now. Re-enable by uncommenting:
        <Sponsors
          eyebrow={sponsors.data.eyebrow}
          title={sponsors.data.title}
          bodyHtml={sponsors.html}
          tiers={sponsors.data.tiers}
          sponsorHref={sponsorHref}
        />
        */}

        <Faq
          title={faq.title}
          subtitle={faq.subtitle}
          items={faq.items}
        />
      </main>

      <Footer
        eventDates={site.eventDates}
        socials={socials}
        email={links.email ?? "mailto:team@tillyhacks.com"}
      />
    </>
  );
}
