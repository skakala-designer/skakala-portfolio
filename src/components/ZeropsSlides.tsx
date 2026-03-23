"use client";

import Image from "next/image";

/* Each slide is a full 1180×664 composition matching the Pencil design */

export function ZeropsSlide01() {
  return (
    <div className="relative w-full h-full">
      {/* Main screenshot */}
      <div
        className="parallax-el absolute"
        style={{ right: "0", top: "86px", width: "799px", height: "499px" }}
      >
        <Image
          src="/images/zerops/zerops 01.png"
          alt="Zerops website homepage"
          fill
          className="object-cover rounded-[8px]"
          style={{
            filter:
              "drop-shadow(0 12px 24px rgba(0,0,0,0.02)) drop-shadow(0 50px 44px rgba(0,0,0,0.02))",
          }}
          priority
        />
      </div>

      {/* Logo */}
      <div className="absolute left-[98px] top-[322px] flex items-center gap-[2.7px]">
        <ZeropsLogo />
      </div>

      {/* Description */}
      <p className="absolute left-[98px] top-[372px] font-playfair text-[18px] text-[var(--color-text-secondary)] leading-snug">
        Brand visual
        <br />
        Web
      </p>
    </div>
  );
}

export function ZeropsSlide02() {
  return (
    <div className="relative w-full h-full">
      <div
        className="parallax-el absolute"
        style={{ left: "84px", top: "128px", width: "446px", height: "549px" }}
      >
        <Image
          src="/images/zerops/zerops 02-01.png"
          alt="Zerops dashboard"
          fill
          className="object-contain"
        />
      </div>
      <div
        className="parallax-el absolute"
        style={{
          left: "550px",
          top: "86px",
          width: "181px",
          height: "594px",
        }}
      >
        <Image
          src="/images/zerops/zerops 02-02.png"
          alt="Zerops pricing"
          fill
          className="object-contain"
        />
      </div>
      <div
        className="parallax-el absolute"
        style={{
          left: "745px",
          top: "133px",
          width: "381px",
          height: "235px",
        }}
      >
        <Image
          src="/images/zerops/zerops 02-03.png"
          alt="Zerops color system"
          fill
          className="object-contain"
        />
      </div>
      <div
        className="parallax-el absolute"
        style={{
          left: "797px",
          top: "217px",
          width: "249px",
          height: "243px",
        }}
      >
        <Image
          src="/images/zerops/zerops 02-04.png"
          alt="Zerops components"
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
}

export function ZeropsSlide03() {
  return (
    <div className="relative w-full h-full">
      <div
        className="parallax-el absolute"
        style={{
          left: "160px",
          top: "69px",
          width: "214px",
          height: "664px",
        }}
      >
        <Image
          src="/images/zerops/zerops 03-01.png"
          alt="Zerops mobile view"
          fill
          className="object-cover"
        />
      </div>
      <div
        className="parallax-el absolute"
        style={{
          left: "433px",
          top: "69px",
          width: "629px",
          height: "664px",
        }}
      >
        <Image
          src="/images/zerops/zerops 03-02.png"
          alt="Zerops desktop view"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}

export function ZeropsSlide04() {
  return (
    <div className="relative w-full h-full">
      <div
        className="parallax-el absolute"
        style={{
          left: "157px",
          top: "237px",
          width: "175px",
          height: "118px",
        }}
      >
        <Image
          src="/images/zerops/zerops 04-01.png"
          alt="Zerops UI element"
          fill
          className="object-contain"
        />
      </div>
      <div
        className="parallax-el absolute"
        style={{
          left: "440px",
          top: "237px",
          width: "157px",
          height: "117px",
        }}
      >
        <Image
          src="/images/zerops/zerops 04-02.png"
          alt="Zerops UI element"
          fill
          className="object-contain"
        />
      </div>
      <div
        className="parallax-el absolute"
        style={{
          left: "169px",
          top: "413px",
          width: "224px",
          height: "91px",
        }}
      >
        <Image
          src="/images/zerops/zerops 04-03.png"
          alt="Zerops UI element"
          fill
          className="object-contain"
        />
      </div>
      <div
        className="parallax-el absolute"
        style={{
          left: "158px",
          top: "532px",
          width: "80px",
          height: "62px",
        }}
      >
        <Image
          src="/images/zerops/zerops 04-04.png"
          alt="Zerops UI element"
          fill
          className="object-contain"
        />
      </div>
      <div
        className="parallax-el absolute"
        style={{
          left: "443px",
          top: "413px",
          width: "325px",
          height: "114px",
        }}
      >
        <Image
          src="/images/zerops/zerops 04-05.png"
          alt="Zerops UI element"
          fill
          className="object-contain"
        />
      </div>
      <div
        className="parallax-el absolute"
        style={{
          left: "875px",
          top: "413px",
          width: "141px",
          height: "141px",
        }}
      >
        <Image
          src="/images/zerops/zerops 04-06.png"
          alt="Zerops UI element"
          fill
          className="object-contain"
        />
      </div>
      <div
        className="parallax-el absolute"
        style={{
          left: "446px",
          top: "110px",
          width: "269px",
          height: "80px",
        }}
      >
        <Image
          src="/images/zerops/zerops 04-07.png"
          alt="Zerops UI element"
          fill
          className="object-contain"
        />
      </div>
      <div
        className="parallax-el absolute"
        style={{
          left: "834px",
          top: "138px",
          width: "176px",
          height: "88px",
        }}
      >
        <Image
          src="/images/zerops/zerops 04-08.png"
          alt="Zerops UI element"
          fill
          className="object-contain"
        />
      </div>
      <div
        className="parallax-el absolute"
        style={{
          left: "704px",
          top: "237px",
          width: "326px",
          height: "111px",
        }}
      >
        <Image
          src="/images/zerops/zerops 04-09.png"
          alt="Zerops UI element"
          fill
          className="object-contain"
        />
      </div>
      <div
        className="parallax-el absolute"
        style={{
          left: "702px",
          top: "313px",
          width: "330px",
          height: "94px",
        }}
      >
        <Image
          src="/images/zerops/zerops 04-10.png"
          alt="Zerops UI element"
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
}

export function ZeropsSlide05() {
  return (
    <div className="relative w-full h-full">
      <div
        className="parallax-el absolute"
        style={{
          left: "142px",
          top: "79px",
          width: "173px",
          height: "664px",
        }}
      >
        <Image
          src="/images/zerops/zerops 04-11.png"
          alt="Zerops blog mobile"
          fill
          className="object-cover"
        />
      </div>
      <div
        className="parallax-el absolute"
        style={{
          left: "356px",
          top: "79px",
          width: "706px",
          height: "664px",
        }}
      >
        <Image
          src="/images/zerops/zerops 04-12.png"
          alt="Zerops blog desktop"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}

export function ZeropsSlide06() {
  return (
    <div className="relative w-full h-full">
      <div
        className="parallax-el absolute"
        style={{
          left: "132px",
          top: "85px",
          width: "173px",
          height: "720px",
        }}
      >
        <Image
          src="/images/zerops/zerops 05-01.png"
          alt="Zerops infrastructure mobile"
          fill
          className="object-cover"
        />
      </div>
      <div
        className="parallax-el absolute"
        style={{
          left: "358px",
          top: "85px",
          width: "706px",
          height: "674px",
        }}
      >
        <Image
          src="/images/zerops/zerops 05-02.png"
          alt="Zerops infrastructure desktop"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}

function ZeropsLogo() {
  return (
    <div className="flex items-center gap-[2.7px]">
      <svg
        width="16.75"
        height="20"
        viewBox="0 0 232 260"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M218.07027 37.4952l-94.31314-36.06389c-2.47924-0.94569-5.11174-1.43131-7.74434-1.43131-2.63259 0-5.26524 0.48562-7.74447 1.43131l-94.31299 36.06389c-8.33227 3.19489-13.92974 11.32268-13.92975 20.2428l0 90.99039 43.34814-25.02235 0-51.04152 72.63907-27.78274 71.20762 27.22044-71.20762 41.07347-111.0799 64.10222c-3.04153 1.76358-4.93289 5.03512-4.93289 8.53673l0 33.50798c0 8.92012 5.59747 17.0735 13.92974 20.24282l94.31299 36.06386c2.47923 0.94568 5.1119 1.43134 7.74448 1.43134 2.63259 0 5.26509-0.48566 7.74433-1.43134l94.31314-36.06386c8.33226-3.19488 13.92975-11.3227 13.92975-20.24282l0-91.68048-43.3483 25.02235 0 51.73163-72.63892 27.78273-71.87218-27.47603 71.87218-41.48241 111.41204-64.28114c2.83706-1.63578 4.60077-4.67732 4.60077-7.94888l0-33.25239c0-8.92012-5.59749-17.07348-13.92975-20.2428z"
          fill="#b3b3b3"
        />
      </svg>
      <span className="font-geologica text-[10.8px] font-semibold text-[var(--color-text-secondary)] mt-[1.7px]">
        zerops
      </span>
    </div>
  );
}
