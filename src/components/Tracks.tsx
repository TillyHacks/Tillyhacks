import { SectionHeader } from "./SectionHeader";
import type { TrackEntry } from "@/lib/content";

type Props = {
  eyebrow?: string;
  title: string;
  bodyHtml: string;
  tracks: TrackEntry[];
};

export function Tracks({ eyebrow, title, bodyHtml, tracks }: Props) {
  return (
    <section id="tracks" className="py-24 sm:py-32 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="mb-12">
          {eyebrow ? (
            <div className="text-xs tracking-[0.3em] uppercase opacity-60 mb-3">
              {eyebrow}
            </div>
          ) : null}
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight"
            style={{
              fontFamily: "var(--font-sora), 'Sora', sans-serif",
              letterSpacing: "-0.03em",
            }}
          >
            {title}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {tracks.map((t) => (
            <div
              key={t.name}
              className="border-2 border-white/80 p-8 hover:bg-[#B024F9] hover:border-[#B024F9] transition-colors group"
            >
              <div
                className="text-2xl sm:text-3xl font-bold mb-4"
                style={{
                  fontFamily:
                    "var(--font-sora), 'Sora', sans-serif",
                  letterSpacing: "-0.02em",
                }}
              >
                {t.name}
              </div>
              <div
                className="text-4xl font-bold mb-3"
                style={{
                  fontFamily: "var(--font-sora), 'Sora', sans-serif",
                  color: "#B024F9",
                }}
              >
                <span className="group-hover:text-white transition-colors">
                  {t.prize}
                </span>
              </div>
              <p className="text-sm opacity-80">{t.description}</p>
            </div>
          ))}
        </div>

        <div
          className="mt-8 prose-tilly text-base max-w-2xl opacity-70"
          dangerouslySetInnerHTML={{ __html: bodyHtml }}
        />
      </div>
    </section>
  );
}
