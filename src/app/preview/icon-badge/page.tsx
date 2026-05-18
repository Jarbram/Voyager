"use client";
import type { JSX, ReactNode } from "react";

const PJS  = "'Plus Jakarta Sans', sans-serif";
const MONO = "'Roboto Mono', monospace";

const C = {
  vault:   "var(--color-vault-mid, #3B1782)",
  label:   "var(--color-text-muted, oklch(0.38 0.04 280 / 50%))",
  section: "var(--color-surface-section, #F2F4F3)",
  card:    "var(--color-surface-card, #fff)",
};

type Size = "S" | "M" | "L";
const SIZES: Array<{ key: Size; px: number }> = [
  { key: "S", px: 12 },
  { key: "M", px: 16 },
  { key: "L", px: 20 },
];

type IconProps = { px: number; color: string };
type IconFC    = (props: IconProps) => JSX.Element;

// ── Shared sub-components ─────────────────────────────────────────────────────

function VaultChip({ children }: { children: ReactNode }): JSX.Element {
  return (
    <div style={{
      display: "inline-flex", alignItems: "center", gap: 6,
      padding: "8px 12px", borderRadius: 8,
      backgroundColor: C.vault,
      border: "1px solid oklch(1 0 0 / 10%)",
    }}>
      {children}
    </div>
  );
}

function NumLabel({ n }: { n: number }): JSX.Element {
  return (
    <span style={{
      fontFamily: MONO, fontSize: 13, fontWeight: 500,
      fontVariantNumeric: "tabular-nums",
      color: "oklch(1 0 0 / 85%)", minWidth: 20, textAlign: "center",
    }}>
      {n}
    </span>
  );
}

function CircleWrap({ px, children }: { px: number; children: ReactNode }): JSX.Element {
  const diameter = px + 16;
  return (
    <div style={{
      width: diameter, height: diameter, borderRadius: "50%",
      backgroundColor: "oklch(1 0 0)",
      display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
    }}>
      {children}
    </div>
  );
}

function SectionTitle({ color, children }: { color: string; children: ReactNode }): JSX.Element {
  return (
    <p style={{
      fontFamily: PJS, fontSize: 11, fontWeight: 600,
      letterSpacing: "0.08em", textTransform: "uppercase",
      color, marginBottom: 8,
      display: "flex", alignItems: "center", gap: 6,
    }}>
      <span style={{ fontSize: 10 }}>✦</span>
      {children}
    </p>
  );
}

/** Single-icon chip: number + circle icon */
function SingleChip({ n, Icon, px }: { n: number; Icon: IconFC; px: number }): JSX.Element {
  return (
    <VaultChip>
      <NumLabel n={n} />
      <CircleWrap px={px}>
        <Icon px={px} color={C.vault} />
      </CircleWrap>
    </VaultChip>
  );
}

function ComboStrip({ ViewIcon, AudIcon, px }: { ViewIcon: IconFC; AudIcon: IconFC; px: number }): JSX.Element {
  return (
    <VaultChip>
      <NumLabel n={93} />
      <CircleWrap px={px}>
        <ViewIcon px={px} color={C.vault} />
      </CircleWrap>
      <NumLabel n={5} />
      <CircleWrap px={px}>
        <AudIcon px={px} color={C.vault} />
      </CircleWrap>
    </VaultChip>
  );
}

// ── VISTAS / ALCANCE — alternativas al ojo ────────────────────────────────────

/** Señal — ondas wifi */
function VSenal({ px, color }: IconProps): JSX.Element {
  return (
    <svg width={px} height={px} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M5 12.5C6.8 10.5 9.2 9.5 12 9.5C14.8 9.5 17.2 10.5 19 12.5"
        stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M8 15.5C9.2 14.2 10.5 13.5 12 13.5C13.5 13.5 14.8 14.2 16 15.5"
        stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="12" cy="18" r="1.5" fill={color} />
      <path d="M2 9C4.8 6.2 8.2 4.5 12 4.5C15.8 4.5 19.2 6.2 22 9"
        stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
    </svg>
  );
}

