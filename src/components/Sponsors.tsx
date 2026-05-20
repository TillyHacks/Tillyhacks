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
    <div className="bg-white aspect-[5/3] sm:aspect-[3/2] flex items-center justify-center p-2 sm:p-3 h-full min-h-[7.5rem] sm:min-h-[9rem] md:min-h-[10.5rem]">
      {sponsor.image ? (
        <img
          src={`/sponsor-images/${sponsor.image}`}
          alt={sponsor.name}
          className="h-[88%] w-[92%] object-contain transition-transform duration-200 group-hover:scale-[1.04]"
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
  const topRow = sponsors.slice(0, 3);
  const bottomRow = sponsors.slice(3);

  return (
    <section id="sponsors" className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <SectionHeader eyebrow={eyebrow} title={title} />

        <div className="w-full grid grid-cols-6 gap-3 sm:gap-4">
          {topRow.map((s) => (
            <div
              key={s.name}
              className="group col-span-2 border-2 border-black transition-[border-color,box-shadow] duration-200 hover:border-[#B024F9] hover:shadow-[4px_4px_0_#B024F9]"
            >
              <SponsorTile sponsor={s} />
            </div>
          ))}
          {bottomRow.map((s, i) => (
            <div
              key={s.name}
              className={`group col-span-2 border-2 border-black transition-[border-color,box-shadow] duration-200 hover:border-[#B024F9] hover:shadow-[4px_4px_0_#B024F9] ${i === 0 ? "col-start-2" : "col-start-4"}`}
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
