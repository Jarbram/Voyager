"use client";
import type { JSX } from "react";

const PJS  = "'Plus Jakarta Sans', sans-serif";

const C = {
  success: "var(--color-status-success, oklch(0.70 0.20 145))",
  warning: "var(--color-status-warning, oklch(0.72 0.16 65))",
  error:   "var(--color-status-error,   oklch(0.42 0.20 20))",
  vault:   "var(--color-vault-mid, #3B1782)",
  label:   "var(--color-text-muted, oklch(0.38 0.04 280 / 50%))",
  section: "var(--color-surface-section, #F2F4F3)",
};

type Level = 1 | 2 | 3;

const LEVELS: Array<{ level: Level; label: string }> = [
  { level: 1, label: "Básico"     },
  { level: 2, label: "Parcial"    },
  { level: 3, label: "Verificado" },
];

function levelColor(level: Level): string {
  if (level === 3) return C.success;
  if (level === 2) return C.warning;
  return C.error;
}

function activeColor(level: Level): string {
  if (level === 3) return C.success;
  if (level === 2) return C.warning;
  return C.label;
}

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

function VTrazo({ level }: { level: Level }): JSX.Element {
  const R    = 14;
  const circ = 2 * Math.PI * R;
  const filled: Record<Level, number> = { 1: circ * 0.33, 2: circ * 0.66, 3: circ };
  const color = levelColor(level);

  if (level === 3) {
    return (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden>
        <circle cx="18" cy="18" r={R} fill={color} fillOpacity="0.15" stroke={color} strokeWidth="2" />
        <path d="M11 18 L16 23 L25 13"
          stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden
      style={{ transform: "rotate(-90deg)" }}>
      <circle cx="18" cy="18" r={R} stroke="oklch(0.75 0.01 220 / 30%)" strokeWidth="2" />
      <circle cx="18" cy="18" r={R}
        stroke={color} strokeWidth="2" strokeLinecap="round"
        strokeDasharray={`${filled[level]} ${circ}`}
        style={{ transition: "stroke-dasharray 400ms cubic-bezier(0.4, 0, 0.2, 1)" }} />
    </svg>
  );
}

function VPuntos({ level }: { level: Level }): JSX.Element {
  const color = levelColor(level);
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
      {([1, 2, 3] as Level[]).map(function renderDot(i) {
        const active = i <= level;
        return (
          <svg key={i} width="12" height="12" viewBox="0 0 12 12" aria-hidden>
            <circle cx="6" cy="6" r="5"
              fill={active ? color : "none"}
              stroke={active ? color : "oklch(0.60 0.01 220 / 50%)"}
              strokeWidth="1.5"
              style={{ transition: "fill 300ms ease-out, stroke 300ms ease-out" }} />
          </svg>
        );
      })}
    </div>
  );
}

// ─── VCarBuild — Wheels → chassis → complete car ──────────────────────────────

interface CarPartProps {
  color: string;
}

function CarWheels({ color }: CarPartProps): JSX.Element {
  return (
    <>
      <circle cx="10" cy="17" r="4"   stroke={color} strokeWidth="1.5" fill="none" />
      <circle cx="10" cy="17" r="1.5" fill={color} />
      <circle cx="38" cy="17" r="4"   stroke={color} strokeWidth="1.5" fill="none" />
      <circle cx="38" cy="17" r="1.5" fill={color} />
    </>
  );
}

function CarChasis({ color }: CarPartProps): JSX.Element {
  return (
    <path
      d="M 4 14 L 4 17 L 42 17 L 44 15 L 45 11 L 5 11 Z"
      stroke={color} strokeWidth="1.5" strokeLinejoin="round" fill="none"
    />
  );
}

function CarCabin({ color }: CarPartProps): JSX.Element {
  return (
    <path
      d="M 14 11 L 17 6 L 34 6 L 38 11"
      stroke={color} strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round" fill="none"
    />
  );
}

function VCarBuild({ level }: { level: Level }): JSX.Element {
  const color = levelColor(level);
  return (
    <svg width="48" height="22" viewBox="0 0 48 22" aria-hidden style={{ overflow: "visible" }}>
      <CarWheels color={color} />
      {level >= 2 && <CarChasis color={color} />}
      {level === 3 && <CarCabin color={color} />}
    </svg>
  );
}

// ─── VTimeline — stepper horizontal: nodo lleno → línea → nodo vacío ──────────
function VTimeline({ level }: { level: Level }): JSX.Element {
  const color = levelColor(level);
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

// ─── VHexagono — hexágono con fill progresivo + check en nivel 3 ──────────────
function VHexagono({ level }: { level: Level }): JSX.Element {
  const color      = levelColor(level);
  const fillOpacity = level === 1 ? 0.12 : level === 2 ? 0.40 : 0.90;
  const hex = "M 15 2 L 26 8.5 L 26 21.5 L 15 28 L 4 21.5 L 4 8.5 Z";

  return (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" aria-hidden>
      <path d={hex}
        fill={color} fillOpacity={fillOpacity}
        stroke={color} strokeWidth="1.5" strokeLinejoin="round" />
      {level === 3 && (
        <path d="M 9.5 15 L 13.5 19 L 21 11"
          stroke="oklch(1 0 0)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      )}
    </svg>
  );
}

const VARIANTS: Array<{ id: number; name: string; render: (level: Level) => JSX.Element }> = [
  { id: 0, name: "Capsule",   render: (l) => <V0Dots     level={l} /> },
  { id: 1, name: "Pills",     render: (l) => <V1Pills    level={l} /> },
  { id: 2, name: "Ring",      render: (l) => <VTrazo     level={l} /> },
  { id: 3, name: "Circles",   render: (l) => <VPuntos    level={l} /> },
  { id: 5, name: "Car build", render: (l) => <VCarBuild  level={l} /> },
  { id: 6, name: "Timeline",  render: (l) => <VTimeline  level={l} /> },
  { id: 7, name: "Hexágono",  render: (l) => <VHexagono  level={l} /> },
];

export default function InfoGeneralPreviewPage(): JSX.Element {
  return (
    <div style={{
      minHeight: "100vh",
      backgroundColor: C.section,
      padding: 48,
      display: "flex",
      justifyContent: "center",
    }}>
      <div style={{ width: 640 }}>

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

      </div>
    </div>
  );
}
