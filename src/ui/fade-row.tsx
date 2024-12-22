import { useMemo } from "react";
import { motion, Variants } from "framer-motion";

type FadeRowProps = {
  className?: string;
  direction?: "up" | "down" | "left" | "right";
  framerProps?: Variants;
  children: React.ReactNode;
};

export function FadeRow({
  direction = "up",
  framerProps = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { type: "spring", delay: 0.1 } },
  },
  children,
}: FadeRowProps) {
  const directionOffset = useMemo(() => {
    const map = { up: 15, down: -10, left: -10, right: 10 };
    return map[direction];
  }, [direction]);

  const axis = direction === "up" || direction === "down" ? "y" : "x";

  const FADE_ANIMATION_VARIANTS = useMemo(() => {
    const { hidden, show, ...rest } = framerProps as {
      [name: string]: { [name: string]: number; opacity: number };
    };

    return {
      ...rest,
      hidden: {
        ...(hidden ?? {}),
        opacity: hidden?.opacity ?? 0,
        [axis]: hidden?.[axis] ?? directionOffset,
      },
      show: {
        ...(show ?? {}),
        opacity: show?.opacity ?? 1,
        [axis]: show?.[axis] ?? 0,
      },
    };
  }, [directionOffset, axis, framerProps]);

  return (
    <motion.div
      initial="hidden"
      whileInView="show" // Заменено с animate на whileInView
      viewport={{ once: true, amount: 0.5 }} // Добавлены настройки для viewport
      variants={FADE_ANIMATION_VARIANTS}
    >
      {children}
    </motion.div>
  );
}
