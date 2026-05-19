import React from "react";
import type { JSX } from "react";
import { C, PJS } from "./constants";

export function CategoryCards(): JSX.Element {
  const cards = [
    {
      label: "VEHICULAR",
      icon: (
        <svg width={32} height={32} viewBox="0 0 28 20" fill="none" aria-hidden>
          <path d="M2 10 L2 14 L26 14 L26 10 L22 6 L6 6 Z" stroke={C.vaultMid} strokeWidth="1.4" strokeLinejoin="round" />
          <path d="M7 6 L9 2 L19 2 L22 6" stroke={C.vaultMid} strokeWidth="1.4" strokeLinejoin="round" />
          <circle cx="7" cy="14" r="2.5" stroke={C.vaultMid} strokeWidth="1.4" />
          <circle cx="21" cy="14" r="2.5" stroke={C.vaultMid} strokeWidth="1.4" />
        </svg>
      ),
      active: false,
    },
    {
      label: "MAQUINARIA",
      icon: (
        <svg width={32} height={32} viewBox="0 0 24 24" fill="none" stroke={C.vaultMid} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <rect x="3" y="15" width="9" height="5" rx="1.5" />
          <path d="M4 15V8h5l2.5 7" />
          <path d="M11.5 9l5-4 3 2" />
          <line x1="19.5" y1="7" x2="19.5" y2="15" />
          <path d="M17.5 15h4v2h-4z" />
        </svg>
      ),
      active: false,
    },
    {
      label: "EQUIPOS\nDIVERSOS",
      icon: (
        <svg width={32} height={32} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M3 7 L12 3 L21 7 L21 17 L12 21 L3 17 Z" stroke={C.vaultMid} strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M3 7 L12 11 L21 7 M12 11 L12 21" stroke={C.vaultMid} strokeWidth="1.4" />
        </svg>
      ),
      active: true,
    },
    {
      label: "ARTÍCULOS\nDIVERSOS",
      icon: (
        <svg width={32} height={32} viewBox="0 0 24 24" fill="none" aria-hidden>
          <circle cx="12" cy="12" r="10" fill={C.vaultMid} />
          <path d="M12 6.5 l1.5 4 h4.2 l-3.4 2.5 l1.3 4.2 l-3.6 -2.6 l-3.6 2.6 l1.3 -4.2 l-3.4 -2.5 h4.2 z" fill="white" />
        </svg>
      ),
      active: false,
    },
  ];

  const variations = [
    {
      title: "1. Estilo Minimalista (Línea Fina)",
      desc: "Trazos de 1px muy limpios. Ideal para interfaces de lujo donde el ícono es un apoyo sutil.",
      icons: [
        <svg key="veh" width={32} height={32} viewBox="0 0 24 24" fill="none" stroke={C.vaultMid} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M3 12h18v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4z" />
          <path d="M4 12l2-5h12l2 5" />
          <circle cx="7" cy="18" r="2" />
          <circle cx="17" cy="18" r="2" />
        </svg>,
        <svg key="maq" width={32} height={32} viewBox="0 0 24 24" fill="none" stroke={C.vaultMid} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <rect x="3" y="14" width="8" height="5" rx="1" />
          <path d="M4 14V8h4l2 6" />
          <path d="M10 9l5-4 3 2" />
          <line x1="18" y1="7" x2="18" y2="15" />
          <path d="M16 15h4v2h-4z" />
        </svg>,
        <svg key="eq" width={32} height={32} viewBox="0 0 24 24" fill="none" stroke={C.vaultMid} strokeWidth="1" strokeLinejoin="round" aria-hidden>
          <path d="M3 8l9-4 9 4v8l-9 4-9-4V8z" />
          <path d="M3 8l9 4 9-4M12 12v9" />
        </svg>,
        <svg key="art" width={32} height={32} viewBox="0 0 24 24" fill="none" stroke={C.vaultMid} strokeWidth="1" strokeLinejoin="round" aria-hidden>
          <circle cx="12" cy="12" r="10" />
          <path d="M12 7l1.5 3.5H17l-3 2.5 1 4-3.5-2.5-3.5 2.5 1-4-3-2.5h3.5Z" />
        </svg>
      ]
    },
    {
      title: "2. Estilo Sólido (Volumétrico)",
      desc: "Uso de relleno completo para un reconocimiento visual instantáneo. Excelente legibilidad a tamaños pequeños.",
      icons: [
        <svg key="veh" width={32} height={32} viewBox="0 0 24 24" fill={C.vaultMid} aria-hidden>
          <path d="M19 8H5c-1 0-2 1-2 2v6h2a2 2 0 1 0 4 0h6a2 2 0 1 0 4 0h2v-4c0-2-1.5-4-2-4z" />
        </svg>,
        <svg key="maq" width={32} height={32} viewBox="0 0 24 24" fill={C.vaultMid} aria-hidden>
          <path d="M11 14V7H4v7H2v5h10v-5h-1zm-6-5h4v3H5V9z" />
          <path d="M12 9l5-4 3 2v8h3v3h-7v-3h1v-5l-5 4z" />
        </svg>,
        <svg key="eq" width={32} height={32} viewBox="0 0 24 24" fill={C.vaultMid} aria-hidden>
          <path d="M12 22l-10-5V7l10-5 10 5v10l-10 5zM12 11.5L21 7l-9-4.5L3 7l9 4.5z" />
        </svg>,
        <svg key="art" width={32} height={32} viewBox="0 0 24 24" fill={C.vaultMid} aria-hidden>
          <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 15.5l-3.5 2.5 1-4-3-2.5h3.5L12 10l1.5 3.5H17l-3 2.5 1 4L12 17.5z" />
        </svg>
      ]
    },
    {
      title: "3. Estilo Duotono (Institucional)",
      desc: "Líneas de 1.5px con un relleno de opacidad al 20%. Da mucha riqueza y profundidad al componente.",
      icons: [
        <svg key="veh" width={32} height={32} viewBox="0 0 24 24" fill="none" stroke={C.vaultMid} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M3 12h18v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4z" fill="oklch(0.45 0.18 285 / 15%)" stroke="none" />
          <path d="M3 12h18v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4z" />
          <path d="M4 12l2-5h12l2 5" />
          <circle cx="7" cy="18" r="2" />
          <circle cx="17" cy="18" r="2" />
        </svg>,
        <svg key="maq" width={32} height={32} viewBox="0 0 24 24" fill="none" stroke={C.vaultMid} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <rect x="3" y="14" width="8" height="5" rx="1" fill="oklch(0.45 0.18 285 / 15%)" stroke="none" />
          <rect x="3" y="14" width="8" height="5" rx="1" />
          <path d="M4 14V8h4l2 6" />
          <path d="M10 9l5-4 3 2" />
          <line x1="18" y1="7" x2="18" y2="15" />
          <path d="M16 15h4v2h-4z" fill="oklch(0.45 0.18 285 / 15%)" />
        </svg>,
        <svg key="eq" width={32} height={32} viewBox="0 0 24 24" fill="none" stroke={C.vaultMid} strokeWidth="1.5" strokeLinejoin="round" aria-hidden>
          <path d="M3 8l9-4 9 4 0 0l-9 4-9-4z" fill="oklch(0.45 0.18 285 / 15%)" stroke="none" />
          <path d="M3 8l9-4 9 4v8l-9 4-9-4V8z" />
          <path d="M3 8l9 4 9-4M12 12v9" />
        </svg>,
        <svg key="art" width={32} height={32} viewBox="0 0 24 24" fill="none" stroke={C.vaultMid} strokeWidth="1.5" strokeLinejoin="round" aria-hidden>
          <circle cx="12" cy="12" r="10" fill="oklch(0.45 0.18 285 / 15%)" stroke="none" />
          <circle cx="12" cy="12" r="10" />
          <path d="M12 7l1.5 3.5H17l-3 2.5 1 4-3.5-2.5-3.5 2.5 1-4-3-2.5h3.5Z" />
        </svg>
      ]
    },
    {
      title: "4. Estilo Técnico (Desconectado)",
      desc: "Metáforas precisas con cortes en los trazos y guiones. Se ve sumamente digital y moderno.",
      icons: [
        <svg key="veh" width={32} height={32} viewBox="0 0 24 24" fill="none" stroke={C.vaultMid} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M4 12l2-5h12l2 5" />
          <path d="M3 12h3" /><path d="M10 12h4" /><path d="M18 12h3" />
          <path d="M3 16h18" />
          <circle cx="7" cy="16" r="2" />
          <circle cx="17" cy="16" r="2" />
        </svg>,
        <svg key="maq" width={32} height={32} viewBox="0 0 24 24" fill="none" stroke={C.vaultMid} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <rect x="3" y="14" width="8" height="5" />
          <path d="M4 14V8h4l2 6" strokeDasharray="2 2" />
          <path d="M10 9l5-4 3 2" />
          <line x1="18" y1="7" x2="18" y2="11" />
          <circle cx="18" cy="13" r="1" fill={C.vaultMid} stroke="none" />
          <path d="M16 15h4v2h-4z" />
        </svg>,
        <svg key="eq" width={32} height={32} viewBox="0 0 24 24" fill="none" stroke={C.vaultMid} strokeWidth="1.5" strokeLinejoin="round" aria-hidden>
          <path d="M3 8l9-4 9 4v8l-9 4" />
          <path d="M3 16l9 4" />
          <path d="M3 8l9 4 9-4" />
          <path d="M12 12v9" strokeDasharray="2 2" />
        </svg>,
        <svg key="art" width={32} height={32} viewBox="0 0 24 24" fill="none" stroke={C.vaultMid} strokeWidth="1.5" strokeLinejoin="round" aria-hidden>
          <circle cx="12" cy="12" r="10" strokeDasharray="4 4" />
          <path d="M12 7l1.5 3.5H17l-3 2.5 1 4-3.5-2.5-3.5 2.5 1-4-3-2.5h3.5Z" />
          <circle cx="12" cy="12" r="1.5" fill={C.vaultMid} stroke="none" />
        </svg>
      ]
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
        Category Cards
      </p>

      {/* Outer container matching the gray background from image */}
      <div style={{ 
        padding: 40, backgroundColor: "#BDBDBD", borderRadius: 16, 
        border: `1px dashed #A855F7`, width: "fit-content"
      }}>
        <div style={{
          display: "flex", gap: 16, flexWrap: "wrap"
        }}>
          {cards.map((c, i) => (
            <div key={i} style={{
              display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
              width: 110, height: 110,
              backgroundColor: C.card,
              borderRadius: 12,
              border: c.active ? `2px solid #8B5CF6` : `2px solid transparent`,
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              padding: 12,
              gap: 12,
              boxSizing: "border-box",
              cursor: "pointer"
            }}>
              {c.icon}
              <span style={{
                fontFamily: PJS, fontSize: 10, fontWeight: 700,
                color: C.vaultMid, textAlign: "center",
                lineHeight: 1.3, letterSpacing: "0.02em"
              }}>
                {c.label.split("\n").map((line, idx) => (
                  <React.Fragment key={idx}>
                    {line}
                    {idx === 0 && <br />}
                  </React.Fragment>
                ))}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Variaciones Modernas */}
      <div style={{ marginTop: 64 }}>
        <p style={{
          fontFamily: PJS, fontSize: 10, fontWeight: 700,
          letterSpacing: "0.08em", textTransform: "uppercase",
          color: C.vaultMid, marginBottom: 32,
        }}>
          Variaciones Conceptuales por Categoría
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          {variations.map((row, idx) => (
            <div key={idx} style={{ 
              backgroundColor: C.card, padding: 32, borderRadius: 16, 
              border: `1px solid oklch(0.22 0.18 285 / 8%)` 
            }}>
              <span style={{ 
                fontFamily: PJS, fontSize: 12, fontWeight: 600, color: C.textOn, 
                display: "block", marginBottom: 8 
              }}>
                {row.title}
              </span>
              <p style={{ fontFamily: PJS, fontSize: 10, color: C.label, marginBottom: 24, lineHeight: 1.5 }}>
                {row.desc}
              </p>

              <div style={{ display: "flex", gap: 16 }}>
                {row.icons.map((icon, iconIdx) => (
                  <div key={iconIdx} style={{
                    display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                    width: 110, height: 110,
                    backgroundColor: "oklch(0.30 0.20 285 / 5%)",
                    borderRadius: 12,
                    border: `1px solid transparent`,
                    padding: 12,
                    gap: 12,
                    boxSizing: "border-box"
                  }}>
                    {icon}
                    <span style={{
                      fontFamily: PJS, fontSize: 9, fontWeight: 600,
                      color: C.label, textAlign: "center",
                      lineHeight: 1.3, letterSpacing: "0.02em"
                    }}>
                      {cards[iconIdx].label.split("\n").map((line, lIdx) => (
                        <React.Fragment key={lIdx}>
                          {line}
                          {lIdx === 0 && <br />}
                        </React.Fragment>
                      ))}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
