import clsx from "clsx";
import { motion } from "motion/react";
import { FC } from "react";
import {
  getButtonSize,
  getButtonVariant,
} from "../../lib/buttonStylesUtilities/buttonStylesUtilities";
import styles from "./button.module.css";
import { ButtonProps } from "./button.types";

export const Button: FC<ButtonProps> = ({
  variant = "primary",
  size = "small",
  children,
  onClick = () => null,
}) => {
  return (
    <motion.button
      type="button"
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.2 },
      }}
      whileTap={{ scale: 0.9 }}
      className={clsx(
        styles[`${getButtonVariant(variant)}`],
        styles[`${getButtonSize(size)}`],
        styles["button-general"]
      )}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
};
