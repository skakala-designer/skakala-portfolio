"use client";

import { useRef, useState, useEffect, useCallback } from "react";

/*
  From Pencil design:
  - Min (closest):  "Almost" x=0,  "anything" x=91.86,  y=37.5
  - Max (farthest): "Almost" x=0,  "anything" x=191.86, y=37.5
  - "Almost" text width ≈ 190px, "anything" ≈ 221px, both height ≈ 75px

  To keep composition centered while both words move:
  - Center-stabilized min: "Almost" x=+25,  "anything" x=116.86
  - Center-stabilized max: "Almost" x=-25,  "anything" x=166.86
  - Each word moves 50px, total gap change = 100px
*/

const MAX_DISTANCE = 500;
const HALF_SHIFT = 25; // each word shifts 25px from center-stable midpoint

export default function HeroTitle() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [t, setT] = useState(1); // 0=closest, 1=farthest

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const dx = e.clientX - centerX;
    const dy = e.clientY - centerY;
    const distance = Math.sqrt(dx * dx + dy * dy);

    setT(Math.min(distance / MAX_DISTANCE, 1));
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  // Map t: 0 (close) → +HALF_SHIFT, 1 (far) → -HALF_SHIFT for "Almost"
  // Map t: 0 (close) → -HALF_SHIFT, 1 (far) → +HALF_SHIFT for "anything"
  const almostX = HALF_SHIFT - t * (2 * HALF_SHIFT);    // +25 → -25
  const anythingX = -HALF_SHIFT + t * (2 * HALF_SHIFT);  // -25 → +25

  // Base positions (midpoint between min and max states):
  // "Almost" at x=0 (midpoint), "anything" at x=141.86 (midpoint of 91.86 and 191.86)
  const almostBaseX = 0;
  const anythingBaseX = 141.86;

  return (
    <div
      ref={containerRef}
      className="flex flex-col items-center gap-[42px]"
    >
      {/* Container sized for max state composition */}
      <div className="relative" style={{ width: "415px", height: "113px" }}>
        <span
          className="font-playfair text-[56px] text-[#3F3F3F] leading-none absolute top-0"
          style={{
            left: `${almostBaseX + almostX}px`,
            transition: "left 0.15s ease-out",
            fontVariationSettings: "'wdth' 102, 'wght' 337, 'opsz' 299",
          }}
        >
          Almost
        </span>
        <span
          className="font-playfair text-[56px] text-[#3F3F3F] leading-none absolute"
          style={{
            left: `${anythingBaseX + anythingX}px`,
            top: "37.5px",
            transition: "left 0.15s ease-out",
            fontVariationSettings: "'wdth' 102, 'wght' 337, 'opsz' 299",
          }}
        >
          anything
        </span>
      </div>
      <p className="font-geologica text-[10px] font-medium tracking-[2px] text-[var(--color-salmon-dark)] text-center w-full">
        DESIGN FOR THE DIGITAL ERA
      </p>
    </div>
  );
}
