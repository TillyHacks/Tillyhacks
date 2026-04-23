"use client";

import { motion } from "motion/react";
import {
  downloadAvatarPng,
  downloadMarkPng,
  downloadWordmarkPng,
} from "./downloads";

type DownloadRowProps = {
  svgHref: string;
  svgName: string;
  onPng: () => void;
  dark?: boolean;
};

function DownloadRow({ svgHref, svgName, onPng, dark }: DownloadRowProps) {
  const base =
    "inline-flex items-center justify-center gap-1.5 text-[10px] tracking-[0.2em] uppercase px-3 py-2 border-2 font-semibold transition-colors";
  const color = dark
    ? "border-white/60 text-white hover:bg-white hover:text-black"
    : "border-black text-black hover:bg-black hover:text-white";
  return (
    <div
      className="mt-6 flex gap-2"
      style={{ fontFamily: "'Sora', sans-serif" }}
    >
      <a
        href={svgHref}
        download={svgName}
        className={`${base} ${color}`}
      >
        SVG ↓
      </a>
      <button
        type="button"
        onClick={onPng}
        className={`${base} ${color}`}
      >
        PNG ↓
      </button>
    </div>
  );
}

export default function BrandingPage() {
  const purple = "#B024F9";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <div
      className="min-h-screen bg-white"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-7xl mx-auto px-8 py-16"
      >
        {/* Hero Section */}
        <motion.div variants={itemVariants} className="mb-32">
          <div className="flex items-baseline gap-3 mb-6">
            <span className="text-[10px] tracking-[0.3em] uppercase opacity-40">
              Brand Standards v1.0
            </span>
            <div className="h-px bg-black/10 flex-1"></div>
          </div>
          <div
            className="flex items-center gap-1"
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            <h1
              className="text-[140px] font-bold leading-none tracking-tight"
              style={{ color: purple }}
            >
              Tilly
            </h1>
            <h1 className="text-[140px] font-bold leading-none tracking-tight text-black">
              Hacks
            </h1>
          </div>
          <p className="text-lg mt-8 max-w-2xl opacity-60">
            A comprehensive brand guide defining the visual identity, logo
            usage, typography, and color standards for TillyHacks.
          </p>
        </motion.div>

        {/* Logo Variations */}
        <motion.section variants={itemVariants} className="mb-32">
          <div className="mb-12">
            <h2 className="text-sm tracking-[0.2em] uppercase mb-2 opacity-40">
              01
            </h2>
            <h2
              className="text-5xl font-bold"
              style={{ fontFamily: "'Sora', sans-serif" }}
            >
              Logo Variations
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="border-2 border-black p-12 aspect-square flex flex-col items-center justify-center bg-white">
              <div
                style={{
                  fontFamily: "'Sora', sans-serif",
                  fontSize: "120px",
                  fontWeight: "bold",
                  lineHeight: 1,
                  letterSpacing: "-0.1em",
                }}
              >
                <span style={{ color: purple }}>T</span>
                <span className="text-black">H</span>
              </div>
              <div className="mt-8 text-xs tracking-wide opacity-40">
                1×1 SQUARE MARK
              </div>
              <DownloadRow
                svgHref="/brand/tillyhacks-mark-light.svg"
                svgName="tillyhacks-mark-light.svg"
                onPng={() => downloadMarkPng("light")}
              />
            </div>

            <div className="border-2 border-black p-12 aspect-square flex flex-col items-center justify-center bg-white">
              <div
                className="flex items-center gap-0.5"
                style={{ fontFamily: "'Sora', sans-serif" }}
              >
                <span
                  className="text-6xl font-bold leading-none"
                  style={{ color: purple }}
                >
                  Tilly
                </span>
                <span className="text-6xl font-bold leading-none text-black">
                  Hacks
                </span>
              </div>
              <div className="mt-8 text-xs tracking-wide opacity-40">
                FULL LOGO / LIGHT
              </div>
              <DownloadRow
                svgHref="/brand/tillyhacks-wordmark-light.svg"
                svgName="tillyhacks-wordmark-light.svg"
                onPng={() => downloadWordmarkPng("light")}
              />
            </div>

            <div className="border-2 border-black p-12 aspect-square flex flex-col items-center justify-center bg-black">
              <div
                style={{
                  fontFamily: "'Sora', sans-serif",
                  fontSize: "120px",
                  fontWeight: "bold",
                  lineHeight: 1,
                  letterSpacing: "-0.1em",
                }}
              >
                <span style={{ color: purple }}>T</span>
                <span className="text-white">H</span>
              </div>
              <div className="mt-8 text-xs tracking-wide text-white/40">
                1×1 SQUARE MARK / DARK
              </div>
              <DownloadRow
                svgHref="/brand/tillyhacks-mark-dark.svg"
                svgName="tillyhacks-mark-dark.svg"
                onPng={() => downloadMarkPng("dark")}
                dark
              />
            </div>

            <div className="border-2 border-black p-12 aspect-square flex flex-col items-center justify-center bg-black">
              <div
                className="flex items-center gap-0.5"
                style={{ fontFamily: "'Sora', sans-serif" }}
              >
                <span
                  className="text-6xl font-bold leading-none"
                  style={{ color: purple }}
                >
                  Tilly
                </span>
                <span className="text-6xl font-bold leading-none text-white">
                  Hacks
                </span>
              </div>
              <div className="mt-8 text-xs tracking-wide text-white/40">
                FULL LOGO / DARK
              </div>
              <DownloadRow
                svgHref="/brand/tillyhacks-wordmark-dark.svg"
                svgName="tillyhacks-wordmark-dark.svg"
                onPng={() => downloadWordmarkPng("dark")}
                dark
              />
            </div>
          </div>

          <div className="mt-8 p-6 bg-black/5">
            <p className="text-sm opacity-60">
              <strong>Logo Rules:</strong> The &ldquo;T&rdquo; in &ldquo;Tilly&rdquo; is
              always purple (#B024F9). Adjacent text can be black (light
              backgrounds) or white (dark backgrounds). Letter spacing in
              the 1×1 mark is tight with no gap between T and H.
            </p>
            <p className="text-xs opacity-50 mt-3">
              <strong>Downloads:</strong> SVGs use the Sora typeface — install{" "}
              <a
                href="https://fonts.google.com/specimen/Sora"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Sora (free on Google Fonts)
              </a>{" "}
              for best fidelity in design tools. PNGs are rasterized from this
              page at 2048px and need no font.
            </p>
          </div>
        </motion.section>

        {/* Color Palette */}
        <motion.section variants={itemVariants} className="mb-32">
          <div className="mb-12">
            <h2 className="text-sm tracking-[0.2em] uppercase mb-2 opacity-40">
              02
            </h2>
            <h2
              className="text-5xl font-bold"
              style={{ fontFamily: "'Sora', sans-serif" }}
            >
              Color System
            </h2>
          </div>

          <div className="grid grid-cols-3 gap-6">
            <div>
              <div
                className="aspect-square border-2 border-black mb-4"
                style={{ backgroundColor: purple }}
              ></div>
              <div className="space-y-1">
                <div className="text-xs tracking-wide opacity-40">PRIMARY</div>
                <div
                  className="font-bold text-xl"
                  style={{ fontFamily: "'Sora', sans-serif" }}
                >
                  TillyPurple
                </div>
                <div className="font-mono text-sm">#B024F9</div>
                <div className="font-mono text-xs opacity-60">
                  RGB 176, 36, 249
                </div>
              </div>
            </div>

            <div>
              <div className="aspect-square border-2 border-black bg-black mb-4"></div>
              <div className="space-y-1">
                <div className="text-xs tracking-wide opacity-40">SECONDARY</div>
                <div
                  className="font-bold text-xl"
                  style={{ fontFamily: "'Sora', sans-serif" }}
                >
                  Pure Black
                </div>
                <div className="font-mono text-sm">#000000</div>
                <div className="font-mono text-xs opacity-60">RGB 0, 0, 0</div>
              </div>
            </div>

            <div>
              <div className="aspect-square border-2 border-black bg-white mb-4"></div>
              <div className="space-y-1">
                <div className="text-xs tracking-wide opacity-40">SECONDARY</div>
                <div
                  className="font-bold text-xl"
                  style={{ fontFamily: "'Sora', sans-serif" }}
                >
                  Pure White
                </div>
                <div className="font-mono text-sm">#FFFFFF</div>
                <div className="font-mono text-xs opacity-60">
                  RGB 255, 255, 255
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-black/5">
            <p className="text-sm opacity-60">
              <strong>Usage:</strong> Purple is reserved for the &ldquo;T&rdquo; in
              Tilly and key brand moments. Use black for text on light
              backgrounds, white for text on dark backgrounds. Maintain high
              contrast for accessibility.
            </p>
          </div>
        </motion.section>

        {/* Typography */}
        <motion.section variants={itemVariants} className="mb-32">
          <div className="mb-12">
            <h2 className="text-sm tracking-[0.2em] uppercase mb-2 opacity-40">
              03
            </h2>
            <h2
              className="text-5xl font-bold"
              style={{ fontFamily: "'Sora', sans-serif" }}
            >
              Typography
            </h2>
          </div>

          <div className="space-y-12">
            <div className="border-2 border-black p-12">
              <div className="mb-8">
                <div className="text-xs tracking-wide opacity-40 mb-2">
                  DISPLAY TYPEFACE
                </div>
                <div
                  className="text-2xl font-bold"
                  style={{ fontFamily: "'Sora', sans-serif" }}
                >
                  Sora
                </div>
              </div>
              <div className="space-y-4">
                <div
                  style={{ fontFamily: "'Sora', sans-serif" }}
                  className="text-7xl font-bold"
                >
                  Innovation
                </div>
                <div className="grid grid-cols-5 gap-4 pt-4 border-t border-black/10">
                  {[
                    { label: "Light", className: "font-light" },
                    { label: "Regular", className: "font-normal" },
                    { label: "SemiBold", className: "font-semibold" },
                    { label: "Bold", className: "font-bold" },
                    { label: "ExtraBold", className: "font-extrabold" },
                  ].map((w) => (
                    <div key={w.label}>
                      <div className="text-xs opacity-40 mb-2">{w.label}</div>
                      <div
                        style={{ fontFamily: "'Sora', sans-serif" }}
                        className={`text-2xl ${w.className}`}
                      >
                        Aa
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <p className="mt-6 text-sm opacity-60">
                Use for: Logos, headlines, section titles, call-to-action
                buttons
              </p>
            </div>

            <div className="border-2 border-black p-12">
              <div className="mb-8">
                <div className="text-xs tracking-wide opacity-40 mb-2">
                  BODY TYPEFACE
                </div>
                <div
                  className="text-2xl font-bold"
                  style={{ fontFamily: "'Sora', sans-serif" }}
                >
                  DM Sans
                </div>
              </div>
              <div className="space-y-4">
                <div
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                  className="text-3xl"
                >
                  The quick brown fox jumps over the lazy dog. 0123456789
                </div>
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-black/10">
                  {[
                    { label: "Regular", className: "" },
                    { label: "Medium", className: "font-medium" },
                    { label: "Bold", className: "font-bold" },
                  ].map((w) => (
                    <div key={w.label}>
                      <div className="text-xs opacity-40 mb-2">{w.label}</div>
                      <div
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                        className={`text-2xl ${w.className}`}
                      >
                        Aa
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <p className="mt-6 text-sm opacity-60">
                Use for: Body copy, descriptions, navigation, form labels,
                captions
              </p>
            </div>
          </div>
        </motion.section>

        {/* Usage Examples */}
        <motion.section variants={itemVariants} className="mb-32">
          <div className="mb-12">
            <h2 className="text-sm tracking-[0.2em] uppercase mb-2 opacity-40">
              04
            </h2>
            <h2
              className="text-5xl font-bold"
              style={{ fontFamily: "'Sora', sans-serif" }}
            >
              Usage Examples
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="border-2 border-black p-8 bg-white">
              <div className="flex items-center justify-between mb-8">
                <div
                  className="flex items-center gap-0.5"
                  style={{ fontFamily: "'Sora', sans-serif" }}
                >
                  <span
                    className="text-3xl font-bold"
                    style={{ color: purple }}
                  >
                    Tilly
                  </span>
                  <span className="text-3xl font-bold text-black">Hacks</span>
                </div>
                <div className="flex gap-6 text-sm">
                  <span>About</span>
                  <span>Schedule</span>
                 {/* <span>Sponsors</span> */}
                </div>
              </div>
              <div className="text-xs tracking-wide opacity-40 text-center">
                WEBSITE HEADER
              </div>
            </div>

            <div className="border-2 border-black p-8 bg-black flex items-center justify-center">
              <div className="text-center">
                <div
                  className="flex items-center justify-center gap-0.5 mb-4"
                  style={{ fontFamily: "'Sora', sans-serif" }}
                >
                  <span
                    className="text-5xl font-bold"
                    style={{ color: purple }}
                  >
                    Tilly
                  </span>
                  <span className="text-5xl font-bold text-white">Hacks</span>
                </div>
                <div className="text-white/60 text-sm">MAY 15-17, 2026</div>
              </div>
            </div>

            <div className="border-2 border-black p-8 bg-white flex flex-col items-center justify-center relative gap-4">
              <div
                className="w-48 h-48 border-2 border-black flex items-center justify-center"
                style={{ backgroundColor: purple }}
              >
                <div
                  style={{
                    fontFamily: "'Sora', sans-serif",
                    fontSize: "72px",
                    fontWeight: "bold",
                    lineHeight: 1,
                    letterSpacing: "-0.08em",
                  }}
                  className="text-white"
                >
                  TH
                </div>
              </div>
              <div className="text-xs tracking-wide opacity-40">
                SOCIAL AVATAR
              </div>
              <DownloadRow
                svgHref="/brand/tillyhacks-avatar.svg"
                svgName="tillyhacks-avatar.svg"
                onPng={() => downloadAvatarPng()}
              />
            </div>

            <div className="border-2 border-black p-8 bg-black flex items-center justify-center relative">
              <div
                className="flex items-center gap-1"
                style={{ fontFamily: "'Sora', sans-serif" }}
              >
                <span
                  className="text-6xl font-bold"
                  style={{ color: purple }}
                >
                  Tilly
                </span>
                <span className="text-6xl font-bold text-white">Hacks</span>
              </div>
              <div className="absolute bottom-4 text-xs tracking-wide text-white/40">
                MERCHANDISE
              </div>
            </div>
          </div>
        </motion.section>

        {/* Guidelines */}
        <motion.section variants={itemVariants}>
          <div className="mb-12">
            <h2 className="text-sm tracking-[0.2em] uppercase mb-2 opacity-40">
              05
            </h2>
            <h2
              className="text-5xl font-bold"
              style={{ fontFamily: "'Sora', sans-serif" }}
            >
              Brand Guidelines
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="border-2 border-black p-8">
              <div
                className="text-2xl font-bold mb-4"
                style={{
                  fontFamily: "'Sora', sans-serif",
                  color: purple,
                }}
              >
                ✓ Do
              </div>
              <ul className="space-y-3 text-sm">
                <li>• Always color the &ldquo;T&rdquo; in &ldquo;Tilly&rdquo; purple (#B024F9)</li>
                <li>• Maintain tight letter spacing in the TH mark</li>
                <li>• Use high contrast text colors (black or white)</li>
                <li>• Keep generous whitespace around the logo</li>
                <li>• Use Sora for headlines and display text</li>
                <li>• Use DM Sans for body copy and UI elements</li>
              </ul>
            </div>

            <div className="border-2 border-black p-8">
              <div
                className="text-2xl font-bold mb-4"
                style={{ fontFamily: "'Sora', sans-serif" }}
              >
                ✗ Don&apos;t
              </div>
              <ul className="space-y-3 text-sm opacity-60">
                <li>• Don&apos;t change the purple to any other color</li>
                <li>• Don&apos;t add spacing between T and H in the 1×1 mark</li>
                <li>• Don&apos;t use low-contrast color combinations</li>
                <li>• Don&apos;t distort or skew the logo proportions</li>
                <li>• Don&apos;t use Arial, Helvetica, or generic fonts</li>
                <li>• Don&apos;t place logo on busy backgrounds</li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Footer */}
        <motion.div
          variants={itemVariants}
          className="mt-32 pt-12 border-t-2 border-black/10"
        >
          <div className="flex items-center justify-between">
            <div className="text-xs opacity-40">
              TillyHacks Brand Standards — Last updated April 2026
            </div>
            <div
              className="flex items-center gap-1"
              style={{ fontFamily: "'Sora', sans-serif" }}
            >
              <span
                className="text-xl font-bold"
                style={{ color: purple }}
              >
                Tilly
              </span>
              <span className="text-xl font-bold text-black">Hacks</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
