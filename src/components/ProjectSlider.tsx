"use client";

import {
  useState,
  useCallback,
  useRef,
  useEffect,
  ReactNode,
} from "react";

interface ProjectSliderProps {
  slides: ReactNode[];
}

// Each parallax-el gets a unique multiplier so they move at different rates
const PARALLAX_FACTORS = [
  0.012, 0.009, 0.015, 0.007, 0.013, 0.01, 0.016, 0.008, 0.014, 0.0085,
];

export default function ProjectSlider({ slides }: ProjectSliderProps) {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [leaving, setLeaving] = useState<number | null>(null);
  const [entering, setEntering] = useState<number | null>(null);
  const [dir, setDir] = useState<1 | -1>(1);
  const viewportRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);

  const isFirst = current === 0;
  const isLast = current === slides.length - 1;

  // Cursor-follow parallax
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!viewportRef.current) return;

    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      if (!viewportRef.current) return;
      const rect = viewportRef.current.getBoundingClientRect();
      // Normalize cursor position to [-1, 1] relative to viewport center
      const nx = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const ny = ((e.clientY - rect.top) / rect.height - 0.5) * 2;

      const els = viewportRef.current.querySelectorAll(".parallax-el");
      els.forEach((el, i) => {
        // Skip elements in slide-in animation — avoid jump when animation ends
        if ((el as HTMLElement).closest(".parallax-slide-in")) return;

        const factor = PARALLAX_FACTORS[i % PARALLAX_FACTORS.length];
        const maxShift = rect.width * factor;
        const tx = nx * maxShift;
        const ty = ny * maxShift * 0.6; // less vertical movement

        (el as HTMLElement).style.setProperty("--cursor-tx", `${tx}px`);
        (el as HTMLElement).style.setProperty("--cursor-ty", `${ty}px`);
      });
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (!viewportRef.current) return;
    const els = viewportRef.current.querySelectorAll(".parallax-el");
    els.forEach((el) => {
      (el as HTMLElement).style.setProperty("--cursor-tx", "0px");
      (el as HTMLElement).style.setProperty("--cursor-ty", "0px");
    });
  }, []);

  useEffect(() => {
    const vp = viewportRef.current;
    if (!vp) return;
    vp.addEventListener("mousemove", handleMouseMove);
    vp.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      vp.removeEventListener("mousemove", handleMouseMove);
      vp.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(rafRef.current);
    };
  }, [handleMouseMove, handleMouseLeave]);

  const navigate = useCallback(
    (direction: 1 | -1) => {
      if (animating) return;
      const next = current + direction;
      if (next < 0 || next >= slides.length) return;

      setDir(direction);
      setLeaving(current);
      setEntering(next);
      setAnimating(true);

      setTimeout(() => {
        setCurrent(next);
        setLeaving(null);
        setEntering(null);
        setAnimating(false);
      }, 1400);
    },
    [current, animating, slides.length]
  );

  return (
    <div className="relative w-full h-[664px]">
      {/* Slide viewport with clip */}
      <div
        ref={viewportRef}
        className="relative w-full h-full rounded-[10px] overflow-hidden bg-[var(--color-gray-card)]"
      >
        {slides.map((slide, i) => {
          const isLeaving = leaving === i;
          const isEntering = entering === i;
          const isCurrent = current === i && !animating;

          if (!isCurrent && !isLeaving && !isEntering) return null;

          return (
            <div
              key={i}
              className="absolute inset-0"
              style={{
                transform: isLeaving
                  ? `translateX(${dir === 1 ? "-100" : "100"}%)`
                  : "translateX(0%)",
                transition: isLeaving
                  ? "transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)"
                  : "none",
                zIndex: isEntering ? 2 : 1,
              }}
              ref={
                isEntering
                  ? (el) => {
                      if (el) {
                        el.style.transform = `translateX(${
                          dir === 1 ? "100" : "-100"
                        }%)`;
                        el.style.transition = "none";
                        requestAnimationFrame(() => {
                          requestAnimationFrame(() => {
                            el.style.transition =
                              "transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)";
                            el.style.transform = "translateX(0%)";
                          });
                        });
                      }
                    }
                  : undefined
              }
            >
              <div
                className={`w-full h-full ${
                  isEntering ? "parallax-slide-in" : ""
                }`}
                style={
                  isEntering
                    ? ({
                        "--slide-dir": dir === 1 ? "1" : "-1",
                      } as React.CSSProperties)
                    : undefined
                }
              >
                {slide}
              </div>
            </div>
          );
        })}
      </div>

      {/* Left arrow */}
      <button
        onClick={() => navigate(-1)}
        className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-[22px] w-[48px] h-[48px] rounded-[4px] bg-[var(--color-salmon)] flex items-center justify-center transition-opacity duration-300 z-10 ${
          isFirst
            ? "opacity-0 pointer-events-none"
            : "opacity-100 cursor-pointer hover:brightness-110"
        }`}
        style={{
          boxShadow:
            "0 1px 2.625px #fa807238, 0 5px 4.375px #fa807233, 0 12px 6.125px #fa80721c",
        }}
        disabled={isFirst || animating}
        aria-label="Previous slide"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path
            d="M15 10H5M5 10L10 5M5 10L10 15"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Right arrow */}
      <button
        onClick={() => navigate(1)}
        className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-[22px] w-[48px] h-[48px] rounded-[4px] bg-[var(--color-salmon)] flex items-center justify-center transition-opacity duration-300 z-10 ${
          isLast
            ? "opacity-0 pointer-events-none"
            : "opacity-100 cursor-pointer hover:brightness-110"
        }`}
        style={{
          boxShadow:
            "0 1px 2.625px #fa807238, 0 5px 4.375px #fa807233, 0 12px 6.125px #fa80721c",
        }}
        disabled={isLast || animating}
        aria-label="Next slide"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path
            d="M5 10H15M15 10L10 5M15 10L10 15"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}
