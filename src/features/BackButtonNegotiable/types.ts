export type BackButtonNegotiableState = "default" | "hover" | "pressed";

export interface BackButtonNegotiableProps {
  forceState?: BackButtonNegotiableState;
  onClick?: () => void;
  "aria-label"?: string;
}
