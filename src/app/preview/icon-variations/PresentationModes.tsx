"use client";
import React from "react";
import type { JSX } from "react";
import { C, PJS } from "./constants";

export function PresentationModes(): JSX.Element {
  return (
    <div style={{ marginTop: 64 }}>
      <p style={{
        fontFamily: PJS, fontSize: 11, fontWeight: 600,
        letterSpacing: "0.08em", textTransform: "uppercase",
        color: "var(--color-live, #ED8936)", marginBottom: 8,
        display: "flex", alignItems: "center", gap: 6,
      }}>
        <span style={{ fontSize: 10 }}>✦</span>
        Variaciones — formas de presentación
      </p>
      <p style={{
        fontFamily: PJS, fontSize: 12, color: C.label,
        marginBottom: 32, lineHeight: 1.6,
      }}>
        El mismo ícono en 3 formas de presentación: suelto · circular · cuadrado (app icon).
      </p>

      {/* Header columnas */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "80px 1fr 1fr 1fr",
        gap: 8, marginBottom: 8,
      }}>
        <span />
        {(
          [
            { label: "Suelto",    note: "Solo el trazo" },
            { label: "Circular",  note: "Contenedor redondo" },
            { label: "App icon",  note: "Cuadrado rounded" },
          ] as const
        ).map(function renderPresHead({ label, note }) {
          return (
            <div key={label} style={{ textAlign: "center" as const }}>
              <div style={{
                fontFamily: PJS, fontSize: 10, fontWeight: 600,
                letterSpacing: "0.06em", textTransform: "uppercase", color: C.textOn,
              }}>
                {label}
              </div>
              <div style={{ fontFamily: PJS, fontSize: 9, color: C.label, marginTop: 2 }}>
                {note}
              </div>
            </div>
          );
        })}
      </div>

      {([
        {
          name: "X",
          icon: (col: string): JSX.Element => (
            <svg width={20} height={20} viewBox="0 0 24 24" aria-hidden>
              <path d="M13.5 11 L22 2 H19 L12 9.5 L6.2 2 H3.2 L11.3 13 L2.5 22 H5.7 L12.8 14.4 L18.8 22 H22 Z"
                fill={col} />
            </svg>
          ),
        },
        {
          name: "Instagram",
          icon: (col: string): JSX.Element => (
            <svg width={20} height={20} viewBox="0 0 24 24" fill="none" aria-hidden>
              <rect x="3" y="3" width="18" height="18" rx="5"
                stroke={col} strokeWidth="1.6" fill="none" />
              <circle cx="12" cy="12" r="4.5" stroke={col} strokeWidth="1.6" fill="none" />
              <circle cx="17.5" cy="6.5" r="1.2" fill={col} />
            </svg>
          ),
        },
        {
          name: "Heart",
          icon: (col: string): JSX.Element => (
            <svg width={20} height={20} viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M12 20 C12 20 3.5 14 3.5 8.5 C3.5 5.9 5.5 4 8 4 C9.5 4 10.9 4.8 12 6 C13.1 4.8 14.5 4 16 4 C18.5 4 20.5 5.9 20.5 8.5 C20.5 14 12 20 12 20Z"
                stroke={col} strokeWidth="1.6" strokeLinejoin="round" fill="none" />
            </svg>
          ),
        },
        {
          name: "Price",
          icon: (col: string): JSX.Element => (
            <svg width={20} height={20} viewBox="0 0 24 24" fill="none" aria-hidden>
              <circle cx="12" cy="12" r="9" stroke={col} strokeWidth="1.6" fill="none" />
              <text x="12" y="16.5" textAnchor="middle" fontSize="11" fontWeight="700"
                fontFamily="system-ui" fill={col}>$</text>
            </svg>
          ),
        },
        {
          name: "Status",
          icon: (col: string): JSX.Element => (
            <svg width={20} height={20} viewBox="0 0 24 24" fill="none" aria-hidden>
              <circle cx="12" cy="12" r="7" stroke={col} strokeWidth="1.6" fill="none" />
              <circle cx="12" cy="12" r="3" fill={col} fillOpacity="0.7" />
            </svg>
          ),
        },
        {
          name: "Car",
          icon: (col: string): JSX.Element => (
            <svg width={22} height={20} viewBox="0 0 28 20" fill="none" aria-hidden>
              <path d="M2 10 L2 14 L26 14 L26 10 L22 6 L6 6 Z"
                stroke={col} strokeWidth="1.4" strokeLinejoin="round" fill="none" />
              <path d="M7 6 L9 2 L19 2 L22 6"
                stroke={col} strokeWidth="1.4" strokeLinejoin="round" fill="none" />
              <circle cx="7"  cy="14" r="2.5" stroke={col} strokeWidth="1.4" fill="none" />
              <circle cx="21" cy="14" r="2.5" stroke={col} strokeWidth="1.4" fill="none" />
            </svg>
          ),
        },
        {
          name: "Box",
          icon: (col: string): JSX.Element => (
            <svg width={20} height={20} viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M3 7 L12 3 L21 7 L21 17 L12 21 L3 17 Z"
                stroke={col} strokeWidth="1.5" strokeLinejoin="round" fill="none" />
              <path d="M3 7 L12 11 L21 7 M12 11 L12 21"
                stroke={col} strokeWidth="1.4" />
            </svg>
          ),
        },
        {
          name: "Star",
          icon: (col: string): JSX.Element => (
            <svg width={20} height={20} viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M12 2 L14.9 9.1 L22.5 9.5 L16.9 14.5 L18.8 22 L12 17.9 L5.2 22 L7.1 14.5 L1.5 9.5 L9.1 9.1 Z"
                stroke={col} strokeWidth="1.5" strokeLinejoin="round" fill="none" />
            </svg>
          ),
        },
      ] as const).map(function renderPresRow({ name, icon }) {
        return (
          <div key={name} style={{
            display: "grid",
            gridTemplateColumns: "80px 1fr 1fr 1fr",
            gap: 8, marginBottom: 8, alignItems: "center",
          }}>
            <span style={{
              fontFamily: PJS, fontSize: 10, fontWeight: 600,
              letterSpacing: "0.06em", textTransform: "uppercase", color: C.label,
            }}>
              {name}
            </span>

            {/* Suelto — solo el trazo sobre fondo neutro */}
            <div style={{
              display: "flex", justifyContent: "center", alignItems: "center",
              padding: 20, borderRadius: 4,
              backgroundColor: C.card,
              border: `1px solid oklch(0.22 0.18 285 / 8%)`,
            }}>
              {icon(C.textOn)}
            </div>

            {/* Circular — ícono en contenedor círculo con tinte vault */}
            <div style={{
              display: "flex", justifyContent: "center", alignItems: "center",
              padding: 20, borderRadius: 4,
              backgroundColor: C.section,
              border: `1px solid oklch(0.22 0.18 285 / 8%)`,
            }}>
              <div style={{
                width: 44, height: 44, borderRadius: "50%",
                backgroundColor: "oklch(0.22 0.18 285 / 10%)",
                display: "flex", justifyContent: "center", alignItems: "center",
              }}>
                {icon(C.vaultMid)}
              </div>
            </div>

            {/* App icon — cuadrado redondeado vault con ícono blanco */}
            <div style={{
              display: "flex", justifyContent: "center", alignItems: "center",
              padding: 20, borderRadius: 4,
              backgroundColor: C.section,
              border: `1px solid oklch(0.22 0.18 285 / 8%)`,
            }}>
              <div style={{
                width: 44, height: 44, borderRadius: 12,
                background: `linear-gradient(135deg, oklch(0.22 0.18 285) 0%, oklch(0.30 0.20 285) 100%)`,
                display: "flex", justifyContent: "center", alignItems: "center",
              }}>
                {icon("white")}
              </div>
            </div>

          </div>
        );
      })}

      {/* Nota de uso */}
      <div style={{
        marginTop: 32, padding: 16, borderRadius: 4,
        backgroundColor: C.card,
        border: `1px solid oklch(0.22 0.18 285 / 8%)`,
      }}>
        <p style={{
          fontFamily: PJS, fontSize: 10, fontWeight: 600,
          letterSpacing: "0.06em", textTransform: "uppercase",
          color: C.label, marginBottom: 12,
        }}>
          Cuándo usar cada presentación
        </p>
        {[
          { tag: "Suelto",   note: "Dentro de botones, toolbars, nav items, tablas — el componente padre aporta el contexto visual." },
          { tag: "Circular", note: "Acciones flotantes, botones de redes sociales, avatares con acción, icon buttons standalone." },
          { tag: "App icon", note: "Categorías, shortcuts, menús de inicio, tarjetas de acceso directo — donde el ícono actúa como identidad de sección." },
        ].map(function renderNoteRow({ tag, note }, i) {
          return (
            <div key={i} style={{
              display: "grid", gridTemplateColumns: "80px 1fr",
              gap: 12, marginBottom: 8, alignItems: "baseline",
            }}>
              <span style={{
                fontFamily: PJS, fontSize: 9, fontWeight: 700,
                letterSpacing: "0.06em", textTransform: "uppercase", color: C.vaultMid,
              }}>
                {tag}
              </span>
              <span style={{ fontFamily: PJS, fontSize: 11, color: C.textOn, lineHeight: 1.6 }}>
                {note}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
