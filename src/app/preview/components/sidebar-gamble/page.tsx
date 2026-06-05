"use client";

import { useState } from "react";
import type { CSSProperties, JSX } from "react";

/* ───────────────────────────────────────────────────────────────────────────
   Sidebar · Iteraciones "Gamble / Apostador"
   Lenguaje visual heredado de /preview/components/button-primary:
   bordes-gradiente neón, glow difuso animado y dúo de marca (live ↔ negociable).

   Spec base (Stitch v3 · 87/100):
     256px · vault #22005C · brand area 64px · 5 nav items · Plus Jakarta Sans
   El feature real src/features/Sidebar permanece intacto — esto es exploración.
   ─────────────────────────────────────────────────────────────────────────── */

const FD = "var(--font-display, 'Plus Jakarta Sans', sans-serif)";

/* ── CSS compartido — los temas inyectan sus variables inline ─────────────── */
const GAMBLE_CSS = `
  @property --gs-angle {
    syntax: '<angle>';
    inherits: true;
    initial-value: 135deg;
  }

  .gs-root {
    width: 226px;
    flex-shrink: 0;
    min-height: 560px;
    display: flex;
    flex-direction: column;
    border-radius: 16px;
    overflow: hidden;
    position: relative;
    background: var(--gs-bg);
    box-shadow:
      inset 0 1px 0 rgb(100% 100% 100% / 0.06),
      0 24px 48px -12px rgb(0% 0% 0% / 0.55);
    font-family: ${FD};
  }

  /* Brand area — wordmark ›vmc‹ Subastas · glow de marca difuso */
  .gs-brand {
    position: relative;
    min-height: 92px;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1px;
    padding: 18px 18px 16px;
    border-bottom: 1px solid rgb(100% 100% 100% / 0.08);
    overflow: hidden;
  }
  .gs-brand::after {
    content: '';
    position: absolute;
    left: 50%;
    top: 14px;
    width: 120px;
    height: 40px;
    transform: translateX(-50%);
    border-radius: 999px;
    background-image: var(--gs-grad);
    filter: blur(26px);
    opacity: 0.38;
    z-index: 0;
    animation: gs-breathe 4.5s ease-in-out infinite;
  }
  .gs-wordmark {
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    gap: 2px;
    font-size: 23px;
    font-weight: 800;
    letter-spacing: 0.01em;
    line-height: 1;
    color: var(--vmc-color-base-white, #fff);
  }
  /* Logo CONSTANTE — no cambia con el tema */
  .gs-wordmark .gs-chev {
    color: oklch(0.80 0.14 195);
    text-shadow: 0 0 10px oklch(0.80 0.14 195 / 0.45);
  }
  .gs-brand-name {
    position: relative;
    z-index: 1;
    font-size: 17px;
    font-weight: 700;
    letter-spacing: 0.01em;
    line-height: 1.15;
    color: rgb(100% 100% 100% / 0.50);
    margin-top: 1px;
  }
  .gs-brand-sub {
    position: relative;
    z-index: 1;
    font-size: 8px;
    font-weight: 600;
    letter-spacing: 0.10em;
    text-transform: uppercase;
    color: rgb(100% 100% 100% / 0.42);
    margin-top: 5px;
  }
  .gs-brand-sub b { color: var(--gs-accent); font-weight: 700; }

  /* Nav item */
  .gs-item {
    position: relative;
    display: flex;
    align-items: center;
    gap: 13px;
    height: 48px;
    padding: 0 16px;
    cursor: pointer;
    user-select: none;
    overflow: hidden;
    transition: background-color 160ms cubic-bezier(0.3,0,0,1),
                transform 180ms cubic-bezier(0.25,0.8,0.25,1),
                box-shadow 220ms ease;
  }
  .gs-item:hover { background-color: rgb(100% 100% 100% / 0.06); }
  .gs-item:focus-visible {
    outline: 2px solid rgb(100% 100% 100% / 0.55);
    outline-offset: -2px;
  }

  /* ════ Efecto 1 · Lift & Glow — firma Button Primary ════ */
  .fx-lift .gs-item:hover {
    transform: translateX(3px);
    box-shadow: inset 3px 0 0 0 var(--gs-accent), -10px 0 26px -12px var(--gs-glow);
  }
  .fx-lift .gs-item:active { transform: translateX(3px) scale(0.98); }
  .fx-lift .gs-item:hover .gs-icon { transform: translateX(2px) scale(1.08); }
  .fx-lift .gs-sub:hover { transform: translateX(2px); }
  .fx-lift .sps-cta:hover {
    --gs-angle: 220deg;
    transform: translateY(-2px) scale(1.02);
    box-shadow: 0 10px 26px -6px var(--gs-glow), inset 0 1px 0 rgb(100% 100% 100% / 0.28);
  }
  .fx-lift .sps-cta:active {
    transform: scale(0.97) translateY(1px);
    box-shadow: inset 0 2px 5px rgb(0% 0% 0% / 0.22);
  }

  /* ════ Efecto 2 · Angle Sweep — sheen + rotación de ángulo ════ */
  .fx-sweep .gs-item::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(100deg, transparent 32%, rgb(100% 100% 100% / 0.16) 50%, transparent 68%);
    transform: translateX(-130%);
    transition: transform 550ms cubic-bezier(0.3,0,0,1);
    pointer-events: none;
  }
  .fx-sweep .gs-item:hover::after { transform: translateX(130%); }
  .fx-sweep .gs-item:hover .gs-icon { filter: drop-shadow(0 0 5px var(--gs-glow)); }
  .fx-sweep .sps-cta { --gs-angle: 135deg; }
  .fx-sweep .sps-cta:hover { --gs-angle: 320deg; transform: translateY(-1px); }
  .fx-sweep .sps-cta:active { --gs-angle: 135deg; transform: scale(0.98); }

  /* ════ Efecto 3 · Press-In — inundación orange + hundimiento ════ */
  .fx-press .gs-item:hover {
    background-color: transparent;
    background-image: linear-gradient(90deg,
      color-mix(in oklch, var(--gs-accent) 26%, transparent) 0%,
      color-mix(in oklch, var(--gs-accent) 6%, transparent) 60%,
      transparent 100%);
  }
  .fx-press .gs-item:active {
    transform: scale(0.985);
    box-shadow: inset 0 2px 7px rgb(0% 0% 0% / 0.32);
  }
  .fx-press .gs-item:active .gs-icon { transform: scale(0.88); }
  .fx-press .sps-cta:hover { filter: brightness(1.07); transform: translateY(-1px); }
  .fx-press .sps-cta:active {
    transform: scale(0.96) translateY(2px);
    box-shadow: inset 0 3px 9px rgb(0% 0% 0% / 0.34);
  }

  /* ════ Efecto 4 · Neon Border — borde-gradiente firma Button Primary ════ */
  .fx-border .gs-item:hover {
    background-color: rgb(100% 100% 100% / 0.04);
    border-radius: 8px;
    box-shadow: inset 0 0 0 1.5px color-mix(in oklch, var(--gs-accent) 70%, transparent),
                0 0 18px -4px var(--gs-glow);
  }
  .fx-border .gs-item:active {
    transform: scale(0.985);
    box-shadow: inset 0 0 0 1.5px var(--gs-accent), inset 0 2px 5px rgb(0% 0% 0% / 0.25);
  }
  .fx-border .gs-item:hover .gs-icon { stroke: var(--gs-accent); filter: drop-shadow(0 0 4px var(--gs-glow)); }
  .fx-border .sps-cta:hover {
    transform: translateY(-1px);
    box-shadow: 0 0 0 2px color-mix(in oklch, var(--gs-accent) 80%, transparent),
                0 9px 22px -6px var(--gs-glow), inset 0 1px 0 rgb(100% 100% 100% / 0.25);
  }
  .fx-border .sps-cta:active { transform: scale(0.97); }

  /* ════ Efecto 5 · Glow Pulse — el glow brota desde el icono ════ */
  .fx-pulse .gs-item:hover {
    background: radial-gradient(120px 60px at 26px 50%,
      color-mix(in oklch, var(--gs-accent) 28%, transparent) 0%, transparent 70%);
  }
  .fx-pulse .gs-item:hover .gs-icon {
    transform: scale(1.18);
    filter: drop-shadow(0 0 6px var(--gs-glow));
  }
  .fx-pulse .gs-item:active { transform: scale(0.99); }
  .fx-pulse .sps-cta:hover {
    transform: scale(1.02);
    box-shadow: 0 0 30px -2px var(--gs-glow), inset 0 1px 0 rgb(100% 100% 100% / 0.25);
  }
  .fx-pulse .sps-cta:active { transform: scale(0.97); box-shadow: inset 0 2px 6px rgb(0% 0% 0% / 0.25); }

  /* ════ Mix · inundación iter3 + desplazamiento+barrita iter1 + color icono iter4 ════ */
  .fx-mix .gs-item:hover {
    transform: translateX(3px);
    background-image: linear-gradient(90deg,
      color-mix(in oklch, var(--gs-accent) 26%, transparent) 0%,
      color-mix(in oklch, var(--gs-accent) 6%, transparent) 60%,
      transparent 100%);
    box-shadow: inset 3px 0 0 0 var(--gs-accent), -10px 0 26px -12px var(--gs-glow);
  }
  .fx-mix .gs-item:hover .gs-icon { stroke: var(--gs-accent); filter: drop-shadow(0 0 4px var(--gs-glow)); }
  .fx-mix .gs-item:active {
    transform: translateX(3px) scale(0.985);
    box-shadow: inset 3px 0 0 0 var(--gs-accent), inset 0 2px 7px rgb(0% 0% 0% / 0.32);
  }
  .fx-mix .gs-sub:hover { transform: translateX(2px); }
  .fx-mix .sps-cta:hover {
    transform: translateY(-2px) scale(1.02);
    box-shadow: 0 10px 26px -6px var(--gs-glow), inset 0 1px 0 rgb(100% 100% 100% / 0.28);
  }
  .fx-mix .sps-cta:active {
    transform: scale(0.97) translateY(1px);
    box-shadow: inset 0 2px 5px rgb(0% 0% 0% / 0.22);
  }
  .gs-item--active { background-color: rgb(100% 100% 100% / 0.07); }
  .gs-item--active::before {
    content: '';
    position: absolute;
    left: 0; top: 6px; bottom: 6px;
    width: 4px;
    border-radius: 0 4px 4px 0;
    background-image: var(--gs-grad);
    box-shadow: 0 0 14px var(--gs-glow), 0 0 4px var(--gs-glow);
    animation: gs-rail 3.5s ease-in-out infinite;
  }
  .gs-icon {
    flex-shrink: 0;
    transition: transform 200ms cubic-bezier(0.25,0.8,0.25,1), stroke 180ms ease, filter 200ms ease;
  }
  .gs-label {
    flex: 1;
    font-size: 14px;
    line-height: 20px;
    color: rgb(100% 100% 100% / 0.82);
  }
  .gs-label--active { font-weight: 700; color: var(--vmc-color-base-white, #fff); }
  .gs-count {
    font-size: 11px;
    font-weight: 700;
    padding: 1px 8px;
    border-radius: 999px;
    color: var(--gs-accent);
    background: color-mix(in oklch, var(--gs-accent) 16%, transparent);
  }

  /* Sub-items — banda oscura, count + chevron, rail activo */
  .gs-subband { background-color: rgb(0% 0% 0% / 0.18); }
  .gs-sub {
    position: relative;
    display: flex;
    align-items: center;
    gap: 8px;
    height: 44px;
    padding: 0 16px 0 49px;
    cursor: pointer;
    transition: background-color 150ms;
  }
  .gs-sub:hover { background-color: rgb(100% 100% 100% / 0.05); }
  .gs-sub:focus-visible {
    outline: 2px solid rgb(100% 100% 100% / 0.55);
    outline-offset: -2px;
  }
  .gs-sub--active { background-color: rgb(100% 100% 100% / 0.07); }
  .gs-sub--active::before {
    content: '';
    position: absolute;
    left: 0; top: 8px; bottom: 8px;
    width: 3px;
    border-radius: 0 3px 3px 0;
    background-image: var(--gs-grad);
    box-shadow: 0 0 12px var(--gs-glow), 0 0 4px var(--gs-glow);
    animation: gs-rail 3.5s ease-in-out infinite;
  }
  .gs-sub-label {
    flex: 1;
    font-size: 14px;
    color: rgb(100% 100% 100% / 0.78);
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .gs-sub--active .gs-sub-label { color: var(--vmc-color-base-white, #fff); font-weight: 600; }
  .gs-sub-count { font-size: 12px; color: rgb(100% 100% 100% / 0.42); flex-shrink: 0; }

  /* Divider line antes de Soporte */
  .gs-divider {
    height: 1px;
    margin: 10px 16px;
    background-color: rgb(100% 100% 100% / 0.10);
  }

  /* Bottom slot — contiene el banner Subaspass */
  .gs-cta-wrap { margin-top: auto; padding: 13px; }

  /* ── Banner Subaspass — W200 · fondo Vault → live orange ────────────────── */
  .sps {
    position: relative;
    width: 200px;
    flex-shrink: 0;
    border-radius: 16px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 16px;
    box-sizing: border-box;
    font-family: ${FD};
    color: var(--vmc-color-base-white, #fff);
    background:
      radial-gradient(130% 70% at 50% 8%, oklch(0.34 0.20 290) 0%, transparent 58%),
      linear-gradient(176deg,
        oklch(0.22 0.18 285) 0%,
        oklch(0.19 0.15 288) 48%,
        oklch(0.40 0.16 45)  100%);
    box-shadow:
      inset 0 1px 0 rgb(100% 100% 100% / 0.08),
      0 18px 36px -14px rgb(0% 0% 0% / 0.55);
  }
  .sps--fluid { width: 100%; }
  .sps::before {
    content: '';
    position: absolute;
    left: -20%; bottom: -30%;
    width: 140%; height: 60%;
    background: radial-gradient(60% 60% at 50% 50%, oklch(0.72 0.16 55 / 0.55) 0%, transparent 70%);
    filter: blur(12px);
    pointer-events: none;
    animation: gs-breathe 5s ease-in-out infinite;
  }
  .sps-content { position: relative; z-index: 1; display: flex; flex-direction: column; }
  .sps-eyebrow {
    font-size: 11px;
    font-weight: 600;
    line-height: 1.3;
    color: rgb(100% 100% 100% / 0.78);
    margin: 0 0 6px;
  }
  .sps-title {
    font-weight: 800;
    line-height: 1.05;
    letter-spacing: -0.01em;
    margin: 0;
    text-shadow: 0 2px 8px rgb(0% 0% 0% / 0.30);
  }
  .sps-desc {
    font-size: 12px;
    line-height: 1.4;
    color: rgb(100% 100% 100% / 0.82);
    margin: 10px 0 0;
  }
  .sps-cta {
    margin-top: 16px;
    align-self: stretch;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    height: 40px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-family: ${FD};
    font-size: 13px;
    font-weight: 700;
    color: var(--vmc-color-base-white, #fff);
    text-shadow: 0 1px 2px rgb(0% 0% 0% / 0.28);
    background-image: linear-gradient(var(--gs-angle), oklch(0.74 0.17 55) 0%, oklch(0.66 0.18 42) 100%);
    box-shadow: 0 6px 16px -4px oklch(0.72 0.16 55 / 0.55), inset 0 1px 0 rgb(100% 100% 100% / 0.25);
    transition: --gs-angle 0.4s cubic-bezier(0.25,0.8,0.25,1), transform 0.18s ease, box-shadow 0.25s ease;
  }
  .sps-cta:hover { --gs-angle: 300deg; transform: translateY(-1px); box-shadow: 0 10px 22px -6px oklch(0.72 0.16 55 / 0.65), inset 0 1px 0 rgb(100% 100% 100% / 0.25); }
  .sps-cta:active { transform: scale(0.98) translateY(1px); }

  @keyframes gs-breathe {
    0%,100% { opacity: 0.40; transform: scale(0.94); }
    50%     { opacity: 0.65; transform: scale(1.06); }
  }
  @keyframes gs-rail {
    0%,100% { opacity: 0.75; }
    50%     { opacity: 1; }
  }
  @media (prefers-reduced-motion: reduce) {
    .gs-brand::after, .gs-item--active::before, .gs-sub--active::before, .sps::before { animation: none; }
  }
`;

