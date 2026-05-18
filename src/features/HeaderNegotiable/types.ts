import type { BackButtonNegotiableState } from "../BackButtonNegotiable/types";

export type { BackButtonNegotiableState };

export interface HeaderNegotiableProps {
  title?: string;
  subtitle?: string;
  buttonState?: BackButtonNegotiableState;
  onClick?: () => void;
}
