export type ButtonPrimaryNegotiableState = "default" | "hover" | "pressed" | "disabled";

export interface ButtonPrimaryNegotiableProps {
  label?: string;
  forceState?: ButtonPrimaryNegotiableState;
  onClick?: () => void;
}
