import { ComponentPropsWithoutRef, CSSProperties, ReactNode } from "react";

import { motion } from "framer-motion";
import { HTMLMotionProps } from "motion/react";
import { css, cx } from "@emotion/css";

type Props = {
  border?: CSSProperties["border"];
  variant?: "contained" | "outlined";
  children: string | ReactNode;
  height?: CSSProperties["height"];
  width?: CSSProperties["width"];
  borderRadius?: CSSProperties["borderRadius"];
  backgroundColor?: CSSProperties["backgroundColor"];
  color?: CSSProperties["color"];
  fontWeight?: CSSProperties["fontWeight"];
  fontSize?: CSSProperties["fontSize"];
  justifyContent?: CSSProperties["justifyContent"];
  alignItems?: CSSProperties["alignItems"];
  hoverBackgroundColor?: CSSProperties["backgroundColor"];
  redirectTo?: string;
  className?: string;
} & ComponentPropsWithoutRef<"button"> &
  HTMLMotionProps<"button">;

export const Button = ({
  children,
  height = "50px",
  width = "100%",
  borderRadius = "8px",
  backgroundColor = "var(--primary-color)",
  color = "var(--text-primary-color)",
  fontWeight = 600,
  fontSize = "17px",
  justifyContent = "center",
  alignItems = "center",
  hoverBackgroundColor = "var(--plimary-dark-color)",
  className,
  variant = "contained",
  border = "none",
  onClick,
  ...rest
}: Props): JSX.Element => {
  const buttonStyles = css({
    background: variant === "outlined" ? "transparent" : backgroundColor,
    display: "flex",
    justifyContent,
    alignItems,
    width,
    height,
    borderRadius,
    border: variant === "outlined" ? `1px solid ${backgroundColor}` : border,
    color,
    fontWeight,
    fontSize,
    transition: "background 0.2s ease, transform 0.1s ease",
  });

  return (
    <motion.button
      whileHover={{ scale: 1.05, background: hoverBackgroundColor }}
      whileTap={{ scale: 0.95, background: hoverBackgroundColor }}
      className={cx(className, buttonStyles)}
      onClick={onClick}
      {...rest}
    >
      {children}
    </motion.button>
  );
};
