"use client";

import type { CSSProperties, JSX } from "react";
import ButtonPrimaryNegotiable from "@/features/ButtonPrimaryNegotiable/ButtonPrimaryNegotiable";
import type { DetailCardNegotiableProps } from "./types";

const FONT = "'Plus Jakarta Sans', sans-serif";

const CARD: CSSProperties = {
  width:         311,
  height:        390,
  borderRadius:  12,
  overflow:      "hidden",
  display:       "flex",
  flexDirection: "column",
  boxShadow:     "0 8px 16px oklch(0.22 0.18 285 / 8%)",
};

const TOP: CSSProperties = {
  background:    "linear-gradient(135deg, var(--color-vault-900) 0%, var(--color-vault-700) 100%)",
  padding:       "20px 20px 16px",
  display:       "flex",
  flexDirection: "column",
  gap:           16,
  flexShrink:    0,
};

const CLOSE_TEXT: CSSProperties = {
  fontFamily: FONT,
  fontSize:   14,
  fontWeight: 400,
  color:      "var(--color-text-on-dark-muted)",
  lineHeight: "1",
  flexShrink: 0,
};

const CLOSE_DAY_BOLD: CSSProperties = {
  fontWeight: 700,
  color:      "var(--color-text-inverse)",
};

const TIME_TEXT: CSSProperties = {
  fontFamily: FONT,
  fontSize:   16,
  fontWeight: 700,
  color:      "var(--color-text-inverse)",
  lineHeight: "1",
  flexShrink: 0,
};

/* Agrupa V_LINE_WRAPPER + HEART_ROW sin gap entre ellos */
const HEADER_GROUP: CSSProperties = {
  display:       "flex",
  flexDirection: "column",
};

/* Centra la línea vertical sobre el corazón */
const V_LINE_WRAPPER: CSSProperties = {
  display:        "flex",
  justifyContent: "center",
};

/* Línea vertical — solo sobre el corazón */
const V_LINE: CSSProperties = {
  width:      1,
  height:     12,
  background: "var(--color-text-on-dark-subtle)",
  flexShrink: 0,
};

/* Fila 1: textos en extremos */
const TEXT_ROW: CSSProperties = {
  display:        "flex",
  justifyContent: "space-between",
  alignItems:     "center",
};

/* Fila 2: hline — [gap] ♥ [gap] — hline */
const HEART_LINE_ROW: CSSProperties = {
  display:    "flex",
  alignItems: "center",
  marginTop:  6,
};

/* Línea horizontal — rellena el espacio entre texto y corazón */
const H_LINE: CSSProperties = {
  flex:       1,
  height:     1,
  background: "var(--color-text-on-dark-subtle)",
  minWidth:   8,
};

const HEART_CIRCLE: CSSProperties = {
  width:          48,
  height:         48,
  borderRadius:   9999,
  background:     "oklch(1 0 0)",
  display:        "flex",
  alignItems:     "center",
  justifyContent: "center",
  flexShrink:     0,
  marginInline:   10,
};

const STATS_ROW: CSSProperties = {
  display:        "flex",
  alignItems:     "center",
  justifyContent: "center",
  gap:            10,
};

const STAT_NUM: CSSProperties = {
  fontFamily: FONT,
  fontSize:   14,
  fontWeight: 600,
  color:      "var(--color-text-inverse)",
  minWidth:   20,
  textAlign:  "center",
};

const ICON_CIRCLE: CSSProperties = {
  width:          32,
  height:         32,
  borderRadius:   9999,
  border:         "1.5px solid var(--color-text-on-dark-subtle)",
  display:        "flex",
  alignItems:     "center",
  justifyContent: "center",
  flexShrink:     0,
};

const MID: CSSProperties = {
  background:     "linear-gradient(to right, var(--color-cyan-500) 0%, var(--color-cyan-600) 50%, var(--color-cyan-700) 100%)",
  padding:        "14px 20px",
  display:        "flex",
  alignItems:     "center",
  justifyContent: "center",
  flexShrink:     0,
};

