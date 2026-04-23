"use client";

import { useState } from "react";
import type { FaqItem } from "@/lib/content";
import { SectionHeader } from "./SectionHeader";

type Props = {
  title: string;
  subtitle?: string;
  items: FaqItem[];
};

export function Faq({ title, subtitle, items }: Props) {
  const [openSlug, setOpenSlug] = useState<string | null>(
    items[0]?.slug ?? null,
  );

  return (
    <section id="faq" className="py-24 sm:py-32">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <SectionHeader title={title} subtitle={subtitle} />

        <div className="border-2 border-black">
          {items.map((item, i) => {
            const isOpen = item.slug === openSlug;
            return (
              <div
                key={item.slug}
                className={
                  i < items.length - 1 ? "border-b-2 border-black" : ""
                }
              >
                <button
                  onClick={() =>
                    setOpenSlug(isOpen ? null : item.slug)
                  }
                  className="w-full text-left px-6 sm:px-8 py-6 flex items-center justify-between gap-6 hover:bg-[#B024F9]/5 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span
                    className="text-lg sm:text-xl font-semibold"
                    style={{
                      fontFamily:
                        "var(--font-sora), 'Sora', sans-serif",
                    }}
                  >
                    {item.question}
                  </span>
                  <span
                    aria-hidden
                    className="flex items-center justify-center w-9 h-9 border-2 border-black shrink-0 text-xl leading-none"
                    style={{
                      background: isOpen ? "#B024F9" : "transparent",
                      color: isOpen ? "#fff" : "#000",
                      borderColor: isOpen ? "#B024F9" : "#000",
                    }}
                  >
                    {isOpen ? "–" : "+"}
                  </span>
                </button>
                {isOpen ? (
                  <div
                    className="prose-tilly px-6 sm:px-8 pb-8 pt-0 max-w-3xl"
                    dangerouslySetInnerHTML={{ __html: item.html }}
                  />
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
