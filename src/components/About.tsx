import { SectionHeader } from "./SectionHeader";

type Props = {
  eyebrow: string;
  title: string;
  bodyHtml: string;
  stats?: { label: string; value: string }[];
};

export function About({ eyebrow, title, bodyHtml, stats }: Props) {
  return (
    <section
      id="about"
      className="py-24 sm:py-32 bg-black text-white"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <SectionHeader eyebrow={eyebrow} title={title} />

        <div className="grid md:grid-cols-[1.3fr_1fr] gap-12 md:gap-16 items-start">
          <div
            className="prose-tilly text-lg max-w-2xl"
            dangerouslySetInnerHTML={{ __html: bodyHtml }}
          />

          {stats && stats.length > 0 ? (
            <div className="grid grid-cols-2 gap-[2px] bg-white">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="bg-black p-6 sm:p-8"
                >
                  <div
                    className="text-4xl sm:text-5xl font-bold"
                    style={{
                      fontFamily:
                        "var(--font-sora), 'Sora', sans-serif",
                      color: "#B024F9",
                      letterSpacing: "-0.03em",
                    }}
                  >
                    {s.value}
                  </div>
                  <div className="mt-2 text-sm uppercase tracking-wider text-white/60">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
