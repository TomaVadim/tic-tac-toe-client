import { css, cx } from "@emotion/css";
import { motion } from "framer-motion";

export const WaveText = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  const letters = text.split("");

  return (
    <div
      className={cx(
        className,
        css({
          display: "flex",
          justifyContent: "center",
        })
      )}
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          style={{ display: "inline-block", margin: "0 2px" }}
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            repeatDelay: 0.1 * index,
          }}
        >
          {letter}
        </motion.span>
      ))}
    </div>
  );
};
