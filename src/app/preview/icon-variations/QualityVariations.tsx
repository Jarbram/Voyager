"use client";
import React from "react";
import type { JSX } from "react";
import { C, PJS, LEVELS, type Level, levelColor, activeColor } from "./constants";

function V0Dots({ level }: { level: Level }): JSX.Element {
  const activePos: Record<Level, number> = { 3: 0, 2: 1, 1: 2 };
  const active = activePos[level];
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
      {[0, 1, 2].map(function renderDot(i) {
        const isActive = i === active;
        return (
          <span key={i} style={{
            width: isActive ? 20 : 6, height: 6, borderRadius: 6, display: "block",
            backgroundColor: isActive ? activeColor(level) : "oklch(0.85 0.008 220 / 40%)",
            transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1)",
          }} />
        );
      })}
    </div>
  );
}

function V1Pills({ level }: { level: Level }): JSX.Element {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
      {([1, 2, 3] as Level[]).map(function renderPill(i) {
        return (
          <span key={i} style={{
            width: 28, height: 4, borderRadius: 2, display: "block",
            backgroundColor: i <= level ? activeColor(level) : "oklch(0.85 0.008 220 / 40%)",
            transition: "background-color 300ms ease-out",
          }} />
        );
      })}
    </div>
  );
}

// ─── VTimeline — stepper horizontal: nodo lleno → línea → nodo vacío ──────────
function VTimeline({ level, colorOverride }: { level: Level; colorOverride?: string }): JSX.Element {
  const color = colorOverride || levelColor(level);
  const gray  = "oklch(0.65 0.01 220 / 40%)";
  const l1    = level >= 2 ? color : gray;
  const l2    = level === 3 ? color : gray;
  const d3    = level === 3;

  return (
    <svg width="64" height="20" viewBox="0 0 64 20" fill="none" aria-hidden>
      {/* connectors */}
      <line x1="11" y1="10" x2="25" y2="10" stroke={l1} strokeWidth="2" />
      <line x1="39" y1="10" x2="53" y2="10" stroke={l2} strokeWidth="2" />
      {/* dot 1 — siempre activo */}
      <circle cx="6"  cy="10" r="6" fill={color} />
      {/* dot 2 */}
      <circle cx="32" cy="10" r="5"
        fill={level >= 2 ? color : "none"}
        stroke={level >= 2 ? color : gray}
        strokeWidth="1.5" />
      {/* dot 3 */}
      <circle cx="58" cy="10" r="5"
        fill={d3 ? color : "none"}
        stroke={d3 ? color : gray}
        strokeWidth="1.5" />
      {d3 && (
        <path d="M 54.5 10 L 57 12.5 L 61.5 7.5"
          stroke="oklch(1 0 0)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      )}
    </svg>
  );
}

// ─── VTimelineGradient — stepper horizontal con gradientes ──────────
function VTimelineGradient({ level, stops, id }: { level: Level, stops: {color: string, offset: string}[], id: string }): JSX.Element {
  const gray  = "oklch(0.65 0.01 220 / 40%)";
  const color = `url(#${id}-${level})`; // Unique ID per level to prevent cross-contamination
  const l1    = level >= 2 ? color : gray;
  const l2    = level === 3 ? color : gray;
  const d3    = level === 3;

  return (
    <svg width="64" height="20" viewBox="0 0 64 20" fill="none" aria-hidden>
      <defs>
        <linearGradient id={`${id}-${level}`} x1="6" y1="0" x2="58" y2="0" gradientUnits="userSpaceOnUse">
          {stops.map((s, i) => (
            <stop key={i} offset={s.offset} stopColor={s.color} />
          ))}
        </linearGradient>
      </defs>
      {/* connectors */}
      <line x1="11" y1="10" x2="25" y2="10" stroke={l1} strokeWidth="2" />
      <line x1="39" y1="10" x2="53" y2="10" stroke={l2} strokeWidth="2" />
      {/* dot 1 */}
      <circle cx="6"  cy="10" r="6" fill={color} />
      {/* dot 2 */}
      <circle cx="32" cy="10" r="5"
        fill={level >= 2 ? color : "none"}
        stroke={level >= 2 ? color : gray}
        strokeWidth="1.5" />
      {/* dot 3 */}
      <circle cx="58" cy="10" r="5"
        fill={d3 ? color : "none"}
        stroke={d3 ? color : gray}
        strokeWidth="1.5" />
      {d3 && (
        <path d="M 54.5 10 L 57 12.5 L 61.5 7.5"
          stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      )}
    </svg>
  );
}

const VARIANTS: Array<{ id: number; name: string; render: (level: Level) => JSX.Element }> = [
  { id: 0, name: "Capsule",   render: (l) => <V0Dots     level={l} /> },
  { id: 1, name: "Pills",     render: (l) => <V1Pills    level={l} /> },
  { id: 6, name: "Timeline (Status)", render: (l) => <VTimeline  level={l} /> },
  { id: 9, name: "Timeline (Grad Verif)", render: (l) => <VTimelineGradient level={l} id="g-verif" stops={[
    { offset: "0%", color: "oklch(0.50 0.20 145)" },
    { offset: "100%", color: C.success }
  ]} /> },
];

export function QualityVariations(): JSX.Element {
  return (
    <>
      <p style={{
        fontFamily: PJS, fontSize: 11, fontWeight: 600,
        letterSpacing: "0.08em", textTransform: "uppercase",
        color: "var(--color-live, #ED8936)",
        marginBottom: 32,
        display: "flex", alignItems: "center", gap: 6,
      }}>
        <span style={{ fontSize: 10 }}>✦</span>
        Calidad de información — variaciones
      </p>

      <div style={{
        display: "grid",
        gridTemplateColumns: "120px 1fr 1fr 1fr",
        gap: 16, alignItems: "center",
        paddingBottom: 8,
        borderBottom: "1px solid oklch(0.72 0.16 55 / 15%)",
        marginBottom: 8,
      }}>
        <span />
        {LEVELS.map(function renderColHead({ label }) {
          return (
            <span key={label} style={{
              fontFamily: PJS, fontSize: 10, fontWeight: 600,
              letterSpacing: "0.06em", color: C.label,
              textTransform: "uppercase", textAlign: "center" as const,
            }}>
              {label}
            </span>
          );
        })}
      </div>

      {VARIANTS.map(function renderRow({ id, name, render }) {
        return (
          <div key={id} style={{
            display: "grid",
            gridTemplateColumns: "120px 1fr 1fr 1fr",
            gap: 16, alignItems: "center",
            padding: "20px 0",
            borderBottom: "1px solid oklch(0.22 0.18 285 / 5%)",
          }}>
            <span style={{
              fontFamily: PJS, fontSize: 10, fontWeight: 600,
              letterSpacing: "0.08em", textTransform: "uppercase",
              color: C.label,
            }}>
              {name}
            </span>
            {LEVELS.map(function renderCell({ level }) {
              return (
                <div key={level} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                  {render(level)}
                </div>
              );
            })}
          </div>
        );
      })}
    </>
  );
}
