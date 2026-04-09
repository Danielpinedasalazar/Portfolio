"use client";

import { useEffect, useState } from "react";

export default function CursorSpotlight() {
  const [pos, setPos] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-20"
      style={{
        background: `radial-gradient(700px circle at ${pos.x}px ${pos.y}px, rgba(124, 58, 237, 0.08), transparent 55%)`,
      }}
    />
  );
}
