"use client";

import { useState } from "react";
import type { CSSProperties, JSX } from "react";
import type { ButtonPrimaryNegotiableProps, ButtonPrimaryNegotiableState } from "./types";

const FONT = "var(--vmc-font-display, 'Plus Jakarta Sans', sans-serif)";

const GRADIENT_DEF =
  "linear-gradient(to right, var(--color-cyan-500) 0%, var(--color-cyan-600) 50%, var(--color-cyan-700) 100%)";
const GRADIENT_HOVER =
  "linear-gradient(to right, var(--color-cyan-600) 0%, var(--color-cyan-700) 50%, var(--color-cyan-800) 100%)";
const GRADIENT_PRESSED =
  "linear-gradient(to right, var(--color-cyan-800) 0%, var(--color-cyan-900) 100%)";
const BG_DISABLED = "var(--color-neutral-400)";

function resolveState(
  forceState: ButtonPrimaryNegotiableState | undefined,
  hovered: boolean,
  pressed: boolean,
): ButtonPrimaryNegotiableState {
  if (forceState !== undefined) return forceState;
  if (pressed) return "pressed";
  if (hovered) return "hover";
  return "default";
}

function getBackground(state: ButtonPrimaryNegotiableState): string {
  if (state === "hover") return GRADIENT_HOVER;
  if (state === "pressed") return GRADIENT_PRESSED;
  if (state === "disabled") return BG_DISABLED;
  return GRADIENT_DEF;
}

function getTextColor(state: ButtonPrimaryNegotiableState): string {
  if (state === "hover") return "var(--color-neutral-500)";
  if (state === "pressed") return "var(--color-neutral-700)";
  if (state === "disabled") return "var(--color-neutral-500)";
  return "var(--color-text-inverse)";
}

function buildStyle(state: ButtonPrimaryNegotiableState): CSSProperties {
  return {
    width:          227,
    height:         47,
    borderRadius:   8,
    border:         "none",
    cursor:         state === "disabled" ? "not-allowed" : "pointer",
    background:     getBackground(state),
    color:          getTextColor(state),
    fontFamily:     FONT,
    fontSize:       16,
    fontWeight:     700,
    letterSpacing:  "0.02em",
    display:        "flex",
    alignItems:     "center",
    justifyContent: "center",
    outline:        "none",
    flexShrink:     0,
    transition:     "background 150ms cubic-bezier(0.3, 0, 0, 1), color 150ms ease",
  };
}

export default function ButtonPrimaryNegotiable({
  label = "Negocia a hora",
  forceState,
  onClick,
}: ButtonPrimaryNegotiableProps): JSX.Element {
  const [hovered, setHovered] = useState(false);
  const [pressed, setPressed] = useState(false);

  const state = resolveState(forceState, hovered, pressed);
  const isDisabled = state === "disabled";

  function handleMouseEnter(): void {
    if (forceState !== undefined) return;
    setHovered(true);
  }

  function handleMouseLeave(): void {
    if (forceState !== undefined) return;
    setHovered(false);
    setPressed(false);
  }

  function handleMouseDown(): void {
    if (forceState !== undefined) return;
    setPressed(true);
  }

  function handleMouseUp(): void {
    if (forceState !== undefined) return;
    setPressed(false);
  }

  return (
    <button
      style={buildStyle(state)}
      disabled={isDisabled}
      aria-disabled={isDisabled}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      {label}
    </button>
  );
}