/* ── Tipos ─────────────────────────────────────────────────────────────────── */
interface GambleTheme {
  id:       string;   // clave del set de iconos (ICON_SETS) + key React
  fx:       string;   // clase del efecto hover/pressed (fx-*)
  name:     string;
  tagline:  string;
  bg:       string;
  grad:     string;
  glow:     string;
  accent:   string;
  bannerH?: number;   // alto del banner Subaspass dentro del sidebar
}

interface SubItem  { label: string; count: number; children?: SubItem[] }
interface NavEntry {
  label:     string;
  iconPath:  string;
  count?:    number;
  children?: SubItem[];
  section?:  string;
}

/* ── Datos — 5 nav items del spec + taxonomía real VMC ───────────────────────── */
const NAV: NavEntry[] = [
  { label: "Hoy",            iconPath: "M8 2v2M16 2v2M3 8h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" },
  {
    label: "Tipo de oferta", iconPath: "M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82zM7 7h.01",
    children: [
      { label: "En vivo",    count: 38 },
      { label: "Negociable", count: 2  },
    ],
  },
  {
    label: "Categorías", iconPath: "M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z",
    children: [
      {
        label: "Equipos diversos", count: 4,
        children: [
          { label: "Equipos varios",      count: 1 },
          { label: "Laptops",             count: 1 },
          { label: "Motores",             count: 1 },
          { label: "Equipos Industriales", count: 1 },
        ],
      },
      {
        label: "Vehicular", count: 35,
        children: [
          {
            label: "Liviano", count: 35,
            children: [
              { label: "Siniestrado", count: 7  },
              { label: "Seminuevo",   count: 28 },
            ],
          },
        ],
      },
      {
        label: "Mobiliario", count: 1,
        children: [
          { label: "Mobiliario,", count: 1 },
        ],
      },
    ],
  },
  {
    label: "Empresas", iconPath: "M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2M10 6h4M10 10h4M10 14h4M10 18h4",
    children: [
      { label: "Autoplan",            count: 6  },
      { label: "Maquisistema",        count: 7  },
      { label: "Pacífico",            count: 6  },
      { label: "Mapfre",              count: 3  },
      { label: "Perú Autos",          count: 3  },
      { label: "SubasCars",           count: 1  },
      { label: "Incamotors",          count: 1  },
      { label: "Pandero Seminuevos",  count: 12 },
      { label: "Inversiones F&B",     count: 1  },
    ],
  },
  { label: "Centro de ayuda", section: "Soporte", iconPath: "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3M12 17h.01" },
];

