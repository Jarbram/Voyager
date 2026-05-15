"use client";

import { useEffect, useState } from "react";
import type { CSSProperties, JSX } from "react";

const V = {
  brand:  "var(--color-vault-dark, #2E0F70)",
  card:   "var(--color-surface-card, #FFFFFF)",
  onDark: "var(--color-text-on-dark, #FFFFFF)",
} as const;

const FONT = "var(--voyager-font-display, 'Plus Jakarta Sans', sans-serif)";

// gradientdef-hover → vault gradient (fill + border comparten el mismo gradiente)
// Técnica padding-box + border-box: el borde Y el relleno son el mismo gradiente → seamless
const GRADIENT_HOVER =
  "linear-gradient(135deg, var(--color-vault, #22005C) 0%, var(--color-vault-mid, #3B1782) 100%)";

const GRADIENT_HOVER_BG = [
  `${GRADIENT_HOVER} padding-box`,
  `${GRADIENT_HOVER} border-box`,
].join(", ");

// gradientdef-pressed → versión oscurecida del vault gradient (l - 0.06 en OKLCH)
// Usado en estado Focus — sin opacity hack, gradiente propio
const GRADIENT_PRESSED =
  "linear-gradient(135deg, oklch(0.16 0.18 285) 0%, oklch(0.24 0.20 285) 100%)";

const GRADIENT_PRESSED_BG = [
  `${GRADIENT_PRESSED} padding-box`,
  `${GRADIENT_PRESSED} border-box`,
].join(", ");

// #99A1AF → oklch(0.68 0.02 252) — color de iconos y texto en estado focus
const FOCUS_CONTENT_COLOR = "oklch(0.68 0.02 252)";

export type DetalleOfertaBarState = "default" | "hover" | "pressed";

interface DetalleOfertaBarProps {
  label?: string;
  onClick?: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
  forceState?: DetalleOfertaBarState;
  onStateChange?: (state: DetalleOfertaBarState) => void;
}

function resolveState(
  forceState: DetalleOfertaBarState | undefined,
  hovered: boolean,
  pressed: boolean,
): DetalleOfertaBarState {
  if (forceState !== undefined) return forceState;
  if (pressed) return "pressed";
  if (hovered) return "hover";
  return "default";
}

/*
  Estructura pixel-perfect (Figma spec):

  Default:
  ┌─────────────────────────────────────────┬──────────────────────┐▐
  │  [icon]  Detalle de la oferta           │  [icon]  Descarga    │▐  ← border-right 8px brand
  └─────────────────────────────────────────┴──────────────────────┘▐
    bg: white (card)                          bg: white (hereda)    border: 1px brand resto

  Hover / Focus:
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
    bg: brand (uniforme) — texto y icons blancos — Focus agrega opacity 0.5
*/

function buildContainerStyle(state: DetalleOfertaBarState): CSSProperties {
  const base: CSSProperties = {
    display:      "flex",
    alignItems:   "stretch",
    borderRadius: "8px",
    overflow:     "hidden",
    height:       "64px",
    cursor:       "pointer",
    outline:      "none",
    width:        "100%",
    boxSizing:    "border-box",
    transition:   "background 150ms ease, border-color 150ms ease, opacity 150ms ease",
  };

  if (state === "default") {
    return {
      ...base,
      background:   V.card,
      borderStyle:  "solid",
      borderColor:  V.brand,
      borderWidth:  "1px 8px 1px 1px", // top right bottom left — 8px = acento derecho
    };
  }

  if (state === "hover") {
    return {
      ...base,
      background:  GRADIENT_HOVER_BG,
      borderStyle: "solid",
      borderColor: "transparent", // gradiente cubre borde via border-box
      borderWidth: "1px 8px 1px 1px",
    };
  }

  // pressed — gradientdef-pressed (más oscuro)
  return {
    ...base,
    background:  GRADIENT_PRESSED_BG,
    borderStyle: "solid",
    borderColor: "transparent",
    borderWidth: "1px 8px 1px 1px",
  };
}

function buildLeftStyle(state: DetalleOfertaBarState): CSSProperties {
  const base: CSSProperties = {
    flex:       1,
    display:    "flex",
    alignItems: "center",
    gap:        "8px",
    padding:    "12px",
    transition: "color 150ms ease",
    fontFamily: FONT,
    fontSize:   "14px",
    fontWeight: 700,
    lineHeight: "1.25",
    // Sin background — hereda del container
  };

  if (state === "default") {
    return { ...base, color: V.brand };
  }

  if (state === "hover") {
    return { ...base, color: V.onDark };
  }

  return { ...base, color: FOCUS_CONTENT_COLOR }; // pressed
}

