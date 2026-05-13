"use client";

import type { JSX, CSSProperties } from "react";

interface DetailHeaderProps {
  title: string;
  subtitle: string;
  onBack?: () => void;
  /** State overrides for preview purposes */
  forceState?: "default" | "hover" | "focus";
}

export default function DetailHeader({
  title,
  subtitle,
  onBack,
  forceState,
}: DetailHeaderProps): JSX.Element {
  let backBtnBg = "transparent";
  let backBtnColor = "var(--vmc-color-text-inverse)";

  if (forceState === "hover") {
    backBtnBg = "var(--vmc-color-orange-500)";
  } else if (forceState === "focus") {
    backBtnBg = "var(--vmc-color-orange-600)";
    backBtnColor = "var(--vmc-color-text-on-dark-muted)";
  }

  const containerStyle: CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: "var(--vmc-space-150)",
    width: "100%",
    height: "var(--vmc-space-800)",
    padding: "0 var(--vmc-space-200)",
    background: "linear-gradient(to right, var(--vmc-color-orange-500) 0%, var(--vmc-color-orange-600) 50%, var(--vmc-color-orange-700) 100%)",
    borderRadius: "var(--vmc-radius-sm)",
    cursor: "default", // Changed from pointer to default as the whole banner isn't clickable anymore
    userSelect: "none",
  };

  const backBtnStyle: CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "32px",
    height: "32px",
    borderRadius: "var(--vmc-radius-full)",
    flexShrink: 0,
    background: backBtnBg,
    transition: "all var(--vmc-motion-duration-fast) var(--vmc-motion-easing-standard)",
    color: backBtnColor,
    border: "none",
    cursor: "pointer",
    padding: 0,
    outline: "none",
  };

  return (
    <div className="detail-header" style={containerStyle}>
      <button 
        type="button"
        className="back-btn" 
        onClick={(e) => {
          e.stopPropagation();
          onBack?.();
        }} 
        style={backBtnStyle}
        aria-label="Volver"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          style={{ width: "24px", height: "24px" }}
        >
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "0px",
          minWidth: 0,
        }}
      >
        <span
          style={{
            fontFamily: "var(--vmc-font-display)",
            fontSize: "16px",
            fontWeight: 500,
            lineHeight: "24px",
            color: "var(--vmc-color-text-inverse)",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {title}
        </span>
        <span
          style={{
            fontFamily: "var(--vmc-font-display)",
            fontSize: "12px",
            fontWeight: 400,
            lineHeight: "16px",
            color: "var(--vmc-color-text-on-dark-muted)",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {subtitle}
        </span>
      </div>

      {!forceState && (
        <style jsx global>{`
          .back-btn:hover {
            background: var(--vmc-color-orange-500) !important;
          }
          .back-btn:active {
            background: var(--vmc-color-orange-600) !important;
            color: var(--vmc-color-text-on-dark-muted) !important;
          }
        `}</style>
      )}
    </div>
  );
}
