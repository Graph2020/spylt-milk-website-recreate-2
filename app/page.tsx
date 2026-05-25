import FlavorSection from "@/sections/FlavorSection";
import Hero from "@/sections/Hero";
import MessageSection from "@/sections/MessageSection";
import React from "react";

export default function Home() {
  return (
    <div>
      <Hero />
      <MessageSection />
      <FlavorSection />
    </div>
  );
}
