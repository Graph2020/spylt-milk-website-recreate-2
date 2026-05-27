"use client";
import FlavorSection from "@/sections/FlavorSection";
import Hero from "@/sections/Hero";
import MessageSection from "@/sections/MessageSection";

import { ScrollSmoother } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";
import NutritionSection from "@/sections/NutritionSection";
export default function Home() {
  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 1,
      effects: true,
    });
  }, []);
  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <Hero />
        <MessageSection />
        <FlavorSection />
        <NutritionSection />
      </div>
    </div>
  );
}
