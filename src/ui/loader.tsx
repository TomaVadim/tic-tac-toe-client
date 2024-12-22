import { css, keyframes } from "@emotion/css";
import { JSX } from "react";

export type LoaderSize = "small" | "medium" | "large";

interface Props {
  size?: LoaderSize;
}

const spinAnimation = keyframes`
  to {
    transform: rotate(1turn);
  }
`;

const loaderStyle = (size: LoaderSize) => css`
  width: ${size === "small" ? 16 : size === "medium" ? 32 : 50}px;
  padding: ${size === "small" ? 2 : size === "medium" ? 4 : 8}px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: #787878;
  --_m: conic-gradient(#0000 10%, #000), linear-gradient(#000 0 0) content-box;
  -webkit-mask: var(--_m);
  mask: var(--_m);
  -webkit-mask-composite: source-out;
  mask-composite: subtract;
  animation: ${spinAnimation} 1s infinite linear;
`;

export const Loader = ({ size = "large" }: Props): JSX.Element => {
  return <div className={loaderStyle(size)}></div>;
};
