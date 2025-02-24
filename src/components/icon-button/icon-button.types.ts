import { PropsWithChildren } from "react";

export interface IconButtonProps extends PropsWithChildren {
  className?: string;
  onClick?: VoidFunction;
}
