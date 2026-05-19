"use client";
import React from "react";
import type { JSX } from "react";
import { C, PJS } from "./constants";
import { IconStateMatrix } from "./IconStateMatrix";

function renderHeartOutline(size: number, color: string): JSX.Element {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}

function renderHeartSolid(size: number, color: string): JSX.Element {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} aria-hidden>
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}

export function StrokeFillSet(): JSX.Element {
  const xPath = "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z";

  const ICONS = [
    {
      name: "X",
      outline: (c: string) => <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M4 4l11.733 16h3.267L7.267 4H4z" /><path d="M4 20l6.768-6.768m2.46-2.46L20 4" /></svg>,
      solid: (c: string) => <svg width={24} height={24} viewBox="0 0 24 24" fill={c} aria-hidden><path d={xPath} /></svg>,
      duotone: (c: string) => <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /><path d="M10 8.5v5M14 8.5v5M8.5 10h7M8.5 12h7" /></svg>,
      badge: (c: string) => <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden><circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" /></svg>,
    },
    {
      name: "Instagram",
      outline: (c: string) => <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>,
      solid: (c: string) => <svg width={24} height={24} viewBox="0 0 24 24" fill={c} aria-hidden><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" /></svg>,
      duotone: (c: string) => <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><path d="M3 14l5-5 10 10" /><circle cx="8.5" cy="8.5" r="1.5" fill={c} stroke="none" /></svg>,
      badge: (c: string) => <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden><circle cx="12" cy="12" r="10" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>,
    },
    {
      name: "Heart",
      outline: (c: string) => <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>,
      solid: (c: string) => <svg width={24} height={24} viewBox="0 0 24 24" fill={c} aria-hidden><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>,
      duotone: (c: string) => <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" /></svg>,
      badge: (c: string) => <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden><circle cx="12" cy="8" r="7" /><path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12" /></svg>,
    },
    {
      name: "Price",
      outline: (c: string) => <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden><circle cx="12" cy="12" r="10" /><path d="M12 6v12M15 9.5a2.5 2.5 0 0 0-5 0v5a2.5 2.5 0 0 0 5 0" /></svg>,
      solid: (c: string) => <svg width={24} height={24} viewBox="0 0 24 24" fill={c} aria-hidden><path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7c-.83 0-1.5-.67-1.5-1.5S4.67 4 5.5 4c.83 0 1.5.67 1.5 1.5S6.33 7 5.5 7z" /></svg>,
      duotone: (c: string) => <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1-2-1z" /><path d="M8 8h8M8 12h8M8 16h5" /></svg>,
      badge: (c: string) => <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden><rect x="2" y="5" width="20" height="14" rx="2" ry="2" /><line x1="2" y1="10" x2="22" y2="10" /></svg>,
    },
    {
      name: "Status",
      outline: (c: string) => <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>,
      solid: (c: string) => <svg width={24} height={24} viewBox="0 0 24 24" fill={c} aria-hidden><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /></svg>,
      duotone: (c: string) => <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden><rect x="7" y="2" width="10" height="20" rx="3" ry="3" /><circle cx="12" cy="7" r="1.5" fill={c} /><circle cx="12" cy="12" r="1.5" fill={c} /><circle cx="12" cy="17" r="1.5" fill={c} /></svg>,
      badge: (c: string) => <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>,
    },
    {
      name: "Car",
      outline: (c: string) => <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9C2.1 11.1 2 11.5 2 12v4c0 .6.4 1 1 1h2" /><circle cx="7" cy="17" r="2" /><circle cx="17" cy="17" r="2" /><path d="M5 17h10" /></svg>,
      solid: (c: string) => <svg width={24} height={24} viewBox="0 0 24 24" fill={c} aria-hidden><path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.27-3.82c.14-.4.52-.68.96-.68h9.54c.44 0 .82.28.96.68L19 11H5z" /></svg>,
      duotone: (c: string) => <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden><circle cx="12" cy="12" r="10" /><path d="M12 12l8.5-5M12 12l-8.5-5M12 12v9" /><circle cx="12" cy="12" r="3" /></svg>,
      badge: (c: string) => <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>,
    },
    {
      name: "Box",
      outline: (c: string) => <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>,
      solid: (c: string) => <svg width={24} height={24} viewBox="0 0 24 24" fill={c} aria-hidden><path d="M4 6h16v12H4zm17-3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 9H4V8h16v4z" /></svg>,
      duotone: (c: string) => <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="12" y1="3" x2="12" y2="21" /></svg>,
      badge: (c: string) => <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden><rect x="1" y="3" width="15" height="13" /><polygon points="16 8 20 8 23 11 23 16 16 16 16 8" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" /></svg>,
    },
    {
      name: "Star",
      outline: (c: string) => <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>,
      solid: (c: string) => <svg width={24} height={24} viewBox="0 0 24 24" fill={c} aria-hidden><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>,
      duotone: (c: string) => <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M12 2 L14.5 9.5 L22 12 L14.5 14.5 L12 22 L9.5 14.5 L2 12 L9.5 9.5 Z" /></svg>,
      badge: (c: string) => <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18M4 22h16M10 14.66V17c0 .55-.45 1-1 1H4v2h16v-2h-5c-.55 0-1-.45-1-1v-2.34M12 2a4 4 0 0 1 4 4v6a4 4 0 0 1-8 0V6a4 4 0 0 1 4-4z" /></svg>,
    },
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
        Stroke → Fill — set completo
      </p>

      {/* Propuestas Modernas */}
      <div style={{ 
        padding: 40, 
        backgroundColor: C.card, borderRadius: 16, 
        border: `1px solid oklch(0.22 0.18 285 / 8%)` 
      }}>
        <p style={{
          fontFamily: PJS, fontSize: 10, fontWeight: 700,
          letterSpacing: "0.08em", textTransform: "uppercase",
          color: C.vaultMid, marginBottom: 32,
        }}>
          Variaciones Modernas por Estilo
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }}>
          
          {/* Estilo 1: Contorno Lineal */}
          <div>
            <span style={{ 
              fontFamily: PJS, fontSize: 12, fontWeight: 600, color: C.textOn, 
              display: "block", marginBottom: 16, paddingBottom: 12, borderBottom: `1px solid oklch(0.22 0.18 285 / 8%)` 
            }}>
              1. Contorno Lineal (Outline)
            </span>
            <p style={{ fontFamily: PJS, fontSize: 10, color: C.label, marginBottom: 24, lineHeight: 1.5 }}>
              Líneas limpias de 1.5px. Ideal para iconografía clásica y de alta densidad visual.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
              {ICONS.map((iconData) => (
                <div key={iconData.name} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
                  <div style={{
                    display: "flex", justifyContent: "center", alignItems: "center",
                    width: 48, height: 48, borderRadius: 12,
                    border: `1.5px solid oklch(0.22 0.18 285 / 8%)`,
                    backgroundColor: "transparent"
                  }} title={iconData.name}>
                    {iconData.outline(C.vaultMid)}
                  </div>
                  <span style={{ fontFamily: PJS, fontSize: 9, fontWeight: 600, color: C.label, textTransform: "uppercase", letterSpacing: "0.04em" }}>{iconData.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Estilo 2: Relleno Sólido */}
          <div>
            <span style={{ 
              fontFamily: PJS, fontSize: 12, fontWeight: 600, color: C.textOn, 
              display: "block", marginBottom: 16, paddingBottom: 12, borderBottom: `1px solid oklch(0.22 0.18 285 / 8%)` 
            }}>
              2. Relleno Sólido (Solid)
            </span>
            <p style={{ fontFamily: PJS, fontSize: 10, color: C.label, marginBottom: 24, lineHeight: 1.5 }}>
              Glifos rellenos de alto contraste para visibilidad inmediata en áreas pequeñas.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
              {ICONS.map((iconData) => (
                <div key={iconData.name} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
                  <div style={{
                    display: "flex", justifyContent: "center", alignItems: "center",
                    width: 48, height: 48, borderRadius: 12,
                    backgroundColor: "oklch(0.22 0.18 285 / 4%)"
                  }} title={iconData.name}>
                    {iconData.solid(C.vaultMid)}
                  </div>
                  <span style={{ fontFamily: PJS, fontSize: 9, fontWeight: 600, color: C.label, textTransform: "uppercase", letterSpacing: "0.04em" }}>{iconData.name}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      <IconStateMatrix
        outlineIcon={renderHeartOutline}
        solidIcon={renderHeartSolid}
        ariaLabel="Favorito"
      />
    </div>
  );
}
