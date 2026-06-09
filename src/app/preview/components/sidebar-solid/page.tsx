"use client";

import { useState } from "react";
import type { CSSProperties, JSX } from "react";

/* ───────────────────────────────────────────────────────────────────────────
   Sidebar · Solid (Variación 9 modificada)
   Fondo sólido: #2E0F70
   Sin gradiente en el logo.
   Dropdowns/subniveles con borde redondeado de 16px.
   ─────────────────────────────────────────────────────────────────────────── */

const FD = "var(--font-display, 'Plus Jakarta Sans', sans-serif)";
const SIDEBAR_W = 240;
const COLLAPSED_W = 76;

const SOLID_BG = "#2E0F70";
const ORANGE_GRAD = "linear-gradient(180deg, oklch(0.76 0.17 58) 0%, oklch(0.66 0.18 42) 100%)";
const ORANGE_GLOW = "oklch(0.72 0.16 55 / 0.55)";
const ORANGE_ACCENT = "oklch(0.76 0.16 58)";

const TV_CSS = `
  @property --tv-angle {
    syntax: '<angle>';
    inherits: true;
    initial-value: 135deg;
  }

  .tv-root {
    width: ${SIDEBAR_W}px;
    flex-shrink: 0;
    min-height: 560px;
    display: flex;
    flex-direction: column;
    border-radius: 16px;
    overflow: hidden;
    position: relative;
    background: ${SOLID_BG};
    box-shadow:
      inset 0 1px 0 rgb(100% 100% 100% / 0.06),
      0 24px 48px -12px rgb(0% 0% 0% / 0.55);
    font-family: ${FD};
    transition: width 280ms cubic-bezier(0.3,0,0,1);
  }

  /* ── Estado colapsado ─────────────────────────────────────────────────── */
  .tv-root--collapsed { width: ${COLLAPSED_W}px; }
  .tv-root--collapsed .tv-nav { padding: 8px 0 0; }
  .tv-root--collapsed .tv-divider { margin: 10px 18px; }

  /* ── Brand area — wordmark ›vmc‹ Subastas ─────────────────────────────── */
  .tv-brand {
    position: relative;
    min-height: 92px;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1px;
    padding: 18px 16px 16px;
    border-bottom: 1px solid rgb(100% 100% 100% / 0.08);
    overflow: hidden;
  }
  
  /* Nota: .tv-brand::after (el resplandor de gradiente) ha sido eliminado completamente para quitar el gradiente del logo */

  .tv-wordmark {
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    gap: 2px;
    font-size: 23px;
    font-weight: 800;
    line-height: 1;
    color: var(--vmc-color-base-white, #fff);
  }
  .tv-wordmark .tv-chev {
    color: oklch(0.80 0.14 195);
    text-shadow: 0 0 10px oklch(0.80 0.14 195 / 0.45);
  }
  .tv-brand-name {
    position: relative; z-index: 1;
    font-size: 17px; font-weight: 700; line-height: 1.15;
    color: rgb(100% 100% 100% / 0.50);
    margin-top: 1px;
  }
  .tv-brand-sub {
    position: relative; z-index: 1;
    font-size: 8px; font-weight: 600; letter-spacing: 0.10em;
    text-transform: uppercase;
    color: rgb(100% 100% 100% / 0.42);
    margin-top: 5px;
  }
  .tv-brand-sub b { color: var(--tv-accent); font-weight: 700; }

  .tv-nav { padding-top: 6px; }
  .tv-nav { padding: 8px 12px 0; }

  /* ── Item base — geometría común ──────────────────────────────────────── */
  .tv-item {
    position: relative;
    display: flex;
    align-items: center;
    gap: 13px;
    height: 48px;
    padding: 0 16px;
    border-radius: 10px;
    cursor: pointer;
    user-select: none;
    overflow: hidden;
    transition: background-color 160ms cubic-bezier(0.3,0,0,1),
                transform 180ms cubic-bezier(0.25,0.8,0.25,1),
                box-shadow 220ms ease;
  }

  /* ── Firma TRACE — la barrita se dibuja de arriba a abajo + contorno neón ─ */
  .tv-item::after {
    content: '';
    position: absolute;
    left: 0; top: 0; bottom: 0;
    width: 3px;
    background-image: var(--tv-grad);
    box-shadow: 0 0 12px var(--tv-glow);
    transform: scaleY(0);
    transform-origin: top;
    transition: transform 360ms cubic-bezier(0.3,0,0,1);
    pointer-events: none;
  }
  .tv-item:hover::after { transform: scaleY(1); }
  
  .tv-item:hover {
    transform: translateX(2px); border-radius: 10px;
    background-color: rgb(100% 100% 100% / 0.06);
    background-image: none;
    box-shadow: none;
  }
  .tv-item:hover .tv-icon { stroke: var(--tv-accent); filter: drop-shadow(0 0 5px var(--tv-glow)); }
  .tv-item:active {
    transform: translateX(2px) scale(0.985);
    box-shadow: inset 0 2px 6px rgb(0% 0% 0% / 0.3);
  }
  .tv-item:focus-visible { outline: 2px solid rgb(100% 100% 100% / 0.55); outline-offset: -2px; }

  /* Rail activo persistente (firma de marca) */
  .tv-item--active {
    border-radius: 10px;
    background-image: linear-gradient(135deg, oklch(0.76 0.17 58) 0%, oklch(0.66 0.18 42) 100%);
    box-shadow: inset 0 0 0 1.5px var(--tv-accent), 0 8px 20px -6px var(--tv-glow), inset 0 1px 0 rgb(100% 100% 100% / 0.25);
  }
  .tv-item--active::before { display: none; }
  .tv-item--active .tv-label { color: var(--vmc-color-base-white, #fff); font-weight: 700; }
  .tv-item--active .tv-icon { stroke: var(--vmc-color-base-white, #fff); filter: drop-shadow(0 1px 2px rgb(0% 0% 0% / 0.3)); }
  .tv-item--active .tv-count { color: var(--vmc-color-base-white, #fff); background: rgb(100% 100% 100% / 0.22); }

  .tv-icon { flex-shrink: 0; transition: transform 200ms cubic-bezier(0.25,0.8,0.25,1), stroke 180ms ease, filter 200ms ease; }
  .tv-label {
    flex: 1;
    font-size: 14px; line-height: 20px;
    color: rgb(100% 100% 100% / 0.82);
    white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
  }
  .tv-label--active { font-weight: 700; color: var(--vmc-color-base-white, #fff); }
  .tv-count {
    font-size: 11px; font-weight: 700;
    padding: 1px 8px; border-radius: 999px;
    color: var(--tv-accent);
    background: color-mix(in oklch, var(--tv-accent) 16%, transparent);
    flex-shrink: 0;
  }

  /* ── Subniveles redondeados (borde 16) ── */
  .tv-subband {
    background-color: rgb(0% 0% 0% / 0.18);
    border-radius: 16px;
    overflow: hidden;
    margin: 4px 0 8px;
    box-shadow: inset 0 0 0 1px rgb(100% 100% 100% / 0.04);
  }
  .tv-sub {
    position: relative;
    display: flex; align-items: center; gap: 8px;
    height: 40px;
    padding: 0 16px 0 49px;
    cursor: pointer;
    transition: background-color 150ms, transform 150ms;
  }
  .tv-sub:hover { background-color: rgb(100% 100% 100% / 0.05); transform: translateX(2px); }
  .tv-sub--active { background-color: rgb(100% 100% 100% / 0.07); }
  .tv-sub--active::before {
    content: '';
    position: absolute;
    left: 0; top: 8px; bottom: 8px;
    width: 3px; border-radius: 0 3px 3px 0;
    background-image: var(--tv-grad);
    box-shadow: 0 0 12px var(--tv-glow), 0 0 4px var(--tv-glow);
  }
  .tv-sub-label {
    flex: 1; font-size: 13px;
    color: rgb(100% 100% 100% / 0.74);
    white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
  }
  .tv-sub--active .tv-sub-label { color: var(--vmc-color-base-white, #fff); font-weight: 600; }
  .tv-sub-count { font-size: 12px; color: rgb(100% 100% 100% / 0.42); flex-shrink: 0; }

  .tv-divider { height: 1px; margin: 10px 16px; background-color: rgb(100% 100% 100% / 0.10); }

  /* ── Slot inferior + banner Subaspass ─────────────────────────────────── */
  .tv-cta-wrap { margin-top: auto; padding: 13px; }

  .tvb {
    position: relative;
    border-radius: 16px; overflow: hidden;
    display: flex; flex-direction: column; justify-content: flex-end;
    padding: 16px; box-sizing: border-box;
    font-family: ${FD};
    color: var(--vmc-color-base-white, #fff);
    background:
      radial-gradient(130% 70% at 50% 8%, oklch(0.34 0.20 290) 0%, transparent 58%),
      linear-gradient(176deg, oklch(0.22 0.18 285) 0%, oklch(0.19 0.15 288) 48%, oklch(0.40 0.16 45) 100%);
    box-shadow: inset 0 1px 0 rgb(100% 100% 100% / 0.08), 0 18px 36px -14px rgb(0% 0% 0% / 0.55);
  }
  .tvb::before {
    content: '';
    position: absolute; left: -20%; bottom: -30%;
    width: 140%; height: 60%;
    background: radial-gradient(60% 60% at 50% 50%, oklch(0.72 0.16 55 / 0.55) 0%, transparent 70%);
    filter: blur(12px); pointer-events: none;
    animation: tv-breathe 5s ease-in-out infinite;
  }
  .tvb-content { position: relative; z-index: 1; display: flex; flex-direction: column; }
  .tvb-eyebrow { font-size: 11px; font-weight: 600; line-height: 1.3; color: rgb(100% 100% 100% / 0.78); margin: 0 0 6px; }
  .tvb-title { font-size: 22px; font-weight: 800; line-height: 1.05; letter-spacing: -0.01em; margin: 0; text-shadow: 0 2px 8px rgb(0% 0% 0% / 0.30); }
  .tvb-desc { font-size: 12px; line-height: 1.4; color: rgb(100% 100% 100% / 0.82); margin: 10px 0 0; }
  .tvb-cta {
    position: relative;
    margin-top: 14px; height: 38px; border: none; border-radius: 10px;
    font-size: 12px; font-weight: 800;
    display: flex; align-items: center; justify-content: center; gap: 6px;
    color: var(--vmc-color-base-white, #fff);
    background-image: var(--tv-grad);
    box-shadow: 0 4px 12px var(--tv-glow);
    cursor: pointer;
    transition: transform 160ms, box-shadow 160ms;
  }
  .tvb-cta:hover { transform: translateY(-1px); box-shadow: 0 6px 16px var(--tv-glow); }
  .tvb-cta:active { transform: translateY(1px); }

  @keyframes tv-breathe {
    0%, 100% { transform: translateX(-50%) scale(1); opacity: 0.38; }
    50% { transform: translateX(-50%) scale(1.08); opacity: 0.46; }
  }

  /* ── Toggle colapsar / expandir — Default · Hover · Pressed ───────────── */
  .tv-toggle {
    position: relative;
    width: 36px; height: 36px; flex-shrink: 0;
    display: flex; align-items: center; justify-content: center;
    border: none; border-radius: 9px; cursor: pointer;
    /* DEFAULT */
    background: rgb(100% 100% 100% / 0.06);
    color: rgb(100% 100% 100% / 0.85);
    transition: background-color 160ms ease, transform 140ms cubic-bezier(0.25,0.8,0.25,1), box-shadow 160ms ease;
  }
  /* HOVER — superficie más clara + glifo direccional en acento naranja */
  .tv-toggle:hover {
    background: rgb(100% 100% 100% / 0.12);
    color: var(--tv-accent);
  }
  /* PRESSED — tinte naranja + hundido */
  .tv-toggle:active {
    transform: scale(0.92);
    background: color-mix(in oklch, var(--tv-accent) 20%, transparent);
    box-shadow: inset 0 2px 6px rgb(0% 0% 0% / 0.30);
  }
  .tv-toggle:focus-visible { outline: 2px solid rgb(100% 100% 100% / 0.55); outline-offset: 2px; }
  .tv-collapse-btn { position: absolute; top: 14px; left: 14px; z-index: 2; }

  /* Swap de glifo: burger en reposo → chevron direccional en hover/pressed */
  .tv-ico { display: flex; align-items: center; justify-content: center; }
  .tv-ico-hover { display: none; }
  .tv-toggle:hover .tv-ico-default,
  .tv-toggle:active .tv-ico-default { display: none; }
  .tv-toggle:hover .tv-ico-hover,
  .tv-toggle:active .tv-ico-hover { display: flex; }

  /* ── Brand colapsado — toggle + marca ›‹ ──────────────────────────────── */
  .tv-brand--mini { gap: 12px; padding: 14px 0 16px; }
  .tv-wordmark--mini { font-size: 20px; gap: 0; }

  /* ── Item colapsado — solo icono, centrado ────────────────────────────── */
  .tv-item--mini {
    width: 48px; height: 48px;
    margin: 4px auto; padding: 0; gap: 0;
    justify-content: center;
  }
  .tv-item--mini:hover { transform: none; }
  .tv-item--mini.tv-item--active { transform: none; }

  /* ── CTA colapsado — botón circular Subaspass ─────────────────────────── */
  .tv-cta-wrap--mini { padding: 13px 0; }
  .tvb-cta-mini {
    width: 48px; height: 48px; margin: 0 auto;
    display: flex; align-items: center; justify-content: center;
    border: none; border-radius: 12px; cursor: pointer;
    color: var(--vmc-color-base-white, #fff);
    background-image: var(--tv-grad);
    box-shadow: 0 4px 12px var(--tv-glow);
    transition: transform 160ms, box-shadow 160ms;
  }
  .tvb-cta-mini:hover { transform: translateY(-1px); box-shadow: 0 6px 16px var(--tv-glow); }
  .tvb-cta-mini:active { transform: translateY(1px); }

  /* ── EJEMPLO (no afecta al colapsado actual): banner como flyout en hover ─ */
  .tv-demo-wrap { position: relative; display: inline-block; }
  .tv-flyout {
    position: absolute;
    left: calc(100% + 12px);
    bottom: 13px;
    width: 240px;
    opacity: 0;
    transform: translateX(-8px);
    pointer-events: none;
    transition: opacity 180ms ease, transform 200ms cubic-bezier(0.3,0,0,1);
    z-index: 30;
    filter: drop-shadow(0 18px 36px rgb(0% 0% 0% / 0.45));
  }
  .tv-flyout::before {
    content: '';
    position: absolute;
    left: -6px; bottom: 24px;
    width: 12px; height: 12px;
    transform: rotate(45deg);
    background: oklch(0.21 0.17 286);
  }
  .tv-demo-wrap:has(.tvb-cta-mini:hover) .tv-flyout,
  .tv-flyout:hover {
    opacity: 1;
    transform: translateX(0);
    pointer-events: auto;
  }
`;

