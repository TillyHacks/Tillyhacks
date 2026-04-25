"use client";

import { useState } from "react";
import type { ScheduleDay, ScheduleEventType } from "@/lib/content";
import { SectionHeader } from "./SectionHeader";

type Props = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  timezone?: string;
  days: ScheduleDay[];
};

const TYPE_COLORS: Record<ScheduleEventType, string> = {
  talk: "#B024F9",
  meal: "#000000",
  activity: "#000000",
  ceremony: "#B024F9",
  deadline: "#B024F9",
};

const TYPE_LABELS: Record<ScheduleEventType, string> = {
  talk: "Talk",
  meal: "Food",
  activity: "Fun",
  ceremony: "Stage",
  deadline: "Key",
};

export function Schedule({
  eyebrow,
  title,
  subtitle,
  timezone,
  days,
}: Props) {
  const [active, setActive] = useState(0);
  const day = days[active];

  return (
    <section id="schedule" className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <SectionHeader
          eyebrow={eyebrow}
          title={title}
          subtitle={subtitle}
        />

        {/* Day tabs */}
        {/* 
        <div className="flex flex-wrap gap-[2px] bg-black border-2 border-black mb-8 w-fit">
          {days.map((d, i) => {
            const isActive = i === active;
            return (
              <button
                key={d.date}
                onClick={() => setActive(i)}
                className={`px-5 sm:px-7 py-3 sm:py-4 text-left transition-colors ${
                  isActive
                    ? "bg-[#B024F9] text-white"
                    : "bg-white text-black hover:bg-black/5"
                }`}
                style={{
                  fontFamily:
                    "var(--font-sora), 'Sora', sans-serif",
                }}
              >
                <div className="text-[10px] tracking-[0.3em] uppercase opacity-70">
                  {d.label}
                </div>
                <div className="font-bold text-base sm:text-lg mt-1">
                  {d.date}
                </div>
              </button>
            );
          })}
        </div>
        */}

        {/*{timezone ? (
          <div className="text-xs tracking-widest uppercase opacity-50 mb-6">
            All times in {timezone}
          </div>
        ) : null}*/}

        {/* Events timeline */}
        {/*
        <div className="border-2 border-black">
          {day.events.map((ev, i) => {
            const type = (ev.type ?? "activity") as ScheduleEventType;
            const color = TYPE_COLORS[type];
            const typeLabel = TYPE_LABELS[type];
            return (
              <div
                key={`${day.date}-${ev.time}-${i}`}
                className={`grid grid-cols-[120px_1fr] sm:grid-cols-[160px_1fr_140px] gap-4 sm:gap-6 items-center px-5 sm:px-8 py-5 ${
                  i < day.events.length - 1
                    ? "border-b border-black/10"
                    : ""
                } hover:bg-[#B024F9]/5 transition-colors`}
              >
                <div
                  className="text-lg sm:text-xl font-bold tabular-nums"
                  style={{
                    fontFamily:
                      "var(--font-sora), 'Sora', sans-serif",
                    color,
                  }}
                >
                  {ev.time}
                </div>
                <div>
                  <div
                    className="text-base sm:text-lg font-semibold"
                    style={{
                      fontFamily:
                        "var(--font-sora), 'Sora', sans-serif",
                    }}
                  >
                    {ev.title}
                  </div>
                  {ev.location ? (
                    <div className="text-sm opacity-60 mt-0.5">
                      {ev.location}
                    </div>
                  ) : null}
                </div>
                <div className="hidden sm:flex justify-end">
                  <span
                    className="text-[10px] tracking-[0.2em] uppercase px-3 py-1 border-2"
                    style={{
                      borderColor: color,
                      color,
                    }}
                  >
                    {typeLabel}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
        */}
        <div className="text-center text-3xl sm:text-5xl font-bold text-black py-20" style={{ fontFamily: "var(--font-sora), 'Sora', sans-serif" }}>
          Schedule will be announced soon.
        </div>
   
      </div>
    </section>
  );
}
