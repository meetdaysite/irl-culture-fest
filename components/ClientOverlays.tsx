"use client";

import dynamic from "next/dynamic";

const FloatingDots = dynamic(() => import("@/components/FloatingDots"), { ssr: false });
const CustomCursor = dynamic(() => import("@/components/CustomCursor"), { ssr: false });

export default function ClientOverlays() {
  return (
    <>
      <FloatingDots />
      <CustomCursor />
    </>
  );
}
