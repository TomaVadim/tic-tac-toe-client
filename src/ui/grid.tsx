import {
  CSSProperties,
  ReactNode,
  ElementType,
  ComponentPropsWithoutRef,
} from "react";
import { MouseEvent as ReactMouseEvent } from "react";

import { css, cx } from "@emotion/css";

export type Props<T extends ElementType = "div"> = {
  children: ReactNode;
  columns?: CSSProperties["gridTemplateColumns"];
  rows?: CSSProperties["gridTemplateRows"];
  areas?: CSSProperties["gridTemplateAreas"];
  gap?: CSSProperties["gap"];
  columnGap?: CSSProperties["columnGap"];
  rowGap?: CSSProperties["rowGap"];
  justifyContent?: CSSProperties["justifyContent"];
  alignItems?: CSSProperties["alignItems"];
  justifyItems?: CSSProperties["justifyItems"];
  alignContent?: CSSProperties["alignContent"];
  autoColumns?: CSSProperties["gridAutoColumns"];
  autoRows?: CSSProperties["gridAutoRows"];
  autoFlow?: CSSProperties["gridAutoFlow"];
  className?: string;
  fullWidth?: boolean;
  onClick?: (e: ReactMouseEvent<Element>) => void;
  as?: T;
} & ComponentPropsWithoutRef<T>;

export const Grid = <T extends ElementType = "div">(props: Props<T>) => {
  const {
    children,
    className,
    onClick,
    as: Component = "div",
    columns,
    rows,
    areas,
    gap,
    columnGap,
    rowGap,
    justifyContent,
    alignItems,
    justifyItems,
    alignContent,
    autoColumns,
    autoRows,
    autoFlow,
    fullWidth,
    ...rest
  } = props;

  return (
    <Component
      onClick={onClick}
      className={cx(
        css({
          display: "grid",
          width: fullWidth ? "100%" : undefined,
          gridTemplateColumns: columns,
          gridTemplateRows: rows,
          gridTemplateAreas: areas,
          gap: gap,
          columnGap: columnGap,
          rowGap: rowGap,
          justifyContent: justifyContent,
          alignItems: alignItems,
          justifyItems: justifyItems,
          alignContent: alignContent,
          gridAutoColumns: autoColumns,
          gridAutoRows: autoRows,
          gridAutoFlow: autoFlow,
        }),
        className
      )}
      {...rest}
    >
      {children}
    </Component>
  );
};
