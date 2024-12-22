import {
  CSSProperties,
  ReactNode,
  ElementType,
  ComponentPropsWithoutRef,
} from "react";

import { css, cx } from "@emotion/css";

type Props<T extends ElementType = "span"> = {
  children: ReactNode;
  as?: T;
  size?: CSSProperties["fontSize"];
  weight?: CSSProperties["fontWeight"];
  color?: CSSProperties["color"];
  align?: CSSProperties["textAlign"];
  lineHeight?: CSSProperties["lineHeight"];
  className?: string;
} & ComponentPropsWithoutRef<T>;

export const Typography = <T extends ElementType = "span">(props: Props<T>) => {
  const {
    children,
    as: Component = "span",
    size = 16,
    color = "var(--text-primary-color)",
    weight = 400,
    lineHeight,
    align = "left",
    className,
    ...rest
  } = props;

  return (
    <Component
      {...rest}
      className={cx(
        "typography",
        className,
        css({
          color,
          fontSize: size,
          fontWeight: weight,
          textAlign: align,
          lineHeight: lineHeight ? lineHeight : "normal",
          fontFamily: "var(--font-family)",
        })
      )}
    >
      {children}
    </Component>
  );
};
