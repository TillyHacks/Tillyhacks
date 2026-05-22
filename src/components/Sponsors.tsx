import type { SponsorEntry } from "@/lib/content";
import { SectionHeader } from "./SectionHeader";

type Props = {
  eyebrow: string;
  title: string;
  bodyHtml: string;
  sponsors: SponsorEntry[];
  sponsorHref: string;
};

function SponsorTile({ sponsor }: { sponsor: SponsorEntry }) {
  const tile = (
    <div className="flex h-full min-h-[6.5rem] items-center justify-center bg-white px-4 py-3 sm:min-h-[8.5rem] sm:px-5 sm:py-4 md:min-h-[10rem] md:px-6">
      {sponsor.image ? (
        <img
          src={`/sponsor-images/${sponsor.image}`}
          alt={sponsor.name}
          className="h-auto max-h-[3.75rem] w-full object-contain transition-transform duration-200 group-hover:scale-[1.04] sm:max-h-[4.75rem] md:max-h-[5.5rem]"
        />
      ) : (
        <span
          className="text-lg font-bold text-center transition-colors duration-200 group-hover:text-[#B024F9]"
          style={{ fontFamily: "var(--font-sora), 'Sora', sans-serif" }}
        >
          {sponsor.name}
        </span>
      )}
    </div>
  );

  if (sponsor.link) {
    return (
      <a
        href={sponsor.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full"
      >
        {tile}
      </a>
    );
  }

  return tile;
}

export function Sponsors({
  eyebrow,
  title,
  bodyHtml,
  sponsors,
  sponsorHref,
}: Props) {
  return (
    <section id="sponsors" className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <SectionHeader eyebrow={eyebrow} title={title} />

        <div className="grid w-full grid-cols-1 gap-3 min-[420px]:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {sponsors.map((s) => (
            <div
              key={s.name}
              className="group border-2 border-black transition-[border-color,box-shadow] duration-200 hover:border-[#B024F9] hover:shadow-[4px_4px_0_#B024F9]"
            >
              <SponsorTile sponsor={s} />
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-t-2 border-black pt-8">
          <div
            className="prose-tilly text-base max-w-xl"
            dangerouslySetInnerHTML={{ __html: bodyHtml }}
          />
          <a
            href={sponsorHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-black text-white px-6 py-4 border-2 border-black hover:bg-[#B024F9] hover:border-[#B024F9] transition-colors shrink-0"
            style={{ fontFamily: "var(--font-sora), 'Sora', sans-serif" }}
          >
            <span className="font-semibold">Sponsor TillyHacks</span>
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
