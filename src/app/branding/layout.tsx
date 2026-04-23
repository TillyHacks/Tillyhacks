import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TillyHacks Brand Standards",
  description: "Visual identity, logo usage, typography, and color standards.",
  robots: { index: false, follow: false },
};

export default function BrandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
