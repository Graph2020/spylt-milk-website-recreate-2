"use client";
import { flavorlists } from "@/consts";
import Image from "next/image";
import React from "react";
import { useMediaQuery } from "react-responsive";

export default function FlavorSlide() {
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });

  return (
    <div className="slider-wrapper">
      <div className="flavors">
        {flavorlists.map((flavor) => (
          <div
            key={flavor.name}
            className={`relative lg:w-[50vw] w-96 lg:h-[70vh] md:w-[90vw] flex-none md:h-[50vh] h-80 z-30 ${flavor.rotation}`}
          >
            <Image
              width={isMobile ? 500 : 1000}
              height={isMobile ? 500 : 1000}
              src={`/images/${flavor.color}-bg.svg`}
              alt="flavor bevarege"
            />

            <Image
              src={`/images/${flavor.color}-drink.webp`}
              alt={flavor.name}
              width={isMobile ? 200 : 500}
              height={isMobile ? 200 : 500}
              className="drinks"
            />

            <Image
              src={`/images/${flavor.color}-elements.webp`}
              alt=""
              width={isMobile ? 300 : 500}
              height={isMobile ? 300 : 500}
              className="elements"
            />

            <h1 className="flavor-name">{flavor.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}