/* ── Sets de iconos por iteración — fx-lift usa los paths de NAV (fallback) ────── */
const ICON_SETS: Record<string, Record<string, string>> = {
  "fx-sweep": {
    "Hoy":             "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM12 6v6l4 2",
    "Tipo de oferta":  "M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",
    "Categorías":      "M12 2l9 5-9 5-9-5zM3 12l9 5 9-5M3 17l9 5 9-5",
    "Empresas":        "M4 7h16a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2zM9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M2 13h20",
    "Centro de ayuda": "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4.9 4.9l4.2 4.2M14.9 14.9l4.2 4.2M14.9 9.1l4.2-4.2M4.9 19.1l4.2-4.2",
  },
  "fx-press": {
    "Hoy":             "M8 2v2M16 2v2M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zM8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01",
    "Tipo de oferta":  "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2zM9.5 9.5h.01M14.5 14.5h.01M9.5 15l5-5",
    "Categorías":      "M3 3h8v8H3zM13 3h8v5h-8zM13 12h8v9h-8zM3 15h8v6H3z",
    "Empresas":        "M3 9l1.5-5h15L21 9M4 9v11a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9M2 9h20M9 21v-6h6v6",
    "Centro de ayuda": "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2zM9.1 9a2.9 2.9 0 0 1 5.6 1c0 2-2.9 2.5-2.9 2.5M12 14h.01",
  },
  "fx-border": {
    "Hoy":             "M17 18a5 5 0 0 0-10 0M12 2v7M5.6 11.6L4.2 10.2M1 18h2M21 18h2M19.8 10.2l-1.4 1.4M23 22H1M8 6l4-4 4 4",
    "Tipo de oferta":  "M19 5L5 19M6.5 9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zM17.5 20a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z",
    "Categorías":      "M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16zM3.3 7L12 12l8.7-5M12 22V12",
    "Empresas":        "M3 21h18M5 21V7l8-4v18M19 21V11l-6-4M9 9v.01M9 13v.01M9 17v.01",
    "Centro de ayuda": "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM12 16v-4M12 8h.01",
  },
  "fx-pulse": {
    "Hoy":             "M13 2L3 14h9l-1 8 10-12h-9z",
    "Tipo de oferta":  "M19 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2M21 12h-5a2 2 0 0 0 0 4h5a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1zM3 7h16",
    "Categorías":      "M6 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM18 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",
    "Empresas":        "M3 21h18M3 10h18M5 6l7-3 7 3M5 10v11M19 10v11M9 14v3M15 14v3",
    "Centro de ayuda": "M7.9 20A9 9 0 1 0 4 16.1L2 22zM9.5 9a2.5 2.5 0 0 1 4.9.6c0 2-2.4 2-2.4 3.4M12 17h.01",
  },

  /* ─ Set "Subasta literal" — cada icono 1:1 con el texto ─ */
  "set-subasta": {
    "Hoy":             "M8 2v2M16 2v2M3 8h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zM12 15a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z",
    "Tipo de oferta":  "M14 13l-7.5 7.5a2.12 2.12 0 0 1-3-3L11 10M16 16l6-6M8 8l6-6M9 7l8 8M21 11l-8-8",
    "Categorías":      "M20 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2z",
    "Empresas":        "M3 22h18M4 11h16M12 2l8 6H4zM6 11v7M10 11v7M14 11v7M18 11v7",
    "Centro de ayuda": "M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H4a1 1 0 0 1-1-1v-5a9 9 0 0 1 18 0v5a1 1 0 0 1-1 1h-2a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3M21 16v2a4 4 0 0 1-4 4h-5",
  },

  /* ─ Set "Comercio" — metáforas comerciales ─ */
  "set-comercio": {
    "Hoy":             "M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10z",
    "Tipo de oferta":  "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1zM8 7h8M8 11h8M8 15h5",
    "Categorías":      "M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01",
    "Empresas":        "M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 3.26 6.5l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35zM6 18h12M6 14h12M6 10h12",
    "Centro de ayuda": "M12 7v14M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
  },

  /* ─ Set "Data / Soporte" — directo ─ */
  "set-data": {
    "Hoy":             "M8 2v2M16 2v2M3 9h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zM9 16l2 2 4-4",
    "Tipo de oferta":  "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM12 6v12M15 9.5a2.5 2.5 0 0 0-2.5-1.5h-1a2 2 0 0 0 0 4h1a2 2 0 0 1 0 4h-1A2.5 2.5 0 0 1 9 14.5",
    "Categorías":      "M3 3h18v18H3zM9 3v18M15 3v18M3 9h18M3 15h18",
    "Empresas":        "M2 20h20M4 20V8l5 4V8l5 4V7l5 4v9M9 20v-4h2v4M13 16h.01",
    "Centro de ayuda": "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z",
  },
};

