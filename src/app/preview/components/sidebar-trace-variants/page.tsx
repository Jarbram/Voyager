"use client";

import { useState } from "react";
import type { CSSProperties, JSX } from "react";

/* ───────────────────────────────────────────────────────────────────────────
   Sidebar · Variaciones de LAYOUT sobre "Mix · Trace"
   Base (ADN heredado de /preview/components/sidebar-gamble → Variación 2):
     · Fondo Vault-dark #2E0F70 = oklch(0.26 0.19 285)
     · Acento orange de marca · efecto en lenguaje Button Primary
     · Firma Trace = la barrita se dibuja de arriba a abajo + contorno neón
   Lo que cambia aquí: el TIPO DE DISEÑO y el set de iconos por variación.
   TODAS conservan el tamaño definido (W240 · min-height 560) — sin rail estrecho.
   El feature real src/features/Sidebar permanece intacto — esto es exploración.
   ─────────────────────────────────────────────────────────────────────────── */

const FD = "var(--font-display, 'Plus Jakarta Sans', sans-serif)";
const SIDEBAR_W = 240;

/* ── ADN Trace — idéntico al Mix·Trace elegido ───────────────────────────── */
const MIX_BG = "linear-gradient(180deg, oklch(0.26 0.19 285) 0%, oklch(0.19 0.15 285) 100%)";
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
    background: var(--tv-bg);
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
  .tv-brand::after {
    content: '';
    position: absolute;
    left: 50%; top: 14px;
    width: 120px; height: 40px;
    transform: translateX(-50%);
    border-radius: 999px;
    background-image: var(--tv-grad);
    filter: blur(26px);
    opacity: 0.38;
    z-index: 0;
    animation: tv-breathe 4.5s ease-in-out infinite;
  }
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
  .tv--cards .tv-nav { padding: 8px 10px 0; }
  .tv--pill  .tv-nav { padding: 8px 0 0; }
  .tv--glass .tv-nav { padding: 8px 10px 0; }
  .tv--split .tv-nav { padding-top: 6px; }

  /* ── Item base — geometría común ──────────────────────────────────────── */
  .tv-item {
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
    transform: translateX(3px);
    border-radius: 8px;
    background-image: linear-gradient(90deg,
      color-mix(in oklch, var(--tv-accent) 22%, transparent) 0%,
      color-mix(in oklch, var(--tv-accent) 5%, transparent) 60%,
      transparent 100%);
    box-shadow: inset 0 0 0 1.5px color-mix(in oklch, var(--tv-accent) 60%, transparent),
                0 0 22px -4px var(--tv-glow);
  }
  .tv-item:hover .tv-icon { stroke: var(--tv-accent); filter: drop-shadow(0 0 5px var(--tv-glow)); }
  .tv-item:active {
    transform: translateX(3px) scale(0.985);
    box-shadow: inset 0 0 0 1.5px var(--tv-accent), inset 0 2px 6px rgb(0% 0% 0% / 0.3);
  }
  .tv-item:focus-visible { outline: 2px solid rgb(100% 100% 100% / 0.55); outline-offset: -2px; }

  /* Rail activo persistente (firma de marca) */
  .tv-item--active { background-color: rgb(100% 100% 100% / 0.07); }
  .tv-item--active::before {
    content: '';
    position: absolute;
    left: 0; top: 6px; bottom: 6px;
    width: 4px;
    border-radius: 0 4px 4px 0;
    background-image: var(--tv-grad);
    box-shadow: 0 0 14px var(--tv-glow), 0 0 4px var(--tv-glow);
    animation: tv-rail 3.5s ease-in-out infinite;
  }

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

  /* ════ DISEÑO · CARDS — items como tarjetas con icon-chip + subtítulo ════ */
  .tv--cards .tv-item {
    height: auto;
    margin: 4px 0;
    padding: 10px 12px;
    gap: 12px;
    border-radius: 12px;
    background-color: rgb(100% 100% 100% / 0.04);
  }
  .tv--cards .tv-item:hover { transform: translateX(2px); border-radius: 12px; }
  .tv--cards .tv-item--active { background-color: rgb(100% 100% 100% / 0.09); }
  .tv-chip {
    flex-shrink: 0;
    width: 34px; height: 34px;
    border-radius: 10px;
    display: flex; align-items: center; justify-content: center;
    background: color-mix(in oklch, var(--tv-accent) 12%, rgb(100% 100% 100% / 0.05));
    transition: background 180ms ease;
  }
  .tv--cards .tv-item:hover .tv-chip { background: color-mix(in oklch, var(--tv-accent) 24%, transparent); }
  .tv-card-body { flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 2px; }
  .tv-card-sub { font-size: 11px; color: rgb(100% 100% 100% / 0.48); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  .tv-group {
    font-size: 10px; font-weight: 800; letter-spacing: 0.12em;
    text-transform: uppercase;
    color: rgb(100% 100% 100% / 0.38);
    padding: 12px 14px 4px;
  }

  /* ════ DISEÑO · PILL — items full-radius + dot de estado ════ */
  .tv--pill .tv-item {
    margin: 3px 12px;
    height: 46px;
    padding: 0 16px;
    gap: 12px;
    border-radius: 999px;
  }
  .tv--pill .tv-item::after { border-radius: 999px 0 0 999px; }
  .tv--pill .tv-item:hover { border-radius: 999px; }
  .tv--pill .tv-item--active {
    background-color: transparent;
    background-image: linear-gradient(90deg,
      color-mix(in oklch, var(--tv-accent) 24%, transparent) 0%,
      color-mix(in oklch, var(--tv-accent) 6%, transparent) 70%,
      transparent 100%);
  }
  .tv--pill .tv-item--active::before { display: none; }
  .tv-dot {
    flex-shrink: 0;
    width: 8px; height: 8px;
    border-radius: 999px;
    background: rgb(100% 100% 100% / 0.18);
    transition: background 180ms ease, box-shadow 180ms ease;
  }
  .tv-item--active .tv-dot,
  .tv--pill .tv-item:hover .tv-dot {
    background-image: var(--tv-grad);
    box-shadow: 0 0 10px var(--tv-glow);
  }

  /* ════ DISEÑO · GLASS — paneles esmerilados + icono circular ════ */
  .tv--glass .tv-item {
    height: 52px; margin: 5px 0; padding: 0 12px; gap: 12px;
    border-radius: 12px;
    background: rgb(100% 100% 100% / 0.06);
    backdrop-filter: blur(6px);
    box-shadow: inset 0 0 0 1px rgb(100% 100% 100% / 0.12), inset 0 1px 0 rgb(100% 100% 100% / 0.10);
  }
  .tv--glass .tv-item:hover {
    transform: translateX(2px); border-radius: 12px;
    box-shadow: inset 0 0 0 1.5px color-mix(in oklch, var(--tv-accent) 60%, transparent),
                0 0 22px -4px var(--tv-glow);
  }
  .tv--glass .tv-item--active {
    background-image: linear-gradient(90deg,
      color-mix(in oklch, var(--tv-accent) 22%, transparent) 0%,
      rgb(100% 100% 100% / 0.05) 80%);
    box-shadow: inset 0 0 0 1.5px color-mix(in oklch, var(--tv-accent) 50%, transparent),
                inset 0 1px 0 rgb(100% 100% 100% / 0.12);
  }
  .tv-glass-ic {
    flex-shrink: 0;
    width: 32px; height: 32px;
    border-radius: 999px;
    display: flex; align-items: center; justify-content: center;
    background: rgb(100% 100% 100% / 0.10);
    box-shadow: inset 0 0 0 1px rgb(100% 100% 100% / 0.14);
    transition: background 180ms ease;
  }
  .tv--glass .tv-item:hover .tv-glass-ic { background: color-mix(in oklch, var(--tv-accent) 26%, transparent); }

  /* ════ DISEÑO · SPLIT — fila en dos zonas: columna de icono + contenido ════ */
  .tv--split .tv-item { height: 50px; padding: 0; gap: 0; }
  .tv--split .tv-item:hover { transform: translateX(2px); border-radius: 8px; }
  .tv-split-ic {
    flex-shrink: 0;
    width: 52px; align-self: stretch;
    display: flex; align-items: center; justify-content: center;
    border-right: 1px solid rgb(100% 100% 100% / 0.10);
    background: rgb(100% 100% 100% / 0.03);
    transition: background 180ms ease, border-color 180ms ease;
  }
  .tv--split .tv-item:hover .tv-split-ic {
    background: color-mix(in oklch, var(--tv-accent) 16%, transparent);
    border-right-color: color-mix(in oklch, var(--tv-accent) 40%, transparent);
  }
  .tv--split .tv-item--active .tv-split-ic { background: color-mix(in oklch, var(--tv-accent) 20%, transparent); }
  .tv-split-body {
    flex: 1; min-width: 0;
    display: flex; align-items: center; gap: 8px;
    padding: 0 14px;
  }
  .tv-split-count {
    margin-left: auto; flex-shrink: 0;
    font-size: 11px; font-weight: 700;
    color: rgb(100% 100% 100% / 0.50);
    font-variant-numeric: tabular-nums;
  }
  .tv--split .tv-item--active .tv-split-count { color: var(--tv-accent); }

  /* ════ DISEÑO · OUTLINED — chips con contorno ghost → neón ════ */
  .tv--outlined .tv-nav { padding: 8px 12px 0; }
  .tv--outlined .tv-item {
    height: 48px; margin: 5px 0; padding: 0 14px; gap: 12px;
    border-radius: 10px;
    background: transparent;
    box-shadow: inset 0 0 0 1px rgb(100% 100% 100% / 0.12);
  }
  .tv--outlined .tv-item:hover {
    transform: translateX(2px); border-radius: 10px;
    background-image: none;
    box-shadow: inset 0 0 0 1.5px color-mix(in oklch, var(--tv-accent) 70%, transparent), 0 0 20px -6px var(--tv-glow);
  }
  .tv--outlined .tv-item--active {
    background-image: linear-gradient(90deg, color-mix(in oklch, var(--tv-accent) 14%, transparent) 0%, transparent 70%);
    box-shadow: inset 0 0 0 1.5px color-mix(in oklch, var(--tv-accent) 65%, transparent);
  }

  /* ════ DISEÑO · WIPE — un barrido orange recorre la fila al hover ════ */
  .tv--wipe .tv-nav { padding-top: 6px; }
  .tv--wipe .tv-item {
    height: 48px; padding: 0 16px; gap: 13px;
    background-image: linear-gradient(90deg,
      color-mix(in oklch, var(--tv-accent) 32%, transparent) 0%,
      color-mix(in oklch, var(--tv-accent) 8%, transparent) 42%,
      transparent 60%);
    background-size: 220% 100%;
    background-position: 150% 0;
    background-repeat: no-repeat;
    transition: background-position 420ms cubic-bezier(0.3,0,0,1),
                transform 180ms cubic-bezier(0.25,0.8,0.25,1),
                box-shadow 220ms ease;
  }
  .tv--wipe .tv-item:hover {
    transform: translateX(2px); border-radius: 8px;
    background-image: linear-gradient(90deg,
      color-mix(in oklch, var(--tv-accent) 32%, transparent) 0%,
      color-mix(in oklch, var(--tv-accent) 8%, transparent) 42%,
      transparent 60%);
    background-position: 0 0;
    box-shadow: inset 0 0 0 1px color-mix(in oklch, var(--tv-accent) 28%, transparent);
  }
  .tv--wipe .tv-item--active { background-position: 40% 0; }

  /* ════ DISEÑO · TAB — el item activo se acopla a la pared derecha ════ */
  .tv--tab .tv-nav { padding: 8px 0 8px 12px; }
  .tv--tab .tv-item {
    height: 46px; padding: 0 14px; gap: 12px;
    border-radius: 10px 0 0 10px;
  }
  .tv--tab .tv-item:hover {
    transform: none; border-radius: 10px 0 0 10px;
    background-color: rgb(100% 100% 100% / 0.05);
    background-image: none;
    box-shadow: none;
  }
  .tv--tab .tv-item--active {
    background-image: linear-gradient(90deg, color-mix(in oklch, var(--tv-accent) 26%, transparent) 0%, color-mix(in oklch, var(--tv-accent) 6%, transparent) 100%);
    border-radius: 10px 0 0 10px;
    box-shadow: inset 0 0 0 1px color-mix(in oklch, var(--tv-accent) 45%, transparent);
  }
  .tv--tab .tv-subband { margin-left: 0; }

  /* ════ DISEÑO · SOLID — item activo = relleno gradiente completo (button-like) ════ */
  .tv--solid .tv-nav { padding: 8px 12px 0; }
  .tv--solid .tv-item { height: 48px; margin: 4px 0; padding: 0 14px; gap: 12px; border-radius: 10px; }
  .tv--solid .tv-item:hover {
    transform: translateX(2px); border-radius: 10px;
    background-color: rgb(100% 100% 100% / 0.06);
    background-image: none;
    box-shadow: none;
  }
  .tv--solid .tv-item--active {
    background-image: linear-gradient(135deg, oklch(0.76 0.17 58) 0%, oklch(0.66 0.18 42) 100%);
    box-shadow: 0 8px 20px -6px var(--tv-glow), inset 0 1px 0 rgb(100% 100% 100% / 0.25);
  }
  .tv--solid .tv-item--active::before { display: none; }
  .tv--solid .tv-item--active .tv-label { color: var(--vmc-color-base-white, #fff); font-weight: 700; }
  .tv--solid .tv-item--active .tv-icon { stroke: var(--vmc-color-base-white, #fff); filter: drop-shadow(0 1px 2px rgb(0% 0% 0% / 0.3)); }
  .tv--solid .tv-item--active .tv-count { color: var(--vmc-color-base-white, #fff); background: rgb(100% 100% 100% / 0.22); }

  /* ── Subniveles (expanded + cards) ────────────────────────────────────── */
  .tv-subband { background-color: rgb(0% 0% 0% / 0.18); }
  .tv--cards .tv-subband { background: transparent; padding-left: 12px; }
  .tv--pill .tv-subband { margin: 2px 12px 6px; border-radius: 12px; overflow: hidden; }
  .tv--glass .tv-subband { margin: 0 4px 4px; border-radius: 10px; overflow: hidden; }
  .tv--split .tv-sub { padding-left: 66px; }
  .tv-sub {
    position: relative;
    display: flex; align-items: center; gap: 8px;
    height: 40px;
    padding: 0 16px 0 49px;
    cursor: pointer;
    transition: background-color 150ms, transform 150ms;
  }
  .tv--cards .tv-sub { padding-left: 24px; height: 36px; }
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
    margin-top: 16px; align-self: stretch;
    display: inline-flex; align-items: center; justify-content: center; gap: 6px;
    height: 40px; border: none; border-radius: 10px; cursor: pointer;
    font-family: ${FD}; font-size: 13px; font-weight: 700;
    color: var(--vmc-color-base-white, #fff);
    text-shadow: 0 1px 2px rgb(0% 0% 0% / 0.28);
    background-image: linear-gradient(var(--tv-angle), oklch(0.74 0.17 55) 0%, oklch(0.66 0.18 42) 100%);
    box-shadow: 0 6px 16px -4px oklch(0.72 0.16 55 / 0.55), inset 0 1px 0 rgb(100% 100% 100% / 0.25);
    transition: --tv-angle 0.4s cubic-bezier(0.25,0.8,0.25,1), transform 0.18s ease, box-shadow 0.25s ease;
  }
  .tvb-cta:hover { --tv-angle: 300deg; transform: translateY(-2px) scale(1.02); box-shadow: 0 0 0 2px color-mix(in oklch, var(--tv-accent) 75%, transparent), 0 9px 22px -6px var(--tv-glow), inset 0 1px 0 rgb(100% 100% 100% / 0.25); }
  .tvb-cta:active { transform: scale(0.97); }

  @keyframes tv-breathe { 0%,100% { opacity: 0.40; transform: scale(0.94); } 50% { opacity: 0.65; transform: scale(1.06); } }
  @keyframes tv-rail   { 0%,100% { opacity: 0.75; } 50% { opacity: 1; } }
  @media (prefers-reduced-motion: reduce) {
    .tv-brand::after, .tv-item--active::before, .tv-sub--active::before, .tvb::before { animation: none; }
  }
`;

/* ── CSS experimental — 3 layouts con animación protagonista ──────────────── */
const TV_FX_CSS = `
  @property --tvx-ang { syntax: '<angle>'; inherits: false; initial-value: 0deg; }

  /* ════ EXPERIMENTAL · GLIDE — un highlight neón se desliza al item activo ════ */
  .tvx-glide-nav { position: relative; padding: 8px; }
  .tvx-glide {
    position: absolute;
    left: 8px; right: 8px; top: 8px;
    height: 48px;
    border-radius: 10px;
    background-image: linear-gradient(90deg,
      color-mix(in oklch, var(--tv-accent) 26%, transparent) 0%,
      color-mix(in oklch, var(--tv-accent) 6%, transparent) 70%,
      transparent 100%);
    box-shadow: inset 0 0 0 1.5px color-mix(in oklch, var(--tv-accent) 55%, transparent),
                0 0 22px -4px var(--tv-glow);
    transition: transform 460ms cubic-bezier(0.34,1.3,0.5,1);
    z-index: 0;
    pointer-events: none;
  }
  .tvx-glide::before {
    content: ''; position: absolute;
    left: 0; top: 8px; bottom: 8px; width: 3px;
    border-radius: 0 3px 3px 0;
    background-image: var(--tv-grad);
    box-shadow: 0 0 12px var(--tv-glow);
  }
  .tvx-gitem {
    position: relative; z-index: 1;
    display: flex; align-items: center; gap: 13px;
    height: 48px; padding: 0 14px;
    cursor: pointer; border-radius: 10px;
    transition: transform 200ms ease;
  }
  .tvx-gitem:hover { transform: translateX(3px); }
  .tvx-gitem .tv-icon { transition: transform 320ms cubic-bezier(0.34,1.56,0.64,1), stroke 200ms ease, filter 200ms ease; }
  .tvx-gitem:hover .tv-icon { transform: scale(1.16) rotate(-8deg); }
  .tvx-glabel { flex: 1; font-size: 14px; color: rgb(100% 100% 100% / 0.78); }
  .tvx-gitem--active .tvx-glabel { color: var(--vmc-color-base-white, #fff); font-weight: 700; }
  .tvx-gitem--active .tv-icon { stroke: var(--vmc-color-base-white, #fff); filter: drop-shadow(0 0 6px var(--tv-glow)); }

  /* ════ EXPERIMENTAL · ACCORDION — cada item se expande con altura animada ════ */
  .tvx-acc-nav { padding: 8px 12px 0; }
  .tvx-acc {
    margin: 6px 0; border-radius: 12px; overflow: hidden;
    background: rgb(100% 100% 100% / 0.04);
    box-shadow: inset 0 0 0 1px rgb(100% 100% 100% / 0.08);
    transition: box-shadow 280ms ease, background 280ms ease;
  }
  .tvx-acc--open {
    background: rgb(100% 100% 100% / 0.06);
    box-shadow: inset 0 0 0 1.5px color-mix(in oklch, var(--tv-accent) 50%, transparent),
                0 0 22px -6px var(--tv-glow);
  }
  .tvx-acc-head { position: relative; display: flex; align-items: center; gap: 12px; height: 50px; padding: 0 14px; cursor: pointer; }
  .tvx-acc-head::after {
    content: ''; position: absolute;
    left: 0; top: 0; bottom: 0; width: 3px;
    background-image: var(--tv-grad);
    box-shadow: 0 0 12px var(--tv-glow);
    transform: scaleY(0); transform-origin: top;
    transition: transform 380ms cubic-bezier(0.3,0,0,1);
  }
  .tvx-acc--open .tvx-acc-head::after { transform: scaleY(1); }
  .tvx-acc-ic {
    flex-shrink: 0; width: 32px; height: 32px; border-radius: 9px;
    display: flex; align-items: center; justify-content: center;
    background: color-mix(in oklch, var(--tv-accent) 12%, rgb(100% 100% 100% / 0.05));
    transition: background 200ms ease;
  }
  .tvx-acc--open .tvx-acc-ic { background: color-mix(in oklch, var(--tv-accent) 26%, transparent); }
  .tvx-acc-label { flex: 1; font-size: 14px; font-weight: 600; color: rgb(100% 100% 100% / 0.86); }
  .tvx-acc-body {
    max-height: 0; opacity: 0; overflow: hidden;
    transition: max-height 400ms cubic-bezier(0.3,0,0,1), opacity 300ms ease;
  }
  .tvx-acc--open .tvx-acc-body { max-height: 240px; opacity: 1; padding-bottom: 6px; }
  .tvx-acc-desc { font-size: 12px; color: rgb(100% 100% 100% / 0.58); margin: 0; padding: 2px 14px 6px 58px; }
  .tvx-acc-link {
    display: flex; align-items: center; justify-content: space-between;
    height: 34px; padding: 0 14px 0 58px;
    font-size: 13px; color: rgb(100% 100% 100% / 0.74); cursor: pointer;
    transition: background 150ms ease, transform 150ms ease, color 150ms ease;
  }
  .tvx-acc-link:hover { background: rgb(100% 100% 100% / 0.05); transform: translateX(3px); color: var(--vmc-color-base-white, #fff); }
  .tvx-acc-link span { font-size: 12px; color: rgb(100% 100% 100% / 0.42); }

  /* ════ EXPERIMENTAL · AURORA — fondo aurora animado + borde cónico que gira ════ */
  .tv--aurora .tv-brand, .tv--aurora .tvx-aur-nav, .tv--aurora .tv-cta-wrap { position: relative; z-index: 1; }
  .tvx-aurora-bg {
    position: absolute; inset: 0; z-index: 0; pointer-events: none; opacity: 0.5;
    background:
      radial-gradient(60% 40% at 20% 8%,  oklch(0.50 0.20 300 / 0.55), transparent 60%),
      radial-gradient(50% 40% at 92% 28%, oklch(0.58 0.18 42 / 0.45),  transparent 60%),
      radial-gradient(70% 50% at 50% 102%, oklch(0.46 0.20 280 / 0.55), transparent 60%);
    background-size: 180% 180%;
    animation: tvx-aurora 14s ease-in-out infinite;
  }
  @keyframes tvx-aurora { 0%,100% { background-position: 0% 0%; } 50% { background-position: 100% 100%; } }
  .tvx-aur-nav { padding: 8px 12px 0; }
  .tvx-aitem { position: relative; margin: 6px 0; height: 50px; display: flex; border-radius: 13px; }
  .tvx-aitem::before {
    content: ''; position: absolute; inset: 0;
    border-radius: 13px; padding: 1.5px;
    background: conic-gradient(from var(--tvx-ang),
      transparent 0deg,
      color-mix(in oklch, var(--tv-accent) 85%, transparent) 90deg,
      transparent 180deg,
      color-mix(in oklch, var(--tv-accent) 45%, transparent) 270deg,
      transparent 360deg);
    -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
    -webkit-mask-composite: xor; mask-composite: exclude;
    opacity: 0.30; transition: opacity 250ms ease;
  }
  .tvx-aitem:hover::before, .tvx-aitem--active::before { opacity: 1; animation: tvx-spin 4s linear infinite; }
  @keyframes tvx-spin { to { --tvx-ang: 360deg; } }
  .tvx-aitem-inner {
    position: relative; z-index: 1; flex: 1;
    display: flex; align-items: center; gap: 12px; padding: 0 14px;
    border-radius: 11px;
    background: oklch(0.20 0.15 285 / 0.72);
    backdrop-filter: blur(6px);
    cursor: pointer;
  }
  .tvx-alabel { flex: 1; font-size: 14px; color: rgb(100% 100% 100% / 0.82); }
  .tvx-aitem--active .tvx-alabel { color: var(--vmc-color-base-white, #fff); font-weight: 700; }
  .tvx-aitem:hover .tv-icon, .tvx-aitem--active .tv-icon { stroke: var(--vmc-color-base-white, #fff); filter: drop-shadow(0 0 5px var(--tv-glow)); }

  @media (prefers-reduced-motion: reduce) {
    .tvx-glide { transition: none; }
    .tvx-aurora-bg, .tvx-aitem::before { animation: none; }
  }
`;

/* ── Tipos ─────────────────────────────────────────────────────────────────── */
type LayoutKind =
  | "expanded" | "cards" | "pill" | "glass" | "split"
  | "outlined" | "wipe" | "tab" | "solid";

interface SubItem { label: string; count: number }
interface NavEntry {
  label: string;
  iconPath: string;
  sub?: string;
  section?: string;
  total?: number;        // total agregado (compact / framed)
  children?: SubItem[];
}
interface TraceVariant {
  id: string;
  layout: LayoutKind;
  iconSet: string;
  name: string;
  tagline: string;
  bannerH: number;
}
interface TraceVariantResolved extends TraceVariant { bg: string }

/* ── Datos — 5 nav items + taxonomía VMC (un nivel de subniveles) ─────────── */
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

/* ── Sets de iconos — uno por variación ──────────────────────────────────── */
const ICON_SETS: Record<string, Record<string, string>> = {
  comercio: {
    "Hoy":             "M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10z",
    "Tipo de oferta":  "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1zM8 7h8M8 11h8M8 15h5",
    "Categorías":      "M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01",
    "Empresas":        "M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 3.26 6.5l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35zM6 18h12M6 14h12M6 10h12",
    "Centro de ayuda": "M12 7v14M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
  },
  subasta: {
    "Hoy":             "M8 2v2M16 2v2M3 8h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zM12 15a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z",
    "Tipo de oferta":  "M14 13l-7.5 7.5a2.12 2.12 0 0 1-3-3L11 10M16 16l6-6M8 8l6-6M9 7l8 8M21 11l-8-8",
    "Categorías":      "M20 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2z",
    "Empresas":        "M3 22h18M4 11h16M12 2l8 6H4zM6 11v7M10 11v7M14 11v7M18 11v7",
    "Centro de ayuda": "M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H4a1 1 0 0 1-1-1v-5a9 9 0 0 1 18 0v5a1 1 0 0 1-1 1h-2a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3M21 16v2a4 4 0 0 1-4 4h-5",
  },
  energetic: {
    "Hoy":             "M13 2L3 14h9l-1 8 10-12h-9z",
    "Tipo de oferta":  "M19 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2M21 12h-5a2 2 0 0 0 0 4h5a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1zM3 7h16",
    "Categorías":      "M6 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM18 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",
    "Empresas":        "M3 21h18M3 10h18M5 6l7-3 7 3M5 10v11M19 10v11M9 14v3M15 14v3",
    "Centro de ayuda": "M7.9 20A9 9 0 1 0 4 16.1L2 22zM9.5 9a2.5 2.5 0 0 1 4.9.6c0 2-2.4 2-2.4 3.4M12 17h.01",
  },
  data: {
    "Hoy":             "M8 2v2M16 2v2M3 9h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zM9 16l2 2 4-4",
    "Tipo de oferta":  "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM12 6v12M15 9.5a2.5 2.5 0 0 0-2.5-1.5h-1a2 2 0 0 0 0 4h1a2 2 0 0 1 0 4h-1A2.5 2.5 0 0 1 9 14.5",
    "Categorías":      "M3 3h18v18H3zM9 3v18M15 3v18M3 9h18M3 15h18",
    "Empresas":        "M2 20h20M4 20V8l5 4V8l5 4V7l5 4v9M9 20v-4h2v4M13 16h.01",
    "Centro de ayuda": "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z",
  },
  lineal: {
    "Hoy":             "M17 18a5 5 0 0 0-10 0M12 2v7M5.6 11.6L4.2 10.2M1 18h2M21 18h2M19.8 10.2l-1.4 1.4M23 22H1M8 6l4-4 4 4",
    "Tipo de oferta":  "M19 5L5 19M6.5 9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zM17.5 20a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z",
    "Categorías":      "M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16zM3.3 7L12 12l8.7-5M12 22V12",
    "Empresas":        "M3 21h18M5 21V7l8-4v18M19 21V11l-6-4M9 9v.01M9 13v.01M9 17v.01",
    "Centro de ayuda": "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM12 16v-4M12 8h.01",
  },
};

function iconFor(setId: string, label: string, fallback: string): string {
  const set = ICON_SETS[setId];
  if (set !== undefined && set[label] !== undefined) { return set[label]; }
  return fallback;
}

/* ── 5 variaciones de diseño — mismo ADN Trace, mismo tamaño W240 ─────────── */
const VARIANTS: TraceVariant[] = [
  { id: "expanded", layout: "expanded", iconSet: "comercio",  name: "Trace · Expanded", tagline: "Base · label + count chip + banda de subniveles",        bannerH: 280 },
  { id: "cards",    layout: "cards",    iconSet: "subasta",   name: "Trace · Cards",    tagline: "Tarjetas con icon-chip + subtítulo + grupos",            bannerH: 260 },
  { id: "pill",     layout: "pill",     iconSet: "energetic", name: "Trace · Pill",     tagline: "Items pill full-radius con dot de estado",               bannerH: 300 },
  { id: "glass",    layout: "glass",    iconSet: "data",      name: "Trace · Glass",    tagline: "Paneles esmerilados · icono circular · tinte orange",   bannerH: 280 },
  { id: "split",    layout: "split",    iconSet: "lineal",    name: "Trace · Split",    tagline: "Fila en dos zonas · columna de icono + contenido",       bannerH: 300 },
  { id: "outlined", layout: "outlined", iconSet: "lineal",    name: "Trace · Outlined", tagline: "Chips con contorno ghost que se vuelve neón",            bannerH: 280 },
  { id: "wipe",     layout: "wipe",     iconSet: "comercio",  name: "Trace · Wipe",     tagline: "Un barrido orange recorre la fila al hover",             bannerH: 300 },
  { id: "tab",      layout: "tab",      iconSet: "subasta",   name: "Trace · Tab",      tagline: "El item activo se acopla a la pared derecha (pestaña)",  bannerH: 260 },
  { id: "solid",    layout: "solid",    iconSet: "energetic", name: "Trace · Solid",    tagline: "Item activo = relleno gradiente completo (button-like)", bannerH: 320 },
];

/* ── Iconos ─────────────────────────────────────────────────────────────────── */
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

/* ── Banner Subaspass ─────────────────────────────────────────────────────── */
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

/* ── Sidebar de una variación ─────────────────────────────────────────────── */
function TraceSidebar({ variant }: { variant: TraceVariantResolved }): JSX.Element {
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
    "--tv-bg": variant.bg,
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
  function totalText(entry: NavEntry): string {
    if (entry.total !== undefined) { return String(entry.total); }
    return "—";
  }

  function renderItemInner(entry: NavEntry, isActive: boolean): JSX.Element {
    const iconPath = iconFor(variant.iconSet, entry.label, entry.iconPath);

    if (variant.layout === "cards") {
      return (
        <>
          <span className="tv-chip"><NavIcon path={iconPath} active={isActive} /></span>
          <span className="tv-card-body">
            <span className={labelClassName(isActive)}>{entry.label}</span>
            {entry.sub !== undefined && <span className="tv-card-sub">{entry.sub}</span>}
          </span>
          {entry.children !== undefined && <ChevronIcon open={open.has(entry.label)} />}
        </>
      );
    }
    if (variant.layout === "pill") {
      return (
        <>
          <NavIcon path={iconPath} active={isActive} />
          <span className={labelClassName(isActive)}>{entry.label}</span>
          {entry.children !== undefined && <ChevronIcon open={open.has(entry.label)} />}
          {entry.children === undefined && <span className="tv-dot" />}
        </>
      );
    }
    if (variant.layout === "glass") {
      return (
        <>
          <span className="tv-glass-ic"><NavIcon path={iconPath} active={isActive} /></span>
          <span className={labelClassName(isActive)}>{entry.label}</span>
          {entry.children !== undefined && <span className="tv-count">{entry.children.length}</span>}
          {entry.children !== undefined && <ChevronIcon open={open.has(entry.label)} />}
        </>
      );
    }
    if (variant.layout === "split") {
      return (
        <>
          <span className="tv-split-ic"><NavIcon path={iconPath} active={isActive} /></span>
          <span className="tv-split-body">
            <span className={labelClassName(isActive)}>{entry.label}</span>
            <span className="tv-split-count">{totalText(entry)}</span>
            {entry.children !== undefined && <ChevronIcon open={open.has(entry.label)} />}
          </span>
        </>
      );
    }
    /* expanded · outlined · wipe · tab · solid (mismo inner) */
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
        {entry.section !== undefined && variant.layout === "cards" && (
          <div className="tv-group">{entry.section}</div>
        )}
        {entry.section !== undefined && variant.layout !== "cards" && <div className="tv-divider" />}

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
    <aside className={"tv-root tv--" + variant.layout} style={rootStyle} aria-label="Navegación principal">
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
        <SubaspassBanner height={variant.bannerH} />
      </div>
    </aside>
  );
}

function withBg(variant: TraceVariant): TraceVariantResolved {
  return { ...variant, bg: MIX_BG };
}

/* ── Helpers compartidos para los experimentales ─────────────────────────── */
function fxRootStyle(): CSSProperties {
  return {
    "--tv-bg": MIX_BG,
    "--tv-grad": ORANGE_GRAD,
    "--tv-glow": ORANGE_GLOW,
    "--tv-accent": ORANGE_ACCENT,
  } as CSSProperties;
}

function BrandBlock(): JSX.Element {
  return (
    <div className="tv-brand">
      <div className="tv-wordmark">
        <span className="tv-chev">›</span>
        <span>vmc</span>
        <span className="tv-chev">‹</span>
      </div>
      <span className="tv-brand-name">Subastas</span>
      <span className="tv-brand-sub">powered by <b>SUBASTOP.Co</b></span>
    </div>
  );
}

/* ── EXPERIMENTAL · Glide ─────────────────────────────────────────────────── */
function GlideSidebar(): JSX.Element {
  const [activeIdx, setActiveIdx] = useState<number>(3);
  const glideStyle: CSSProperties = { transform: "translateY(" + activeIdx * 48 + "px)" };

  function renderGItem(entry: NavEntry, i: number): JSX.Element {
    const isActive = i === activeIdx;
    function handlePick(): void { setActiveIdx(i); }
    return (
      <div key={entry.label} className={isActive ? "tvx-gitem tvx-gitem--active" : "tvx-gitem"}
        role="button" tabIndex={0} onClick={handlePick}>
        <NavIcon path={iconFor("energetic", entry.label, entry.iconPath)} active={isActive} />
        <span className="tvx-glabel">{entry.label}</span>
      </div>
    );
  }

  return (
    <aside className="tv-root tv--glide" style={fxRootStyle()} aria-label="Navegación principal">
      <BrandBlock />
      <nav className="tvx-glide-nav" aria-label="Menú principal">
        <span className="tvx-glide" style={glideStyle} aria-hidden />
        {NAV.map(renderGItem)}
      </nav>
      <div className="tv-cta-wrap"><SubaspassBanner height={300} /></div>
    </aside>
  );
}

/* ── EXPERIMENTAL · Accordion ─────────────────────────────────────────────── */
function AccordionSidebar(): JSX.Element {
  const [openLabel, setOpenLabel] = useState<string | null>("Empresas");

  function renderLink(sub: SubItem): JSX.Element {
    return (
      <div key={sub.label} className="tvx-acc-link" role="button" tabIndex={0}>
        {sub.label}<span>({sub.count})</span>
      </div>
    );
  }

  function renderAcc(entry: NavEntry): JSX.Element {
    const isOpen = openLabel === entry.label;
    function handleHead(): void {
      if (isOpen) { setOpenLabel(null); } else { setOpenLabel(entry.label); }
    }
    return (
      <div key={entry.label} className={isOpen ? "tvx-acc tvx-acc--open" : "tvx-acc"}>
        <div className="tvx-acc-head" role="button" tabIndex={0} onClick={handleHead}>
          <span className="tvx-acc-ic"><NavIcon path={iconFor("comercio", entry.label, entry.iconPath)} active={isOpen} /></span>
          <span className="tvx-acc-label">{entry.label}</span>
          <ChevronIcon open={isOpen} />
        </div>
        <div className="tvx-acc-body">
          {entry.sub !== undefined && <p className="tvx-acc-desc">{entry.sub}</p>}
          {entry.children !== undefined && entry.children.map(renderLink)}
          {entry.children === undefined && <p className="tvx-acc-desc">Acceso directo · sin subcategorías.</p>}
        </div>
      </div>
    );
  }

  return (
    <aside className="tv-root tv--accordion" style={fxRootStyle()} aria-label="Navegación principal">
      <BrandBlock />
      <nav className="tvx-acc-nav" aria-label="Menú principal">{NAV.map(renderAcc)}</nav>
      <div className="tv-cta-wrap"><SubaspassBanner height={280} /></div>
    </aside>
  );
}

/* ── EXPERIMENTAL · Aurora ────────────────────────────────────────────────── */
function AuroraSidebar(): JSX.Element {
  const [active, setActive] = useState<string>("Empresas");

  function renderAItem(entry: NavEntry): JSX.Element {
    const isActive = active === entry.label;
    function handlePick(): void { setActive(entry.label); }
    return (
      <div key={entry.label} className={isActive ? "tvx-aitem tvx-aitem--active" : "tvx-aitem"}>
        <div className="tvx-aitem-inner" role="button" tabIndex={0} onClick={handlePick}>
          <NavIcon path={iconFor("subasta", entry.label, entry.iconPath)} active={isActive} />
          <span className="tvx-alabel">{entry.label}</span>
        </div>
      </div>
    );
  }

  return (
    <aside className="tv-root tv--aurora" style={fxRootStyle()} aria-label="Navegación principal">
      <span className="tvx-aurora-bg" aria-hidden />
      <BrandBlock />
      <nav className="tvx-aur-nav" aria-label="Menú principal">{NAV.map(renderAItem)}</nav>
      <div className="tv-cta-wrap"><SubaspassBanner height={300} /></div>
    </aside>
  );
}

/* ── Etiqueta para los experimentales ────────────────────────────────────── */
function FxLabel({ index, name, tagline }: { index: number; name: string; tagline: string }): JSX.Element {
  return (
    <div style={{ marginBottom: 14, textAlign: "center", maxWidth: 240 }}>
      <p style={{ fontFamily: FD, fontSize: 11, fontWeight: 800, letterSpacing: "0.10em",
        textTransform: "uppercase", color: "var(--vmc-color-text-primary)", margin: "0 0 2px" }}>
        Experimental {index} · {name}
      </p>
      <p style={{ fontFamily: FD, fontSize: 11, fontWeight: 500,
        color: "var(--vmc-color-text-tertiary)", margin: 0 }}>
        {tagline}
      </p>
    </div>
  );
}

/* ── Etiqueta ──────────────────────────────────────────────────────────────── */
function VariantLabel({ index, variant }: { index: number; variant: TraceVariant }): JSX.Element {
  return (
    <div style={{ marginBottom: 14, textAlign: "center", maxWidth: 240 }}>
      <p style={{ fontFamily: FD, fontSize: 11, fontWeight: 800, letterSpacing: "0.10em",
        textTransform: "uppercase", color: "var(--vmc-color-text-primary)", margin: "0 0 2px" }}>
        Variación {index} · {variant.name}
      </p>
      <p style={{ fontFamily: FD, fontSize: 11, fontWeight: 500,
        color: "var(--vmc-color-text-tertiary)", margin: 0 }}>
        {variant.tagline}
      </p>
    </div>
  );
}

function SectionTitle({ kicker, title, note }: { kicker: string; title: string; note?: string }): JSX.Element {
  return (
    <div style={{ maxWidth: 1180, margin: "0 auto 28px" }}>
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

/* ── Page ──────────────────────────────────────────────────────────────────── */
export default function SidebarTraceVariantsPage(): JSX.Element {
  const resolved = VARIANTS.map(withBg);

  return (
    <main style={{ background: "var(--vmc-color-background-secondary)", minHeight: "100vh", padding: "40px 32px" }}>
      <style>{TV_CSS}</style>
      <style>{TV_FX_CSS}</style>

      <div style={{ maxWidth: 1180, margin: "0 auto 40px" }}>
        <h1 style={{ fontFamily: FD, fontSize: 22, fontWeight: 800, margin: "0 0 4px",
          color: "var(--vmc-color-text-primary)" }}>
          Sidebar · 9 diseños + 3 experimentales sobre <b>Mix · Trace</b>
        </h1>
        <p style={{ fontFamily: FD, fontSize: 13, color: "var(--vmc-color-text-tertiary)", margin: 0 }}>
          Mismo ADN Trace — base Vault <b>#2E0F70</b>, acento orange, barrita que se dibuja + contorno neón.
          Todas conservan el <b>tamaño definido (W240)</b> y desplegables funcionales. Varía el <b>diseño</b> y el <b>set de iconos</b>.
        </p>
      </div>

      <SectionTitle
        kicker="Variaciones de diseño"
        title="9 diseños · 1 sola firma Trace · mismo tamaño"
        note="Expanded · Cards · Pill · Glass · Split · Outlined · Wipe · Tab · Solid. El hover/pressed y el acento orange son idénticos; varía la estructura visual y los iconos. Click en un item con hijos para desplegar."
      />

      <div style={{ display: "flex", flexWrap: "wrap", gap: 44, justifyContent: "center", alignItems: "flex-start" }}>
        {resolved.map(function renderVariant(variant, i) {
          return (
            <div key={variant.id} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <VariantLabel index={i + 1} variant={variant} />
              <TraceSidebar variant={variant} />
            </div>
          );
        })}
      </div>

      {/* ── Experimental · animación + layout ──────────────────────────────── */}
      <div style={{ maxWidth: 1180, margin: "72px auto 0" }}>
        <SectionTitle
          kicker="Experimental"
          title="3 layouts con la animación de protagonista"
          note="Cambio total de estructura y movimiento, misma paleta Trace. Glide (highlight que se desliza) · Accordion (altura animada) · Aurora (fondo animado + borde cónico que gira)."
        />
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 44, justifyContent: "center", alignItems: "flex-start" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <FxLabel index={1} name="Trace · Glide" tagline="Un highlight neón se desliza al item activo + icono que rota" />
          <GlideSidebar />
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <FxLabel index={2} name="Trace · Accordion" tagline="Cada item se expande con altura animada + sublinks" />
          <AccordionSidebar />
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <FxLabel index={3} name="Trace · Aurora" tagline="Fondo aurora animado + borde cónico que gira" />
          <AuroraSidebar />
        </div>
      </div>
    </main>
  );
}
