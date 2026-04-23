type Props = {
  size?: "sm" | "md" | "lg" | "xl";
  light?: boolean;
  className?: string;
};

const SIZES: Record<NonNullable<Props["size"]>, string> = {
  sm: "text-2xl",
  md: "text-3xl",
  lg: "text-6xl",
  xl: "text-[clamp(72px,14vw,200px)]",
};

export function Wordmark({ size = "md", light = false, className = "" }: Props) {
  return (
    <span
      className={`inline-flex items-baseline gap-[1px] font-bold leading-none tracking-tight ${SIZES[size]} ${className}`}
      style={{
        fontFamily: "var(--font-sora), 'Sora', sans-serif",
        letterSpacing: "-0.03em",
      }}
    >
      <span style={{ color: "#B024F9" }}>Tilly</span>
      <span style={{ color: light ? "#FFFFFF" : "#000000" }}>Hacks</span>
    </span>
  );
}

export function SquareMark({
  size = 40,
  light = false,
}: {
  size?: number;
  light?: boolean;
}) {
  return (
    <span
      aria-hidden
      className="inline-flex items-center justify-center font-bold leading-none"
      style={{
        fontFamily: "var(--font-sora), 'Sora', sans-serif",
        fontSize: size,
        letterSpacing: "-0.1em",
      }}
    >
      <span style={{ color: "#B024F9" }}>T</span>
      <span style={{ color: light ? "#FFFFFF" : "#000000" }}>H</span>
    </span>
  );
}
