"use client";
import React from "react";
import type { JSX } from "react";
import { C, PJS } from "./constants";

export function StrokeFillSet(): JSX.Element {
  // Official X Logo Path
  const xPath = "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z";

  const ICONS = [
    {
      name: "X",
      stroke: (c: string) => <svg width={24} height={24} viewBox="0 0 24 24" aria-hidden><path d={xPath} fill="none" stroke={c} strokeWidth="1.2" strokeLinejoin="round" /></svg>,
      fill: (c: string) => <svg width={24} height={24} viewBox="0 0 24 24" aria-hidden><path d={xPath} fill={c} /></svg>,
      modern: (c: string) => <svg width={20} height={20} viewBox="0 0 24 24" aria-hidden><path d={xPath} fill={c} /></svg>,
    },
    {
      name: "Instagram", // Concepto alternativo: Logo original
      stroke: (c: string) => <svg width={24} height={24} viewBox="0 0 24 24" fill="none" aria-hidden><rect x="3" y="3" width="18" height="18" rx="5" stroke={c} strokeWidth="1.6" /><circle cx="12" cy="12" r="4.5" stroke={c} strokeWidth="1.6" /><circle cx="17.5" cy="6.5" r="1.2" fill={c} /></svg>,
      fill: (c: string) => <svg width={24} height={24} viewBox="0 0 24 24" fill="none" aria-hidden><rect x="3" y="3" width="18" height="18" rx="5" stroke={c} strokeWidth="1.6" /><circle cx="12" cy="12" r="4.5" stroke={c} strokeWidth="1.6" /><circle cx="17.5" cy="6.5" r="1.2" fill={c} /></svg>,
      modern: (c: string) => <svg width={20} height={20} viewBox="0 0 24 24" fill="none" aria-hidden><rect x="3" y="3" width="18" height="18" rx="5" stroke={c} strokeWidth="1.6" /><circle cx="12" cy="12" r="4.5" stroke={c} strokeWidth="1.6" /><circle cx="17.5" cy="6.5" r="1.2" fill={c} /></svg>,
    },
    {
      name: "Heart", // Concepto alternativo: Thumbs Up (Like)
      stroke: (c: string) => <svg width={24} height={24} viewBox="0 0 24 24" fill="none" aria-hidden><path d="M12 20 C12 20 3.5 14 3.5 8.5 C3.5 5.9 5.5 4 8 4 C9.5 4 10.9 4.8 12 6 C13.1 4.8 14.5 4 16 4 C18.5 4 20.5 5.9 20.5 8.5 C20.5 14 12 20 12 20Z" stroke={c} strokeWidth="1.6" strokeLinejoin="round" /></svg>,
      fill: (c: string) => <svg width={24} height={24} viewBox="0 0 24 24" fill="none" aria-hidden><path d="M12 20 C12 20 3.5 14 3.5 8.5 C3.5 5.9 5.5 4 8 4 C9.5 4 10.9 4.8 12 6 C13.1 4.8 14.5 4 16 4 C18.5 4 20.5 5.9 20.5 8.5 C20.5 14 12 20 12 20Z" fill={c} /></svg>,
      modern: (c: string) => <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" /></svg>,
    },
    {
      name: "Price", // Concepto alternativo: Recibo / Factura (Receipt)
      stroke: (c: string) => <svg width={24} height={24} viewBox="0 0 24 24" fill="none" aria-hidden><circle cx="12" cy="12" r="9" stroke={c} strokeWidth="1.6" /><text x="12" y="16.5" textAnchor="middle" fontSize="11" fontWeight="700" fontFamily="system-ui" fill={c}>$</text></svg>,
      fill: (c: string) => <svg width={24} height={24} viewBox="0 0 24 24" fill="none" aria-hidden><circle cx="12" cy="12" r="9" fill={c} /><text x="12" y="16.5" textAnchor="middle" fontSize="11" fontWeight="700" fontFamily="system-ui" fill={C.vaultMid}>$</text></svg>,
      modern: (c: string) => <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M5 2h14v19l-3.5-2-3.5 2-3.5-2-3.5 2V2z" /><line x1="9" y1="7" x2="15" y2="7" /><line x1="9" y1="11" x2="15" y2="11" /><line x1="9" y1="15" x2="12" y2="15" /></svg>,
    },
    {
      name: "Status", // Concepto alternativo: Semáforo (Traffic Light)
      stroke: (c: string) => <svg width={24} height={24} viewBox="0 0 24 24" fill="none" aria-hidden><circle cx="12" cy="12" r="7" stroke={c} strokeWidth="1.6" /><circle cx="12" cy="12" r="3" fill={c} fillOpacity="0.45" /></svg>,
      fill: (c: string) => <svg width={24} height={24} viewBox="0 0 24 24" fill="none" aria-hidden><circle cx="12" cy="12" r="9" fill={C.live} /><circle cx="12" cy="12" r="3.5" fill={c} /></svg>,
      modern: (c: string) => <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden><rect x="7" y="2" width="10" height="20" rx="3" ry="3" /><circle cx="12" cy="7" r="1.5" /><circle cx="12" cy="12" r="1.5" /><circle cx="12" cy="17" r="1.5" /></svg>,
    },
    {
      name: "Car", // Concepto alternativo: Volante (Steering Wheel)
      stroke: (c: string) => <svg width={28} height={24} viewBox="0 0 28 20" fill="none" aria-hidden><path d="M2 10 L2 14 L26 14 L26 10 L22 6 L6 6 Z" stroke={c} strokeWidth="1.4" strokeLinejoin="round" /><path d="M7 6 L9 2 L19 2 L22 6" stroke={c} strokeWidth="1.4" strokeLinejoin="round" /><circle cx="7" cy="14" r="2.5" stroke={c} strokeWidth="1.4" /><circle cx="21" cy="14" r="2.5" stroke={c} strokeWidth="1.4" /></svg>,
      fill: (c: string) => <svg width={28} height={24} viewBox="0 0 28 20" fill="none" aria-hidden><path d="M2 10 L2 14 L26 14 L26 10 L22 6 L6 6 Z" fill={c} /><path d="M7 6 L9 2 L19 2 L22 6" fill={c} /><circle cx="7" cy="14" r="2.5" fill={c} /><circle cx="21" cy="14" r="2.5" fill={c} /><circle cx="7" cy="14" r="1.2" fill={C.vaultMid} /><circle cx="21" cy="14" r="1.2" fill={C.vaultMid} /></svg>,
      modern: (c: string) => <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden><circle cx="12" cy="12" r="10" /><path d="M12 12l8.5-5M12 12l-8.5-5M12 12v9" /><circle cx="12" cy="12" r="3" /></svg>,
    },
    {
      name: "Box", // Concepto alternativo: Caja de archivo frontal
      stroke: (c: string) => <svg width={24} height={24} viewBox="0 0 24 24" fill="none" aria-hidden><path d="M3 7 L12 3 L21 7 L21 17 L12 21 L3 17 Z" stroke={c} strokeWidth="1.5" strokeLinejoin="round" /><path d="M3 7 L12 11 L21 7 M12 11 L12 21" stroke={c} strokeWidth="1.4" /></svg>,
      fill: (c: string) => <svg width={24} height={24} viewBox="0 0 24 24" fill="none" aria-hidden><path d="M3 7 L12 3 L21 7 L21 17 L12 21 L3 17 Z" fill={c} /><path d="M3 7 L12 11 L21 7 M12 11 L12 21" stroke={C.vaultMid} strokeWidth="1.4" strokeOpacity="0.5" /></svg>,
      modern: (c: string) => <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden><polyline points="21 8 21 21 3 21 3 8" /><rect x="1" y="3" width="22" height="5" /><line x1="10" y1="12" x2="14" y2="12" /></svg>,
    },
    {
      name: "Star", // Concepto alternativo: Estrella de Brújula (Compass Star)
      stroke: (c: string) => <svg width={24} height={24} viewBox="0 0 24 24" fill="none" aria-hidden><path d="M12 2 L14.9 9.1 L22.5 9.5 L16.9 14.5 L18.8 22 L12 17.9 L5.2 22 L7.1 14.5 L1.5 9.5 L9.1 9.1 Z" stroke={c} strokeWidth="1.5" strokeLinejoin="round" /></svg>,
      fill: (c: string) => <svg width={24} height={24} viewBox="0 0 24 24" fill="none" aria-hidden><path d="M12 2 L14.9 9.1 L22.5 9.5 L16.9 14.5 L18.8 22 L12 17.9 L5.2 22 L7.1 14.5 L1.5 9.5 L9.1 9.1 Z" fill={c} /></svg>,
      modern: (c: string) => <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M12 2 L14.5 9.5 L22 12 L14.5 14.5 L12 22 L9.5 14.5 L2 12 L9.5 9.5 Z" /></svg>,
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

      {/* Grid Original */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(72px, 1fr))",
        gap: 12,
      }}>
        {ICONS.map(function renderStrokeFillCard(iconData) {
          return (
            <div key={iconData.name} style={{
              display: "flex", flexDirection: "column", gap: 4,
              alignItems: "center",
            }}>
              <p style={{
                fontFamily: PJS, fontSize: 9, fontWeight: 600,
                letterSpacing: "0.06em", textTransform: "uppercase",
                color: C.label, marginBottom: 4, textAlign: "center" as const,
              }}>
                {iconData.name}
              </p>
              <div style={{
                display: "flex", justifyContent: "center", alignItems: "center",
                width: 56, height: 56, borderRadius: 8,
                backgroundColor: C.card,
                border: `1px solid oklch(0.22 0.18 285 / 8%)`,
              }}>
                {iconData.stroke(C.textOn)}
              </div>
              <div style={{
                display: "flex", justifyContent: "center", alignItems: "center",
                width: 56, height: 56, borderRadius: 8,
                backgroundColor: C.vaultMid,
                border: `1px solid oklch(0.22 0.18 285 / 8%)`,
              }}>
                {iconData.fill("white")}
              </div>
              <span style={{
                fontFamily: PJS, fontSize: 8, color: C.label,
                letterSpacing: "0.04em", textAlign: "center" as const,
              }}>
                stroke · fill
              </span>
            </div>
          );
        })}
      </div>

      {/* Propuestas Modernas */}
      <div style={{ 
        marginTop: 64, padding: 40, 
        backgroundColor: C.card, borderRadius: 16, 
        border: `1px solid oklch(0.22 0.18 285 / 8%)` 
      }}>
        <p style={{
          fontFamily: PJS, fontSize: 10, fontWeight: 700,
          letterSpacing: "0.08em", textTransform: "uppercase",
          color: C.vaultMid, marginBottom: 32,
        }}>
          Variaciones Modernas
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
          
          {/* Estilo 1: Duotono Institucional */}
          <div>
            <span style={{ 
              fontFamily: PJS, fontSize: 12, fontWeight: 600, color: C.textOn, 
              display: "block", marginBottom: 16, paddingBottom: 12, borderBottom: `1px solid oklch(0.22 0.18 285 / 8%)` 
            }}>
              Duotono Institucional
            </span>
            <p style={{ fontFamily: PJS, fontSize: 10, color: C.label, marginBottom: 24, lineHeight: 1.5 }}>
              Fondo sutil (10% opacidad) con icono en color sólido. Limpio, técnico y seguro.
            </p>
            
            <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
              {ICONS.map((iconData) => (
                <div key={iconData.name} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
                  <div style={{
                    display: "flex", justifyContent: "center", alignItems: "center",
                    width: 48, height: 48, borderRadius: 12,
                    backgroundColor: "oklch(0.30 0.20 285 / 10%)"
                  }} title={iconData.name}>
                    {iconData.modern(C.vaultMid)}
                  </div>
                  <span style={{ fontFamily: PJS, fontSize: 9, fontWeight: 600, color: C.label, textTransform: "uppercase", letterSpacing: "0.04em" }}>{iconData.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Estilo 2: Sello / App Icon */}
          <div>
            <span style={{ 
              fontFamily: PJS, fontSize: 12, fontWeight: 600, color: C.textOn, 
              display: "block", marginBottom: 16, paddingBottom: 12, borderBottom: `1px solid oklch(0.22 0.18 285 / 8%)` 
            }}>
              Sello Premium
            </span>
            <p style={{ fontFamily: PJS, fontSize: 10, color: C.label, marginBottom: 24, lineHeight: 1.5 }}>
              Identidad fuerte. Degradado Vault con icono blanco y sombras profundas.
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
              {ICONS.map((iconData) => (
                <div key={iconData.name} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
                  <div style={{
                    display: "flex", justifyContent: "center", alignItems: "center",
                    width: 48, height: 48, borderRadius: 12,
                    background: `linear-gradient(135deg, ${C.vault} 0%, ${C.vaultMid} 100%)`,
                    boxShadow: "0 8px 16px rgba(34,0,92,0.15)"
                  }} title={iconData.name}>
                    {iconData.modern("white")}
                  </div>
                  <span style={{ fontFamily: PJS, fontSize: 9, fontWeight: 600, color: C.label, textTransform: "uppercase", letterSpacing: "0.04em" }}>{iconData.name}</span>
                </div>
              ))}
            </div>
          </div>



        </div>
      </div>

    </div>
  );
}
