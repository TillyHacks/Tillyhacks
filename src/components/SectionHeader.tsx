type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: Props) {
  const alignment = align === "center" ? "text-center" : "";
  return (
    <div className={`mb-12 ${alignment}`}>
      {eyebrow ? (
        <div className="text-xs tracking-[0.3em] uppercase opacity-40 mb-3">
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
      {subtitle ? (
        <p className="mt-4 text-lg opacity-60 max-w-2xl">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
