import {
  CSSProperties,
  ReactNode,
  ElementType,
  ComponentPropsWithoutRef,
} from "react";
import { MouseEvent as ReactMouseEvent } from "react";

import { css, cx } from "@emotion/css";

export type FlexProps<T extends ElementType = "div"> = {
  children: ReactNode;
  direction?: CSSProperties["flexDirection"];
  justifyContent?: CSSProperties["justifyContent"];
  alignItems?: CSSProperties["alignItems"];
  alignSelf?: CSSProperties["alignSelf"];
  gap?: CSSProperties["gap"];
  ml?: CSSProperties["marginLeft"];
  mr?: CSSProperties["marginRight"];
  mt?: CSSProperties["marginTop"];
  mb?: CSSProperties["marginBottom"];
  pt?: CSSProperties["paddingTop"];
  pb?: CSSProperties["paddingBottom"];
  pl?: CSSProperties["paddingLeft"];
  pr?: CSSProperties["paddingRight"];
  fg?: CSSProperties["flexGrow"];
  className?: string;
  fullWidth?: boolean;
  onClick?: (e: ReactMouseEvent<Element>) => void;
  as?: T;
} & ComponentPropsWithoutRef<T>;

export const Flex = <T extends ElementType = "div">(props: FlexProps<T>) => {
  const {
    children,
    className,
    onClick,
    as: Component = "div",
    direction,
    justifyContent,
    alignItems,
    alignSelf,
    gap,
    ml,
    mr,
    mt,
    mb,
    pt,
    pb,
    pl,
    pr,
    fg,
    fullWidth,
    ...rest
  } = props;

  return (
    <Component
      onClick={onClick}
      className={cx(
        css({
          display: "flex",
          width: fullWidth ? "100%" : undefined,
          flexDirection: direction,
          justifyContent: justifyContent,
          alignItems: alignItems,
          alignSelf: alignSelf,
          gap: gap,
          marginLeft: ml,
          marginRight: mr,
          marginTop: mt,
          marginBottom: mb,
          paddingTop: pt,
          paddingBottom: pb,
          paddingLeft: pl,
          paddingRight: pr,
          flexGrow: fg,
        }),
        className
      )}
      {...rest}
    >
      {children}
    </Component>
  );
};
