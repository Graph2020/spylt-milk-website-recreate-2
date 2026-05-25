"use client";
import React from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/dist/SplitText";
import { ScrollTrigger } from "gsap/src/all";
import { useRef } from "react";

gsap.registerPlugin(SplitText, ScrollTrigger);

export default function FlavorTitle() {
  useGSAP(() => {
    const firstTextSplit = new SplitText(".first-text-split h1", {
      type: "chars",
    });
    const secondTextSplit = new SplitText(".second-text-split h1", {
      type: "chars",
    });

    gsap.from(firstTextSplit.chars, {
      y: 20,
      stagger: 0.02,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".flavor-section",
        start: "top center",
      },
    });
    gsap.to(".flavor-text-scroll", {
      duration: 1,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      scrollTrigger: {
        trigger: ".flavor-section",
        start: "top center",
      },
    });

    gsap.from(secondTextSplit.chars, {
      y: 20,
      stagger: 0.02,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".flavor-section",
        start: "top center",
      },
    });
  }, []);
  return (
    <div className="general-title 2xl:gap-32 xl:gap-24 gap-16 h-full col-center">
      <div className="overflow-hidden first-text-split 2xl:py-0 py-3">
        <h1>We have 6</h1>
      </div>
      <div
        style={{ clipPath: " polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
        className="flavor-text-scroll"
      >
        <div className="bg-mid-brown pb-5 2xl:pt-0 pt-3 2xl:px-5 px-3">
          <h2 className="text-milk">Freaking</h2>
        </div>
      </div>

      <div className="overflow-hidden 2xl:py-0 py-3 second-text-split">
        <h1>Delicious flavors</h1>
      </div>
    </div>
  );
}
