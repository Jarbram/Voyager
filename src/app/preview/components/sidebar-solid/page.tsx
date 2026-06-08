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
  }

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

function TraceSolidSidebar(): JSX.Element {
  const [active, setActive] = useState<string>("Empresas");
  const [activeSub, setActiveSub] = useState<string | null>("Autoplan");
  const [open, setOpen] = useState<Set<string>>(new Set(["Empresas"]));

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

  return (
    <aside className="tv-root" style={rootStyle} aria-label="Navegación principal">
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
      </div>

      <div style={{ display: "flex", justifyContent: "center", alignItems: "flex-start", padding: "20px 0" }}>
        <TraceSolidSidebar />
      </div>
    </main>
  );
}
