"use client";
import FlavorSlide from "@/components/FlavorSlide";
import FlavorTitle from "@/components/FlavorTitle";
import React, { useEffect } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/dist/SplitText";
import { ScrollTrigger } from "gsap/src/all";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

gsap.registerPlugin(SplitText, ScrollTrigger);

export default function FlavorSection() {
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });

  useGSAP(() => {
    if (!isTablet) {
      gsap.to(".flavor-section", {
        xPercent: -370,
        ease: "none",
        scrollTrigger: {
          trigger: ".flavor-section",
          start: "top top",
          end: "+=1200",
          scrub: 1,
          pin: true,
        },
      });
    }

    const titleTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".flavor-section",
        start: "top top",
        end: "bottom 80%",
        scrub: true,
      },
    });
    titleTl
      .to(".first-text-split", {
        xPercent: -30,
        ease: "power1.inOut",
      })
      .to(
        "flaor-text-scroll",
        {
          xPercent: -22,
          ease: "power1.inOut",
        },
        "<",
      )
      .to(
        ".second-text-split",
        {
          xPercent: -10,
          ease: "power1.inOut",
        },
        "<",
      );
  });

  return (
    <section className="flavor-section">
      <div className="h-full flex lg:flex-row flex-col items-center relative">
        <div className="lg:w-[57%] flex-none h-80 lg:h-full md:mt-20 xl:mt-0">
          <FlavorTitle />
        </div>
        <div className="h-full">
          <FlavorSlide />
        </div>
      </div>
    </section>
  );
}