interface SubItem {
  label: string;
  count: number;
}

interface NavEntry {
  label: string;
  sub?: string;
  section?: string;
  total?: number;
  iconPath: string;
  children?: SubItem[];
}

const NAV: NavEntry[] = [
  { label: "Hoy", sub: "Resumen del día", total: 40, iconPath: "M8 2v2M16 2v2M3 8h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" },
  {
    label: "Tipo de oferta", sub: "En vivo · Negociable", total: 40,
    iconPath: "M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82zM7 7h.01",
    children: [
      { label: "En vivo", count: 38 },
      { label: "Negociable", count: 2 },
    ],
  },
  {
    label: "Categorías", sub: "Equipos · Vehicular · Mobiliario", total: 40,
    iconPath: "M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z",
    children: [
      { label: "Equipos diversos", count: 4 },
      { label: "Vehicular", count: 35 },
      { label: "Mobiliario", count: 1 },
    ],
  },
  {
    label: "Empresas", sub: "9 casas de subasta", total: 31,
    iconPath: "M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2M10 6h4M10 10h4M10 14h4M10 18h4",
    children: [
      { label: "Autoplan", count: 6 },
      { label: "Maquisistema", count: 7 },
      { label: "Pacífico", count: 6 },
      { label: "Pandero Seminuevos", count: 12 },
    ],
  },
  { label: "Centro de ayuda", sub: "Soporte y dudas", section: "Soporte", iconPath: "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3M12 17h.01" },
];

