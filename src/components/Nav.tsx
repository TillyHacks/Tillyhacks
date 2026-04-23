"use client";

import { useEffect, useState } from "react";
import { Wordmark } from "./Wordmark";

type Props = {
  registerHref: string;
};

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#schedule", label: "Schedule" },
  { href: "#faq", label: "FAQ" },
];

export function Nav({ registerHref }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors ${
        scrolled ? "bg-white border-b-2 border-black" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 sm:px-8 py-4">
        <a href="#top" className="inline-flex items-center">
          <Wordmark size="sm" />
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="opacity-70 hover:opacity-100 hover:text-[#B024F9] transition-opacity"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={registerHref}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 bg-black text-white px-5 py-2.5 text-sm font-medium border-2 border-black hover:bg-[#B024F9] hover:border-[#B024F9] transition-colors"
            style={{ fontFamily: "var(--font-sora), 'Sora', sans-serif" }}
          >
            Register
            <span aria-hidden>→</span>
          </a>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden w-10 h-10 border-2 border-black flex items-center justify-center"
          >
            <span className="sr-only">Menu</span>
            <div className="flex flex-col gap-1">
              <span className="block w-4 h-0.5 bg-black" />
              <span className="block w-4 h-0.5 bg-black" />
              <span className="block w-4 h-0.5 bg-black" />
            </div>
          </button>
        </div>
      </div>

      {open ? (
        <div className="md:hidden bg-white border-t-2 border-black/10 px-6 py-4 flex flex-col gap-3 text-base">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-2 border-b border-black/10"
            >
              {l.label}
            </a>
          ))}
          <a
            href={registerHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 bg-black text-white px-5 py-3 text-center font-medium border-2 border-black"
            style={{ fontFamily: "var(--font-sora), 'Sora', sans-serif" }}
          >
            Register
          </a>
        </div>
      ) : null}
    </header>
  );
}
