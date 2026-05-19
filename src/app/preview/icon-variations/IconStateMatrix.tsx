"use client";
import React, { useState } from "react";
import type { JSX } from "react";
import { PJS } from "./constants";

type SizeKey = "sm" | "md" | "lg";
type ActivationCounts = Record<SizeKey, number>;

export interface IconStateMatrixProps {
  outlineIcon: (size: number, color: string) => JSX.Element;
  solidIcon:   (size: number, color: string) => JSX.Element;
  ariaLabel:   string;
}

const VAULT_COL  = "var(--vmc-color-vault-600, oklch(0.38 0.20 285))";
const ACTIVE_COL = "oklch(1 0 0 / 0.92)";

const SIZES: Array<{ key: SizeKey; label: string; iconSize: number }> = [
  { key: "sm", label: "Small",  iconSize: 13 },
  { key: "md", label: "Medium", iconSize: 19 },
  { key: "lg", label: "Large",  iconSize: 27 },
];

const CSS = `
.plike {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 9999px;
  border: 1.5px solid transparent;
  box-sizing: border-box;
  cursor: pointer;
  background: var(--color-surface-card, #fff) padding-box;
  box-shadow: 0 2px 8px oklch(0.22 0.18 285 / 8%), inset 0 0 0 1px oklch(0.30 0.20 285 / 18%);
  transition: box-shadow 200ms ease-out, transform 180ms ease-out;
}
.plike svg {
  transition: transform 420ms cubic-bezier(0.34, 1.56, 0.64, 1);
  transform-origin: center;
}
.plike:hover:not(:disabled):not(.plike--active) {
  box-shadow: 0 4px 14px oklch(0.22 0.18 285 / 14%), inset 0 0 0 1px oklch(0.30 0.20 285 / 38%);
  transform: scale(1.04);
}
.plike:active:not(:disabled) {
  transform: scale(0.96);
  transition: box-shadow 60ms ease-in, transform 60ms ease-in;
}
.plike:active:not(:disabled) svg {
  transform: scale(0.58);
  transition: transform 65ms cubic-bezier(0.55, 0, 1, 0.45);
}
.plike--sm  { width: 28px; height: 28px; }
.plike--md  { width: 40px; height: 40px; }
.plike--lg  { width: 56px; height: 56px; }
.plike--active {
  background:
    linear-gradient(135deg, oklch(0.45 0.20 285) 0%, oklch(0.30 0.20 285) 100%) padding-box,
    linear-gradient(135deg,
      oklch(0.93 0.08 75)  0%,
      oklch(0.97 0.03 80)  28%,
      oklch(1 0 0 / 0.55)  48%,
      oklch(0.82 0.14 285) 70%,
      oklch(0.88 0.10 290) 100%
    ) border-box;
  border: 2px solid transparent;
  box-shadow: 0 3px 14px oklch(0.30 0.20 285 / 0.40), inset 0 1px 0 rgb(100% 100% 100% / 0.22);
}
.plike--active:hover {
  box-shadow: 0 6px 22px oklch(0.30 0.20 285 / 0.55), inset 0 1px 0 rgb(100% 100% 100% / 0.22);
  transform: scale(1.06);
}
.plike--disabled { opacity: 0.30; cursor: not-allowed; }
.plike--skeleton {
  background: oklch(0.91 0.004 220);
  box-shadow: none;
  border-color: transparent;
  cursor: default;
}
@keyframes plike-heart-pop {
  0%   { transform: scale(0.4); }
  100% { transform: scale(1); }
}
.plike--popping svg {
  animation: plike-heart-pop 0.38s cubic-bezier(0.34, 1.56, 0.64, 1);
}
`;

const GRID: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "72px 1fr 1fr 1fr 1fr",
  alignItems: "center",
};

const CTR: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
};

function buildClass(size: SizeKey, extra?: string): string {
  const base = "plike plike--" + size;
  if (extra) { return base + " " + extra; }
  return base;
}

function ColLabel({ text }: { text: string }): JSX.Element {
  return (
    <p style={{
      fontFamily: PJS, fontSize: 10, fontWeight: 700,
      textTransform: "uppercase", letterSpacing: "0.08em",
      color: "oklch(0.55 0.02 220)", margin: 0, textAlign: "center",
    }}>
      {text}
    </p>
  );
}

