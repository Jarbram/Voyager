"use client";

import type { JSX } from "react";

export default function AccordionHeader(): JSX.Element {
  return (
    <div className="relative flex items-center justify-center p-8 cursor-pointer">
      <div className="relative items-center inline-block px-6 py-2">
        <svg
          viewBox="0 0 24 24"
          width="24"
          height="24"
          aria-hidden="true"
          className="absolute top-0 left-0 w-3 h-3 transition-colors duration-200 fill-current"
          style={{ color: "var(--voyager-color-vault-mid, #3B1782)" }}
        >
          <use href="/4app/assets/images/frontend/glyphs/svg-sprite.svg#glyphs-chevron-left-top" />
        </svg>
        <h2
          className="text-sm font-bold leading-tight font-display"
          style={{
            color: "var(--voyager-color-vault, #22005C)",
            fontFamily: "var(--voyager-font-display, 'Plus Jakarta Sans', sans-serif)",
          }}
        >
          Información general
        </h2>
        <svg
          viewBox="0 0 24 24"
          width="24"
          height="24"
          aria-hidden="true"
          className="absolute bottom-0 right-0 w-3 h-3 transition-colors duration-200 fill-current"
          style={{ color: "var(--voyager-color-vault-mid, #3B1782)" }}
        >
          <use href="/4app/assets/images/frontend/glyphs/svg-sprite.svg#glyphs-chevron-right-bottom" />
        </svg>
      </div>
      <span className="absolute right-0 w-6 h-6 mr-8 transition-transform duration-200 transform">
        <svg
          viewBox="0 0 24 24"
          width="24"
          height="24"
          aria-hidden="true"
          className="w-6 h-6 fill-current"
          style={{ color: "var(--voyager-color-live, #ED8936)" }}
        >
          <use href="/4app/assets/images/frontend/glyphs/svg-sprite.svg#glyphs-arrow-bottom" />
        </svg>
      </span>
    </div>
  );
}
