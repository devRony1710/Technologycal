import {
  BUTTON_SIZE,
  BUTTON_VARIANT,
  sizeStyleSchema,
  variantStyleSchema,
} from "../../components/button/button.types";

export const getButtonVariant = (variantStyle: BUTTON_VARIANT): string => {
  return variantStyleSchema[variantStyle];
};

export const getButtonSize = (sizeStyle: BUTTON_SIZE): string => {
  return sizeStyleSchema[sizeStyle];
};
