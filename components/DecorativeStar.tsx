"use client";

import { motion } from "framer-motion";

interface DecorativeStarProps {
  size?: number;
  color?: string;
  opacity?: number;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  rotate?: number;
  spin?: boolean;
  spinDuration?: number;
  zIndex?: number;
}

export default function DecorativeStar({
  size = 80,
  color = "#FF2B2B",
  opacity = 0.15,
  top,
  left,
  right,
  bottom,
  rotate = 0,
  spin = false,
  spinDuration = 20,
  zIndex = 0,
}: DecorativeStarProps) {
  return (
    <motion.div
      aria-hidden="true"
      animate={spin ? { rotate: [rotate, rotate + 360] } : { rotate }}
      transition={
        spin
          ? { duration: spinDuration, repeat: Infinity, ease: "linear" }
          : { duration: 0.6, ease: "easeOut" }
      }
      style={{
        position: "absolute",
        width: size,
        height: size,
        opacity,
        top,
        left,
        right,
        bottom,
        zIndex,
        pointerEvents: "none",
        userSelect: "none",
        flexShrink: 0,
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 292 292"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M154.73 98.2017L209.179 13.7721L239.865 33.5628L185.044 118.569L284.197 97.1649L291.902 132.858L193.029 154.202L278.276 209.179L258.485 239.866L173.476 185.043L194.881 284.197L159.189 291.902L137.639 192.076L82.29 277.902L51.6027 258.111L106.579 172.865L7.70523 194.209L-2.57084e-05 158.515L99.1525 137.111L14.146 82.2896L33.9367 51.6032L119.182 106.578L97.8381 7.70503L133.531 -2.33964e-05L154.73 98.2017Z"
          fill={color}
        />
      </svg>
    </motion.div>
  );
}
