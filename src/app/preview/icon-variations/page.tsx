"use client";
import React from "react";
import type { JSX } from "react";
import { C } from "./constants";
import { QualityVariations } from "./QualityVariations";
import { CircularButtons } from "./CircularButtons";
import { StrokeFillSet } from "./StrokeFillSet";
import { IconBadgeStats } from "./IconBadgeStats";
import { CategoryCards } from "./CategoryCards";

export default function InfoGeneralPreviewPage(): JSX.Element {
  return (
    <div style={{
      minHeight: "100vh",
      backgroundColor: C.section,
      padding: 48,
      display: "flex",
      justifyContent: "center",
    }}>
      <div style={{ width: 640 }}>
        <QualityVariations />
        <CircularButtons />
        <StrokeFillSet />
        <IconBadgeStats />
        <CategoryCards />
      </div>
    </div>
  );
}