const ENERGETIC_ICONS: Record<string, string> = {
  "Hoy":             "M13 2L3 14h9l-1 8 10-12h-9z",
  "Tipo de oferta":  "M19 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2M21 12h-5a2 2 0 0 0 0 4h5a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1zM3 7h16",
  "Categorías":      "M6 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM18 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",
  "Empresas":        "M3 21h18M3 10h18M5 6l7-3 7 3M5 10v11M19 10v11M9 14v3M15 14v3",
  "Centro de ayuda": "M7.9 20A9 9 0 1 0 4 16.1L2 22zM9.5 9a2.5 2.5 0 0 1 4.9.6c0 2-2.4 2-2.4 3.4M12 17h.01",
};

function iconFor(label: string, fallback: string): string {
  if (ENERGETIC_ICONS[label] !== undefined) { return ENERGETIC_ICONS[label]; }
  return fallback;
}

interface IconProps { path: string; active: boolean }
function NavIcon({ path, active }: IconProps): JSX.Element {
  let stroke = "rgb(255 255 255 / 0.62)";
  if (active) { stroke = "var(--vmc-color-base-white, #fff)"; }
  return (
    <svg className="tv-icon" width="20" height="20" viewBox="0 0 24 24" fill="none"
      stroke={stroke} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d={path} />
    </svg>
  );
}

function ChevronIcon({ open }: { open: boolean }): JSX.Element {
  let transform = "rotate(0deg)";
  if (open) { transform = "rotate(90deg)"; }
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
      stroke="rgb(255 255 255 / 0.42)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      style={{ transition: "transform 160ms cubic-bezier(0.3,0,0,1)", transform, flexShrink: 0 }}>
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}

function MenuIcon(): JSX.Element {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M3 12h18M3 6h18M3 18h18" />
    </svg>
  );
}

function ExpandIcon(): JSX.Element {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M13 17l5-5-5-5M6 17l5-5-5-5" />
    </svg>
  );
}

function CollapseIcon(): JSX.Element {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M11 17l-5-5 5-5M18 17l-5-5 5-5" />
    </svg>
  );
}

interface ToggleButtonProps {
  className: string;
  ariaLabel: string;
  hoverIcon: JSX.Element;
  onClick: () => void;
}
function ToggleButton({ className, ariaLabel, hoverIcon, onClick }: ToggleButtonProps): JSX.Element {
  return (
    <button type="button" className={className} onClick={onClick} aria-label={ariaLabel} title={ariaLabel}>
      <span className="tv-ico tv-ico-default"><MenuIcon /></span>
      <span className="tv-ico tv-ico-hover">{hoverIcon}</span>
    </button>
  );
}

