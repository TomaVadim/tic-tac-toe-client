import { Loader, LoaderSize } from "@/ui/loader";
import { CSSProperties, HTMLAttributes, JSX, useEffect, useState } from "react";

import { css, cx } from "@emotion/css";

interface Props extends HTMLAttributes<HTMLDivElement> {
  width?: CSSProperties["width"];
  height?: CSSProperties["height"];
  aspectRatio?: CSSProperties["aspectRatio"];
  src: string;
  alt?: string;
  className?: string;
  loading?: "lazy" | "eager";
  loaderSize?: LoaderSize;
}

const ImageComponent = ({
  width = "100%",
  height = "auto",
  aspectRatio,
  src,
  loading = "lazy",
  alt = "image",
  loaderSize,
  className,
  ...rest
}: Props): JSX.Element => {
  const [isLoaded, setIsLoaded] = useState(loading === "eager");

  useEffect(() => {
    if (loading === "lazy") {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        setIsLoaded(true);
      };
    }
  }, [src, loading]);

  return (
    <div
      className={cx(
        css({
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width,
          height,
          aspectRatio,
        }),
        className
      )}
      {...rest}
    >
      {loading === "lazy" && !isLoaded && <Loader size={loaderSize} />}

      <img
        src={src}
        alt={alt}
        loading={loading}
        onLoad={() => setIsLoaded(true)}
        className={css({
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: isLoaded ? "block" : "none",
        })}
      />
    </div>
  );
};

export { ImageComponent as Image };
