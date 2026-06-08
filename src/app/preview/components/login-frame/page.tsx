"use client";

import { useState } from "react";
import type { CSSProperties, JSX } from "react";
import Button from "@/features/Button/Button";

/* ───────────────────────────────────────────────────────────────────────────
   Frame 17 · Auth / Login — "Cazador de ofertas"
   Reproducción fiel del wireframe VMC (798 × 738).
   Composición: tarjeta principal (gradiente Vault→Orange + formulario) +
   banner inferior "Centro de ayuda". Solo tokens var(--vmc-*) — cero HEX.
   Esto es exploración de preview — el feature real /login permanece intacto.
   ─────────────────────────────────────────────────────────────────────────── */

const FD = "var(--font-display, 'Plus Jakarta Sans', sans-serif)";
const FB = "var(--font-body, 'Roboto', sans-serif)";

const FRAME_W = 798;
const FRAME_H = 738;

/* ── CSS — estados interactivos, pseudo-elementos y transiciones ──────────── */
const LF_CSS = `
  .lf-stage {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 48px 24px;
    background: var(--vmc-color-neutral-200);
    font-family: ${FB};
  }

  /* Cromo del frame — contenedor exterior tipo lienzo */
  .lf-frame {
    width: ${FRAME_W}px;
    height: ${FRAME_H}px;
    box-sizing: border-box;
    padding: 14px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    border-radius: 12px;
    background: var(--vmc-color-base-white);
    box-shadow: 0 24px 64px -16px rgb(9.8% 0% 29.02% / 0.18);
  }

  /* ── Tarjeta principal ──────────────────────────────────────────────────── */
  .lf-card {
    flex: 1 1 auto;
    display: flex;
    gap: 20px;
    box-sizing: border-box;
    padding: 16px;
    border-radius: 20px;
    background: var(--vmc-color-base-white);
    box-shadow: 0 8px 24px -8px rgb(9.8% 0% 29.02% / 0.10);
    overflow: hidden;
  }

  /* ── Panel gradiente (registro) ───────────────────────────────────────── */
  .lf-promo {
    position: relative;
    width: 358px;
    flex-shrink: 0;
    box-sizing: border-box;
    padding: 28px;
    border-radius: 16px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    background-image: linear-gradient(
      147deg,
      var(--vmc-color-vault-1000) 0%,
      var(--vmc-color-vault-800) 34%,
      var(--vmc-color-vault-600) 52%,
      var(--vmc-color-orange-700) 84%,
      var(--vmc-color-orange-500) 100%
    );
  }
  /* Brillo radial superior-izquierdo para profundidad */
  .lf-promo::before {
    content: '';
    position: absolute;
    top: -40px;
    left: -40px;
    width: 220px;
    height: 220px;
    border-radius: 999px;
    background: radial-gradient(circle, rgb(100% 100% 100% / 0.16) 0%, transparent 70%);
    pointer-events: none;
  }
  .lf-promo > * { position: relative; z-index: 1; }

  .lf-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    align-self: flex-start;
    padding: 6px 12px;
    border-radius: 999px;
    background: rgb(100% 100% 100% / 0.14);
    backdrop-filter: blur(4px);
    border: 1px solid rgb(100% 100% 100% / 0.16);
  }
  .lf-badge-dot {
    width: 7px;
    height: 7px;
    border-radius: 999px;
    background: var(--vmc-color-orange-500);
    box-shadow: 0 0 8px var(--vmc-color-orange-500);
  }
  .lf-badge-text {
    font-family: ${FD};
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--vmc-color-base-white);
  }

  .lf-promo-title {
    margin: 20px 0 0;
    font-family: ${FD};
    font-size: 32px;
    font-weight: 800;
    line-height: 1.08;
    letter-spacing: -0.02em;
    color: var(--vmc-color-base-white);
  }
  .lf-promo-sub {
    margin: 12px 0 0;
    max-width: 250px;
    font-family: ${FB};
    font-size: 14px;
    line-height: 1.45;
    color: rgb(100% 100% 100% / 0.82);
  }

  .lf-features {
    margin-top: 24px;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .lf-feature {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px 16px;
    border-radius: 12px;
    background: rgb(100% 100% 100% / 0.10);
    border: 1px solid rgb(100% 100% 100% / 0.10);
  }
  .lf-feature-check {
    flex-shrink: 0;
    width: 22px;
    height: 22px;
    border-radius: 999px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: linear-gradient(135deg, var(--vmc-color-cyan-400), var(--vmc-color-cyan-600));
  }
  .lf-feature-text {
    font-family: ${FD};
    font-size: 13px;
    font-weight: 600;
    color: var(--vmc-color-base-white);
  }

  .lf-stats {
    margin-top: auto;
    display: flex;
    padding: 16px 20px;
    border-radius: 14px;
    background: rgb(3.14% 0% 9.41% / 0.28);
    border: 1px solid rgb(100% 100% 100% / 0.10);
  }
  .lf-stat { flex: 1 1 0; }
  .lf-stat + .lf-stat { border-left: 1px solid rgb(100% 100% 100% / 0.14); padding-left: 20px; }
  .lf-stat-value {
    font-family: ${FD};
    font-size: 26px;
    font-weight: 800;
    line-height: 1;
    letter-spacing: -0.01em;
    color: var(--vmc-color-base-white);
    font-variant-numeric: tabular-nums;
  }
  .lf-stat-label {
    margin-top: 4px;
    font-family: ${FB};
    font-size: 12px;
    color: rgb(100% 100% 100% / 0.68);
  }

  /* ── Panel formulario ─────────────────────────────────────────────────── */
  .lf-form {
    flex: 1 1 auto;
    box-sizing: border-box;
    padding: 8px 16px;
    display: flex;
    flex-direction: column;
    text-align: center;
  }
  .lf-welcome {
    margin: 4px 0 0;
    font-family: ${FD};
    font-size: 32px;
    font-weight: 800;
    line-height: 1;
    letter-spacing: -0.02em;
    background: linear-gradient(90deg,
      var(--vmc-color-vault-500) 0%,
      var(--vmc-color-orange-100) 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
  }
  .lf-welcome-sub {
    margin: 8px 0 0;
    font-family: ${FD};
    font-size: 14px;
    font-weight: 700;
    color: var(--vmc-color-vault-700);
  }

  .lf-field { margin-top: 24px; }
  .lf-field:first-of-type { margin-top: 28px; }
  .lf-label {
    display: block;
    margin-bottom: 8px;
    text-align: left;
    font-family: ${FB};
    font-size: 14px;
    font-weight: 500;
    color: var(--vmc-color-vault-700);
  }
  .lf-input-wrap { position: relative; }
  /* Input con borde gradiente (VYInputDefault): vault-500 → orange-100.
     Trick padding-box/border-box para pintar el borde con gradiente. */
  .lf-input {
    width: 100%;
    box-sizing: border-box;
    height: 48px;
    padding: 0 44px 0 16px;
    border-radius: 16px;
    border: 1.5px solid transparent;
    background:
      linear-gradient(var(--vmc-color-base-white), var(--vmc-color-base-white)) padding-box,
      linear-gradient(90deg,
        var(--vmc-color-vault-500) 0%,
        var(--vmc-color-orange-100) 100%) border-box;
    font-family: ${FB};
    font-size: 14px;
    text-align: left;
    color: var(--vmc-color-text-primary);
    transition: box-shadow 150ms cubic-bezier(0.3, 0, 0, 1);
  }
  .lf-input::placeholder { color: var(--vmc-color-text-placeholder); }
  .lf-input:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgb(35.29% 20.78% 76.08% / 0.16);
  }
  .lf-eye {
    position: absolute;
    top: 50%;
    right: 14px;
    transform: translateY(-50%);
    display: flex;
    background: none;
    border: none;
    padding: 2px;
    cursor: pointer;
    color: var(--vmc-color-vault-600);
    transition: color 150ms cubic-bezier(0.3, 0, 0, 1);
  }
  .lf-eye:hover { color: var(--vmc-color-vault-800); }
  .lf-eye:focus-visible { outline: 2px solid var(--vmc-color-vault-600); outline-offset: 2px; border-radius: 4px; }

  .lf-forgot {
    align-self: center;
    margin-top: 16px;
    background: none;
    border: none;
    cursor: pointer;
    font-family: ${FD};
    font-size: 13px;
    font-weight: 600;
    color: var(--vmc-color-vault-700);
    transition: color 150ms cubic-bezier(0.3, 0, 0, 1);
  }
  .lf-forgot:hover { color: var(--vmc-color-vault-500); }

  /* Slot del Button primary canónico (features/Button) — expandido al contenedor */
  .lf-primary-slot { margin-top: 20px; }
  .lf-primary-slot .ccb-pvbtn { width: 100%; }

  .lf-divider {
    display: flex;
    align-items: center;
    gap: 14px;
    margin: 16px 0;
  }
  .lf-divider::before,
  .lf-divider::after {
    content: '';
    flex: 1 1 auto;
    height: 1px;
    background: var(--vmc-color-border-subtle);
  }
  .lf-divider-text {
    font-family: ${FB};
    font-size: 13px;
    color: var(--vmc-color-text-tertiary);
  }

  /* Outline con la identidad del Button primary: pill, borde gradiente
     naranja→vault y texto gradiente. Relleno claro (lee como outline). */
  .lf-btn-outline {
    width: 100%;
    height: 48px;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 9999px;
    border: 2.5px solid transparent;
    background:
      linear-gradient(var(--vmc-color-base-white), var(--vmc-color-base-white)) padding-box,
      linear-gradient(135deg,
        var(--vmc-color-orange-600) 0%,
        var(--vmc-color-orange-600) 40%,
        var(--vmc-color-vault-500) 100%) border-box;
    box-shadow: rgb(132 96 229 / 0.12) 0px 2px 6px 0px;
    transition: transform 200ms cubic-bezier(0.25, 0.8, 0.25, 1),
                box-shadow 250ms cubic-bezier(0.25, 0.8, 0.25, 1);
  }
  .lf-outline-label {
    font-family: ${FD};
    font-size: 15px;
    font-weight: 600;
    background: linear-gradient(135deg,
      var(--vmc-color-orange-600) 0%,
      var(--vmc-color-vault-600) 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
  }
  .lf-btn-outline:hover {
    transform: translateY(-2px) scale(1.02);
    box-shadow: rgb(132 96 229 / 0.28) 0px 8px 24px;
  }
  .lf-btn-outline:active { transform: scale(0.97) translateY(1px); }
  .lf-btn-outline:focus-visible {
    outline: 2px solid var(--vmc-color-vault-400);
    outline-offset: 3px;
  }

  /* ── Banner inferior — Centro de ayuda ────────────────────────────────── */
  .lf-banner {
    flex-shrink: 0;
    box-sizing: border-box;
    height: 100px;
    display: flex;
    align-items: center;
    gap: 24px;
    padding: 0 24px;
    border-radius: 16px;
    overflow: hidden;
    background-image: linear-gradient(100deg,
      var(--vmc-color-vault-900) 0%,
      var(--vmc-color-vault-700) 60%,
      var(--vmc-color-vault-600) 100%);
  }
  .lf-banner-photo {
    flex-shrink: 0;
    width: 96px;
    height: 72px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgb(3.14% 0% 9.41% / 0.30);
    border: 1px solid rgb(100% 100% 100% / 0.10);
    font-family: ${FD};
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.06em;
    color: rgb(100% 100% 100% / 0.45);
  }
  .lf-banner-copy { flex: 1 1 auto; min-width: 0; }
  .lf-banner-over {
    font-family: ${FD};
    font-size: 13px;
    font-weight: 600;
    color: rgb(100% 100% 100% / 0.70);
  }
  .lf-banner-title {
    margin: 2px 0;
    font-family: ${FD};
    font-size: 24px;
    font-weight: 800;
    line-height: 1.1;
    letter-spacing: -0.01em;
    color: var(--vmc-color-base-white);
  }
  .lf-banner-desc {
    font-family: ${FB};
    font-size: 13px;
    color: rgb(100% 100% 100% / 0.68);
  }
  .lf-banner-cta {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    gap: 14px;
    height: 56px;
    padding: 0 8px 0 20px;
    cursor: pointer;
    border: none;
    border-radius: 12px;
    background: var(--vmc-color-base-white);
    transition: filter 150ms cubic-bezier(0.3, 0, 0, 1);
  }
  .lf-banner-cta:hover { filter: brightness(0.97); }
  .lf-banner-cta:focus-visible { outline: 2px solid var(--vmc-color-base-white); outline-offset: 2px; }
  .lf-banner-cta-label {
    font-family: ${FD};
    font-size: 12px;
    font-weight: 800;
    line-height: 1.15;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    text-align: left;
    color: var(--vmc-color-text-brand);
  }
  .lf-banner-cta-arrow {
    flex-shrink: 0;
    width: 40px;
    height: 40px;
    border-radius: 999px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--vmc-color-base-white);
    background-image: linear-gradient(135deg, var(--vmc-color-orange-500), var(--vmc-color-orange-700));
  }

  @media (prefers-reduced-motion: reduce) {
    .lf-input, .lf-eye, .lf-forgot,
    .lf-btn-outline, .lf-banner-cta { transition: none; }
  }
`;

