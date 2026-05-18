import type { CSSProperties, JSX } from "react";
import BackButtonNegotiable from "../BackButtonNegotiable/BackButtonNegotiable";
import type { HeaderNegotiableProps } from "./types";

const FONT = "var(--vmc-font-display, 'Plus Jakarta Sans', sans-serif)";

const GRADIENT_DEF =
  "linear-gradient(to right, var(--color-cyan-500) 0%, var(--color-cyan-600) 50%, var(--color-cyan-700) 100%)";

const rowStyle: CSSProperties = {
  display:      "flex",
  alignItems:   "center",
  gap:          16,
  padding:      "0 16px",
  height:       64,
  borderRadius: 8,
  background:   GRADIENT_DEF,
  cursor:       "pointer",
  outline:      "none",
};

const titleStyle: CSSProperties = {
  fontFamily: FONT,
  fontSize:   16,
  fontWeight: 700,
  color:      "var(--color-text-inverse)",
  lineHeight: 1.25,
  margin:     0,
};

const subtitleStyle: CSSProperties = {
  fontFamily: FONT,
  fontSize:   12,
  fontWeight: 400,
  color:      "var(--color-text-on-dark-muted)",
  lineHeight: 1.25,
  margin:     0,
};

const textGroupStyle: CSSProperties = {
  display:       "flex",
  flexDirection: "column",
  gap:           2,
};

export default function HeaderNegotiable({
  title = "Aire acondicionado Uniflair",
  subtitle = "Vendedor: Institución Financiera",
  buttonState,
  onClick,
}: HeaderNegotiableProps): JSX.Element {
  return (
    <div role="button" tabIndex={0} onClick={onClick} style={rowStyle}>
      <BackButtonNegotiable forceState={buttonState} />
      <div style={textGroupStyle}>
        <p style={titleStyle}>{title}</p>
        <p style={subtitleStyle}>{subtitle}</p>
      </div>
    </div>
  );
}
