type Props = {
  eyebrow: string;
  titleLeft: string;
  titleRight: string;
  subtitle?: string;
  primary: { label: string; href: string };
  secondary: { label: string; href: string };
  eventLocation: string;
};

export function Hero({
  eyebrow,
  titleLeft,
  titleRight,
  subtitle,
  primary,
  secondary,
  eventLocation,
}: Props) {
  return (
    <section
      id="top"
      className="pt-32 sm:pt-40 pb-24 sm:pb-32"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex items-baseline gap-3 mb-8">
          <span className="text-[10px] sm:text-xs tracking-[0.3em] uppercase opacity-60">
            {eyebrow}
          </span>
          <div className="h-px bg-black/20 flex-1" />
          <span className="text-[10px] sm:text-xs tracking-[0.3em] uppercase opacity-60">
            {eventLocation}
          </span>
        </div>

        <h1
          className="font-bold leading-[0.9] tracking-tight flex flex-wrap items-baseline"
          style={{
            fontFamily: "var(--font-sora), 'Sora', sans-serif",
            fontSize: "clamp(72px, 16vw, 220px)",
            letterSpacing: "-0.04em",
          }}
        >
          <span style={{ color: "#B024F9" }}>{titleLeft}</span>
          <span className="text-black">{titleRight}</span>
        </h1>

        {subtitle ? (
          <p
            className="mt-4 text-sm font-bold uppercase tracking-[0.18em] text-black sm:mt-5 sm:text-base"
            style={{ fontFamily: "var(--font-sora), 'Sora', sans-serif" }}
          >
            {subtitle}
          </p>
        ) : null}

        <div className="mt-10 flex flex-col sm:flex-row gap-3">
          <a
            href={primary.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-between gap-4 bg-black text-white px-7 py-5 border-2 border-black hover:bg-[#B024F9] hover:border-[#B024F9] transition-colors"
            style={{
              fontFamily: "var(--font-sora), 'Sora', sans-serif",
            }}
          >
            <span className="font-semibold">{primary.label}</span>
            <span
              aria-hidden
              className="text-xl transform group-hover:translate-x-1 transition-transform"
            >
              →
            </span>
          </a>
          <a
            href={secondary.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-between gap-4 bg-transparent text-black px-7 py-5 border-2 border-black hover:bg-black hover:text-white transition-colors"
            style={{
              fontFamily: "var(--font-sora), 'Sora', sans-serif",
            }}
          >
            <span className="font-semibold">{secondary.label}</span>
            <span
              aria-hidden
              className="text-xl transform group-hover:translate-x-1 transition-transform"
            >
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