/** Cursor — puntero */
function VCursor({ px, color }: IconProps): JSX.Element {
  return (
    <svg width={px} height={px} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M5 4L10.5 19L13 13L19 10.5L5 4Z"
        stroke={color} strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round" />
      <path d="M13 13L19 19"
        stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

/** Impacto — rayo */
function VImpacto({ px, color }: IconProps): JSX.Element {
  return (
    <svg width={px} height={px} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M13 3L5 13H12L11 21L19 11H12L13 3Z"
        stroke={color} strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}

/** Antena — flecha arriba */
function VAntena({ px, color }: IconProps): JSX.Element {
  return (
    <svg width={px} height={px} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M12 19V5M12 5L7 10M12 5L17 10"
        stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Alcance — cruz / más */
function VAlcance({ px, color }: IconProps): JSX.Element {
  return (
    <svg width={px} height={px} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M12 5V19M5 12H19"
        stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

/** Tendencia — línea con pico */
function VTendencia({ px, color }: IconProps): JSX.Element {
  return (
    <svg width={px} height={px} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M3 17L8 11L12 14L17 7L21 10"
        stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M17 7H21V11"
        stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const VISTAS: Array<{ Icon: IconFC; label: string }> = [
  { Icon: VSenal,    label: "Señal"     },
  { Icon: VCursor,   label: "Cursor"    },
  { Icon: VImpacto,  label: "Impacto"   },
  { Icon: VAntena,   label: "Antena"    },
  { Icon: VAlcance,  label: "Alcance"   },
  { Icon: VTendencia,label: "Tendencia" },
];

// ── PERSONAS / AUDIENCIA — alternativas a la silueta ─────────────────────────

/** Chat — burbuja */
function AChat({ px, color }: IconProps): JSX.Element {
  return (
    <svg width={px} height={px} viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3" y="4" width="14" height="11" rx="3"
        stroke={color} strokeWidth="1.5" />
      <path d="M7 19L10 15H17"
        stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="13" y="8" width="8" height="8" rx="2.5"
        stroke={color} strokeWidth="1.2" opacity="0.5" />
    </svg>
  );
}

/** Comunidad — escudo */
function AComunidad({ px, color }: IconProps): JSX.Element {
  return (
    <svg width={px} height={px} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M12 3L4 6V12C4 16.5 7.5 20 12 21C16.5 20 20 16.5 20 12V6L12 3Z"
        stroke={color} strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M9 12L11 14L15 10"
        stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Red — nodos conectados */
function ARed({ px, color }: IconProps): JSX.Element {
  return (
    <svg width={px} height={px} viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="2.5" stroke={color} strokeWidth="1.4" />
      <circle cx="5"  cy="7"  r="2"   stroke={color} strokeWidth="1.2" opacity="0.7" />
      <circle cx="19" cy="7"  r="2"   stroke={color} strokeWidth="1.2" opacity="0.7" />
      <circle cx="5"  cy="17" r="2"   stroke={color} strokeWidth="1.2" opacity="0.7" />
      <circle cx="19" cy="17" r="2"   stroke={color} strokeWidth="1.2" opacity="0.7" />
      <line x1="7" y1="8.2"   x2="10.3" y2="10.8" stroke={color} strokeWidth="1.2" opacity="0.5" />
      <line x1="17" y1="8.2"  x2="13.7" y2="10.8" stroke={color} strokeWidth="1.2" opacity="0.5" />
      <line x1="7" y1="15.8"  x2="10.3" y2="13.2" stroke={color} strokeWidth="1.2" opacity="0.5" />
      <line x1="17" y1="15.8" x2="13.7" y2="13.2" stroke={color} strokeWidth="1.2" opacity="0.5" />
    </svg>
  );
}

/** Audiencia — diana / target */
function AAudiencia({ px, color }: IconProps): JSX.Element {
  return (
    <svg width={px} height={px} viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="9"   stroke={color} strokeWidth="1.3" opacity="0.4" />
      <circle cx="12" cy="12" r="5.5" stroke={color} strokeWidth="1.4" opacity="0.7" />
      <circle cx="12" cy="12" r="2.2" fill={color} />
    </svg>
  );
}

/** Asistentes — pantalla / monitor */
function AAsistentes({ px, color }: IconProps): JSX.Element {
  return (
    <svg width={px} height={px} viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3" y="4" width="18" height="12" rx="2.5"
        stroke={color} strokeWidth="1.5" />
      <path d="M8 20H16M12 16V20"
        stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="12" cy="10" r="2.5" stroke={color} strokeWidth="1.3" />
    </svg>
  );
}

/** Reacciones — corazón */
function AReacciones({ px, color }: IconProps): JSX.Element {
  return (
    <svg width={px} height={px} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M12 19C12 19 4 14.5 4 9C4 6.8 5.8 5 8 5C9.5 5 10.8 5.8 12 7C13.2 5.8 14.5 5 16 5C18.2 5 20 6.8 20 9C20 14.5 12 19 12 19Z"
        stroke={color} strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

const AUDIENCIA: Array<{ Icon: IconFC; label: string }> = [
  { Icon: AChat,       label: "Chat"       },
  { Icon: AComunidad,  label: "Comunidad"  },
  { Icon: ARed,        label: "Red"        },
  { Icon: AAudiencia,  label: "Audiencia"  },
  { Icon: AAsistentes, label: "Asistentes" },
  { Icon: AReacciones, label: "Reacciones" },
];

// ── Combo data (existing eye icons kept for combos section) ───────────────────

function E0({ px, color }: IconProps): JSX.Element {
  return (
    <svg width={px} height={px} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M2.5 12C2.5 12 6.5 5 12 5C17.5 5 21.5 12 21.5 12C21.5 12 17.5 19 12 19C6.5 19 2.5 12 2.5 12Z"
        stroke={color} strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round" />
      <circle cx="12" cy="12" r="3" stroke={color} strokeWidth="1.5" />
    </svg>
  );
}

function G0({ px, color }: IconProps): JSX.Element {
  return (
    <svg width={px} height={px} viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="8" r="3" stroke={color} strokeWidth="1.5" />
      <path d="M6.5 20C6.5 16.5 9 14.5 12 14.5C15 14.5 17.5 16.5 17.5 20"
        stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="5"  cy="9.5" r="2.5" stroke={color} strokeWidth="1.5" opacity="0.5" />
      <path d="M2.5 18C2.5 16 3.5 15 5 15" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      <circle cx="19" cy="9.5" r="2.5" stroke={color} strokeWidth="1.5" opacity="0.5" />
      <path d="M21.5 18C21.5 16 20.5 15 19 15" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
    </svg>
  );
}

type ComboEntry = { ViewIcon: IconFC; AudIcon: IconFC; label: string };
const COMBOS: Array<ComboEntry> = [
  { ViewIcon: VSenal,     AudIcon: AAudiencia, label: "Señal × Audiencia"   },
  { ViewIcon: VTendencia, AudIcon: ARed,       label: "Tendencia × Red"     },
  { ViewIcon: VAlcance,   AudIcon: AChat,      label: "Alcance × Chat"      },
  { ViewIcon: E0,         AudIcon: G0,         label: "Ojo × Trío"          },
];

// ── Eye icons (full set for original combos section) ─────────────────────────

function E1({ px, color }: IconProps): JSX.Element {
  return (
    <svg width={px} height={px} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M2.5 12C2.5 12 6.5 5 12 5C17.5 5 21.5 12 21.5 12C21.5 12 17.5 19 12 19C6.5 19 2.5 12 2.5 12Z"
        stroke={color} strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round" />
      <circle cx="12" cy="12" r="3.5" fill={color} />
      <circle cx="11" cy="11" r="1" fill="oklch(1 0 0 / 50%)" />
    </svg>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// PAGE
// ═══════════════════════════════════════════════════════════════════════════════
export default function IconBadgePage(): JSX.Element {
  const CARD_STYLE = {
    display: "flex", flexDirection: "column" as const, alignItems: "center", gap: 10,
    padding: 16, borderRadius: 10,
    backgroundColor: C.card,
    boxShadow: "0 2px 8px oklch(0.22 0.18 285 / 6%)",
  };

  const GRID6 = { display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 12 };

  const LABEL_STYLE = {
    fontFamily: PJS, fontSize: 10, fontWeight: 500,
    color: C.label, textAlign: "center" as const,
  };

  return (
    <div style={{
      minHeight: "100vh",
      backgroundColor: C.section,
      padding: 48,
      display: "flex",
      justifyContent: "center",
    }}>
      <div style={{ width: 840 }}>

        {/* ── Header ──────────────────────────────────────────────────────── */}
        <p style={{
          fontFamily: PJS, fontSize: 11, fontWeight: 600,
          letterSpacing: "0.08em", textTransform: "uppercase",
          color: "var(--color-live, #ED8936)",
          marginBottom: 48,
          display: "flex", alignItems: "center", gap: 6,
        }}>
          <span style={{ fontSize: 10 }}>✦</span>
          IconBadge — variaciones por concepto
        </p>

        {/* ── VISTAS / ALCANCE ────────────────────────────────────────────── */}
        <div style={{ marginBottom: 48 }}>
          <p style={{
            fontFamily: PJS, fontSize: 10, fontWeight: 600,
            letterSpacing: "0.10em", textTransform: "uppercase",
            color: C.label, marginBottom: 2,
          }}>
            VISTAS / ALCANCE — ALTERNATIVAS AL OJO
          </p>
          <div style={{ height: 1, backgroundColor: "oklch(0.22 0.18 285 / 8%)", marginBottom: 20 }} />
          <div style={GRID6}>
            {VISTAS.map(function renderVista({ Icon, label }) {
              return (
                <div key={label} style={CARD_STYLE}>
                  <SingleChip n={93} Icon={Icon} px={16} />
                  <span style={LABEL_STYLE}>{label}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── PERSONAS / AUDIENCIA ────────────────────────────────────────── */}
        <div style={{ marginBottom: 48 }}>
          <p style={{
            fontFamily: PJS, fontSize: 10, fontWeight: 600,
            letterSpacing: "0.10em", textTransform: "uppercase",
            color: C.label, marginBottom: 2,
          }}>
            PERSONAS / AUDIENCIA — ALTERNATIVAS A LA SILUETA
          </p>
          <div style={{ height: 1, backgroundColor: "oklch(0.22 0.18 285 / 8%)", marginBottom: 20 }} />
          <div style={GRID6}>
            {AUDIENCIA.map(function renderAud({ Icon, label }) {
              return (
                <div key={label} style={CARD_STYLE}>
                  <SingleChip n={5} Icon={Icon} px={16} />
                  <span style={LABEL_STYLE}>{label}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── COMBINACIONES SUGERIDAS ─────────────────────────────────────── */}
        <div style={{ marginBottom: 48 }}>
          <p style={{
            fontFamily: PJS, fontSize: 10, fontWeight: 600,
            letterSpacing: "0.10em", textTransform: "uppercase",
            color: C.label, marginBottom: 2,
          }}>
            COMBINACIONES SUGERIDAS
          </p>
          <div style={{ height: 1, backgroundColor: "oklch(0.22 0.18 285 / 8%)", marginBottom: 20 }} />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 12 }}>
            {COMBOS.map(function renderCombo({ ViewIcon, AudIcon, label }) {
              return (
                <div key={label} style={{
                  ...CARD_STYLE,
                  flexDirection: "row", justifyContent: "flex-start", gap: 12, padding: "12px 16px",
                }}>
                  <ComboStrip ViewIcon={ViewIcon} AudIcon={AudIcon} px={16} />
                  <span style={{ fontFamily: PJS, fontSize: 10, color: C.label }}>
                    {label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── COMBOS OJO+PERSONA · tamaños ────────────────────────────────── */}
        <div>
          <p style={{
            fontFamily: PJS, fontSize: 10, fontWeight: 600,
            letterSpacing: "0.10em", textTransform: "uppercase",
            color: C.label, marginBottom: 2,
          }}>
            COMBO SELECCIONADO · LOS 3 TAMAÑOS (Pupila fill × Trío)
          </p>
          <div style={{ height: 1, backgroundColor: "oklch(0.22 0.18 285 / 8%)", marginBottom: 20 }} />
          <div style={{ display: "flex", alignItems: "flex-end", gap: 32 }}>
            {SIZES.map(function renderSizeCombo({ key, px }) {
              return (
                <div key={key} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
                  <ComboStrip ViewIcon={E1} AudIcon={G0} px={px} />
                  <span style={{ fontFamily: MONO, fontSize: 9, color: C.label, letterSpacing: "0.04em" }}>
                    {key} · {px}px
                  </span>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