/* ── Iconos ───────────────────────────────────────────────────────────────── */
function IconCheck(): JSX.Element {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 13l4 4L19 7"
        stroke="var(--vmc-color-base-white)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconEye({ open }: { open: boolean }): JSX.Element {
  if (open) {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    );
  }
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M3 3l18 18M10.6 10.6a3 3 0 004.2 4.2M9.4 5.2A9.6 9.6 0 0112 5c6.5 0 10 7 10 7a17 17 0 01-3.2 4M6.1 6.1A17 17 0 002 12s3.5 7 10 7a9.7 9.7 0 003.9-.8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconArrow(): JSX.Element {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ── Datos estáticos ────────────────────────────────────────────────────── */
const FEATURES: ReadonlyArray<string> = [
  "Ofertas y subastas exclusivas",
  "Alertas en tiempo real",
  "Acceso a Subaspass",
];

const STATS: ReadonlyArray<{ value: string; label: string }> = [
  { value: "+12.000", label: "cazadores activos" },
  { value: "4.9★", label: "valoración" },
];

/* ── Página ─────────────────────────────────────────────────────────────── */
export default function LoginFramePreview(): JSX.Element {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  function handleEmailChange(event: React.ChangeEvent<HTMLInputElement>): void {
    setEmail(event.target.value);
  }
  function handlePasswordChange(event: React.ChangeEvent<HTMLInputElement>): void {
    setPassword(event.target.value);
  }
  function handleTogglePassword(): void {
    setShowPassword((prev) => !prev);
  }
  function renderFeature(text: string): JSX.Element {
    return (
      <li key={text} className="lf-feature">
        <span className="lf-feature-check" aria-hidden="true">
          <IconCheck />
        </span>
        <span className="lf-feature-text">{text}</span>
      </li>
    );
  }
  function renderStat(stat: { value: string; label: string }): JSX.Element {
    return (
      <div key={stat.label} className="lf-stat">
        <div className="lf-stat-value">{stat.value}</div>
        <div className="lf-stat-label">{stat.label}</div>
      </div>
    );
  }

  const passwordType = showPassword ? "text" : "password";

  return (
    <div className="lf-stage">
      <style dangerouslySetInnerHTML={{ __html: LF_CSS }} />

      <div className="lf-frame" role="region" aria-label="Frame 17 · Acceso">
        {/* ── Tarjeta principal ── */}
        <section className="lf-card">
          {/* Panel promo gradiente */}
          <aside className="lf-promo">
            <span className="lf-badge">
              <span className="lf-badge-dot" aria-hidden="true" />
              <span className="lf-badge-text">Registro gratuito</span>
            </span>

            <h2 className="lf-promo-title">
              Únete a la
              <br />
              caza de ofertas
            </h2>
            <p className="lf-promo-sub">
              Crea tu cuenta en segundos y empieza a pujar en las mejores subastas
              del país.
            </p>

            <ul className="lf-features">{FEATURES.map(renderFeature)}</ul>

            <div className="lf-stats">{STATS.map(renderStat)}</div>
          </aside>

          {/* Panel formulario */}
          <div className="lf-form">
            <h1 className="lf-welcome">¡Bienvenido!</h1>
            <p className="lf-welcome-sub">Cazador de ofertas</p>

            <div className="lf-field">
              <label className="lf-label" htmlFor="lf-email">
                Correo electrónico
              </label>
              <div className="lf-input-wrap">
                <input
                  id="lf-email"
                  className="lf-input"
                  type="email"
                  placeholder="Subastin"
                  value={email}
                  onChange={handleEmailChange}
                  style={{ paddingRight: 16 } as CSSProperties}
                />
              </div>
            </div>

            <div className="lf-field">
              <label className="lf-label" htmlFor="lf-password">
                Contraseña
              </label>
              <div className="lf-input-wrap">
                <input
                  id="lf-password"
                  className="lf-input"
                  type={passwordType}
                  placeholder="Subastin"
                  value={password}
                  onChange={handlePasswordChange}
                />
                <button
                  type="button"
                  className="lf-eye"
                  onClick={handleTogglePassword}
                  aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
                  aria-pressed={showPassword}
                >
                  <IconEye open={showPassword} />
                </button>
              </div>
            </div>

            <button type="button" className="lf-forgot">
              ¿Olvidaste tu contraseña?
            </button>

            <div className="lf-primary-slot">
              <Button variant="primary" type="submit">
                Ingresa
              </Button>
            </div>

            <div className="lf-divider" role="separator">
              <span className="lf-divider-text">ó</span>
            </div>

            <button type="button" className="lf-btn-outline">
              <span className="lf-outline-label">Regístrate</span>
            </button>
          </div>
        </section>

        {/* ── Banner inferior ── */}
        <section className="lf-banner" aria-label="Centro de ayuda">
          <div className="lf-banner-photo" aria-hidden="true">
            FOTO
          </div>
          <div className="lf-banner-copy">
            <div className="lf-banner-over">Visita nuestro</div>
            <div className="lf-banner-title">Centro de ayuda</div>
            <div className="lf-banner-desc">Respuestas rápidas a todas tus dudas</div>
          </div>
          <button type="button" className="lf-banner-cta">
            <span className="lf-banner-cta-label">
              Ir al centro
              <br />
              de ayuda
            </span>
            <span className="lf-banner-cta-arrow" aria-hidden="true">
              <IconArrow />
            </span>
          </button>
        </section>
      </div>
    </div>
  );
}
