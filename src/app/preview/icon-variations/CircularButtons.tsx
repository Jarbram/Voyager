"use client";
import React from "react";
import type { JSX } from "react";
import { C, PJS } from "./constants";

export function CircularButtons(): JSX.Element {
  return (
    <div style={{ marginTop: 64 }}>
      <style dangerouslySetInnerHTML={{__html: `
        .voyager-btn-icon {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          border-radius: 50%;
          background-color: oklch(0.32 0.01 220);
          border: none;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          color: white;
        }
        .voyager-btn-icon:hover {
          background-color: oklch(0.42 0.01 220);
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        }
        .voyager-btn-icon:active {
          background-color: oklch(0.26 0.01 220);
          transform: translateY(0);
        }
        .voyager-btn-icon:focus-visible {
          outline: 2px solid var(--voyager-color-vault-mid, #3B1782);
          outline-offset: 2px;
        }

        /* Variantes Modernas - Impeccable */
        .voyager-variant-pill {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 10px 20px 10px 16px;
          border-radius: 9999px;
          background: linear-gradient(135deg, var(--color-vault, oklch(0.22 0.18 285)) 0%, var(--color-vault-mid, oklch(0.30 0.20 285)) 100%);
          border: 1px solid rgba(255,255,255,0.08);
          color: white;
          font-family: ${PJS};
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.04em;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 8px 16px rgba(34,0,92,0.12);
        }
        .voyager-variant-pill:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 24px rgba(34,0,92,0.20);
        }
        .voyager-variant-pill:active {
          transform: translateY(0);
        }
        
        .voyager-variant-tech {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          width: 44px;
          height: 44px;
          border-radius: 8px; /* radius.md */
          background-color: var(--color-surface-card, #FFFFFF);
          border: 1px solid oklch(0.22 0.18 285 / 12%);
          color: var(--color-text-on-surface, oklch(0.15 0.008 200));
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 4px 12px rgba(34,0,92,0.04);
        }
        .voyager-variant-tech:hover {
          border-color: var(--color-vault-mid, oklch(0.30 0.20 285));
          color: var(--color-vault-mid, oklch(0.30 0.20 285));
          transform: translateY(-2px);
          box-shadow: 0 8px 16px rgba(34,0,92,0.08);
        }

        .voyager-variant-segmented {
          display: inline-flex;
          align-items: center;
          background: var(--color-surface-card, #FFFFFF);
          border-radius: 9999px;
          padding: 4px;
          box-shadow: 0 8px 16px rgba(34,0,92,0.06);
          border: 1px solid oklch(0.22 0.18 285 / 8%);
        }
        .voyager-variant-segmented button {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: none;
          background: transparent;
          color: var(--color-text-on-surface, oklch(0.15 0.008 200));
          cursor: pointer;
          transition: all 0.2s;
        }
        .voyager-variant-segmented button:hover {
          background: var(--color-surface-section, #F2F4F3);
          color: var(--color-vault-mid, oklch(0.30 0.20 285));
        }
        .voyager-variant-segmented button:active {
          transform: scale(0.95);
        }
        
        .voyager-variant-ghost {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: transparent;
          border: 1px solid transparent;
          color: var(--color-text-on-surface, oklch(0.15 0.008 200));
          cursor: pointer;
          transition: all 0.3s ease-out;
        }
        .voyager-variant-ghost:hover {
          background: var(--color-surface-card, #FFFFFF);
          border: 1px solid oklch(0.22 0.18 285 / 10%);
          color: var(--color-vault, oklch(0.22 0.18 285));
          transform: scale(1.05);
          box-shadow: 0 8px 16px rgba(34,0,92,0.06);
        }

        /* Nuevas Clases */
        .voyager-variant-float {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background-color: var(--color-vault, oklch(0.22 0.18 285));
          border: 1px solid rgba(255,255,255,0.15);
          color: white;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 4px 14px rgba(34,0,92,0.3);
        }
        .voyager-variant-float:hover {
          background-color: var(--color-vault-mid, oklch(0.30 0.20 285));
          transform: translateY(-2px) scale(1.05);
          box-shadow: 0 6px 20px rgba(34,0,92,0.45);
        }

        .voyager-variant-zoom {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          border-radius: 6px;
          background-color: transparent;
          border: 1.5px solid var(--color-text-on-surface, oklch(0.15 0.008 200));
          color: var(--color-text-on-surface, oklch(0.15 0.008 200));
          cursor: pointer;
          font-family: ${PJS};
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          transition: all 0.2s ease-out;
        }
        .voyager-variant-zoom:hover {
          background-color: var(--color-text-on-surface, oklch(0.15 0.008 200));
          color: white;
        }
      `}} />

      <p style={{
        fontFamily: PJS, fontSize: 11, fontWeight: 600,
        letterSpacing: "0.08em", textTransform: "uppercase",
        color: "var(--color-live, #ED8936)", marginBottom: 32,
        display: "flex", alignItems: "center", gap: 6,
      }}>
        <span style={{ fontSize: 10 }}>✦</span>
        Acciones de Expansión y Desplazamiento
      </p>

      {/* 1. Botones Funcionales Base */}
      <div style={{ marginBottom: 48 }}>
        <p style={{
          fontFamily: PJS, fontSize: 10, fontWeight: 600,
          letterSpacing: "0.06em", textTransform: "uppercase",
          color: C.label, marginBottom: 24,
        }}>
          Funcional Base (Interactivo)
        </p>
        <div style={{ display: "flex", gap: 48, alignItems: "center" }}>
          {/* Expand Button */}
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <button className="voyager-btn-icon" style={{ width: 48, height: 48 }} aria-label="Expandir">
              <svg width="24" height="24" viewBox="0 0 40 40" aria-hidden>
                <g stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none">
                  <path d="M11.2 15.2 L11.2 11.2 L15.2 11.2" />
                  <path d="M28.8 11.2 L28.8 15.2 M28.8 11.2 L24.8 11.2" />
                  <path d="M11.2 24.8 L11.2 28.8 L15.2 28.8" />
                  <path d="M24.8 28.8 L28.8 28.8 L28.8 24.8" />
                </g>
              </svg>
            </button>
            <span style={{ fontFamily: PJS, fontSize: 11, color: C.textOn }}>ExpandButton</span>
          </div>

          {/* Previous/Next Button */}
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <button className="voyager-btn-icon" style={{ width: 48, height: 48 }} aria-label="Siguiente">
              <svg width="24" height="24" viewBox="0 0 40 40" aria-hidden>
                <path d="M16 12 L24 20 L16 28" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
            </button>
            <span style={{ fontFamily: PJS, fontSize: 11, color: C.textOn }}>PreviousNextButton</span>
          </div>
        </div>
      </div>

      {/* 2. Opciones Modernas (Impeccable) */}
      <div style={{ 
        padding: 40, 
        backgroundColor: "oklch(0.97 0.01 220)", 
        borderRadius: 16, 
        border: `1px solid oklch(0.22 0.18 285 / 4%)` 
      }}>
        <p style={{
          fontFamily: PJS, fontSize: 10, fontWeight: 700,
          letterSpacing: "0.08em", textTransform: "uppercase",
          color: C.vaultMid, marginBottom: 32,
        }}>
          Propuestas Modernas
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64 }}>
          
          {/* Variantes Expandir */}
          <div>
            <span style={{ 
              fontFamily: PJS, fontSize: 12, fontWeight: 600, color: C.textOn, 
              display: "block", marginBottom: 24, paddingBottom: 12, borderBottom: `1px solid oklch(0.22 0.18 285 / 8%)` 
            }}>
              Expansión
            </span>
            
            <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
              {/* Pill shape */}
              <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
                <button className="voyager-variant-pill">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
                  </svg>
                  Expandir vista
                </button>
                <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                  <span style={{ fontFamily: PJS, fontSize: 11, fontWeight: 600, color: C.textOn }}>Pill Activo</span>
                  <span style={{ fontFamily: PJS, fontSize: 10, color: C.label }}>Alta prioridad estructural</span>
                </div>
              </div>

              {/* Technical Box */}
              <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
                <button className="voyager-variant-tech">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 8V4m0 0h4M4 4l5 5M20 8V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5M20 16v4m0 0h-4m4 0l-5-5"/>
                  </svg>
                </button>
                <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                  <span style={{ fontFamily: PJS, fontSize: 11, fontWeight: 600, color: C.textOn }}>Caja Técnica</span>
                  <span style={{ fontFamily: PJS, fontSize: 10, color: C.label }}>Paneles de datos o herramientas</span>
                </div>
              </div>

              {/* Floating Focus */}
              <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
                <button className="voyager-variant-float">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
                  </svg>
                </button>
                <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                  <span style={{ fontFamily: PJS, fontSize: 11, fontWeight: 600, color: C.textOn }}>Enfoque Flotante</span>
                  <span style={{ fontFamily: PJS, fontSize: 10, color: C.label }}>Acceso directo independiente</span>
                </div>
              </div>

              {/* Zoom / Lightbox */}
              <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
                <button className="voyager-variant-zoom">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: 4 }}>
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <path d="M3 14l4-4a1.5 1.5 0 0 1 2 0l4 4" />
                    <path d="M12 11l2.5-2.5a1.5 1.5 0 0 1 2 0L21 13" />
                    <circle cx="17" cy="7" r="3" fill="oklch(0.97 0.01 220)" stroke="currentColor" strokeWidth="1.5" />
                    <line x1="17" y1="6" x2="17" y2="8" stroke="currentColor" strokeWidth="1.2" />
                    <line x1="16" y1="7" x2="18" y2="7" stroke="currentColor" strokeWidth="1.2" />
                  </svg>
                  Ver imagen
                </button>
                <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                  <span style={{ fontFamily: PJS, fontSize: 11, fontWeight: 600, color: C.textOn }}>Zoom / Lightbox</span>
                  <span style={{ fontFamily: PJS, fontSize: 10, color: C.label }}>Apertura a pantalla completa</span>
                </div>
              </div>
            </div>
          </div>

          {/* Variantes Desplazamiento */}
          <div>
            <span style={{ 
              fontFamily: PJS, fontSize: 12, fontWeight: 600, color: C.textOn, 
              display: "block", marginBottom: 24, paddingBottom: 12, borderBottom: `1px solid oklch(0.22 0.18 285 / 8%)` 
            }}>
              Desplazamiento
            </span>
            
            <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
              {/* Segmented Control */}
              <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
                <div className="voyager-variant-segmented">
                  <button aria-label="Anterior">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 18l-6-6 6-6"/>
                    </svg>
                  </button>
                  <div style={{ width: 1, height: 24, backgroundColor: "oklch(0.22 0.18 285 / 8%)" }} />
                  <button aria-label="Siguiente">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 18l6-6-6-6"/>
                    </svg>
                  </button>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                  <span style={{ fontFamily: PJS, fontSize: 11, fontWeight: 600, color: C.textOn }}>Control Segmentado</span>
                  <span style={{ fontFamily: PJS, fontSize: 10, color: C.label }}>Galerías y carruseles</span>
                </div>
              </div>

              {/* Minimalist Floating */}
              <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
                <div style={{ display: "flex", gap: 12 }}>
                  <button className="voyager-variant-ghost" aria-label="Anterior">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M19 12H5M12 19l-7-7 7-7"/>
                    </svg>
                  </button>
                  <button className="voyager-variant-ghost" aria-label="Siguiente">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </button>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                  <span style={{ fontFamily: PJS, fontSize: 11, fontWeight: 600, color: C.textOn }}>Botones Ghost</span>
                  <span style={{ fontFamily: PJS, fontSize: 10, color: C.label }}>Listas paginadas o cabeceras</span>
                </div>
              </div>

              {/* Numbered Pagination */}
              <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <button className="voyager-variant-tech" style={{ width: 32, height: 32 }} aria-label="Anterior">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 18l-6-6 6-6"/>
                    </svg>
                  </button>
                  <span style={{ fontFamily: PJS, fontSize: 11, fontWeight: 700, color: C.textOn, whiteSpace: "nowrap" }}>01 / 05</span>
                  <button className="voyager-variant-tech" style={{ width: 32, height: 32 }} aria-label="Siguiente">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 18l6-6-6-6"/>
                    </svg>
                  </button>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                  <span style={{ fontFamily: PJS, fontSize: 11, fontWeight: 600, color: C.textOn }}>Paginación Numérica</span>
                  <span style={{ fontFamily: PJS, fontSize: 10, color: C.label }}>Controlador de páginas lineal</span>
                </div>
              </div>

              {/* Infinite Swipe */}
              <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
                <div className="voyager-variant-segmented">
                  <button aria-label="Desplazar Izquierda">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M11 17l-5-5 5-5M18 17l-5-5 5-5"/>
                    </svg>
                  </button>
                  <div style={{ width: 1, height: 24, backgroundColor: "oklch(0.22 0.18 285 / 8%)" }} />
                  <button aria-label="Desplazar Derecha">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M13 17l5-5-5-5M6 17l5-5-5-5"/>
                    </svg>
                  </button>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                  <span style={{ fontFamily: PJS, fontSize: 11, fontWeight: 600, color: C.textOn }}>Swipe Rápido</span>
                  <span style={{ fontFamily: PJS, fontSize: 10, color: C.label }}>Navegación secuencial rápida</span>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
