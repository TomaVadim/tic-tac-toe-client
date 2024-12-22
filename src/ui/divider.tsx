import { CSSProperties } from "react";

import { css, cx } from "@emotion/css";

interface Props {
  classname?: string;
  color?: CSSProperties["color"];
  height?: CSSProperties["height"];
  width?: CSSProperties["width"];
}

export const Divider = ({
  classname,
  color = "rgba(135, 141, 155, 0.12)",
  height = "1px",
  width = "100%",
}: Props): JSX.Element => {
  return (
    <div
      className={cx(
        "divider",
        classname,
        css({ backgroundColor: color, height, width: width })
      )}
    ></div>
  );
};
