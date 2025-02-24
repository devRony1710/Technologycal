import { PropsWithChildren } from "react";

export type BUTTON_VARIANT = "primary" | "secondary" | "transparent";
export type BUTTON_SIZE = "small" | "medium" | "large";

export interface ButtonProps extends PropsWithChildren {
  variant: BUTTON_VARIANT;
  size: BUTTON_SIZE;
  onClick?: VoidFunction;
}

export const variantStyleSchema: {
  [key: string]: string;
} = {
  primary: "variant-primary",
  secondary: "variant-secondary",
  transparent: "variant-transparent",
};

export const sizeStyleSchema: {
  [key: string]: string;
} = {
  small: "size-small",
  medium: "size-medium",
  large: "size-large",
};
