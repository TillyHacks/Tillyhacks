import type { SponsorsTierEntry } from "@/lib/content";
import { SectionHeader } from "./SectionHeader";

type Props = {
  eyebrow: string;
  title: string;
  bodyHtml: string;
  tiers: SponsorsTierEntry[];
  sponsorHref: string;
};

export function Sponsors({
  eyebrow,
  title,
  bodyHtml,
  tiers,
  sponsorHref,
}: Props) {
  return (
    <section id="sponsors" className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <SectionHeader eyebrow={eyebrow} title={title} />

        <div className="space-y-10">
          {tiers.map((tier) => (
            <div key={tier.tier}>
              <div className="flex items-baseline gap-3 mb-4">
                <span
                  className="text-xs tracking-[0.3em] uppercase"
                  style={{ color: "#B024F9" }}
                >
                  {tier.tier}
                </span>
                <div className="flex-1 h-px bg-black/20" />
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-[2px] bg-black border-2 border-black">
                {tier.sponsors.map((s) => {
                  const content = (
                    <div className="bg-white aspect-[3/2] flex items-center justify-center p-6 hover:bg-[#B024F9] hover:text-white transition-colors">
                      <span
                        className="text-lg font-bold text-center"
                        style={{
                          fontFamily:
                            "var(--font-sora), 'Sora', sans-serif",
                        }}
                      >
                        {s.name}
                      </span>
                    </div>
                  );
                  return s.link ? (
                    <a
                      key={s.name}
                      href={s.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={s.name}>{content}</div>
                  );
                })}
              </div>
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
