"use client";
import React, { useState } from "react";
import type { JSX } from "react";
import { C, PJS } from "./constants";

const CAT_BORDER_GRADIENT = `linear-gradient(135deg,
  oklch(0.93 0.08 75)  0%,
  oklch(0.97 0.03 80)  28%,
  oklch(1 0 0 / 0.55)  48%,
  oklch(0.82 0.14 285) 70%,
  oklch(0.88 0.10 290) 100%
)`;

const CAT_CSS = `
.cat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 110px;
  height: 110px;
  border-radius: 12px;
  border: 2px solid transparent;
  box-sizing: border-box;
  padding: 8px;
  gap: 8px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  background:
    oklch(1 0 0) padding-box,
    linear-gradient(135deg,
      oklch(0.70 0.16 285) 0%,
      oklch(1 0 0 / 0.80)  40%,
      oklch(0.55 0.20 285) 75%,
      oklch(0.70 0.16 285) 100%
    ) border-box;
  box-shadow: 0 2px 8px rgb(51.76% 37.65% 89.8% / 0.14);
  transition: box-shadow 200ms ease-out, transform 180ms ease-out;
}
.cat-item::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: linear-gradient(180deg, oklch(1 0 0 / 0.55) 0%, transparent 50%);
  pointer-events: none;
}
.cat-item::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: radial-gradient(circle at center, oklch(0.55 0.20 285 / 0.55) 0%, transparent 70%);
  opacity: 0;
  pointer-events: none;
  transition: opacity 200ms ease-out;
}
.cat-item > * { position: relative; z-index: 1; }
.cat-item:hover:not(.cat-item--active) {
  box-shadow: 0 5px 18px rgb(51.76% 37.65% 89.8% / 0.26);
  transform: scale(1.04) translateY(-1px);
}
.cat-item:hover:not(.cat-item--active)::after { opacity: 0.55; }
.cat-item:active {
  transform: scale(0.94);
  transition: transform 60ms ease-in;
}
.cat-item--active {
  background:
    oklch(1 0 0) padding-box,
    ${CAT_BORDER_GRADIENT} border-box;
  border: 2px solid transparent;
  box-shadow: 0 3px 14px rgb(51.76% 37.65% 89.8% / 0.35), inset 0 1px 0 rgb(100% 100% 100% / 0.22);
}
.cat-item--active::before {
  background: linear-gradient(180deg, oklch(1 0 0 / 0.18) 0%, transparent 50%);
}
.cat-item--active::after { opacity: 0.35; }
.cat-item--active:hover {
  box-shadow: 0 6px 20px rgb(51.76% 37.65% 89.8% / 0.45), inset 0 1px 0 rgb(100% 100% 100% / 0.22);
  transform: scale(1.04) translateY(-1px);
}
.cat-item--active:hover::after { opacity: 0.55; }
`;

function renderCarOutline(size: number, color: string): JSX.Element {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9C2.1 11.1 2 11.5 2 12v4c0 .6.4 1 1 1h2" />
      <circle cx="7" cy="17" r="2" />
      <circle cx="17" cy="17" r="2" />
    </svg>
  );
}