function ArrowIcon(): JSX.Element {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function SubaspassBanner({ height }: { height: number }): JSX.Element {
  let showDesc = true;
  if (height < 280) { showDesc = false; }
  return (
    <div className="tvb" style={{ height }}>
      <div className="tvb-content">
        <p className="tvb-eyebrow">¿Te tienta el riesgo alto?</p>
        <h3 className="tvb-title">Compra Subaspass</h3>
        {showDesc && <p className="tvb-desc">Participa sin consignar y sin restricciones.</p>}
        <button type="button" className="tvb-cta">Comprar ahora <ArrowIcon /></button>
      </div>
    </div>
  );
}

/* ───────────────────────────────────────────────────────────────────────────
   Export SVG — reconstrucción vectorial del sidebar para llevar a Figma.
   Genera rects/text/paths reales (no foreignObject) → Figma los importa
   como capas editables al pegar el markup o abrir el archivo.
   Geometría espejada del render estático (active=Empresas, sub=Autoplan).
   Los HEX aquí son SOLO para el archivo SVG exportado, no para la UI.
   ─────────────────────────────────────────────────────────────────────────── */

const SVG_VIEW = { w: 240, h: 880 };

function svgIconMarkup(path: string, x: number, y: number, size: number, stroke: string, opacity: number): string {
  const scale = size / 24;
  return `<g transform="translate(${x},${y}) scale(${scale})" fill="none" stroke="${stroke}" stroke-opacity="${opacity}" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="${path}"/></g>`;
}

function svgChevronMarkup(x: number, y: number, open: boolean): string {
  const scale = 14 / 24;
  let rot = "";
  if (open) { rot = " rotate(90,12,12)"; }
  return `<g transform="translate(${x},${y}) scale(${scale})${rot}" fill="none" stroke="#FFFFFF" stroke-opacity="0.42" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></g>`;
}

function svgCountPill(id: string, x: number, y: number, n: number, active: boolean): string {
  let bg = "#F2941F";
  let bgOp = "0.16";
  let tx = "#F2941F";
  if (active) { bg = "#FFFFFF"; bgOp = "0.22"; tx = "#FFFFFF"; }
  return `<g id="${id}"><rect id="${id}-bg" x="${x}" y="${y}" width="22" height="18" rx="9" fill="${bg}" fill-opacity="${bgOp}"/><text id="${id}-num" x="${x + 11}" y="${y + 13}" font-family="Plus Jakarta Sans, sans-serif" font-size="11" font-weight="700" fill="${tx}" text-anchor="middle">${n}</text></g>`;
}

function svgSlug(label: string): string {
  const base = label.normalize("NFD").replace(/[̀-ͯ]/g, "");
  return base.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

/* Paleta de exportación (solo para el archivo SVG, no para la UI) */
const SVG_ACCENT = "#F2941F";
const SVG_BANNER_H = 320;

interface ExportState {
  id: string;
  title: string;
  active: string | null;
  hover: string | null;
  open: string[];
  activeSub: string | null;
}

const EXPORT_STATES: ExportState[] = [
  { id: "default", title: "Default", active: "Hoy", hover: null, open: [], activeSub: null },
  { id: "hover", title: "Hover", active: "Hoy", hover: "Categorías", open: [], activeSub: null },
  { id: "active", title: "Active", active: "Empresas", hover: null, open: [], activeSub: null },
  { id: "desplegado", title: "Desplegado", active: "Empresas", hover: null, open: ["Empresas"], activeSub: "Autoplan" },
];

const SVG_DEFS = [
  `<linearGradient id="tvOrange" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#F5921E"/><stop offset="1" stop-color="#E15F2B"/></linearGradient>`,
  `<linearGradient id="tvBanner" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3B1A7A"/><stop offset="0.5" stop-color="#241059"/><stop offset="1" stop-color="#6E3E2A"/></linearGradient>`,
  `<filter id="tvGlow" x="-60%" y="-60%" width="220%" height="220%"><feGaussianBlur stdDeviation="2.5"/></filter>`,
].join("");

function buildBrandMarkup(): string {
  return [
    `<g id="Brand">`,
    `<text id="Brand-Wordmark" x="120" y="48" font-family="Plus Jakarta Sans, sans-serif" font-size="23" font-weight="800" text-anchor="middle"><tspan fill="#2BD4D9">›</tspan><tspan fill="#FFFFFF">vmc</tspan><tspan fill="#2BD4D9">‹</tspan></text>`,
    `<text id="Brand-Nombre" x="120" y="68" font-family="Plus Jakarta Sans, sans-serif" font-size="17" font-weight="700" fill="#FFFFFF" fill-opacity="0.5" text-anchor="middle">Subastas</text>`,
    `<text id="Brand-Sub" x="120" y="82" font-family="Plus Jakarta Sans, sans-serif" font-size="8" font-weight="600" letter-spacing="0.8" text-anchor="middle" fill="#FFFFFF" fill-opacity="0.42">POWERED BY <tspan fill="#F2941F" font-weight="700">SUBASTOP.CO</tspan></text>`,
    `<line id="Brand-Divisor" x1="0" y1="92" x2="240" y2="92" stroke="#FFFFFF" stroke-opacity="0.08"/>`,
    `</g>`,
  ].join("");
}

function buildItemMarkup(entry: NavEntry, y: number, state: ExportState): string {
  const slug = svgSlug(entry.label);
  const isActive = state.active === entry.label;
  const isHover = state.hover === entry.label;
  const isOpen = state.open.includes(entry.label);
  const parts: string[] = [];

  let shift = "";
  if (isHover) { shift = ` transform="translate(2,0)"`; }
  parts.push(`<g id="Item-${slug}"${shift}>`);

  if (isActive) {
    parts.push(`<rect id="Item-${slug}-fondo" x="12" y="${y}" width="216" height="48" rx="10" fill="url(#tvOrange)"/>`);
  }
  if (isHover) {
    parts.push(`<rect id="Item-${slug}-hover-bg" x="12" y="${y}" width="216" height="48" rx="10" fill="#FFFFFF" fill-opacity="0.06"/>`);
    parts.push(`<rect id="Item-${slug}-trace-glow" x="12" y="${y}" width="3" height="48" fill="${SVG_ACCENT}" filter="url(#tvGlow)"/>`);
    parts.push(`<rect id="Item-${slug}-trace" x="12" y="${y}" width="3" height="48" rx="1.5" fill="url(#tvOrange)"/>`);
  }

  let iconStroke = "#FFFFFF";
  let iconOp = 0.62;
  let labelOp = 0.82;
  let labelWeight = 500;
  if (isHover) { iconStroke = SVG_ACCENT; iconOp = 1; labelOp = 1; }
  if (isActive) { iconStroke = "#FFFFFF"; iconOp = 1; labelOp = 1; labelWeight = 700; }

  const iconPath = iconFor(entry.label, entry.iconPath);
  parts.push(`<g id="Item-${slug}-icono">${svgIconMarkup(iconPath, 28, y + 14, 20, iconStroke, iconOp)}</g>`);
  parts.push(`<text id="Item-${slug}-label" x="61" y="${y + 29}" font-family="Plus Jakarta Sans, sans-serif" font-size="14" font-weight="${labelWeight}" fill="#FFFFFF" fill-opacity="${labelOp}">${entry.label}</text>`);

  if (entry.children !== undefined) {
    parts.push(svgCountPill(`Item-${slug}-count`, 168, y + 15, entry.children.length, isActive));
    parts.push(`<g id="Item-${slug}-chevron">${svgChevronMarkup(198, y + 17, isOpen)}</g>`);
  }
  parts.push(`</g>`);
  return parts.join("");
}

function buildSubbandMarkup(entry: NavEntry, bandY: number, state: ExportState, clipId: string): string {
  const children = entry.children!;
  const bandH = children.length * 40;
  const parts: string[] = [];
  parts.push(`<clipPath id="${clipId}"><rect x="12" y="${bandY}" width="216" height="${bandH}" rx="16"/></clipPath>`);
  parts.push(`<g id="Subniveles-${svgSlug(entry.label)}">`);
  parts.push(`<rect id="Subniveles-fondo" x="12" y="${bandY}" width="216" height="${bandH}" rx="16" fill="#000000" fill-opacity="0.18"/>`);

  parts.push(`<g id="Subniveles-resaltados" clip-path="url(#${clipId})">`);
  let hi = 0;
  for (const sub of children) {
    const subY = bandY + hi * 40;
    if (state.activeSub === sub.label) {
      const subSlug = svgSlug(sub.label);
      parts.push(`<rect id="Sub-${subSlug}-resaltado" x="12" y="${subY}" width="216" height="40" fill="#FFFFFF" fill-opacity="0.07"/>`);
      parts.push(`<rect id="Sub-${subSlug}-acento" x="12" y="${subY + 8}" width="3" height="24" rx="1.5" fill="url(#tvOrange)"/>`);
    }
    hi += 1;
  }
  parts.push(`</g>`);

  let li = 0;
  for (const sub of children) {
    const subY = bandY + li * 40;
    const subSlug = svgSlug(sub.label);
    let lblOp = 0.74;
    let lblWeight = 400;
    if (state.activeSub === sub.label) { lblOp = 1; lblWeight = 600; }
    parts.push(`<g id="Sub-${subSlug}">`);
    parts.push(`<text id="Sub-${subSlug}-label" x="61" y="${subY + 25}" font-family="Plus Jakarta Sans, sans-serif" font-size="13" font-weight="${lblWeight}" fill="#FFFFFF" fill-opacity="${lblOp}">${sub.label}</text>`);
    parts.push(`<text id="Sub-${subSlug}-count" x="212" y="${subY + 25}" font-family="Plus Jakarta Sans, sans-serif" font-size="12" fill="#FFFFFF" fill-opacity="0.42" text-anchor="end">(${sub.count})</text>`);
    parts.push(`</g>`);
    li += 1;
  }
  parts.push(`</g>`);
  return parts.join("");
}

function buildBannerMarkup(bannerY: number): string {
  const titleY = bannerY + 204;
  return [
    `<g id="Banner-Subaspass">`,
    `<rect id="Banner-fondo" x="13" y="${bannerY}" width="214" height="${SVG_BANNER_H}" rx="16" fill="url(#tvBanner)"/>`,
    `<text id="Banner-eyebrow" x="29" y="${titleY - 30}" font-family="Plus Jakarta Sans, sans-serif" font-size="11" font-weight="600" fill="#FFFFFF" fill-opacity="0.78">¿Te tienta el riesgo alto?</text>`,
    `<text id="Banner-titulo" x="29" y="${titleY}" font-family="Plus Jakarta Sans, sans-serif" font-size="22" font-weight="800" fill="#FFFFFF">Compra Subaspass</text>`,
    `<text id="Banner-desc-1" x="29" y="${titleY + 26}" font-family="Plus Jakarta Sans, sans-serif" font-size="12" fill="#FFFFFF" fill-opacity="0.82">Participa sin consignar</text>`,
    `<text id="Banner-desc-2" x="29" y="${titleY + 42}" font-family="Plus Jakarta Sans, sans-serif" font-size="12" fill="#FFFFFF" fill-opacity="0.82">y sin restricciones.</text>`,
    `<g id="Banner-cta">`,
    `<rect id="Banner-cta-fondo" x="29" y="${titleY + 62}" width="182" height="38" rx="10" fill="url(#tvOrange)"/>`,
    `<text id="Banner-cta-label" x="120" y="${titleY + 86}" font-family="Plus Jakarta Sans, sans-serif" font-size="12" font-weight="800" fill="#FFFFFF" text-anchor="middle">Comprar ahora  →</text>`,
    `</g>`,
    `</g>`,
  ].join("");
}

/* Cuerpo del sidebar para un estado dado — layout dinámico (el desplegado
   empuja los items inferiores). Devuelve markup relativo a (0,0) + alto total. */
function buildSidebarBody(state: ExportState): { markup: string; height: number } {
  const parts: string[] = [];
  parts.push(buildBrandMarkup());
  parts.push(`<g id="Nav">`);

  let y = 100;
  for (const entry of NAV) {
    if (entry.section !== undefined) {
      parts.push(`<line id="Nav-Divisor" x1="12" y1="${y + 10}" x2="228" y2="${y + 10}" stroke="#FFFFFF" stroke-opacity="0.10"/>`);
      y += 21;
    }
    parts.push(buildItemMarkup(entry, y, state));
    y += 48;
    const isOpen = state.open.includes(entry.label) && entry.children !== undefined;
    if (isOpen) {
      y += 4;
      const clipId = `band-${state.id}-${svgSlug(entry.label)}`;
      parts.push(buildSubbandMarkup(entry, y, state, clipId));
      y += entry.children!.length * 40;
      y += 8;
    }
  }
  parts.push(`</g>`);

  const bannerY = y + 13;
  parts.push(buildBannerMarkup(bannerY));
  const height = bannerY + SVG_BANNER_H + 13;

  const bg = `<rect id="Fondo" x="0" y="0" width="${SVG_VIEW.w}" height="${height}" rx="16" fill="#2E0F70"/>`;
  return { markup: bg + parts.join(""), height };
}

function buildStateSvg(state: ExportState): string {
  const body = buildSidebarBody(state);
  return [
    `<svg xmlns="http://www.w3.org/2000/svg" width="${SVG_VIEW.w}" height="${body.height}" viewBox="0 0 ${SVG_VIEW.w} ${body.height}" fill="none">`,
    `<defs>${SVG_DEFS}</defs>`,
    `<g id="Sidebar-${state.title}">${body.markup}</g>`,
    `</svg>`,
  ].join("");
}

/* ───────────────────────────────────────────────────────────────────────────
   Export SVG — estado COLAPSADO (76px). Espejo vectorial del render mini.
   Geometría: item 48×48 centrado (x=14), pitch 56, brand toggle + marca ›‹.
   Active = "Empresas" para igualar el default del componente.
   ─────────────────────────────────────────────────────────────────────────── */

const COLLAPSED_VIEW = { w: COLLAPSED_W };
const COLLAPSED_ACTIVE = "Empresas";

function buildCollapsedBrand(): string {
  const tx = (COLLAPSED_W - 36) / 2;
  return [
    `<g id="Brand-mini">`,
    `<rect id="Brand-toggle-bg" x="${tx}" y="16" width="36" height="36" rx="9" fill="#FFFFFF" fill-opacity="0.06"/>`,
    `<g transform="translate(${tx + 8},24) scale(${20 / 24})" fill="none" stroke="#FFFFFF" stroke-opacity="0.85" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12h18M3 6h18M3 18h18"/></g>`,
    `<text id="Brand-marca" x="${COLLAPSED_W / 2}" y="78" font-family="Plus Jakarta Sans, sans-serif" font-size="20" font-weight="800" text-anchor="middle"><tspan fill="#2BD4D9">›</tspan><tspan fill="#2BD4D9">‹</tspan></text>`,
    `<line id="Brand-divisor" x1="0" y1="92" x2="${COLLAPSED_W}" y2="92" stroke="#FFFFFF" stroke-opacity="0.08"/>`,
    `</g>`,
  ].join("");
}

function buildCollapsedItem(entry: NavEntry, y: number): string {
  const slug = svgSlug(entry.label);
  const isActive = COLLAPSED_ACTIVE === entry.label;
  const parts: string[] = [];
  parts.push(`<g id="Item-mini-${slug}">`);
  if (isActive) {
    parts.push(`<rect id="Item-mini-${slug}-fondo" x="14" y="${y}" width="48" height="48" rx="10" fill="url(#tvOrange)"/>`);
  }
  let iconStroke = "#FFFFFF";
  let iconOp = 0.62;
  if (isActive) { iconOp = 1; }
  const iconPath = iconFor(entry.label, entry.iconPath);
  parts.push(`<g id="Item-mini-${slug}-icono">${svgIconMarkup(iconPath, 28, y + 14, 20, iconStroke, iconOp)}</g>`);
  parts.push(`</g>`);
  return parts.join("");
}

function buildCollapsedBody(): { markup: string; height: number } {
  const parts: string[] = [];
  parts.push(buildCollapsedBrand());
  parts.push(`<g id="Nav-mini">`);

  let y = 100;
  for (const entry of NAV) {
    if (entry.section !== undefined) {
      parts.push(`<line id="Nav-mini-divisor" x1="18" y1="${y + 10}" x2="${COLLAPSED_W - 18}" y2="${y + 10}" stroke="#FFFFFF" stroke-opacity="0.10"/>`);
      y += 21;
    }
    parts.push(buildCollapsedItem(entry, y));
    y += 56;
  }
  parts.push(`</g>`);

  const ctaY = y + 5;
  parts.push(`<g id="CTA-mini">`);
  parts.push(`<rect id="CTA-mini-fondo" x="14" y="${ctaY}" width="48" height="48" rx="12" fill="url(#tvOrange)"/>`);
  parts.push(`<g transform="translate(${COLLAPSED_W / 2 - 7},${ctaY + 17}) scale(${14 / 24})" fill="none" stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></g>`);
  parts.push(`</g>`);

  const height = ctaY + 48 + 13;
  const bg = `<rect id="Fondo" x="0" y="0" width="${COLLAPSED_W}" height="${height}" rx="16" fill="#2E0F70"/>`;
  return { markup: bg + parts.join(""), height };
}

function buildCollapsedSvg(): string {
  const body = buildCollapsedBody();
  return [
    `<svg xmlns="http://www.w3.org/2000/svg" width="${COLLAPSED_VIEW.w}" height="${body.height}" viewBox="0 0 ${COLLAPSED_VIEW.w} ${body.height}" fill="none">`,
    `<defs>${SVG_DEFS}</defs>`,
    `<g id="Sidebar-Colapsado">${body.markup}</g>`,
    `</svg>`,
  ].join("");
}

/* Hoja con todos los estados lado a lado, cada uno como frame con nombre. */
function buildStatesSheetSvg(): string {
  const gap = 80;
  const labelH = 36;
  const bodies: { state: ExportState; markup: string; height: number }[] = [];
  for (const state of EXPORT_STATES) {
    const body = buildSidebarBody(state);
    bodies.push({ state, markup: body.markup, height: body.height });
  }

  let maxH = 0;
  for (const b of bodies) {
    if (b.height > maxH) { maxH = b.height; }
  }

  const totalW = bodies.length * SVG_VIEW.w + (bodies.length + 1) * gap;
  const totalH = labelH + maxH + gap * 2;

  const parts: string[] = [];
  parts.push(`<svg xmlns="http://www.w3.org/2000/svg" width="${totalW}" height="${totalH}" viewBox="0 0 ${totalW} ${totalH}" fill="none">`);
  parts.push(`<defs>${SVG_DEFS}</defs>`);
  parts.push(`<rect x="0" y="0" width="${totalW}" height="${totalH}" fill="#0C0A1C"/>`);

  let bi = 0;
  for (const b of bodies) {
    const x = gap + bi * (SVG_VIEW.w + gap);
    parts.push(`<g id="Estado-${b.state.title}">`);
    parts.push(`<text id="Estado-${b.state.title}-titulo" x="${x}" y="${gap - 4}" font-family="Plus Jakarta Sans, sans-serif" font-size="15" font-weight="800" fill="#FFFFFF">${b.state.title}</text>`);
    parts.push(`<g transform="translate(${x},${gap})">${b.markup}</g>`);
    parts.push(`</g>`);
    bi += 1;
  }

  parts.push(`</svg>`);
  return parts.join("");
}

function downloadSvg(svg: string, fileName: string): void {
  const blob = new Blob([svg], { type: "image/svg+xml" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = fileName;
  link.click();
  URL.revokeObjectURL(url);
}

function SvgExportPanel(): JSX.Element {
  const [copied, setCopied] = useState<boolean>(false);

  function resetCopied(): void {
    setCopied(false);
  }

  function handleCopySheet(): void {
    const svg = buildStatesSheetSvg();
    async function writeClip(): Promise<void> {
      await navigator.clipboard.writeText(svg);
      setCopied(true);
      window.setTimeout(resetCopied, 2000);
    }
    void writeClip();
  }

  function handleDownloadSheet(): void {
    downloadSvg(buildStatesSheetSvg(), "sidebar-solid-estados.svg");
  }

  function handleDownloadCollapsed(): void {
    downloadSvg(buildCollapsedSvg(), "sidebar-solid-colapsado.svg");
  }

  const stateButtons: JSX.Element[] = [];
  for (const state of EXPORT_STATES) {
    function handleStateDownload(): void {
      downloadSvg(buildStateSvg(state), `sidebar-solid-${state.id}.svg`);
    }
    stateButtons.push(
      <button
        key={state.id}
        type="button"
        onClick={handleStateDownload}
        style={{
          height: 36,
          padding: "0 16px",
          borderRadius: 10,
          cursor: "pointer",
          fontFamily: FD,
          fontSize: 13,
          fontWeight: 700,
          color: "rgb(255 255 255 / 0.85)",
          background: "transparent",
          border: "1px solid rgb(255 255 255 / 0.22)",
        }}
      >
        {state.title}
      </button>
    );
  }

  let copyLabel = "Copiar hoja (4 estados)";
  if (copied) { copyLabel = "¡Copiado!"; }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12, alignItems: "center", marginTop: 22 }}>
      <div style={{ display: "flex", gap: 8, justifyContent: "center", flexWrap: "wrap" }}>
        <button
          type="button"
          onClick={handleCopySheet}
          style={{
            height: 36,
            padding: "0 18px",
            borderRadius: 10,
            border: "none",
            cursor: "pointer",
            fontFamily: FD,
            fontSize: 13,
            fontWeight: 800,
            color: "#fff",
            backgroundImage: ORANGE_GRAD,
            boxShadow: `0 4px 12px ${ORANGE_GLOW}`,
          }}
        >
          {copyLabel}
        </button>
        <button
          type="button"
          onClick={handleDownloadSheet}
          style={{
            height: 36,
            padding: "0 18px",
            borderRadius: 10,
            cursor: "pointer",
            fontFamily: FD,
            fontSize: 13,
            fontWeight: 700,
            color: "rgb(255 255 255 / 0.82)",
            background: "transparent",
            border: "1px solid rgb(255 255 255 / 0.22)",
          }}
        >
          Descargar hoja
        </button>
        <button
          type="button"
          onClick={handleDownloadCollapsed}
          style={{
            height: 36,
            padding: "0 18px",
            borderRadius: 10,
            cursor: "pointer",
            fontFamily: FD,
            fontSize: 13,
            fontWeight: 700,
            color: "rgb(255 255 255 / 0.82)",
            background: "transparent",
            border: "1px solid rgb(255 255 255 / 0.22)",
          }}
        >
          Descargar colapsado
        </button>
      </div>
      <div style={{ display: "flex", gap: 8, justifyContent: "center", flexWrap: "wrap", alignItems: "center" }}>
        <span style={{ fontFamily: FD, fontSize: 12, fontWeight: 600, color: "rgb(255 255 255 / 0.5)" }}>
          Estado individual:
        </span>
        {stateButtons}
      </div>
    </div>
  );
}

function TraceSolidSidebar(): JSX.Element {
  const [active, setActive] = useState<string>("Empresas");
  const [activeSub, setActiveSub] = useState<string | null>("Autoplan");
  const [open, setOpen] = useState<Set<string>>(new Set(["Empresas"]));
  const [collapsed, setCollapsed] = useState<boolean>(false);

  function handleToggleCollapse(): void {
    setCollapsed(function flip(prev) { return !prev; });
  }

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
    "--tv-bg": SOLID_BG,
    "--tv-grad": ORANGE_GRAD,
    "--tv-glow": ORANGE_GLOW,
    "--tv-accent": ORANGE_ACCENT,
  } as CSSProperties;

  function itemClassName(isActive: boolean): string {
    if (isActive) { return "tv-item tv-item--active"; }
    return "tv-item";
  }
  function labelClassName(isActive: boolean): string {
    if (isActive) { return "tv-label tv-label--active"; }
    return "tv-label";
  }
  function subClassName(isActive: boolean): string {
    if (isActive) { return "tv-sub tv-sub--active"; }
    return "tv-sub";
  }
  function miniClassName(isActive: boolean): string {
    if (isActive) { return "tv-item tv-item--mini tv-item--active"; }
    return "tv-item tv-item--mini";
  }

  function renderMiniEntry(entry: NavEntry): JSX.Element {
    const isActive = active === entry.label;
    return (
      <div key={entry.label}>
        {entry.section !== undefined && <div className="tv-divider" />}
        <div
          className={miniClassName(isActive)}
          role="button" tabIndex={0}
          title={entry.label} aria-label={entry.label}
          onClick={function onClick() { handleSelect(entry); }}
        >
          <NavIcon path={iconFor(entry.label, entry.iconPath)} active={isActive} />
        </div>
      </div>
    );
  }

  function renderItemInner(entry: NavEntry, isActive: boolean): JSX.Element {
    const iconPath = iconFor(entry.label, entry.iconPath);
    return (
      <>
        <NavIcon path={iconPath} active={isActive} />
        <span className={labelClassName(isActive)}>{entry.label}</span>
        {entry.children !== undefined && <span className="tv-count">{entry.children.length}</span>}
        {entry.children !== undefined && <ChevronIcon open={open.has(entry.label)} />}
      </>
    );
  }

  function renderEntry(entry: NavEntry): JSX.Element {
    const isActive = active === entry.label;
    const showChildren = entry.children !== undefined && open.has(entry.label);
    return (
      <div key={entry.label}>
        {entry.section !== undefined && <div className="tv-divider" />}

        <div
          className={itemClassName(isActive)}
          role="button" tabIndex={0}
          onClick={function onClick() { handleSelect(entry); }}
        >
          {renderItemInner(entry, isActive)}
        </div>

        {showChildren && (
          <div className="tv-subband">
            {entry.children!.map(function renderSub(sub) {
              const subActive = activeSub === sub.label;
              return (
                <div
                  key={sub.label}
                  className={subClassName(subActive)}
                  role="button" tabIndex={0}
                  onClick={function onSubClick() { handleSelectSub(sub.label); }}
                >
                  <span className="tv-sub-label">{sub.label}</span>
                  <span className="tv-sub-count">({sub.count})</span>
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }

  if (collapsed) {
    return (
      <aside className="tv-root tv-root--collapsed" style={rootStyle} aria-label="Navegación principal">
        <div className="tv-brand tv-brand--mini">
          <ToggleButton
            className="tv-toggle"
            ariaLabel="Expandir menú"
            hoverIcon={<ExpandIcon />}
            onClick={handleToggleCollapse}
          />
          <div className="tv-wordmark tv-wordmark--mini">
            <span className="tv-chev">›</span>
            <span className="tv-chev">‹</span>
          </div>
        </div>

        <nav className="tv-nav" aria-label="Menú principal">
          {NAV.map(renderMiniEntry)}
        </nav>

        <div className="tv-cta-wrap tv-cta-wrap--mini">
          <button type="button" className="tvb-cta-mini" aria-label="Compra Subaspass" title="Compra Subaspass">
            <ArrowIcon />
          </button>
        </div>
      </aside>
    );
  }

  return (
    <aside className="tv-root" style={rootStyle} aria-label="Navegación principal">
      <ToggleButton
        className="tv-toggle tv-collapse-btn"
        ariaLabel="Colapsar menú"
        hoverIcon={<CollapseIcon />}
        onClick={handleToggleCollapse}
      />

      <div className="tv-brand">
        <div className="tv-wordmark">
          <span className="tv-chev">›</span>
          <span>vmc</span>
          <span className="tv-chev">‹</span>
        </div>
        <span className="tv-brand-name">Subastas</span>
        <span className="tv-brand-sub">powered by <b>SUBASTOP.Co</b></span>
      </div>

      <nav className="tv-nav" aria-label="Menú principal">
        {NAV.map(renderEntry)}
      </nav>

      <div className="tv-cta-wrap">
        <SubaspassBanner height={320} />
      </div>
    </aside>
  );
}

/* ───────────────────────────────────────────────────────────────────────────
   EJEMPLO — propuesta de banner colapsado (hover flyout).
   NO reemplaza el colapsado actual; se muestra al lado como referencia.
   El CTA mini es el ancla; al hover revela el banner completo a la derecha.
   ─────────────────────────────────────────────────────────────────────────── */

const ROOT_STYLE = {
  "--tv-bg": SOLID_BG,
  "--tv-grad": ORANGE_GRAD,
  "--tv-glow": ORANGE_GLOW,
  "--tv-accent": ORANGE_ACCENT,
} as CSSProperties;

function noop(): void {}

function ExampleMiniNav(): JSX.Element {
  const items: JSX.Element[] = [];
  for (const entry of NAV) {
    const isActive = entry.label === "Empresas";
    let cls = "tv-item tv-item--mini";
    if (isActive) { cls = "tv-item tv-item--mini tv-item--active"; }
    const item = (
      <div className={cls} role="button" tabIndex={0} title={entry.label} aria-label={entry.label}>
        <NavIcon path={iconFor(entry.label, entry.iconPath)} active={isActive} />
      </div>
    );
    if (entry.section !== undefined) {
      items.push(<div key={entry.label}><div className="tv-divider" />{item}</div>);
    } else {
      items.push(<div key={entry.label}>{item}</div>);
    }
  }
  return <nav className="tv-nav" aria-label="Menú ejemplo">{items}</nav>;
}

function CollapsedBannerExample(): JSX.Element {
  return (
    <div className="tv-demo-wrap" style={ROOT_STYLE}>
      <aside className="tv-root tv-root--collapsed" aria-label="Ejemplo · sidebar colapsado">
        <div className="tv-brand tv-brand--mini">
          <ToggleButton className="tv-toggle" ariaLabel="Expandir menú" hoverIcon={<ExpandIcon />} onClick={noop} />
          <div className="tv-wordmark tv-wordmark--mini">
            <span className="tv-chev">›</span>
            <span className="tv-chev">‹</span>
          </div>
        </div>

        <ExampleMiniNav />

        <div className="tv-cta-wrap tv-cta-wrap--mini">
          <button type="button" className="tvb-cta-mini" aria-label="Compra Subaspass" title="Compra Subaspass">
            <ArrowIcon />
          </button>
        </div>
      </aside>

      <div className="tv-flyout">
        <SubaspassBanner height={300} />
      </div>
    </div>
  );
}

export default function SidebarSolidPage(): JSX.Element {
  return (
    <main style={{ background: "var(--vmc-color-background-secondary, #0c0a1c)", minHeight: "100vh", padding: "40px 32px", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <style>{TV_CSS}</style>

      <div style={{ maxWidth: 1180, width: "100%", margin: "0 auto 40px", textAlign: "center" }}>
        <h1 style={{ fontFamily: FD, fontSize: 24, fontWeight: 800, margin: "0 0 8px", color: "var(--vmc-color-text-primary, #fff)" }}>
          Sidebar · Solid Custom
        </h1>
        <p style={{ fontFamily: FD, fontSize: 14, color: "var(--vmc-color-text-tertiary, #8b8a9f)", margin: 0, maxWidth: 600, marginLeft: "auto", marginRight: "auto" }}>
          Propuesta adaptada a partir de <b>Variación 9 · Trace · Solid</b>.
          Fondo sólido <b>#2E0F70</b>, sin gradiente en el logo superior, y subbandas desplegables con esquinas redondeadas de <b>borde 16</b>.
        </p>
        <SvgExportPanel />
      </div>

      <div style={{ display: "flex", justifyContent: "center", alignItems: "flex-start", padding: "20px 0" }}>
        <TraceSolidSidebar />
      </div>

      <div style={{ width: "100%", maxWidth: 1180, margin: "48px auto 0", textAlign: "center" }}>
        <h2 style={{ fontFamily: FD, fontSize: 18, fontWeight: 800, margin: "0 0 6px", color: "var(--vmc-color-text-primary, #fff)" }}>
          Ejemplo · Banner en colapsado (hover flyout)
        </h2>
        <p style={{ fontFamily: FD, fontSize: 13, color: "var(--vmc-color-text-tertiary, #8b8a9f)", margin: "0 0 28px", maxWidth: 560, marginLeft: "auto", marginRight: "auto" }}>
          Propuesta — <b>no reemplaza el actual</b>. A 76px el CTA naranja es el ancla;
          al pasar el mouse revela el banner completo como panel flotante a la derecha.
        </p>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "flex-start", padding: "20px 0 120px" }}>
          <CollapsedBannerExample />
        </div>
      </div>
    </main>
  );
}
