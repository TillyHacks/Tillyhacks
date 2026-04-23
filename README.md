# TillyHacks Website

Next.js 15 (App Router) site for TillyHacks 2026. The entire page is
driven by markdown content in the `content/` directory — so non-devs
can update blurbs, FAQs, schedule, and track prizes by editing markdown.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Editing the site content

Everything the site shows is either a markdown frontmatter value or a
markdown body. You rarely (if ever) need to touch `.tsx` files.

### Site-wide metadata

Edit `content/site.md`:

```md
---
title: "TillyHacks 2026"
description: "A 48-hour hackathon for builders..."
eventName: "TillyHacks"
eventDates: "May 15–17, 2026"
eventLocation: "San Francisco, CA"
---
```

### Hard-coded links

`content/links.json` is the one place where actual URLs live. Every
other markdown file references them by key (e.g. `primaryCta.link: "register"`
resolves to the value of `links.register`). Update these:

```json
{
  "register": "https://example.com/register",
  "sponsor": "https://example.com/sponsor",
  ...
}
```

Links inside markdown body copy can also use keys:
`[Read the code of conduct](mlhCodeOfConduct)` becomes a link to whatever
`mlhCodeOfConduct` points to in `links.json`.

### Home-page sections

- `content/home/hero.md` — big title, event date eyebrow, two CTAs, and
  the blurb beneath the title.
- `content/home/about.md` — "What is TillyHacks?" section + stat tiles.
- `content/home/tracks.md` — prize tracks (name, prize, description).
- `content/home/sponsors.md` — tiered sponsor list.

### Schedule

`content/schedule.md`. Add/remove days and events in the frontmatter.
Each event has a `time`, `title`, optional `location`, and optional
`type` (one of `talk`, `meal`, `activity`, `ceremony`, `deadline`) that
determines the accent color and badge label.

```md
days:
  - date: "Friday · May 15"
    label: "Day 1 · Kickoff"
    events:
      - time: "6:30 PM"
        title: "Opening Ceremony"
        location: "Main Stage"
        type: "ceremony"
```

### FAQ

Each question is its own file inside `content/faqs/`. The filename
prefix (`01-`, `02-`) controls default ordering; `order` in frontmatter
overrides it. Create a new file, set `question:` in frontmatter, write
the answer below — done.

```md
---
question: "How do I get there?"
order: 7
---

The venue is at 123 Main St. The nearest BART is Powell.
```

## Brand system

- **Colors**: TillyPurple `#B024F9`, black, white.
- **Fonts**: Sora (display, via `--font-sora`), DM Sans (body, via
  `--font-dm-sans`), loaded through `next/font`.
- **Logo rule**: The "T" in "Tilly" is always purple. The rest of the
  wordmark adapts to the background (black on light, white on dark).

The `Wordmark` and `SquareMark` components in `src/components/Wordmark.tsx`
enforce these rules; use them anywhere you need the brand mark.
