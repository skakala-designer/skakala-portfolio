"use client";

import { useEffect, useRef } from "react";
import {
  useRive,
  Layout,
  Fit,
  Alignment,
} from "@rive-app/react-webgl2";

const FIT_MAP: Record<string, Fit> = {
  cover: Fit.Cover,
  contain: Fit.Contain,
  fill: Fit.Fill,
  none: Fit.None,
};

export default function RiveInner({
  src,
  artboard,
  stateMachines,
  fit,
  autoBind = false,
}: {
  src: string;
  artboard?: string;
  stateMachines?: string;
  fit?: string;
  autoBind?: boolean;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const resolvedFit = fit ? FIT_MAP[fit] ?? Fit.Cover : Fit.Cover;

  const { rive, RiveComponent } = useRive({
    src,
    artboard: artboard || undefined,
    stateMachines: stateMachines || undefined,
    layout: new Layout({ fit: resolvedFit, alignment: Alignment.Center }),
    autoplay: true,
    autoBind,
  });

  /* Pause when scrolled off-screen, resume when visible */
  useEffect(() => {
    const el = containerRef.current;
    if (!el || !rive) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          rive.play();
        } else {
          rive.pause();
        }
      },
      { threshold: 0.01 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [rive]);

  return (
    <div ref={containerRef} style={{ width: "100%", height: "100%" }}>
      <RiveComponent />
    </div>
  );
}
