"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import {
  useRive,
  Layout,
  Fit,
  Alignment,
} from "@rive-app/react-webgl2";

/* Rive embed with visibility-based play/pause.
   - Defers initial mount until the element scrolls into view.
   - Pauses the animation when scrolled off-screen, resumes when visible.
   This keeps only the active slide's WebGL context busy. */
function RiveEmbed({
  src,
  width,
  height,
  className,
  artboard,
  stateMachines,
  fit = Fit.Cover,
  autoBind = false,
}: {
  src: string;
  width: number;
  height: number;
  className?: string;
  artboard?: string;
  stateMachines?: string;
  fit?: Fit;
  autoBind?: boolean;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  const { rive, RiveComponent } = useRive(
    mounted
      ? {
          src,
          artboard: artboard || undefined,
          stateMachines: stateMachines || undefined,
          layout: new Layout({ fit, alignment: Alignment.Center }),
          autoplay: true,
          autoBind,
        }
      : null
  );

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!mounted) setMounted(true);
          rive?.play();
        } else if (mounted) {
          rive?.pause();
        }
      },
      { threshold: 0.01 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [mounted, rive]);

  return (
    <div ref={containerRef} style={{ width, height }} className={className}>
      {mounted && <RiveComponent />}
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
        fit={Fit.Contain}
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