function iconFor(themeId: string, label: string, fallback: string): string {
  const set = ICON_SETS[themeId];
  if (set !== undefined && set[label] !== undefined) { return set[label]; }
  return fallback;
}

/* ── Tono Vault — BLOQUEADO. Fondo idéntico en las 3 iteraciones. ────────────── */
const VAULT_BG = "linear-gradient(180deg, oklch(0.21 0.16 285) 0%, oklch(0.15 0.12 285) 100%)";

/* Acento ORANGE de marca · IDÉNTICO en las 3. Lo único que varía: el efecto
   hover/pressed (id = clase fx-*), siempre en el lenguaje del Button Primary. */
const ORANGE_GRAD   = "oklch(0.76 0.17 58) 0%, oklch(0.66 0.18 42) 100%";
const ORANGE_GLOW   = "oklch(0.72 0.16 55 / 0.55)";
const ORANGE_ACCENT = "oklch(0.76 0.16 58)";

/* Mix — dirección elegida · base Vault-dark #2E0F70 = oklch(0.26 0.19 285) */
const MIX_BG = "linear-gradient(180deg, oklch(0.26 0.19 285) 0%, oklch(0.19 0.15 285) 100%)";

const THEMES: GambleTheme[] = [
  {
    id: "fx-lift", fx: "fx-lift",
    name: "Lift & Glow",
    tagline: "Iconos clásicos · hover eleva la fila + glow orange",
    bg: VAULT_BG, grad: ORANGE_GRAD, glow: ORANGE_GLOW, accent: ORANGE_ACCENT,
  },
  {
    id: "fx-sweep", fx: "fx-sweep",
    name: "Angle Sweep",
    tagline: "Iconos alternos · sheen barre la fila + rota el ángulo del CTA",
    bg: VAULT_BG, grad: ORANGE_GRAD, glow: ORANGE_GLOW, accent: ORANGE_ACCENT,
    bannerH: 240,
  },
  {
    id: "fx-press", fx: "fx-press",
    name: "Press-In",
    tagline: "Iconos densos · hover inunda orange + pressed hunde",
    bg: VAULT_BG, grad: ORANGE_GRAD, glow: ORANGE_GLOW, accent: ORANGE_ACCENT,
    bannerH: 300,
  },
  {
    id: "fx-border", fx: "fx-border",
    name: "Neon Border",
    tagline: "Iconos finos · borde-gradiente orange + glow en hover",
    bg: VAULT_BG, grad: ORANGE_GRAD, glow: ORANGE_GLOW, accent: ORANGE_ACCENT,
    bannerH: 360,
  },
  {
    id: "fx-pulse", fx: "fx-pulse",
    name: "Glow Pulse",
    tagline: "Iconos energéticos · glow brota desde el icono + scale",
    bg: VAULT_BG, grad: ORANGE_GRAD, glow: ORANGE_GLOW, accent: ORANGE_ACCENT,
    bannerH: 420,
  },
  {
    id: "set-subasta", fx: "fx-border",
    name: "Subasta literal",
    tagline: "Iconos 1:1 con el texto · martillo de subasta · carpeta · headset",
    bg: VAULT_BG, grad: ORANGE_GRAD, glow: ORANGE_GLOW, accent: ORANGE_ACCENT,
    bannerH: 260,
  },
  {
    id: "set-comercio", fx: "fx-pulse",
    name: "Comercio",
    tagline: "Iconos comerciales · sol (hoy) · recibo · lista · tienda · guía",
    bg: VAULT_BG, grad: ORANGE_GRAD, glow: ORANGE_GLOW, accent: ORANGE_ACCENT,
    bannerH: 320,
  },
  {
    id: "set-data", fx: "fx-lift",
    name: "Data / Soporte",
    tagline: "Iconos directos · calendario-check · $ · grid · fábrica · teléfono",
    bg: VAULT_BG, grad: ORANGE_GRAD, glow: ORANGE_GLOW, accent: ORANGE_ACCENT,
    bannerH: 380,
  },
  {
    id: "fx-mix", fx: "fx-mix",
    name: "Mix",
    tagline: "Base Vault #2E0F70 · inundación orange (iter3) + desplazamiento y barrita (iter1) + icono cambia de color (iter4)",
    bg: MIX_BG, grad: ORANGE_GRAD, glow: ORANGE_GLOW, accent: ORANGE_ACCENT,
    bannerH: 300,
  },
];

