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
  useStar4?: boolean;
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
  useStar4 = false,
}: DecorativeStarProps) {
  return (
    <motion.div
      aria-hidden="true"
      animate={
        useStar4
          ? { scale: [0.9, 1.25, 0.9] }
          : {
              scale: [1, 1.08, 1],
              rotate: spin ? [rotate, rotate + 360] : rotate,
            }
      }
      transition={
        useStar4
          ? {
              duration: 3 + Math.random() * 3,
              repeat: Infinity,
              ease: "easeInOut",
            }
          : {
              scale: {
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                ease: "easeInOut",
              },
              rotate: spin
                ? { duration: spinDuration, repeat: Infinity, ease: "linear" }
                : { duration: 0.6, ease: "easeOut" },
            }
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
      {useStar4 ? (
        <svg
          width={size}
          height={size}
          viewBox="0 0 155 162"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M77.0356 0L86.5963 51.575L124.646 15.4696L102.066 62.8144L154.071 55.9696L107.975 81L154.071 106.03L102.066 99.1856L124.646 146.53L86.5963 110.425L77.0356 162L67.4748 110.425L29.425 146.53L52.0052 99.1856L7.62939e-06 106.03L46.0963 81L7.62939e-06 55.9696L52.0052 62.8144L29.425 15.4696L67.4748 51.575L77.0356 0Z"
            fill={color}
          />
        </svg>
      ) : (
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
      )}
    </motion.div>
  );
}
