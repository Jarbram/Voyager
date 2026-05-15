import type { CSSProperties, JSX } from "react";
import DetalleOfertaBar from "@/features/DetalleOfertaBar/DetalleOfertaBar";
import type { DetalleOfertaBarState } from "@/features/DetalleOfertaBar/DetalleOfertaBar";

const canvasStyle: CSSProperties = {
  minHeight:       "100vh",
  backgroundColor: "#FFFFFF",
  display:         "flex",
  alignItems:      "center",
  justifyContent:  "center",
  padding:         "48px",
};

const frameStyle: CSSProperties = {
  border:        "2px dashed var(--color-vault-dark, #2E0F70)",
  borderRadius:  "4px",
  padding:       "32px",
  display:       "flex",
  flexDirection: "column",
  gap:           "32px",
};

const titleStyle: CSSProperties = {
  fontFamily:    "'Plus Jakarta Sans', sans-serif",
  fontSize:      11,
  fontWeight:    600,
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  color:         "var(--color-vault-dark, #2E0F70)",
  display:       "flex",
  alignItems:    "center",
  gap:           "6px",
};

const rowStyle: CSSProperties = {
  display:             "grid",
  gridTemplateColumns: "80px 297.5px",
  alignItems:          "center",
  gap:                 "24px",
};

const stateLabelStyle: CSSProperties = {
  fontFamily: "'Plus Jakarta Sans', sans-serif",
  fontSize:   12,
  fontWeight: 400,
  color:      "oklch(0.25 0 0)",
};

const dividerStyle: CSSProperties = {
  borderTop: "1px solid oklch(0.22 0.18 285 / 10%)",
};

const STATES: Array<{ key: DetalleOfertaBarState; label: string }> = [
  { key: "default", label: "Default" },
  { key: "hover",   label: "Hover"   },
  { key: "pressed", label: "Pressed" },
];

export default function DownloadButtonPreviewPage(): JSX.Element {
  return (
    <div style={canvasStyle}>
      <div style={frameStyle}>
        <p style={titleStyle}>
          <span style={{ fontSize: 10 }}>✦</span>
          Download Button
        </p>

        {STATES.map(function renderRow({ key, label }) {
          return (
            <div key={key} style={rowStyle}>
              <span style={stateLabelStyle}>{label}</span>
              <DetalleOfertaBar label="Detalle de la oferta" forceState={key} />
            </div>
          );
        })}

        <div style={dividerStyle} />

        <div style={rowStyle}>
          <span style={stateLabelStyle}>Interactivo</span>
          <DetalleOfertaBar label="Detalle de la oferta" />
        </div>
      </div>
    </div>
  );
}
