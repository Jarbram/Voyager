import React from "react";
import type { JSX } from "react";
import { C, PJS } from "./constants";

export function IconBadgeStats(): JSX.Element {
  const badges = [
    {
      title: "1. Clásico Institucional (Ojo × Trío)",
      desc: "El balance perfecto entre legibilidad y detalle.",
      vIcon: (
        <svg width={20} height={20} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M2.5 12C2.5 12 6.5 5 12 5C17.5 5 21.5 12 21.5 12C21.5 12 17.5 19 12 19C6.5 19 2.5 12 2.5 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round" />
          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      ),
      aIcon: (
        <svg width={20} height={20} viewBox="0 0 24 24" fill="none" aria-hidden>
          <circle cx="12" cy="8" r="3" stroke="currentColor" strokeWidth="1.5" />
          <path d="M6.5 20C6.5 16.5 9 14.5 12 14.5C15 14.5 17.5 16.5 17.5 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="5"  cy="9.5" r="2.5" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
          <path d="M2.5 18C2.5 16 3.5 15 5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
          <circle cx="19" cy="9.5" r="2.5" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
          <path d="M21.5 18C21.5 16 20.5 15 19 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
        </svg>
      )
    },
    {
      title: "2. Alcance Digital (Señal × Audiencia)",
      desc: "Metáforas abstractas centradas en impacto en vivo.",
      vIcon: (
        <svg width={20} height={20} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M5 12.5C6.8 10.5 9.2 9.5 12 9.5C14.8 9.5 17.2 10.5 19 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M8 15.5C9.2 14.2 10.5 13.5 12 13.5C13.5 13.5 14.8 14.2 16 15.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="12" cy="18" r="1.5" fill="currentColor" />
          <path d="M2 9C4.8 6.2 8.2 4.5 12 4.5C15.8 4.5 19.2 6.2 22 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
        </svg>
      ),
      aIcon: (
        <svg width={20} height={20} viewBox="0 0 24 24" fill="none" aria-hidden>
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.3" opacity="0.4" />
          <circle cx="12" cy="12" r="5.5" stroke="currentColor" strokeWidth="1.4" opacity="0.7" />
          <circle cx="12" cy="12" r="2.2" fill="currentColor" />
        </svg>
      )
    },
    {
      title: "3. Descubrimiento (Lupa × Usuario)",
      desc: "Representa las 'vistas' como búsquedas y los 'usuarios' como cuentas activas.",
      vIcon: (
        <svg width={20} height={20} viewBox="0 0 24 24" fill="none" aria-hidden>
          <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.5" />
          <path d="M20 20L16 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M11 8A3 3 0 0 1 14 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
        </svg>
      ),
      aIcon: (
        <svg width={20} height={20} viewBox="0 0 24 24" fill="none" aria-hidden>
          <circle cx="9" cy="8" r="4" stroke="currentColor" strokeWidth="1.5" />
          <path d="M15 21V19C15 16.8 13.2 15 11 15H7C4.8 15 3 16.8 3 19V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M16 11L18 13L22 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      title: "4. Peso Sólido (Volumétrico)",
      desc: "Variante sólida del Ojo × Trío para máximo contraste visual.",
      vIcon: (
        <svg width={20} height={20} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
        </svg>
      ),
      aIcon: (
        <svg width={20} height={20} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M12 13c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          <circle cx="12" cy="8" r="4" />
          <path d="M21 13.5c-1.32 0-3.32.48-5.06 1.25.79.88 1.34 1.94 1.55 3.25h5.51v-1.5c0-1.66-1.55-3-2-3z" opacity="0.5" />
          <circle cx="18.5" cy="8" r="3" opacity="0.5" />
          <path d="M3 13.5c-.45 0-2 1.34-2 3v1.5h5.51c.21-1.31.76-2.37 1.55-3.25C6.32 13.98 4.32 13.5 3 13.5z" opacity="0.5" />
          <circle cx="5.5" cy="8" r="3" opacity="0.5" />
        </svg>
      )
    }
  ];

  return (
    <div style={{ marginTop: 64 }}>
      <p style={{
        fontFamily: PJS, fontSize: 11, fontWeight: 600,
        letterSpacing: "0.08em", textTransform: "uppercase",
        color: "var(--color-live, #ED8936)", marginBottom: 32,
        display: "flex", alignItems: "center", gap: 6,
      }}>
        <span style={{ fontSize: 10 }}>✦</span>
        Icon Badge — Composite (Variaciones SVG)
      </p>

      <div style={{ 
        display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 
      }}>
        {badges.map((b, i) => (
          <div key={i} style={{ 
            display: "flex", flexDirection: "column", gap: 16, 
            padding: 32, backgroundColor: C.card, borderRadius: 16, 
            border: `1px solid oklch(0.22 0.18 285 / 8%)`
          }}>
            <span style={{ fontFamily: PJS, fontSize: 12, fontWeight: 600, color: C.textOn }}>
              {b.title}
            </span>
            <span style={{ fontFamily: PJS, fontSize: 10, color: C.label, lineHeight: 1.4 }}>
              {b.desc}
            </span>

            {/* Badge Component */}
            <div style={{
              display: "flex", alignItems: "center", backgroundColor: C.vault,
              padding: "6px 6px 6px 20px", borderRadius: 12, gap: 16, width: "fit-content",
              marginTop: 8
            }}>
              {/* Item 1: Views */}
              <span style={{ fontFamily: PJS, fontSize: 16, fontWeight: 600, color: "white" }}>93</span>
              <div style={{
                display: "flex", justifyContent: "center", alignItems: "center",
                width: 44, height: 44, borderRadius: "50%",
                backgroundColor: "white", color: C.vault,
              }}>
                {b.vIcon}
              </div>

              {/* Item 2: Users */}
              <span style={{ fontFamily: PJS, fontSize: 16, fontWeight: 600, color: "white", marginLeft: 4 }}>5</span>
              <div style={{
                display: "flex", justifyContent: "center", alignItems: "center",
                width: 44, height: 44, borderRadius: "50%",
                backgroundColor: "white", color: C.vault,
              }}>
                {b.aIcon}
              </div>
            </div>
            
            <span style={{ fontFamily: PJS, fontSize: 11, fontWeight: 500, color: C.label, letterSpacing: "0.04em", marginTop: -4 }}>
              L · 20px
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
