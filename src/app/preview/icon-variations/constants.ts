export const PJS  = "'Plus Jakarta Sans', sans-serif";

export const C = {
  success:    "var(--color-status-success, oklch(0.70 0.20 145))",
  warning:    "var(--color-status-warning, oklch(0.72 0.16 65))",
  error:      "var(--color-status-error,   oklch(0.42 0.20 20))",
  vault:      "var(--color-vault,     oklch(0.22 0.18 285))",
  vaultMid:   "var(--color-vault-mid, oklch(0.30 0.20 285))",
  live:       "var(--color-live,      oklch(0.72 0.16 55))",
  label:      "var(--color-text-muted, oklch(0.38 0.04 280 / 50%))",
  section:    "var(--color-surface-section, #F2F4F3)",
  card:       "var(--color-surface-card, #FFFFFF)",
  textOn:     "var(--color-text-on-surface, oklch(0.15 0.008 200))",
  textOnDark: "var(--color-text-on-dark, oklch(1 0 0))",
};

export type Level = 1 | 2 | 3;

export const LEVELS: Array<{ level: Level; label: string }> = [
  { level: 1, label: "Básico"     },
  { level: 2, label: "Parcial"    },
  { level: 3, label: "Verificado" },
];

export function levelColor(level: Level): string {
  if (level === 3) return C.success;
  if (level === 2) return C.warning;
  return C.error;
}

export function activeColor(level: Level): string {
  if (level === 3) return C.success;
  if (level === 2) return C.warning;
  return C.label;
}