function buildDividerStyle(state: DetalleOfertaBarState): CSSProperties {
  const base: CSSProperties = {
    width:      "1px",
    alignSelf:  "stretch",
    flexShrink: 0,
    transition: "background 150ms ease",
  };

  if (state === "default") {
    return { ...base, background: V.brand };
  }

  if (state === "hover") {
    return { ...base, background: "oklch(1 0 0 / 30%)" };
  }

  return { ...base, background: "oklch(0.68 0.02 252 / 30%)" };
}

function buildRightStyle(state: DetalleOfertaBarState): CSSProperties {
  const base: CSSProperties = {
    display:        "flex",
    flexDirection:  "column",
    alignItems:     "center",
    justifyContent: "center",
    gap:            "4px",
    padding:        "12px 16px",
    transition:     "color 150ms ease",
    fontFamily:     FONT,
    fontSize:       "14px",
    fontWeight:     700,
    lineHeight:     "1.25",
    flexShrink:     0,
    // Sin background — hereda del container (blanco en default, brand en hover/focus)
  };

  if (state === "default") {
    return { ...base, color: V.brand };
  }

  if (state === "hover") {
    return { ...base, color: V.onDark };
  }

  return { ...base, color: FOCUS_CONTENT_COLOR }; // pressed
}

export default function DetalleOfertaBar({
  label = "Detalle de la oferta",
  onClick,
  onFocus: onFocusProp,
  onBlur: onBlurProp,
  forceState,
  onStateChange,
}: DetalleOfertaBarProps): JSX.Element {
  const [hovered, setHovered] = useState(false);
  const [pressed, setPressed] = useState(false);

  function handleMouseEnter(): void {
    setHovered(true);
  }

  function handleMouseLeave(): void {
    setHovered(false);
    setPressed(false);
  }

  function handleMouseDown(): void {
    setPressed(true);
  }

  function handleMouseUp(): void {
    setPressed(false);
  }

  function handleFocus(): void {
    if (onFocusProp) onFocusProp();
  }

  function handleBlur(): void {
    if (onBlurProp) onBlurProp();
  }

  const state = resolveState(forceState, hovered, pressed);

  useEffect(() => {
    onStateChange?.(state);
  // onStateChange es setter de useState — estable por definición de React
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onClick}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      style={buildContainerStyle(state)}
    >
      <div style={buildLeftStyle(state)}>
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden
          style={{ flexShrink: 0, width: "24px", height: "24px" }}
        >
          <path d="M16 2H5.3C4.3 2 3.5 2.8 3.5 3.8V16.5H5.3V3.8H16V2ZM15.1 5.6L20.5 11.1V20.2C20.5 21.2 19.7 22 18.7 22H8.9C7.9 22 7.1 21.2 7.1 20.2L7.1 7.5C7.1 6.5 7.9 5.6 8.9 5.6H15.1ZM14.2 12H19.2L14.2 7V12Z" />
        </svg>
        <span>{label}</span>
      </div>

      <div style={buildDividerStyle(state)} aria-hidden />

      <div style={buildRightStyle(state)}>
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden
          style={{ width: "24px", height: "24px" }}
        >
          <path d="M19.7427 21.9943C20.2963 21.9943 20.745 21.5455 20.745 20.9919V20.498C20.745 19.9445 20.2963 19.4957 19.7427 19.4957L4.25739 19.4957C3.70382 19.4957 3.25506 19.9445 3.25506 20.498L3.25506 20.9919C3.25506 21.5455 3.70382 21.9943 4.25739 21.9943H19.7427ZM20.2172 10.7932C20.9657 10.2051 20.5498 9.0027 19.5979 9.0027L16.0026 9.0027C15.449 9.0027 15.0003 8.55394 15.0003 8.00038V3.00806C15.0003 2.45449 14.5515 2.00574 13.998 2.00574L10.006 2.00574C9.45247 2.00574 9.00372 2.45449 9.00372 3.00806L9.00372 8.00037C9.00372 8.55394 8.55496 9.0027 8.00139 9.0027L4.40605 9.0027C3.45416 9.0027 3.03831 10.2051 3.78679 10.7932L11.3827 16.7614C11.7462 17.047 12.2578 17.047 12.6212 16.7614L20.2172 10.7932Z" />
        </svg>
        <span>Descarga</span>
      </div>
    </div>
  );
}
