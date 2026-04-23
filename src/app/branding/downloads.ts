"use client";

/**
 * Browser-side raster export for the TillyHacks brand marks.
 *
 * We render with the canvas text API using the Sora font that next/font
 * already loaded into the document. This avoids the SVG-in-<img>
 * font-isolation problem entirely.
 */

const PURPLE = "#B024F9";

async function ensureFontReady(fontCss: string) {
  if (typeof document === "undefined") return;
  try {
    await document.fonts.load(fontCss);
    await document.fonts.ready;
  } catch {
    // fonts.load can throw for bad specifiers; we still try to draw.
  }
}

function download(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

function toPngBlob(canvas: HTMLCanvasElement): Promise<Blob> {
  return new Promise((resolve, reject) =>
    canvas.toBlob(
      (b) => (b ? resolve(b) : reject(new Error("toBlob failed"))),
      "image/png",
    ),
  );
}

export async function downloadMarkPng(
  variant: "light" | "dark",
  size = 2048,
) {
  const fontSize = Math.round(size * 0.72);
  const fontCss = `800 ${fontSize}px Sora`;
  await ensureFontReady(fontCss);

  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  if (variant === "dark") {
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, size, size);
  }

  ctx.font = fontCss;
  ctx.textAlign = "left";
  ctx.textBaseline = "middle";
  // Modern browsers only; falls back gracefully if unsupported.
  try {
    (ctx as CanvasRenderingContext2D & { letterSpacing?: string }).letterSpacing =
      `${-Math.round(fontSize * 0.1)}px`;
  } catch {
    /* noop */
  }

  const tWidth = ctx.measureText("T").width;
  const hWidth = ctx.measureText("H").width;
  const total = tWidth + hWidth;
  const startX = (size - total) / 2;
  const centerY = size / 2;

  ctx.fillStyle = PURPLE;
  ctx.fillText("T", startX, centerY);
  ctx.fillStyle = variant === "dark" ? "#FFFFFF" : "#000000";
  ctx.fillText("H", startX + tWidth, centerY);

  download(await toPngBlob(canvas), `tillyhacks-mark-${variant}.png`);
}

export async function downloadWordmarkPng(
  variant: "light" | "dark",
  height = 800,
) {
  const fontSize = Math.round(height * 0.85);
  const fontCss = `800 ${fontSize}px Sora`;
  await ensureFontReady(fontCss);

  // Provisional canvas to measure.
  const measure = document.createElement("canvas").getContext("2d")!;
  measure.font = fontCss;
  try {
    (measure as CanvasRenderingContext2D & { letterSpacing?: string }).letterSpacing =
      `${-Math.round(fontSize * 0.045)}px`;
  } catch {
    /* noop */
  }
  const tillyWidth = measure.measureText("Tilly").width;
  const hacksWidth = measure.measureText("Hacks").width;
  const padX = Math.round(fontSize * 0.05);
  const width = Math.ceil(tillyWidth + hacksWidth + padX * 2);

  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  if (variant === "dark") {
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, width, height);
  }

  ctx.font = fontCss;
  ctx.textAlign = "left";
  ctx.textBaseline = "middle";
  try {
    (ctx as CanvasRenderingContext2D & { letterSpacing?: string }).letterSpacing =
      `${-Math.round(fontSize * 0.045)}px`;
  } catch {
    /* noop */
  }

  const centerY = height / 2;
  ctx.fillStyle = PURPLE;
  ctx.fillText("Tilly", padX, centerY);
  ctx.fillStyle = variant === "dark" ? "#FFFFFF" : "#000000";
  ctx.fillText("Hacks", padX + tillyWidth, centerY);

  download(await toPngBlob(canvas), `tillyhacks-wordmark-${variant}.png`);
}

export async function downloadAvatarPng(size = 2048) {
  const fontSize = Math.round(size * 0.58);
  const fontCss = `800 ${fontSize}px Sora`;
  await ensureFontReady(fontCss);

  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  ctx.fillStyle = PURPLE;
  ctx.fillRect(0, 0, size, size);

  ctx.font = fontCss;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  try {
    (ctx as CanvasRenderingContext2D & { letterSpacing?: string }).letterSpacing =
      `${-Math.round(fontSize * 0.08)}px`;
  } catch {
    /* noop */
  }
  ctx.fillStyle = "#FFFFFF";
  ctx.fillText("TH", size / 2, size / 2);

  download(await toPngBlob(canvas), `tillyhacks-avatar.png`);
}
