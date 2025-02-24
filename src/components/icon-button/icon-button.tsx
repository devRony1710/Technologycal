import clsx from "clsx";
import { motion } from "motion/react";
import { FC } from "react";
import styles from "./icon-button.module.css";
import { IconButtonProps } from "./icon-button.types";

export const IconButton: FC<IconButtonProps> = ({
  children,
  className,
  onClick,
}) => {
  return (
    <>
      <motion.button
        type="button"
        className={clsx(styles["icon-button-general"], className)}
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.2 },
        }}
        whileTap={{ scale: 0.9 }}
        onClick={onClick}
      >
        {children}
      </motion.button>
    </>
  );
};
