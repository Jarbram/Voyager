"use client";

import { useState, useRef, useEffect, type JSX, type CSSProperties, type MouseEvent } from "react";
import DetailHeader from "@/features/DetailHeader/DetailHeader";

const labelStyle: CSSProperties = {
  fontFamily: "var(--vmc-font-display)",
  fontSize: 10,
  fontWeight: 700,
  letterSpacing: "1.2px",
  textTransform: "uppercase",
  color: "var(--vmc-color-text-placeholder)",
  padding: "var(--vmc-space-300) 0 var(--vmc-space-100)",
};

const chipStyle: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: "var(--vmc-space-050)",
  background: "var(--vmc-color-background-secondary)",
  border: "1px solid var(--vmc-color-border-default)",
  borderRadius: "var(--vmc-radius-full)",
  padding: "3px 10px 3px 6px",
  fontSize: 10,
  fontWeight: 600,
  letterSpacing: "0.8px",
  color: "var(--vmc-color-text-secondary)",
  textTransform: "uppercase",
  marginBottom: "var(--vmc-space-100)",
};

const chipDotStyle = (color: string): CSSProperties => ({
  width: 6,
  height: 6,
  borderRadius: "var(--vmc-radius-full)",
  background: color,
});

export default function DetailHeaderPreviewPage(): JSX.Element {
  const [galleryIndex, setGalleryIndex] = useState<number>(0);
  const scrollRef    = useRef<HTMLDivElement>(null);
  const thumbRefs    = useRef<(HTMLDivElement | null)[]>([]);
  const isDragging   = useRef(false);
  const hasMoved     = useRef(false);
  const startX       = useRef(0);
  const scrollOrigin = useRef(0);

  const images: string[] = [
    "/demo/bronco.jpg",
    "/demo/bronco2.jpg",
    "/demo/bronco3.jpg",
    "/demo/bronco.jpg",
    "/demo/bronco2.jpg",
    "/demo/bronco3.jpg",
    "/demo/bronco.jpg",
    "/demo/bronco2.jpg",
    "/demo/bronco3.jpg",
    "/demo/bronco.jpg",
  ];

  useEffect(() => {
    const activeThumb = thumbRefs.current[galleryIndex];
    if (activeThumb && scrollRef.current) {
      activeThumb.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    }
  }, [galleryIndex]);

  function handleNext(e: MouseEvent<HTMLButtonElement>): void {
    e.stopPropagation();
    setGalleryIndex((prev) => (prev + 1) % images.length);
  }

  function handlePrev(e: MouseEvent<HTMLButtonElement>): void {
    e.stopPropagation();
    setGalleryIndex((prev) => (prev - 1 + images.length) % images.length);
  }

  function handleThumbClick(index: number): void {
    if (hasMoved.current) return;
    setGalleryIndex(index);
  }

  function onDragStart(e: React.MouseEvent): void {
    if (!scrollRef.current) return;
    isDragging.current = true;
    hasMoved.current   = false;
    startX.current     = e.pageX - scrollRef.current.offsetLeft;
    scrollOrigin.current = scrollRef.current.scrollLeft;
    scrollRef.current.style.cursor = "grabbing";
  }

  function onDragEnd(): void {
    if (!scrollRef.current) return;
    setTimeout(() => {
      isDragging.current = false;
      hasMoved.current   = false;
    }, 50);
    scrollRef.current.style.cursor = "grab";
  }

  function onDragMove(e: React.MouseEvent): void {
    if (!isDragging.current || !scrollRef.current) return;
    const x = e.pageX - scrollRef.current.offsetLeft;
    if (Math.abs(x - startX.current) > 5) hasMoved.current = true;
    e.preventDefault();
    scrollRef.current.scrollLeft = scrollOrigin.current - (x - startX.current) * 1.5;
  }

  return (
    <div
      style={{
        background: "var(--vmc-color-background-primary)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        minHeight: "100vh",
        padding: "var(--vmc-space-600) var(--vmc-space-300)",
      }}
    >
      {/* ── STATIC STATES ── */}
      <div style={{ width: "100%", maxWidth: 480 }}>
        <DetailHeader title="Volkswagen Gol 2015" subtitle="Vendedor: SubasCars" forceState="default" />
        <div style={{ height: 20 }} />
        <DetailHeader title="Volkswagen Gol 2015" subtitle="Vendedor: SubasCars" forceState="hover" />
        <div style={{ height: 20 }} />
        <DetailHeader title="Volkswagen Gol 2015" subtitle="Vendedor: SubasCars" forceState="focus" />
      </div>

      {/* ── INTERACTIVE DEMO ── */}
      <div style={{ marginTop: "var(--vmc-space-600)", width: "100%", maxWidth: 443 }}>
        <p style={{ ...labelStyle, color: "var(--vmc-color-text-secondary)" }}>
          Demo interactivo — Galería con navegación independiente
        </p>

        <div
          style={{
            borderRadius: "var(--vmc-radius-sm)",
            overflow: "hidden",
            boxShadow: "var(--vmc-shadow-md)",
            background: "var(--vmc-color-background-card)",
          }}
        >
          {/* Header con estado natural */}
          <DetailHeader 
            title="Volkswagen Gol 2015" 
            subtitle="Vendedor: SubasCars" 
          />

          <div style={{ position: "relative", width: "100%", height: "362px" }}>
            <img src={images[galleryIndex]} alt="Gallery" style={{ width: "100%", height: "100%", objectFit: "cover" }} />

            <button type="button" className="gallery-action-btn" style={galleryButtonStyle({ top: "12px", right: "12px" })}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: "16px", height: "16px" }}>
                <polyline points="5 9 5 5 9 5" /><polyline points="15 5 19 5 19 9" /><polyline points="5 15 5 19 9 19" /><polyline points="15 19 19 19 19 15" />
              </svg>
            </button>

            <button type="button" onClick={handlePrev} className="gallery-action-btn" style={galleryButtonStyle({ top: "50%", left: "12px", transform: "translateY(-50%)" })}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ width: "20px", height: "20px" }}>
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button type="button" onClick={handleNext} className="gallery-action-btn" style={galleryButtonStyle({ top: "50%", right: "12px", transform: "translateY(-50%)" })}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ width: "20px", height: "20px" }}>
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>

            <span style={{ position: "absolute", bottom: "12px", right: "12px", background: "var(--vmc-color-background-overlay)", color: "var(--vmc-color-text-inverse)", fontFamily: "var(--vmc-font-mono)", fontSize: 12, padding: "5px 10px", borderRadius: "9999px" }}>
              {galleryIndex + 1} / {images.length}
            </span>
          </div>

          <div
            ref={scrollRef}
            className="thumb-strip"
            onMouseDown={onDragStart}
            onMouseLeave={onDragEnd}
            onMouseUp={onDragEnd}
            onMouseMove={onDragMove}
            style={{
              display: "flex",
              gap: "11px",
              padding: "8px 0 0",
              overflowX: "hidden",
              cursor: "grab",
              userSelect: "none",
              background: "var(--vmc-color-background-card)",
            }}
          >
            {images.map((img, i) => {
              const isActive = galleryIndex === i;
              return (
                <div
                  key={i}
                  ref={(el) => { thumbRefs.current[i] = el; }}
                  onClick={() => handleThumbClick(i)}
                  className={`gallery-thumbnail ${isActive ? "is-active" : ""}`}
                  style={{ flexShrink: 0, width: "115px", height: "87px", cursor: "pointer", borderRadius: "var(--vmc-radius-sm)", overflow: "hidden", position: "relative" }}
                >
                  <img src={img} alt={`Thumb ${i}`} draggable={false} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  <div className="thumbnail-border" style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, pointerEvents: "none", borderRadius: "var(--vmc-radius-sm)", transition: "all 100ms ease" }} />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx global>{`
        .gallery-action-btn { color: white; transition: color 100ms ease; border: none; cursor: pointer; display: flex; align-items: center; justify-content: center; }
        .gallery-action-btn:hover { color: var(--vmc-color-neutral-500); }
        .gallery-action-btn:active { color: var(--vmc-color-neutral-700); }
        .gallery-thumbnail:hover .thumbnail-border { box-shadow: inset 0 0 0 1px var(--vmc-color-status-urgent); }
        .gallery-thumbnail.is-active .thumbnail-border { box-shadow: inset 0 0 0 2px var(--vmc-color-status-urgent); }
        .thumb-strip::-webkit-scrollbar { display: none; }
        .thumb-strip { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}

function galleryButtonStyle(extra: CSSProperties): CSSProperties {
  return {
    position: "absolute",
    width: "36px",
    height: "36px",
    borderRadius: "9999px",
    background: "var(--vmc-color-background-overlay)",
    ...extra,
  };
}
