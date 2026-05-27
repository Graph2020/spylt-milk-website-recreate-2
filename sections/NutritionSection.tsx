"use client";
import { nutrientLists } from "@/consts";
import Image from "next/image";
import type { JSX } from "react";

import React, { useState } from "react";

import { gsap, ScrollTrigger, SplitText } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";

export default function NutritionSection(): JSX.Element {
  useGSAP(() => {
    const titleSplit = new SplitText(".nutrition-title", { type: "chars" });

    const paragraphSplit = new SplitText(".nutrition-section .font-paragraph", {
      type: "words, lines",
      linesClass: "paragraph-line",
    });

    const contentTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".nutrition-section",
        start: "top center",
      },
    });

    contentTl
      .from(titleSplit.chars, {
        yPercent: 100,
        stagger: 0.02,
        ease: "power2.inOut",
      })
      .from(paragraphSplit.words, {
        yPercent: 300,
        rotate: 3,
        duration: 1,
        ease: "power1.inOut",
        stagger: 0.01,
      });

    const titleTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".nutrition-section",
        start: "top 80%",
      },
    });

    titleTl.to(".nutrition-text-scroll", {
      duration: 1,
      opacity: 1,
      ease: "power1.inOut",
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    });
  }, []);
  return (
    <section className="nutrition-section">
      <Image
        src="/images/slider-dip.png"
        width={2000}
        height={2000}
        alt="luqid"
      />
      <Image
        className="big-img"
        src="/images/big-img.png"
        fill
        alt="background image"
      />

      <div className="flex md:flex-row flex-col justify-between md:px-10 px-5 mt-14 md:mt-0">
        <div className="relative inline-block md:translate-y-20">
          <div className="general-title relative flex flex-col justify-center items-center gap-24">
            <div className="overflow-hidden place-self-start">
              <h1 className="nutrition-title">It still does</h1>
            </div>
            <div
              style={{
                clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
              }}
              className="nutrition-text-scroll place-self-start"
            >
              <div className="bg-yellow-brown pb-5 md:pt-0 pt-3 md:px-5 px-3">
                <h2 className="text-milk-yellow">Body Good</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="flex md:justify-center items-center translate-y-5">
          <div className="md:max-w-xs max-w-md">
            <p className="text-lg md:text-right text-balance font-paragraph">
              Milk contains a wide array of nutrients, including vitamins,
              minerals, and protein, and this is lactose free
            </p>
          </div>
        </div>
        <div className="nutrition-box">
          <div className="list-wrapper">
            {nutrientLists.map((nutrient, index) => (
              <div key={index} className="relative flex-1 col-center">
                <div>
                  <p className="md:text-lg font-paragraph">{nutrient.label}</p>
                  <p className="font-paragraph text-sm mt-2">up to</p>
                  <p className="text-2xl md:text-4xl tracking-tighter font-bold">
                    {nutrient.amount}
                  </p>
                </div>
                {index !== nutrientLists.length - 1 && (
                  <div className="spacer-border" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