/* ── Iconos ─────────────────────────────────────────────────────────────────── */
interface IconProps { path: string; active: boolean }
function NavIcon({ path, active }: IconProps): JSX.Element {
  const stroke = active ? "var(--vmc-color-base-white, #fff)" : "rgb(255 255 255 / 0.62)";
  return (
    <svg className="gs-icon" width="20" height="20" viewBox="0 0 24 24" fill="none"
      stroke={stroke} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d={path} />
    </svg>
  );
}

function ChevronIcon({ open }: { open: boolean }): JSX.Element {
  const transform = open ? "rotate(90deg)" : "rotate(0deg)";
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
      stroke="rgb(255 255 255 / 0.42)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      style={{ transition: "transform 160ms cubic-bezier(0.3,0,0,1)", transform, flexShrink: 0 }}>
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}

/* ── Sub-item recursivo ───────────────────────────────────────────────────────── */
interface GambleSubProps {
  item:      SubItem;
  depth:     number;
  open:      Set<string>;
  activeSub: string | null;
  onToggle:  (label: string) => void;
  onSelect:  (label: string) => void;
}
function GambleSub({ item, depth, open, activeSub, onToggle, onSelect }: GambleSubProps): JSX.Element {
  const hasChildren = item.children !== undefined && item.children.length > 0;
  const isOpen      = open.has(item.label);
  const isActive    = activeSub === item.label;
  const padLeft     = 33 + depth * 16;
  const rowClass    = isActive ? "gs-sub gs-sub--active" : "gs-sub";

  function handleClick(): void {
    if (hasChildren) { onToggle(item.label); } else { onSelect(item.label); }
  }

  return (
    <div>
      <div className={rowClass} style={{ paddingLeft: padLeft }} role="button" tabIndex={0} onClick={handleClick}>
        <span className="gs-sub-label">{item.label}</span>
        <span className="gs-sub-count">({item.count})</span>
        <ChevronIcon open={hasChildren && isOpen} />
      </div>
      {hasChildren && isOpen && item.children!.map(function renderChild(child) {
        return (
          <GambleSub
            key={child.label} item={child} depth={depth + 1}
            open={open} activeSub={activeSub} onToggle={onToggle} onSelect={onSelect}
          />
        );
      })}
    </div>
  );
}

