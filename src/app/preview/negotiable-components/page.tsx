import type { CSSProperties, JSX } from "react";
import ButtonPrimaryNegotiable from "@/features/ButtonPrimaryNegotiable/ButtonPrimaryNegotiable";
import type { ButtonPrimaryNegotiableState } from "@/features/ButtonPrimaryNegotiable/types";
import BackButtonNegotiable from "@/features/BackButtonNegotiable/BackButtonNegotiable";
import type { BackButtonNegotiableState } from "@/features/BackButtonNegotiable/types";
import HeaderNegotiable from "@/features/HeaderNegotiable/HeaderNegotiable";
import DetailCardNegotiable from "@/features/DetailCardNegotiable/DetailCardNegotiable";

const canvasStyle: CSSProperties = {
  minHeight:       "100vh",
  backgroundColor: "#FFFFFF",
  display:         "flex",
  alignItems:      "flex-start",
  justifyContent:  "center",
  padding:         48,
};

const frameStyle: CSSProperties = {
  border:        "2px dashed var(--color-negotiable, #00CACD)",
  borderRadius:  4,
  padding:       32,
  display:       "flex",
  flexDirection: "column",
  gap:           40,
  width:         560,
};

const sectionStyle: CSSProperties = {
  display:       "flex",
  flexDirection: "column",
  gap:           24,
};

const sectionTitleStyle: CSSProperties = {
  fontFamily:    "'Plus Jakarta Sans', sans-serif",
  fontSize:      11,
  fontWeight:    600,
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  color:         "var(--color-negotiable, #00CACD)",
  display:       "flex",
  alignItems:    "center",
  gap:           6,
};

const rowStyle: CSSProperties = {
  display:     "grid",
  gridTemplateColumns: "80px 1fr",
  alignItems:  "center",
  gap:         24,
};

const stateLabelStyle: CSSProperties = {
  fontFamily: "'Plus Jakarta Sans', sans-serif",
  fontSize:   12,
  fontWeight: 400,
  color:      "oklch(0.25 0 0)",
};

const dividerStyle: CSSProperties = {
  borderTop: "1px solid oklch(0.78 0.14 195 / 15%)",
};

const GRADIENT_DEF =
  "linear-gradient(to right, var(--color-cyan-500) 0%, var(--color-cyan-600) 50%, var(--color-cyan-700) 100%)";

const backButtonSwatchStyle: CSSProperties = {
  display:        "flex",
  alignItems:     "center",
  justifyContent: "flex-start",
  padding:        "8px 16px",
  borderRadius:   8,
  background:     GRADIENT_DEF,
  width:          "fit-content",
};

const BUTTON_STATES: Array<{ key: ButtonPrimaryNegotiableState; label: string }> = [
  { key: "default",  label: "Default"  },
  { key: "hover",    label: "Hover"    },
  { key: "pressed",  label: "Pressed"  },
  { key: "disabled", label: "Disabled" },
];

const BACK_STATES: Array<{ key: BackButtonNegotiableState; label: string }> = [
  { key: "default", label: "Default" },
  { key: "hover",   label: "Hover"   },
  { key: "pressed", label: "Pressed" },
];

const HEADER_STATES: Array<{ key: BackButtonNegotiableState; label: string }> = [
  { key: "default", label: "Default" },
  { key: "hover",   label: "Hover"   },
  { key: "pressed", label: "Pressed" },
];

export default function NegotiableComponentsPreviewPage(): JSX.Element {
  return (
    <div style={canvasStyle}>
      <div style={frameStyle}>

        {/* ButtonPrimaryNegotiable */}
        <section style={sectionStyle}>
          <p style={sectionTitleStyle}>
            <span style={{ fontSize: 10 }}>✦</span>
            ButtonPrimaryNegotiable
          </p>
          {BUTTON_STATES.map(function renderButtonRow({ key, label }) {
            return (
              <div key={key} style={rowStyle}>
                <span style={stateLabelStyle}>{label}</span>
                <ButtonPrimaryNegotiable forceState={key} />
              </div>
            );
          })}

          <div style={dividerStyle} />

          <div style={rowStyle}>
            <span style={stateLabelStyle}>Interactivo</span>
            <ButtonPrimaryNegotiable />
          </div>
        </section>

        <div style={dividerStyle} />

        {/* BackButtonNegotiable */}
        <section style={sectionStyle}>
          <p style={sectionTitleStyle}>
            <span style={{ fontSize: 10 }}>✦</span>
            BackButtonNegotiable
          </p>
          {BACK_STATES.map(function renderBackRow({ key, label }) {
            return (
              <div key={key} style={rowStyle}>
                <span style={stateLabelStyle}>{label}</span>
                <div style={backButtonSwatchStyle}>
                  <BackButtonNegotiable forceState={key} />
                </div>
              </div>
            );
          })}

          <div style={dividerStyle} />

          <div style={rowStyle}>
            <span style={stateLabelStyle}>Interactivo</span>
            <div style={backButtonSwatchStyle}>
              <BackButtonNegotiable />
            </div>
          </div>
        </section>

        <div style={dividerStyle} />

        {/* HeaderNegotiable */}
        <section style={sectionStyle}>
          <p style={sectionTitleStyle}>
            <span style={{ fontSize: 10 }}>✦</span>
            HeaderNegotiable
          </p>
          {HEADER_STATES.map(function renderHeaderRow({ key, label }) {
            return (
              <div key={key} style={rowStyle}>
                <span style={stateLabelStyle}>{label}</span>
                <HeaderNegotiable buttonState={key} />
              </div>
            );
          })}

          <div style={dividerStyle} />

          <div style={rowStyle}>
            <span style={stateLabelStyle}>Interactivo</span>
            <HeaderNegotiable />
          </div>
        </section>

        <div style={dividerStyle} />

        {/* DetailCardNegotiable */}
        <section style={sectionStyle}>
          <p style={sectionTitleStyle}>
            <span style={{ fontSize: 10 }}>✦</span>
            DetailCardNegotiable
          </p>
          <DetailCardNegotiable />
        </section>

      </div>
    </div>
  );
}