export function IconStateMatrix({ outlineIcon, solidIcon, ariaLabel }: IconStateMatrixProps): JSX.Element {
  const [demo, setDemo] = useState<Record<SizeKey, boolean>>({ sm: false, md: false, lg: false });
  const [activationCounts, setActivationCounts] = useState<ActivationCounts>({ sm: 0, md: 0, lg: 0 });

  function handleDemoClick(event: React.MouseEvent<HTMLButtonElement>): void {
    const key = event.currentTarget.dataset.size as SizeKey;
    const nextActive = !demo[key];
    setDemo({ ...demo, [key]: nextActive });
    if (nextActive) {
      setActivationCounts({ ...activationCounts, [key]: activationCounts[key] + 1 });
    }
  }

  return (
    <div style={{
      backgroundColor: "var(--color-surface-card, #fff)",
      padding: "20px 24px", borderRadius: 8,
      border: "1px solid oklch(0.22 0.18 285 / 8%)", marginTop: 32,
    }}>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />

      <div style={{ ...GRID, marginBottom: 16 }}>
        <span />
        <ColLabel text="Default"  />
        <ColLabel text="Active"   />
        <ColLabel text="Disabled" />
        <ColLabel text="Skeleton" />
      </div>

      {SIZES.map(function renderRow({ key, label, iconSize }): JSX.Element {
        return (
          <div key={key} style={{ ...GRID, marginBottom: 20 }}>
            <p style={{ fontFamily: PJS, fontSize: 11, fontWeight: 600, color: "oklch(0.38 0.04 280 / 70%)", margin: 0 }}>
              {label}
            </p>

            <div style={CTR}>
              <button className={buildClass(key)} type="button" aria-label={ariaLabel}>
                {outlineIcon(iconSize, VAULT_COL)}
              </button>
            </div>

            <div style={CTR}>
              <button className={buildClass(key, "plike--active")} type="button" aria-label={ariaLabel}>
                {solidIcon(iconSize, ACTIVE_COL)}
              </button>
            </div>

            <div style={CTR}>
              <button className={buildClass(key, "plike--disabled")} type="button" aria-label={ariaLabel} disabled>
                {outlineIcon(iconSize, VAULT_COL)}
              </button>
            </div>

            <div style={CTR}>
              <button className={buildClass(key, "plike--skeleton")} type="button" aria-label={ariaLabel} />
            </div>
          </div>
        );
      })}

      <div style={{ borderTop: "1px solid oklch(0.22 0.18 285 / 8%)", paddingTop: 16, marginTop: 4 }}>
        <p style={{
          fontFamily: PJS, fontSize: 10, fontWeight: 700, textTransform: "uppercase",
          letterSpacing: "0.08em", color: "oklch(0.55 0.02 220)", margin: "0 0 14px",
        }}>
          Demo interactivo — click para toggle
        </p>
        <div style={{ display: "flex", gap: 24, alignItems: "center", justifyContent: "center", padding: "16px 0" }}>
          {SIZES.map(function renderDemoBtn({ key, iconSize }): JSX.Element {
            const isActive = demo[key];
            let btnIcon: JSX.Element;
            let btnClass: string;
            let spanKey: string | number;
            if (isActive) {
              btnIcon  = solidIcon(iconSize, ACTIVE_COL);
              btnClass = buildClass(key, "plike--active plike--popping");
              spanKey  = activationCounts[key];
            } else {
              btnIcon  = outlineIcon(iconSize, VAULT_COL);
              btnClass = buildClass(key);
              spanKey  = "off";
            }
            return (
              <button
                key={key}
                data-size={key}
                className={btnClass}
                type="button"
                aria-label={ariaLabel}
                onClick={handleDemoClick}
              >
                <span key={spanKey} style={{ display: "contents" }}>
                  {btnIcon}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ─── Square variant ───────────────────────────────────────────────────────────

const SQ_CSS = `
.psq {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  border: 2px solid transparent;
  box-sizing: border-box;
  cursor: pointer;
  background: var(--color-surface-card, #fff) padding-box;
  box-shadow: 0 2px 8px oklch(0.22 0.18 285 / 8%), inset 0 0 0 1px oklch(0.30 0.20 285 / 18%);
  transition: box-shadow 200ms ease-out, transform 180ms ease-out;
}
.psq svg {
  transition: transform 420ms cubic-bezier(0.34, 1.56, 0.64, 1);
  transform-origin: center;
}
.psq:hover:not(:disabled):not(.psq--active) {
  box-shadow: 0 4px 14px oklch(0.22 0.18 285 / 14%), inset 0 0 0 1px oklch(0.30 0.20 285 / 38%);
  transform: scale(1.04);
}
.psq:active:not(:disabled) {
  transform: scale(0.96);
  transition: box-shadow 60ms ease-in, transform 60ms ease-in;
}
.psq:active:not(:disabled) svg {
  transform: scale(0.58);
  transition: transform 65ms cubic-bezier(0.55, 0, 1, 0.45);
}
.psq--sm  { width: 40px;  height: 40px;  }
.psq--md  { width: 56px;  height: 56px;  }
.psq--lg  { width: 72px;  height: 72px;  }
.psq--active {
  background:
    linear-gradient(135deg, oklch(0.45 0.20 285) 0%, oklch(0.30 0.20 285) 100%) padding-box,
    linear-gradient(135deg,
      oklch(0.93 0.08 75)  0%,
      oklch(0.97 0.03 80)  28%,
      oklch(1 0 0 / 0.55)  48%,
      oklch(0.82 0.14 285) 70%,
      oklch(0.88 0.10 290) 100%
    ) border-box;
  border: 2px solid transparent;
  box-shadow: 0 3px 14px oklch(0.30 0.20 285 / 0.40), inset 0 1px 0 rgb(100% 100% 100% / 0.22);
}
.psq--active:hover {
  box-shadow: 0 6px 20px oklch(0.30 0.20 285 / 0.55), inset 0 1px 0 rgb(100% 100% 100% / 0.22);
  transform: scale(1.04);
}
.psq--disabled { opacity: 0.30; cursor: not-allowed; }
.psq--skeleton {
  background: oklch(0.91 0.004 220);
  box-shadow: none;
  border-color: transparent;
  cursor: default;
}
@keyframes psq-pop {
  0%   { transform: scale(0.4); }
  100% { transform: scale(1); }
}
.psq--popping svg {
  animation: psq-pop 0.38s cubic-bezier(0.34, 1.56, 0.64, 1);
}
`;

const SQ_SIZES: Array<{ key: SizeKey; label: string; iconSize: number }> = [
  { key: "sm", label: "Small",  iconSize: 16 },
  { key: "md", label: "Medium", iconSize: 24 },
  { key: "lg", label: "Large",  iconSize: 32 },
];

function buildSqClass(size: SizeKey, extra?: string): string {
  const base = "psq psq--" + size;
  if (extra) { return base + " " + extra; }
  return base;
}

export function SquareStateMatrix({ outlineIcon, solidIcon, ariaLabel }: IconStateMatrixProps): JSX.Element {
  const [demo, setDemo] = useState<Record<SizeKey, boolean>>({ sm: false, md: false, lg: false });
  const [activationCounts, setActivationCounts] = useState<ActivationCounts>({ sm: 0, md: 0, lg: 0 });

  function handleDemoClick(event: React.MouseEvent<HTMLButtonElement>): void {
    const key = event.currentTarget.dataset.size as SizeKey;
    const nextActive = !demo[key];
    setDemo({ ...demo, [key]: nextActive });
    if (nextActive) {
      setActivationCounts({ ...activationCounts, [key]: activationCounts[key] + 1 });
    }
  }

  return (
    <div style={{
      backgroundColor: "var(--color-surface-card, #fff)",
      padding: "20px 24px", borderRadius: 8,
      border: "1px solid oklch(0.22 0.18 285 / 8%)", marginTop: 32,
    }}>
      <style dangerouslySetInnerHTML={{ __html: SQ_CSS }} />

      <div style={{ ...GRID, marginBottom: 16 }}>
        <span />
        <ColLabel text="Default"  />
        <ColLabel text="Active"   />
        <ColLabel text="Disabled" />
        <ColLabel text="Skeleton" />
      </div>

      {SQ_SIZES.map(function renderSqRow({ key, label, iconSize }): JSX.Element {
        return (
          <div key={key} style={{ ...GRID, marginBottom: 20 }}>
            <p style={{ fontFamily: PJS, fontSize: 11, fontWeight: 600, color: "oklch(0.38 0.04 280 / 70%)", margin: 0 }}>
              {label}
            </p>
            <div style={CTR}>
              <button className={buildSqClass(key)} type="button" aria-label={ariaLabel}>
                {outlineIcon(iconSize, VAULT_COL)}
              </button>
            </div>
            <div style={CTR}>
              <button className={buildSqClass(key, "psq--active")} type="button" aria-label={ariaLabel}>
                {solidIcon(iconSize, ACTIVE_COL)}
              </button>
            </div>
            <div style={CTR}>
              <button className={buildSqClass(key, "psq--disabled")} type="button" aria-label={ariaLabel} disabled>
                {outlineIcon(iconSize, VAULT_COL)}
              </button>
            </div>
            <div style={CTR}>
              <button className={buildSqClass(key, "psq--skeleton")} type="button" aria-label={ariaLabel} />
            </div>
          </div>
        );
      })}

      <div style={{ borderTop: "1px solid oklch(0.22 0.18 285 / 8%)", paddingTop: 16, marginTop: 4 }}>
        <p style={{
          fontFamily: PJS, fontSize: 10, fontWeight: 700, textTransform: "uppercase",
          letterSpacing: "0.08em", color: "oklch(0.55 0.02 220)", margin: "0 0 14px",
        }}>
          Demo interactivo — click para toggle
        </p>
        <div style={{ display: "flex", gap: 24, alignItems: "center", justifyContent: "center", padding: "16px 0" }}>
          {SQ_SIZES.map(function renderSqDemoBtn({ key, iconSize }): JSX.Element {
            const isActive = demo[key];
            let btnIcon: JSX.Element;
            let btnClass: string;
            let spanKey: string | number;
            if (isActive) {
              btnIcon  = solidIcon(iconSize, ACTIVE_COL);
              btnClass = buildSqClass(key, "psq--active psq--popping");
              spanKey  = activationCounts[key];
            } else {
              btnIcon  = outlineIcon(iconSize, VAULT_COL);
              btnClass = buildSqClass(key);
              spanKey  = "off";
            }
            return (
              <button
                key={key}
                data-size={key}
                className={btnClass}
                type="button"
                aria-label={ariaLabel}
                onClick={handleDemoClick}
              >
                <span key={spanKey} style={{ display: "contents" }}>
                  {btnIcon}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ─── Ghost variant ────────────────────────────────────────────────────────────

const GHOST_VAULT_COL  = "var(--vmc-color-vault-600, oklch(0.38 0.20 285))";
const GHOST_ACTIVE_COL = "var(--vmc-color-vault-700, oklch(0.30 0.20 285))";

const GHOST_BORDER_GRADIENT = `linear-gradient(135deg,
  oklch(0.93 0.08 75)  0%,
  oklch(0.97 0.03 80)  28%,
  oklch(1 0 0 / 0.55)  48%,
  oklch(0.82 0.14 285) 70%,
  oklch(0.88 0.10 290) 100%
)`;

const GHOST_CSS = `
.pghost {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 9999px;
  box-sizing: border-box;
  cursor: pointer;
  background: transparent;
  border: 2px solid transparent;
  box-shadow: inset 0 0 0 1.5px oklch(0.30 0.20 285 / 28%);
  transition: box-shadow 200ms ease-out, transform 180ms ease-out;
}
.pghost svg {
  transition: transform 420ms cubic-bezier(0.34, 1.56, 0.64, 1);
  transform-origin: center;
}
.pghost:hover:not(:disabled):not(.pghost--active) {
  box-shadow: inset 0 0 0 1.5px oklch(0.30 0.20 285 / 55%);
  transform: scale(1.04);
}
.pghost:active:not(:disabled) {
  transform: scale(0.96);
  transition: transform 60ms ease-in;
}
.pghost:active:not(:disabled) svg {
  transform: scale(0.58);
  transition: transform 65ms cubic-bezier(0.55, 0, 1, 0.45);
}
.pghost--sm  { width: 28px; height: 28px; }
.pghost--md  { width: 40px; height: 40px; }
.pghost--lg  { width: 56px; height: 56px; }
.pghost--active {
  background:
    oklch(0.45 0.20 285 / 10%) padding-box,
    ${GHOST_BORDER_GRADIENT} border-box;
  border: 2px solid transparent;
  box-shadow: 0 2px 12px oklch(0.30 0.20 285 / 0.22);
}
.pghost--active:hover {
  background:
    oklch(0.45 0.20 285 / 16%) padding-box,
    ${GHOST_BORDER_GRADIENT} border-box;
  box-shadow: 0 4px 16px oklch(0.30 0.20 285 / 0.32);
  transform: scale(1.06);
}
.pghost--disabled { opacity: 0.30; cursor: not-allowed; }
.pghost--skeleton {
  background: oklch(0.91 0.004 220);
  border: 2px solid transparent;
  box-shadow: none;
  cursor: default;
}
@keyframes pghost-pop {
  0%   { transform: scale(0.4); }
  100% { transform: scale(1); }
}
.pghost--popping svg {
  animation: pghost-pop 0.38s cubic-bezier(0.34, 1.56, 0.64, 1);
}
`;

function buildGhostClass(size: SizeKey, extra?: string): string {
  const base = "pghost pghost--" + size;
  if (extra) { return base + " " + extra; }
  return base;
}

export function GhostStateMatrix({ outlineIcon, solidIcon, ariaLabel }: IconStateMatrixProps): JSX.Element {
  const [demo, setDemo] = useState<Record<SizeKey, boolean>>({ sm: false, md: false, lg: false });
  const [activationCounts, setActivationCounts] = useState<ActivationCounts>({ sm: 0, md: 0, lg: 0 });

  function handleDemoClick(event: React.MouseEvent<HTMLButtonElement>): void {
    const key = event.currentTarget.dataset.size as SizeKey;
    const nextActive = !demo[key];
    setDemo({ ...demo, [key]: nextActive });
    if (nextActive) {
      setActivationCounts({ ...activationCounts, [key]: activationCounts[key] + 1 });
    }
  }

  return (
    <div style={{
      backgroundColor: "var(--color-surface-card, #fff)",
      padding: "20px 24px", borderRadius: 8,
      border: "1px solid oklch(0.22 0.18 285 / 8%)", marginTop: 24,
    }}>
      <style dangerouslySetInnerHTML={{ __html: GHOST_CSS }} />

      <p style={{
        fontFamily: PJS, fontSize: 10, fontWeight: 700,
        textTransform: "uppercase", letterSpacing: "0.08em",
        color: "oklch(0.55 0.02 220)", margin: "0 0 16px",
      }}>
        Ghost
      </p>

      <div style={{ ...GRID, marginBottom: 16 }}>
        <span />
        <ColLabel text="Default"  />
        <ColLabel text="Active"   />
        <ColLabel text="Disabled" />
        <ColLabel text="Skeleton" />
      </div>

      {SIZES.map(function renderGhostRow({ key, label, iconSize }): JSX.Element {
        return (
          <div key={key} style={{ ...GRID, marginBottom: 20 }}>
            <p style={{ fontFamily: PJS, fontSize: 11, fontWeight: 600, color: "oklch(0.38 0.04 280 / 70%)", margin: 0 }}>
              {label}
            </p>

            <div style={CTR}>
              <button className={buildGhostClass(key)} type="button" aria-label={ariaLabel}>
                {outlineIcon(iconSize, GHOST_VAULT_COL)}
              </button>
            </div>

            <div style={CTR}>
              <button className={buildGhostClass(key, "pghost--active")} type="button" aria-label={ariaLabel}>
                {outlineIcon(iconSize, GHOST_ACTIVE_COL)}
              </button>
            </div>

            <div style={CTR}>
              <button className={buildGhostClass(key, "pghost--disabled")} type="button" aria-label={ariaLabel} disabled>
                {outlineIcon(iconSize, GHOST_VAULT_COL)}
              </button>
            </div>

            <div style={CTR}>
              <button className={buildGhostClass(key, "pghost--skeleton")} type="button" aria-label={ariaLabel} />
            </div>
          </div>
        );
      })}

      <div style={{ borderTop: "1px solid oklch(0.22 0.18 285 / 8%)", paddingTop: 16, marginTop: 4 }}>
        <p style={{
          fontFamily: PJS, fontSize: 10, fontWeight: 700, textTransform: "uppercase",
          letterSpacing: "0.08em", color: "oklch(0.55 0.02 220)", margin: "0 0 14px",
        }}>
          Demo interactivo — click para toggle
        </p>
        <div style={{ display: "flex", gap: 24, alignItems: "center", justifyContent: "center", padding: "16px 0" }}>
          {SIZES.map(function renderGhostDemoBtn({ key, iconSize }): JSX.Element {
            const isActive = demo[key];
            let btnIcon: JSX.Element;
            let btnClass: string;
            let spanKey: string | number;
            if (isActive) {
              btnIcon  = outlineIcon(iconSize, GHOST_ACTIVE_COL);
              btnClass = buildGhostClass(key, "pghost--active pghost--popping");
              spanKey  = activationCounts[key];
            } else {
              btnIcon  = outlineIcon(iconSize, GHOST_VAULT_COL);
              btnClass = buildGhostClass(key);
              spanKey  = "off";
            }
            return (
              <button
                key={key}
                data-size={key}
                className={btnClass}
                type="button"
                aria-label={ariaLabel}
                onClick={handleDemoClick}
              >
                <span key={spanKey} style={{ display: "contents" }}>
                  {btnIcon}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