/* ── Sidebar de una iteración ─────────────────────────────────────────────────── */
interface SidebarProps { theme: GambleTheme }

const DEFAULT_OPEN = ["Empresas"];

function GambleSidebar({ theme }: SidebarProps): JSX.Element {
  const [active,    setActive]    = useState<string>("Empresas");
  const [activeSub, setActiveSub] = useState<string | null>("Autoplan");
  const [open,      setOpen]      = useState<Set<string>>(new Set(DEFAULT_OPEN));

  function handleToggle(label: string): void {
    const next = new Set(open);
    if (next.has(label)) { next.delete(label); } else { next.add(label); }
    setOpen(next);
  }

  function handleSelect(entry: NavEntry): void {
    setActive(entry.label);
    if (entry.children !== undefined) {
      handleToggle(entry.label);
    } else {
      setActiveSub(null);
    }
  }

  function handleSelectSub(label: string): void {
    setActiveSub(label);
  }

  const rootStyle = {
    "--gs-bg":     theme.bg,
    "--gs-grad":   theme.grad,
    "--gs-glow":   theme.glow,
    "--gs-accent": theme.accent,
  } as CSSProperties;

  return (
    <aside className={"gs-root " + theme.fx} style={rootStyle} aria-label="Navegación principal">
      {/* Brand — wordmark ›vmc‹ Subastas */}
      <div className="gs-brand">
        <div className="gs-wordmark">
          <span className="gs-chev">›</span>
          <span>vmc</span>
          <span className="gs-chev">‹</span>
        </div>
        <span className="gs-brand-name">Subastas</span>
        <span className="gs-brand-sub">powered by <b>SUBASTOP.Co</b></span>
      </div>

      {/* Nav */}
      <nav aria-label="Menú principal" style={{ paddingTop: 6 }}>
        {NAV.map(function renderEntry(entry) {
          const isActive     = active === entry.label;
          const hasChildren  = entry.children !== undefined;
          const showChildren = hasChildren && open.has(entry.label);
          return (
            <div key={entry.label}>
              {entry.section !== undefined && <div className="gs-divider" />}

              <div
                className={isActive ? "gs-item gs-item--active" : "gs-item"}
                role="button" tabIndex={0}
                onClick={function onClick() { handleSelect(entry); }}
              >
                <NavIcon path={iconFor(theme.id, entry.label, entry.iconPath)} active={isActive} />
                <span className={isActive ? "gs-label gs-label--active" : "gs-label"}>{entry.label}</span>
                <ChevronIcon open={showChildren} />
              </div>

              {showChildren && (
                <div className="gs-subband">
                  {entry.children!.map(function renderSub(sub) {
                    return (
                      <GambleSub
                        key={sub.label} item={sub} depth={1}
                        open={open} activeSub={activeSub}
                        onToggle={handleToggle} onSelect={handleSelectSub}
                      />
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      {/* Banner Subaspass — dentro del sidebar, al fondo · alto por iteración */}
      <div className="gs-cta-wrap">
        <SubaspassBanner fluid height={theme.bannerH} />
      </div>
    </aside>
  );
}

/* ── Banner Subaspass — W200 · alturas 250 / 400 / 600 ───────────────────────── */
function ArrowIcon(): JSX.Element {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function pickTitleSize(height: number): number {
  if (height >= 560) { return 28; }
  if (height >= 360) { return 23; }
  return 20;
}

function bannerClass(fluid: boolean): string {
  if (fluid) { return "sps sps--fluid"; }
  return "sps";
}

interface BannerProps { height?: number; fluid?: boolean }
function SubaspassBanner({ height, fluid = false }: BannerProps): JSX.Element {
  const styleObj: CSSProperties = {};
  let showDesc  = true;
  let titleSize = 22;
  if (height !== undefined) {
    styleObj.height = height;
    titleSize = pickTitleSize(height);
    showDesc  = height >= 360;
  }
  return (
    <div className={bannerClass(fluid)} style={styleObj}>
      <div className="sps-content">
        <p className="sps-eyebrow">¿Te tienta el riesgo alto?</p>
        <h3 className="sps-title" style={{ fontSize: titleSize }}>Compra Subaspass</h3>
        {showDesc && <p className="sps-desc">Participa sin consignar y sin restricciones.</p>}
        <button type="button" className="sps-cta">
          Comprar ahora <ArrowIcon />
        </button>
      </div>
    </div>
  );
}

/* ── Etiqueta de iteración ─────────────────────────────────────────────────────── */
function IterationLabel({ index, theme }: { index: number; theme: GambleTheme }): JSX.Element {
  return (
    <div style={{ marginBottom: 14, textAlign: "center", maxWidth: 260 }}>
      <p style={{ fontFamily: FD, fontSize: 11, fontWeight: 800, letterSpacing: "0.10em",
        textTransform: "uppercase", color: "var(--vmc-color-text-primary)", margin: "0 0 2px" }}>
        Iteración {index} · {theme.name}
      </p>
      <p style={{ fontFamily: FD, fontSize: 11, fontWeight: 500,
        color: "var(--vmc-color-text-tertiary)", margin: 0 }}>
        {theme.tagline}
      </p>
    </div>
  );
}

/* ── Dirección elegida — Mix es la base; el resto son exploraciones previas ──────── */
const FEATURED_ID = "fx-mix";
function isFeatured(theme: GambleTheme): boolean { return theme.id === FEATURED_ID; }
function isExploration(theme: GambleTheme): boolean { return theme.id !== FEATURED_ID; }

function SectionTitle({ kicker, title, note }: { kicker: string; title: string; note?: string }): JSX.Element {
  return (
    <div style={{ maxWidth: 980, margin: "0 auto 24px" }}>
      <p style={{ fontFamily: FD, fontSize: 11, fontWeight: 800, letterSpacing: "0.12em",
        textTransform: "uppercase", color: "var(--vmc-color-text-tertiary)", margin: "0 0 3px" }}>
        {kicker}
      </p>
      <h2 style={{ fontFamily: FD, fontSize: 18, fontWeight: 800, margin: 0,
        color: "var(--vmc-color-text-primary)" }}>
        {title}
      </h2>
      {note !== undefined && (
        <p style={{ fontFamily: FD, fontSize: 13, color: "var(--vmc-color-text-tertiary)", margin: "4px 0 0" }}>
          {note}
        </p>
      )}
    </div>
  );
}

function ChosenBadge(): JSX.Element {
  return (
    <span style={{ fontFamily: FD, fontSize: 10, fontWeight: 800, letterSpacing: "0.08em",
      textTransform: "uppercase", color: "var(--vmc-color-base-white, #fff)", padding: "3px 10px",
      borderRadius: 999, marginBottom: 10,
      backgroundImage: "linear-gradient(120deg, oklch(0.74 0.17 55) 0%, oklch(0.66 0.18 42) 100%)",
      boxShadow: "0 6px 16px -6px oklch(0.72 0.16 55 / 0.55)" }}>
      ✦ Dirección elegida
    </span>
  );
}

/* ── Page ──────────────────────────────────────────────────────────────────────── */
export default function SidebarGamblePreviewPage(): JSX.Element {
  const featured     = THEMES.filter(isFeatured);
  const explorations = THEMES.filter(isExploration);

  return (
    <main style={{ background: "var(--vmc-color-background-secondary)", minHeight: "100vh", padding: "40px 32px" }}>
      <style>{GAMBLE_CSS}</style>

      <div style={{ maxWidth: 980, margin: "0 auto 40px" }}>
        <h1 style={{ fontFamily: FD, fontSize: 22, fontWeight: 800, margin: "0 0 4px",
          color: "var(--vmc-color-text-primary)" }}>
          Sidebar · Gamble / Apostador
        </h1>
        <p style={{ fontFamily: FD, fontSize: 13, color: "var(--vmc-color-text-tertiary)", margin: 0 }}>
          W226 · acento orange de marca · efecto en lenguaje Button Primary · 5 nav items · Plus Jakarta Sans.
          Dirección elegida: <b>Mix</b> sobre base Vault <b>#2E0F70</b>.
        </p>
      </div>

      {/* ── Dirección elegida — Mix ───────────────────────────────────────── */}
      <SectionTitle
        kicker="Dirección elegida"
        title="Mix · base Vault #2E0F70"
        note="Inundación orange (iter3) + desplazamiento y barrita (iter1) + el icono cambia de color (iter4)."
      />
      <div style={{ display: "flex", justifyContent: "center", marginBottom: 72 }}>
        {featured.map(function renderFeatured(theme) {
          return (
            <div key={theme.id} style={{ display: "flex", flexDirection: "column", alignItems: "center",
              padding: 28, borderRadius: 20,
              background: "color-mix(in oklch, var(--vmc-color-background-card) 60%, transparent)",
              boxShadow: "0 0 0 1px color-mix(in oklch, oklch(0.72 0.16 55) 40%, transparent), 0 24px 60px -24px oklch(0.72 0.16 55 / 0.45)" }}>
              <ChosenBadge />
              <GambleSidebar theme={theme} />
            </div>
          );
        })}
      </div>

      {/* ── Exploraciones previas ─────────────────────────────────────────── */}
      <SectionTitle
        kicker="Exploraciones previas"
        title="8 variaciones de efecto · icon-set"
        note="Iteraciones que llevaron al Mix. Mismo acento orange; varía el efecto hover/pressed y el set de iconos."
      />
      <div style={{ display: "flex", flexWrap: "wrap", gap: 40, justifyContent: "center", alignItems: "flex-start" }}>
        {explorations.map(function renderExploration(theme, i) {
          return (
            <div key={theme.id} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <IterationLabel index={i + 1} theme={theme} />
              <GambleSidebar theme={theme} />
            </div>
          );
        })}
      </div>

      {/* ── Banner Subaspass ───────────────────────────────────────────────── */}
      <div style={{ maxWidth: 980, margin: "72px auto 24px" }}>
        <h2 style={{ fontFamily: FD, fontSize: 18, fontWeight: 800, margin: "0 0 4px",
          color: "var(--vmc-color-text-primary)" }}>
          Banner Subaspass · W200
        </h2>
        <p style={{ fontFamily: FD, fontSize: 13, color: "var(--vmc-color-text-tertiary)", margin: 0 }}>
          Promo "Compra Subaspass" sobre fondo Vault → live orange. Tres alturas: 250 · 400 · 600.
        </p>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 40, justifyContent: "center", alignItems: "flex-start" }}>
        {[250, 400, 600].map(function renderBanner(h) {
          return (
            <div key={h} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <p style={{ fontFamily: FD, fontSize: 11, fontWeight: 800, letterSpacing: "0.10em",
                textTransform: "uppercase", color: "var(--vmc-color-text-primary)", margin: "0 0 14px" }}>
                Alto {h}
              </p>
              <SubaspassBanner height={h} />
            </div>
          );
        })}
      </div>
    </main>
  );
}
