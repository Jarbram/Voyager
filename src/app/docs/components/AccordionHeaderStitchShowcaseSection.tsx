"use client";

import type { JSX } from "react";
import AccordionHeader from "@/features/AccordionHeader/AccordionHeader";
import { ComponentShowcase } from "./ComponentShowcase";

const STITCH_PROJECT_ID = "344497491706707189";
const STITCH_SCREEN_ID = "accordion-header-pending";

export function AccordionHeaderStitchShowcaseSection(): JSX.Element {
  return (
    <ComponentShowcase
      id="accordion-header"
      title="AccordionHeader"
      description="436×109.69px"
      stitchProjectId={STITCH_PROJECT_ID}
      stitchScreenId={STITCH_SCREEN_ID}
      importPath='import AccordionHeader from "@/features/AccordionHeader/AccordionHeader";'
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "32px 24px",
          background: "var(--voyager-surface-section, #F2F4F3)",
        }}
      >
        <AccordionHeader />
      </div>
    </ComponentShowcase>
  );
}
