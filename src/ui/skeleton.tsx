import { CSSProperties } from "react";

import { css, keyframes } from "@emotion/css";

export const shimmer = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

interface Props {
  mt?: CSSProperties["marginTop"];
  mb?: CSSProperties["marginBottom"];
  ml?: CSSProperties["marginLeft"];
  mr?: CSSProperties["marginRight"];
  width?: CSSProperties["width"];
  height?: CSSProperties["height"];
  borderRadius?: CSSProperties["borderRadius"];
}

export const Skeleton = ({
  mt = 0,
  mb = 0,
  ml = 0,
  mr = 0,
  width = "100%",
  height = "100%",
  borderRadius = "8px",
}: Props) => (
  <div
    className={css({
      marginTop: mt,
      marginBottom: mb,
      marginLeft: ml,
      marginRight: mr,
      height,
      width,
      borderRadius,
      backgroundColor: "#454648",
      backgroundImage:
        "linear-gradient(90deg, #454648 25%, #959595 50%, #454648 75%)",
      backgroundSize: "200% 100%",
      animation: `${shimmer} 1.5s infinite`,
    })}
  />
);
