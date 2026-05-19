"use client";
import React from "react";
import type { JSX } from "react";
import { C, PJS, LEVELS, type Level, levelColor, activeColor } from "./constants";
import { IconStateMatrix } from "./IconStateMatrix";

function renderShieldOutline(size: number, color: string): JSX.Element {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

function renderShieldSolid(size: number, color: string): JSX.Element {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden>
      <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" fill={color} />
      <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

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

const DARK_SOLID = "oklch(0.30 0.20 285)";

function VTimelineGradient({ level }: { level: Level }): JSX.Element {
  const gray = "oklch(0.65 0.01 220 / 40%)";
  const l1   = level >= 2 ? DARK_SOLID : gray;
  const l2   = level === 3 ? DARK_SOLID : gray;
  const d3   = level === 3;

  return (
    <svg width="64" height="20" viewBox="0 0 64 20" fill="none" aria-hidden>
      <line x1="11" y1="10" x2="25" y2="10" stroke={l1} strokeWidth="2" />
      <line x1="39" y1="10" x2="53" y2="10" stroke={l2} strokeWidth="2" />
      <circle cx="6"  cy="10" r="6" fill={DARK_SOLID} />
      <circle cx="32" cy="10" r="5"
        fill={level >= 2 ? DARK_SOLID : "none"}
        stroke={level >= 2 ? DARK_SOLID : gray}
        strokeWidth="1.5" />
      <circle cx="58" cy="10" r="5"
        fill={d3 ? DARK_SOLID : "none"}
        stroke={d3 ? DARK_SOLID : gray}
        strokeWidth="1.5" />
      {d3 && (
        <path d="M 54.5 10 L 57 12.5 L 61.5 7.5"
          stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      )}
    </svg>
  );
}

function VGauge({ level }: { level: Level }): JSX.Element {
  const color = levelColor(level);
  const offset = 87.96 * (1 - level / 3);
  return (
    <svg width="44" height="44" viewBox="0 0 36 36" fill="none" aria-hidden>
      <circle cx="18" cy="18" r="14" stroke="oklch(0.85 0.008 220 / 40%)" strokeWidth="3" />
      <circle cx="18" cy="18" r="14" stroke={color} strokeWidth="3" strokeDasharray="87.96" strokeDashoffset={offset} strokeLinecap="round" transform="rotate(-90 18 18)" style={{ transition: "stroke-dashoffset 300ms ease-out" }} />
      {level === 1 && (
        <g stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" transform="translate(11 11)">
          <circle cx="7" cy="7" r="5" />
          <line x1="7" y1="7" x2="7" y2="10" />
          <circle cx="7" cy="4" r="0.5" fill={color} />
        </g>
      )}
      {level === 2 && (
        <g stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" transform="translate(11 11)">
          <path d="M2 2h10v10H2z" />
          <path d="M4 5h6M4 8h4" />
        </g>
      )}
      {level === 3 && (
        <g stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" transform="translate(11 11)">
          <path d="M2 7l3 3 7-7" />
        </g>
      )}
    </svg>
  );
}

function VShield({ level }: { level: Level }): JSX.Element {
  const color = levelColor(level);
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      {level === 1 && (
        <>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeDasharray="3 3" />
          <path d="M12 8v4" />
          <circle cx="12" cy="16" r="0.5" fill={color} />
        </>
      )}
      {level === 2 && (
        <>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M12 8l3 3-3 3" />
          <line x1="8" y1="12" x2="16" y2="12" />
        </>
      )}
      {level === 3 && (
        <>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="oklch(0.70 0.20 145 / 15%)" />
          <path d="M9 11l2 2 4-4" />
        </>
      )}
    </svg>
  );
}

const VARIANTS: Array<{ id: number; name: string; render: (level: Level) => JSX.Element }> = [
  { id: 0, name: "Timeline (Status)", render: (l) => <VTimeline level={l} /> },
  { id: 1, name: "Timeline (Oscuro)", render: (l) => <VTimelineGradient level={l} /> },
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

      {VARIANTS.map(function renderVariantRow({ id, name, render }) {
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
