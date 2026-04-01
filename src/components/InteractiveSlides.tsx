"use client";

import { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";

/* Lazy-load the Rive inner component so @rive-app/react-webgl2
   is never evaluated during SSR (it accesses WebGL2/WASM globals). */
const RiveInner = dynamic(() => import("./RiveInner"), { ssr: false });

/* Wrapper: defers mounting until visible, pauses when off-screen. */
function RiveEmbed({
  src,
  width,
  height,
  className,
  artboard,
  stateMachines,
  fit,
  autoBind = false,
}: {
  src: string;
  width: number;
  height: number;
  className?: string;
  artboard?: string;
  stateMachines?: string;
  fit?: string;
  autoBind?: boolean;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.01 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} style={{ width, height }} className={className}>
      {visible && (
        <RiveInner
          src={src}
          artboard={artboard}
          stateMachines={stateMachines}
          fit={fit}
          autoBind={autoBind}
        />
      )}
    </div>
  );
}

/* ── Slide 01 ── bg #e3e3e3, "interactive 01.riv" 974×548 at x=103 y=58 */
export function InteractiveSlide01() {
  return (
    <div className="relative w-full h-full bg-[#e3e3e3]">
      <div
        className="absolute"
        style={{ left: "103px", top: "58px", width: "974px", height: "548px" }}
      >
        <RiveEmbed
          src="/images/interactive/interactive 01.riv"
          width={974}
          height={548}
          artboard="Orange"
          stateMachines="Interactive 01"
        />
      </div>

      {/* Label */}
      <p className="absolute left-[100px] top-[326px] font-playfair text-[18px] text-[var(--color-text-secondary)]">
        Interactive
      </p>
    </div>
  );
}

/* ── Slide 02 ── bg #000, "interactive 02 hill game v5.riv" 664×664 centered
   autoBind connects the View Model's default instance so button labels
   render correctly (ON/OFF, 1, 2, 3) instead of fallback "DESCR." text. */
export function InteractiveSlide02() {
  return (
    <div className="relative w-full h-full bg-[#1A1A1A] flex items-center justify-center">
      <RiveEmbed
        src="/images/interactive/interactive 02 hill game v5.riv"
        width={664}
        height={664}
        artboard="Hill Game"
        stateMachines="Hill Game"
        fit="contain"
        autoBind
      />
    </div>
  );
}

/* ── Slide 03 ── full-frame "interactive 03 direct banner.riv" */
export function InteractiveSlide03() {
  return (
    <div className="relative w-full h-full bg-black">
      <div className="absolute inset-0">
        <RiveEmbed
          src="/images/interactive/interactive 03 direct banner.riv"
          width={1180}
          height={664}
          artboard="Banner"
          stateMachines="Direct Infobox"
          className="rounded-[8px] overflow-hidden"
        />
      </div>
    </div>
  );
}

/* ── Slide 04 ── full-frame "interactive 04 soldier web.riv" */
export function InteractiveSlide04() {
  return (
    <div className="relative w-full h-full bg-black">
      <div className="absolute inset-0">
        <RiveEmbed
          src="/images/interactive/interactive 04 soldier web.riv"
          width={1180}
          height={664}
          artboard="Website"
          stateMachines="interactive 04 soldier web"
          className="rounded-[8px] overflow-hidden"
        />
      </div>
    </div>
  );
}

/* ── Slide 05 ── full-frame "interactive 06 chaosorder.riv"
   Note: artboard name contains a non-breaking space (U+00A0) after "&" */
export function InteractiveSlide05() {
  return (
    <div className="relative w-full h-full bg-black">
      <div className="absolute inset-0">
        <RiveEmbed
          src="/images/interactive/interactive 06 chaosorder.riv"
          width={1180}
          height={664}
          artboard={"Chaos &\u00A0order"}
          stateMachines="CHAOS & ORDER"
          className="rounded-[8px] overflow-hidden"
        />
      </div>
    </div>
  );
}
