"use client";

import { useState } from "react";
import type { CSSProperties, JSX } from "react";
import type { BackButtonNegotiableProps, BackButtonNegotiableState } from "./types";

const GRADIENT_HOVER =
  "linear-gradient(to right, var(--color-cyan-500) 0%, var(--color-cyan-600) 50%, var(--color-cyan-700) 100%)";
const GRADIENT_PRESSED =
  "linear-gradient(to right, var(--color-cyan-600) 0%, var(--color-cyan-700) 50%, var(--color-cyan-800) 100%)";

function resolveState(
  forceState: BackButtonNegotiableState | undefined,
  hovered: boolean,
  pressed: boolean,
): BackButtonNegotiableState {
  if (forceState !== undefined) return forceState;
  if (pressed) return "pressed";
  if (hovered) return "hover";
  return "default";
}

function buildCircleStyle(state: BackButtonNegotiableState): CSSProperties {
  const base: CSSProperties = {
    width:          40,
    height:         40,
    borderRadius:   9999,
    display:        "flex",
    alignItems:     "center",
    justifyContent: "center",
    cursor:         "pointer",
    border:         "none",
    outline:        "none",
    flexShrink:     0,
    transition:     "background 150ms cubic-bezier(0.3, 0, 0, 1)",
    padding:        0,
  };

  if (state === "hover") return { ...base, background: GRADIENT_HOVER };
  if (state === "pressed") return { ...base, background: GRADIENT_PRESSED };
  return { ...base, background: "transparent" };
}

function getIconColor(state: BackButtonNegotiableState): string {
  if (state === "hover")   return "var(--color-neutral-500)";
  if (state === "pressed") return "var(--color-neutral-700)";
  return "var(--color-text-inverse)";
}

export default function BackButtonNegotiable({
  forceState,
  onClick,
  "aria-label": ariaLabel = "Volver",
}: BackButtonNegotiableProps): JSX.Element {
  const [hovered, setHovered] = useState(false);
  const [pressed, setPressed] = useState(false);

  const state = resolveState(forceState, hovered, pressed);

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
      style={buildCircleStyle(state)}
      aria-label={ariaLabel}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke={getIconColor(state)}
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
        style={{ width: 20, height: 20 }}
      >
        <path d="M15 18l-6-6 6-6" />
      </svg>
    </button>
  );
}
