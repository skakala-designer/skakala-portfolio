import Image from "next/image";
import HeroTitle from "@/components/HeroTitle";
import ProjectSlider from "@/components/ProjectSlider";
import {
  ZeropsSlide01,
  ZeropsSlide02,
  ZeropsSlide03,
  ZeropsSlide04,
  ZeropsSlide05,
  ZeropsSlide06,
} from "@/components/ZeropsSlides";

const awards = [
  { src: "/images/awards/01 Red Dot 2022.png", alt: "Red Dot 2022" },
  { src: "/images/awards/02 Red Dot 2010.png", alt: "Red Dot 2010" },
  {
    src: "/images/awards/03 Art Directors Club.png",
    alt: "Art Directors Club",
  },
  { src: "/images/awards/04 ED Awards.png", alt: "ED Awards" },
  { src: "/images/awards/05 If Awards.png", alt: "iF Awards" },
  { src: "/images/awards/06 How.png", alt: "How" },
  { src: "/images/awards/07 Videomapping.png", alt: "Videomapping" },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full min-h-full bg-white">
      {/* Navigation - fixed at top */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center w-full px-[20px] py-[20px]">
        {/* Logo */}
        <div className="shrink-0 flex flex-col justify-end pb-[4px]">
          <span className="font-geologica text-[32px] font-light text-[var(--color-salmon-dark)] leading-none">
            ._.
          </span>
        </div>

        {/* Awards */}
        <div className="flex-1 flex items-center justify-center gap-[24px] overflow-hidden">
          {awards.map((award, i) => (
            <div key={i} className="relative w-[67px] h-[44px] shrink-0">
              <Image
                src={award.src}
                alt={award.alt}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>

        {/* Contact button */}
        <div className="shrink-0 flex items-end pb-[2px]">
          <button
            className="flex items-center justify-center gap-[10px] px-[14px] py-[10px] rounded-[4px] bg-[var(--color-salmon)] font-geologica text-[12px] font-medium tracking-[3.24px] text-white"
            style={{
              boxShadow:
                "0 1px 2.625px #fa807238, 0 5px 4.375px #fa807233, 0 12px 6.125px #fa80721c, 0 21px 7px #fa807208",
            }}
          >
            CONTACT
          </button>
        </div>
      </nav>

      {/* Spacer for fixed nav */}
      <div className="h-[88px] w-full shrink-0" />

      {/* Main content area */}
      <div className="flex flex-col items-center w-full max-w-[1728px] px-[274px] pt-[253px]">
        {/* Hero text */}
        <div className="mb-[256px]">
          <HeroTitle />
        </div>

        {/* Projects */}
        <div className="flex flex-col gap-[24px] w-full max-w-[1180px]">
          {/* Zerops project */}
          <ProjectSlider
            slides={[
              <ZeropsSlide01 key="z01" />,
              <ZeropsSlide02 key="z02" />,
              <ZeropsSlide03 key="z03" />,
              <ZeropsSlide04 key="z04" />,
              <ZeropsSlide05 key="z05" />,
              <ZeropsSlide06 key="z06" />,
            ]}
          />

          {/* Placeholder project cards - to be filled later */}
          <PlaceholderCard label="Direct" description="Design system" />
          <PlaceholderCard
            label="Fantasy"
            description="Logo&#10;Brand Visual&#10;Web"
          />
          <PlaceholderCard label="Reels" />
          <PlaceholderCard label="Interactive" />
          <PlaceholderCard label="Cyrkl" description="Web app&#10;Design system" />
          <PlaceholderCard label="Masoprofit" description="Application" />
          <PlaceholderCard label="Motion" description="Motion design" />
          <PlaceholderCard label="Posters" />
          <PlaceholderCard label="Lasvit" description="Web" />
        </div>

        {/* Archive button */}
        <div className="mt-[197px] mb-[56px]">
          <button
            className="flex items-center justify-center px-[27px] py-[18px] rounded-[4px] bg-[var(--color-salmon)] font-geologica text-[16px] font-semibold tracking-[4.8px] text-white"
            style={{
              boxShadow:
                "0 1px 2.625px #fa807238, 0 5px 4.375px #fa807233, 0 12px 6.125px #fa80721c, 0 21px 7px #fa807208",
            }}
          >
            archive
          </button>
        </div>
      </div>

      {/* Footer spacer */}
      <div className="w-full h-[200px]" />
    </div>
  );
}

function PlaceholderCard({
  label,
  description,
}: {
  label: string;
  description?: string;
}) {
  return (
    <div className="relative w-full h-[664px] rounded-[10px] bg-[var(--color-gray-card)] overflow-hidden">
      <p className="absolute left-[100px] top-[326px] font-playfair text-[18px] text-[var(--color-text-secondary)]">
        {label}
      </p>
      {description && (
        <p className="absolute left-[100px] top-[356px] font-playfair text-[18px] text-[var(--color-text-secondary)] whitespace-pre-line">
          {description}
        </p>
      )}
      {/* Navigation arrows (inactive for now) */}
      <button
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-[22px] w-[48px] h-[48px] rounded-[4px] bg-[var(--color-salmon)] flex items-center justify-center opacity-0"
        disabled
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
      <button
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-[22px] w-[48px] h-[48px] rounded-[4px] bg-[var(--color-salmon)] flex items-center justify-center"
        style={{
          boxShadow:
            "0 1px 2.625px #fa807238, 0 5px 4.375px #fa807233, 0 12px 6.125px #fa80721c",
        }}
        disabled
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