function renderCarSolid(size: number, color: string): JSX.Element {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke={color} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9C2.1 11.1 2 11.5 2 12v4c0 .6.4 1 1 1h2" />
      <circle cx="7" cy="17" r="2" />
      <circle cx="17" cy="17" r="2" />
    </svg>
  );
}

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

  const conceptualCategories = [
    {
      category: "1. Categoría Vehicular (Transporte)",
      desc: "Variaciones de transporte terrestre orientadas a uso particular, comercial o de carga.",
      items: [
        {
          name: "Automóvil (Sedán)",
          icon: (
            <svg width={32} height={32} viewBox="0 0 24 24" fill="none" stroke={C.vaultMid} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9C2.1 11.1 2 11.5 2 12v4c0 .6.4 1 1 1h2" />
              <circle cx="7" cy="17" r="2" />
              <circle cx="17" cy="17" r="2" />
              <path d="M5 17h10" />
            </svg>
          )
        },
        {
          name: "Camioneta (SUV)",
          icon: (
            <svg width={32} height={32} viewBox="0 0 24 24" fill="none" stroke={C.vaultMid} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M2 14v-2h3.5l2.5-4h5v4h8v2h1v2" />
              <path d="M2 16h2M8.5 16h8M20.5 16h1.5" />
              <circle cx="6.5" cy="16" r="2" />
              <circle cx="18.5" cy="16" r="2" />
              <rect x="8.5" y="9" width="4" height="2.5" rx="0.5" opacity="0.8" />
              <line x1="10.5" y1="9" x2="10.5" y2="11.5" opacity="0.8" />
              <rect x="15" y="10" width="4" height="2" rx="0.5" strokeDasharray="1.5 1.5" opacity="0.7" />
            </svg>
          )
        },
        {
          name: "Camión de Carga",
          icon: (
            <svg width={32} height={32} viewBox="0 0 24 24" fill="none" stroke={C.vaultMid} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M14 16H2V6a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v10z" />
              <path d="M14 9h5.5a1.5 1.5 0 0 1 1.3.8l1.7 2.7c.3.5.5 1.1.5 1.7V16h-9" />
              <circle cx="5" cy="17" r="2" />
              <circle cx="10" cy="17" r="2" />
              <circle cx="18" cy="17" r="2" />
              <line x1="6" y1="5" x2="6" y2="13" opacity="0.5" />
              <line x1="10" y1="5" x2="10" y2="13" opacity="0.5" />
              <rect x="15" y="11" width="3" height="2" rx="0.5" opacity="0.8" />
            </svg>
          )
        },
        {
          name: "Motocicleta",
          icon: (
            <svg width={32} height={32} viewBox="0 0 24 24" fill="none" stroke={C.vaultMid} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <circle cx="5" cy="16" r="3" />
              <circle cx="19" cy="16" r="3" />
              <path d="M5 16l4-5h6.5l3.5 5" />
              <path d="M19 16l-3-9h-2" />
              <path d="M9 11l1-3h3.5l1.5 3z" fill="oklch(0.30 0.20 285 / 10%)" />
              <path d="M7 11.5c1.5-1 3-1 4.5 0" />
            </svg>
          )
        },
        {
          name: "Autobús",
          icon: (
            <svg width={32} height={32} viewBox="0 0 24 24" fill="none" stroke={C.vaultMid} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <rect x="2" y="5" width="20" height="11" rx="2" />
              <circle cx="6" cy="18" r="2" />
              <circle cx="18" cy="18" r="2" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <rect x="4" y="7" width="3" height="3" rx="0.5" />
              <rect x="9" y="7" width="3" height="3" rx="0.5" />
              <rect x="14" y="7" width="3" height="3" rx="0.5" />
              <path d="M19 7h2v5h-2z" />
            </svg>
          )
        },
        {
          name: "Remolque",
          icon: (
            <svg width={32} height={32} viewBox="0 0 24 24" fill="none" stroke={C.vaultMid} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <rect x="1" y="6" width="16" height="9" rx="1" />
              <path d="M17 13h5l1.5-2" />
              <circle cx="5" cy="17" r="2.5" />
              <circle cx="11" cy="17" r="2.5" />
              <line x1="19" y1="13" x2="19" y2="17" />
              <line x1="18" y1="17" x2="20" y2="17" />
            </svg>
          )
        },
        {
          name: "Cuatrimoto (ATV)",
          icon: (
            <svg width={32} height={32} viewBox="0 0 24 24" fill="none" stroke={C.vaultMid} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <circle cx="6" cy="17" r="3" />
              <circle cx="18" cy="17" r="3" />
              <path d="M3 17h3M15 17h3" opacity="0.7" />
              <path d="M6 14h12l-2-5H8l-2 5z" fill="oklch(0.30 0.20 285 / 10%)" />
              <path d="M9 9l-1-4h3" />
              <path d="M15 9l2-3h2" />
              <path d="M3 13c1-2 3-2 4 0M15 13c1-2 3-2 4 0" />
            </svg>
          )
        },
        {
          name: "Furgoneta (Van)",
          icon: (
            <svg width={32} height={32} viewBox="0 0 24 24" fill="none" stroke={C.vaultMid} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M2 15V7a2 2 0 0 1 2-2h12l4 3v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z" />
              <circle cx="6.5" cy="17" r="2.5" />
              <circle cx="16.5" cy="17" r="2.5" />
              <path d="M15 6h2.5l2 2.5H15V6z" opacity="0.8" />
              <path d="M9 5v10" opacity="0.6" />
              <rect x="10.5" y="9" width="2" height="1" rx="0.2" />
            </svg>
          )
        }
      ]
    },
    {
      category: "2. Categoría Maquinaria (Industrial)",
      desc: "Metáforas de equipos autopropulsados para construcción, logística de almacén y agricultura.",
      items: [
        {
          name: "Excavadora",
          icon: (
            <svg width={32} height={32} viewBox="0 0 24 24" fill="none" stroke={C.vaultMid} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <rect x="2" y="18" width="18" height="4" rx="2" />
              <circle cx="5" cy="20" r="1" />
              <circle cx="10" cy="20" r="1" />
              <circle cx="15" cy="20" r="1" />
              <path d="M4 18v-6h8v6" />
              <rect x="6" y="14" width="4" height="3" />
              <path d="M12 14l5-5 4 1v4" />
            </svg>
          )
        },
        {
          name: "Montacargas",
          icon: (
            <svg width={32} height={32} viewBox="0 0 24 24" fill="none" stroke={C.vaultMid} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <circle cx="6" cy="18" r="3" />
              <circle cx="16" cy="18" r="2" />
              <path d="M3 15h15v3H3z" />
              <path d="M9 15V8h5l2 7M19 18V5M19 9h4M19 13h4" />
            </svg>
          )
        },
        {
          name: "Tractor Agrícola",
          icon: (
            <svg width={32} height={32} viewBox="0 0 24 24" fill="none" stroke={C.vaultMid} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <circle cx="7" cy="16" r="5" />
              <circle cx="19" cy="18" r="3" />
              <path d="M7 11h9v7H7v-7z" />
              <path d="M12 11V6h1" />
              <path d="M16 14h4v4h-4z" />
            </svg>
          )
        },
        {
          name: "Hormigonera",
          icon: (
            <svg width={32} height={32} viewBox="0 0 24 24" fill="none" stroke={C.vaultMid} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <rect x="2" y="15" width="20" height="3" />
              <circle cx="6" cy="19" r="2" />
              <circle cx="16" cy="19" r="2" />
              <ellipse cx="11" cy="9" rx="5" ry="4" transform="rotate(-15 11 9)" />
              <path d="M18 15V10h3l1 5z" />
            </svg>
          )
        },
        {
          name: "Grúa Industrial",
          icon: (
            <svg width={32} height={32} viewBox="0 0 24 24" fill="none" stroke={C.vaultMid} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <rect x="2" y="16" width="14" height="4" />
              <circle cx="5" cy="20" r="1.5" />
              <circle cx="13" cy="20" r="1.5" />
              <path d="M6 16L18 4l2 2-10 10" />
              <line x1="18" y1="4" x2="22" y2="8" />
            </svg>
          )
        },
        {
          name: "Compactadora",
          icon: (
            <svg width={32} height={32} viewBox="0 0 24 24" fill="none" stroke={C.vaultMid} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <circle cx="7" cy="15" r="6" />
              <circle cx="7" cy="15" r="2" />
              <circle cx="19" cy="17" r="4" />
              <path d="M13 15h6M9 9h6v6H9z" />
            </svg>
          )
        },
        {
          name: "Cargador Frontal",
          icon: (
            <svg width={32} height={32} viewBox="0 0 24 24" fill="none" stroke={C.vaultMid} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <circle cx="6" cy="17" r="3.5" />
              <circle cx="17" cy="17" r="3.5" />
              <path d="M6 14h11v-5h-5L9 14" />
              <path d="M17 14l4-3 1 4-3 2v-3" />
            </svg>
          )
        },
        {
          name: "Manlift",
          icon: (
            <svg width={32} height={32} viewBox="0 0 24 24" fill="none" stroke={C.vaultMid} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <rect x="6" y="18" width="12" height="3" />
              <circle cx="8" cy="21" r="1" />
              <circle cx="16" cy="21" r="1" />
              <line x1="8" y1="18" x2="16" y2="10" />
              <line x1="16" y1="18" x2="8" y2="10" />
              <rect x="8" y="6" width="8" height="4" />
            </svg>
          )
        }
      ]
    },
    {
      category: "3. Categoría Equipos Diversos",
      desc: "Herramientas técnicas, gabinetes de red y componentes de soporte operativo.",
      items: [
        {
          name: "Caja Herramientas",
          icon: (
            <svg width={32} height={32} viewBox="0 0 24 24" fill="none" stroke={C.vaultMid} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <rect x="3" y="7" width="18" height="13" rx="2" />
              <path d="M8 7V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v3" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <rect x="10" y="11" width="4" height="2" rx="0.5" />
            </svg>
          )
        },
        {
          name: "Generador Eléctrico",
          icon: (
            <svg width={32} height={32} viewBox="0 0 24 24" fill="none" stroke={C.vaultMid} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <circle cx="7" cy="9" r="2" />
              <circle cx="17" cy="9" r="2" />
              <path d="M5 15h14M8 12v6M12 12v6M16 12v6" />
            </svg>
          )
        },
        {
          name: "Servidor / Rack",
          icon: (
            <svg width={32} height={32} viewBox="0 0 24 24" fill="none" stroke={C.vaultMid} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <rect x="2" y="3" width="20" height="5" rx="1" />
              <rect x="2" y="10" width="20" height="5" rx="1" />
              <rect x="2" y="17" width="20" height="5" rx="1" />
              <circle cx="6" cy="5.5" r="1.0" fill={C.vaultMid} stroke="none" />
              <circle cx="6" cy="12.5" r="1.0" fill={C.vaultMid} stroke="none" />
              <circle cx="6" cy="19.5" r="1.0" fill={C.vaultMid} stroke="none" />
              <line x1="18" y1="5.5" x2="20" y2="5.5" />
              <line x1="18" y1="12.5" x2="20" y2="12.5" />
              <line x1="18" y1="19.5" x2="20" y2="19.5" />
            </svg>
          )
        },
        {
          name: "Compresor",
          icon: (
            <svg width={32} height={32} viewBox="0 0 24 24" fill="none" stroke={C.vaultMid} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <rect x="6" y="8" width="12" height="13" rx="3" />
              <circle cx="12" cy="14" r="3" />
              <line x1="12" y1="14" x2="14" y2="12" />
              <path d="M12 5v3M9 8h6M7 21v1M17 21v1" />
            </svg>
          )
        },
        {
          name: "Bomba de Agua",
          icon: (
            <svg width={32} height={32} viewBox="0 0 24 24" fill="none" stroke={C.vaultMid} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <circle cx="12" cy="12" r="8" />
              <circle cx="12" cy="12" r="3" />
              <path d="M12 2v2M12 20v2M2 12h2M20 12h2" />
              <path d="M18 6l-1.5 1.5M6 18l-1.5 1.5" />
            </svg>
          )
        },
        {
          name: "Soldadora",
          icon: (
            <svg width={32} height={32} viewBox="0 0 24 24" fill="none" stroke={C.vaultMid} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <rect x="3" y="6" width="18" height="14" rx="2" />
              <circle cx="8" cy="11" r="1.5" />
              <circle cx="16" cy="11" r="1.5" />
              <path d="M5 16h14" />
              <path d="M12 3v3" />
            </svg>
          )
        },
        {
          name: "Tablero Eléctrico",
          icon: (
            <svg width={32} height={32} viewBox="0 0 24 24" fill="none" stroke={C.vaultMid} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <rect x="4" y="2" width="16" height="20" rx="2" />
              <line x1="12" y1="2" x2="12" y2="22" />
              <circle cx="8" cy="6" r="1" />
              <circle cx="16" cy="6" r="1" />
              <path d="M7 12h2M15 12h2" />
              <path d="M8 17l1.5-3h-1.5l1.5-3" strokeWidth="1.2" />
            </svg>
          )
        },
        {
          name: "Batería Industrial",
          icon: (
            <svg width={32} height={32} viewBox="0 0 24 24" fill="none" stroke={C.vaultMid} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <rect x="2" y="6" width="20" height="14" rx="2" />
              <line x1="6" y1="6" x2="6" y2="4" />
              <line x1="18" y1="6" x2="18" y2="4" />
              <line x1="5" y1="12" x2="9" y2="12" />
              <line x1="7" y1="10" x2="7" y2="14" />
              <line x1="15" y1="12" x2="19" y2="12" />
            </svg>
          )
        }
      ]
    },
    {
      category: "4. Categoría Artículos Diversos",
      desc: "Lotes genéricos, bienes embalados, pallets o mobiliario y activos variados.",
      items: [
        {
          name: "Paquete Postal",
          icon: (
            <svg width={32} height={32} viewBox="0 0 24 24" fill="none" stroke={C.vaultMid} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
              <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
              <line x1="12" y1="22.08" x2="12" y2="12" />
            </svg>
          )
        },
        {
          name: "Pallet de Carga",
          icon: (
            <svg width={32} height={32} viewBox="0 0 24 24" fill="none" stroke={C.vaultMid} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <rect x="2" y="16" width="20" height="4" rx="1" />
              <line x1="6" y1="16" x2="6" y2="20" />
              <line x1="12" y1="16" x2="12" y2="20" />
              <line x1="18" y1="16" x2="18" y2="20" />
              <rect x="3" y="6" width="8" height="10" />
              <rect x="13" y="8" width="8" height="8" />
            </svg>
          )
        },
        {
          name: "Contenedor",
          icon: (
            <svg width={32} height={32} viewBox="0 0 24 24" fill="none" stroke={C.vaultMid} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <rect x="2" y="5" width="20" height="14" rx="1" />
              <line x1="6" y1="5" x2="6" y2="19" />
              <line x1="10" y1="5" x2="10" y2="19" />
              <line x1="14" y1="5" x2="14" y2="19" />
              <line x1="18" y1="5" x2="18" y2="19" />
            </svg>
          )
        },
        {
          name: "Lote Mobiliario",
          icon: (
            <svg width={32} height={32} viewBox="0 0 24 24" fill="none" stroke={C.vaultMid} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M4 14v6M20 14v6M4 14h16" />
              <path d="M9 14v-4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4" />
              <line x1="12" y1="14" x2="12" y2="19" />
              <rect x="6" y="10" width="4" height="3" rx="0.5" />
            </svg>
          )
        },
        {
          name: "Lote Repuestos",
          icon: (
            <svg width={32} height={32} viewBox="0 0 24 24" fill="none" stroke={C.vaultMid} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M22 12h-6l-2 3h-4l-2-3H2" />
              <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
              <circle cx="12" cy="9" r="2" />
            </svg>
          )
        },
        {
          name: "Lote Informático",
          icon: (
            <svg width={32} height={32} viewBox="0 0 24 24" fill="none" stroke={C.vaultMid} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <rect x="3" y="3" width="18" height="11" rx="2" />
              <line x1="12" y1="14" x2="12" y2="18" />
              <line x1="8" y1="18" x2="16" y2="18" />
              <rect x="4" y="20" width="16" height="2" rx="0.5" />
            </svg>
          )
        },
        {
          name: "Materiales Const.",
          icon: (
            <svg width={32} height={32} viewBox="0 0 24 24" fill="none" stroke={C.vaultMid} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <rect x="2" y="4" width="20" height="4" rx="1" />
              <rect x="2" y="10" width="20" height="4" rx="1" />
              <rect x="2" y="16" width="20" height="4" rx="1" />
              <line x1="6" y1="4" x2="6" y2="20" strokeDasharray="2 2" />
              <line x1="18" y1="4" x2="18" y2="20" strokeDasharray="2 2" />
            </svg>
          )
        },
        {
          name: "Chatarra Metálica",
          icon: (
            <svg width={32} height={32} viewBox="0 0 24 24" fill="none" stroke={C.vaultMid} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" strokeDasharray="2 2" />
              <path d="M12 8v8M8 12h8" />
              <path d="M9 9l6 6M15 9l-6 6" />
            </svg>
          )
        }
      ]
    }
  ];

  const [selectedItems, setSelectedItems] = useState<Record<string, boolean>>({});
  const [demoActive, setDemoActive] = useState<boolean[]>([false, false, false, false]);

  function handleItemClick(event: React.MouseEvent<HTMLButtonElement>): void {
    const key = event.currentTarget.dataset.key as string;
    setSelectedItems(prev => ({ ...prev, [key]: !prev[key] }));
  }

  function handleDemoClick(event: React.MouseEvent<HTMLButtonElement>): void {
    const idx = Number(event.currentTarget.dataset.demoIdx);
    setDemoActive(prev => {
      const next = [...prev];
      next[idx] = !next[idx];
      return next;
    });
  }

  return (
    <div style={{ marginTop: 64 }}>
      <style dangerouslySetInnerHTML={{ __html: CAT_CSS }} />
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
        border: `1px dashed #A855F7`, width: "fit-content", marginBottom: 64
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
      <div>
        <p style={{
          fontFamily: PJS, fontSize: 10, fontWeight: 700,
          letterSpacing: "0.08em", textTransform: "uppercase",
          color: C.vaultMid, marginBottom: 32,
        }}>
          Variaciones Conceptuales por Categoría
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          {conceptualCategories.map((group, idx) => (
            <div key={idx} style={{ 
              backgroundColor: C.card, padding: 32, borderRadius: 16, 
              border: `1px solid oklch(0.22 0.18 285 / 8%)` 
            }}>
              <span style={{ 
                fontFamily: PJS, fontSize: 12, fontWeight: 600, color: C.textOn, 
                display: "block", marginBottom: 8 
              }}>
                {group.category}
              </span>
              <p style={{ fontFamily: PJS, fontSize: 10, color: C.label, marginBottom: 24, lineHeight: 1.5 }}>
                {group.desc}
              </p>

              <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                {group.items.map(function renderCatItem(item, itemIdx) {
                  const itemKey = `${idx}-${itemIdx}`;
                  const isActive = !!selectedItems[itemKey];
                  let cls = "cat-item";
                  if (isActive) { cls = "cat-item cat-item--active"; }
                  return (
                    <button
                      key={itemIdx}
                      className={cls}
                      type="button"
                      aria-label={item.name}
                      data-key={itemKey}
                      onClick={handleItemClick}
                    >
                      {item.icon}
                      <span style={{
                        fontFamily: PJS, fontSize: 9, fontWeight: 600,
                        color: isActive ? "oklch(0.30 0.20 285)" : (C.label),
                        textAlign: "center", lineHeight: 1.2, letterSpacing: "0.02em",
                        pointerEvents: "none",
                      }}>
                        {item.name}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div style={{
        backgroundColor: "var(--color-surface-card, #fff)",
        padding: "20px 24px", borderRadius: 8,
        border: "1px solid oklch(0.22 0.18 285 / 8%)", marginTop: 32,
      }}>
        <p style={{
          fontFamily: PJS, fontSize: 10, fontWeight: 700, textTransform: "uppercase",
          letterSpacing: "0.08em", color: "oklch(0.55 0.02 220)", margin: "0 0 20px",
        }}>
          Demo interactivo — click para toggle
        </p>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          {conceptualCategories.map(function renderDemoCard(group, idx) {
            const item = group.items[0];
            if (!item) { return null; }
            const isActive = demoActive[idx];
            let cls = "cat-item";
            if (isActive) { cls = "cat-item cat-item--active"; }
            return (
              <button
                key={idx}
                className={cls}
                type="button"
                aria-label={item.name}
                data-demo-idx={String(idx)}
                onClick={handleDemoClick}
              >
                {item.icon}
                <span style={{
                  fontFamily: PJS, fontSize: 9, fontWeight: 600,
                  color: isActive ? "oklch(0.30 0.20 285)" : C.label,
                  textAlign: "center", lineHeight: 1.2, letterSpacing: "0.02em",
                  pointerEvents: "none",
                }}>
                  {item.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>

    </div>
  );
}