const PROMO_TEXT: CSSProperties = {
  fontFamily:    FONT,
  fontSize:      16,
  fontWeight:    800,
  color:         "var(--color-text-inverse)",
  textAlign:     "center",
  lineHeight:    "1.35",
  letterSpacing: "-0.01em",
  margin:        0,
};

const BOTTOM: CSSProperties = {
  background:     "oklch(1 0 0)",
  padding:        "16px 20px",
  display:        "flex",
  flexDirection:  "column",
  alignItems:     "center",
  justifyContent: "center",
  gap:            12,
  flex:           1,
};

const BODY_TEXT: CSSProperties = {
  fontFamily: FONT,
  fontSize:   13,
  fontWeight: 400,
  color:      "var(--color-text-primary)",
  textAlign:  "center",
  lineHeight: "1.5",
  margin:     0,
};

const CAPTION: CSSProperties = {
  fontFamily: FONT,
  fontSize:   11,
  fontWeight: 400,
  color:      "var(--color-text-primary)",
  textAlign:  "center",
  lineHeight: "1.45",
  margin:     0,
};

function HeartIcon(): JSX.Element {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="var(--color-text-brand)"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      style={{ width: 22, height: 22 }}
    >
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}

function EyeIcon(): JSX.Element {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="var(--color-text-inverse)"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      style={{ width: 15, height: 15 }}
    >
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx={12} cy={12} r={3} />
    </svg>
  );
}

function ChatIcon(): JSX.Element {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="var(--color-text-inverse)"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      style={{ width: 15, height: 15 }}
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

export default function DetailCardNegotiable({
  closeDay         = "HOY",
  closeTime        = "06:00 pm",
  viewCount        = 93,
  offerCount       = 4,
  commentCount     = 7,
  promoTitle       = "¡APRENDE A NEGOCIAS\nCON SUBASTIN!",
  bodyText         = "Aprovecha esta oportunidad y haz una propuesta al vendedor.",
  commissionText   = "Comisión: 7.5% del valor de compra\no mínimo >S< 50",
  onNegotiateClick,
}: DetailCardNegotiableProps): JSX.Element {
  return (
    <div style={CARD}>

      {/* Purple — header + stats */}
      <div style={TOP}>
        <div style={HEADER_GROUP}>
          {/* Línea vertical centrada — stub sobre la fila */}
          <div style={V_LINE_WRAPPER}>
            <div style={V_LINE} />
          </div>

          {/* Fila 1: textos */}
          <div style={TEXT_ROW}>
            <span style={CLOSE_TEXT}>
              Cierra <strong style={CLOSE_DAY_BOLD}>{closeDay}</strong>
            </span>
            <span style={TIME_TEXT}>{closeTime}</span>
          </div>

          {/* Fila 2: hline — [10px] ♥ [10px] — hline */}
          <div style={HEART_LINE_ROW}>
            <div style={H_LINE} />
            <div style={HEART_CIRCLE}>
              <HeartIcon />
            </div>
            <div style={H_LINE} />
          </div>
        </div>

        <div style={STATS_ROW}>
          <span style={STAT_NUM}>{viewCount}</span>
          <div style={ICON_CIRCLE}><EyeIcon /></div>
          <span style={STAT_NUM}>{offerCount}</span>
          <div style={ICON_CIRCLE}><ChatIcon /></div>
          <span style={STAT_NUM}>{commentCount}</span>
        </div>
      </div>

      {/* Cyan — promo */}
      <div style={MID}>
        <p style={{ ...PROMO_TEXT, whiteSpace: "pre-line" }}>{promoTitle}</p>
      </div>

      {/* White — CTA */}
      <div style={BOTTOM}>
        <p style={BODY_TEXT}>{bodyText}</p>
        <ButtonPrimaryNegotiable onClick={onNegotiateClick} />
        <p style={{ ...CAPTION, whiteSpace: "pre-line" }}>{commissionText}</p>
      </div>

    </div>
  );
}
