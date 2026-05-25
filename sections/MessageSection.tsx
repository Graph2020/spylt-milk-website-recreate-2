"use client";
import type { JSX } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/dist/SplitText";
import { ScrollTrigger } from "gsap/src/all";
import { useRef } from "react";

gsap.registerPlugin(SplitText, ScrollTrigger);

export default function MessageSection(): JSX.Element {
  const sectionRef = useRef<HTMLElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  useGSAP(() => {
    const firstMessageSplit = new SplitText(".first-message", {
      type: "words",
    });
    const secondMessageSplit = new SplitText(".second-message", {
      type: "words",
    });
    const paragraphSplit = new SplitText(paragraphRef.current, {
      type: "lines",
    });

    gsap.from(paragraphSplit.lines, {
      y: 20,
      opacity: 0,
      stagger: 0.1,
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: paragraphRef.current,
        start: "top 80%",
        markers: true,
      },
    });

    gsap.to(".msg-text-scroll", {
      duration: 1,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      ease: "circ.inOut",
      scrollTrigger: {
        trigger: ".msg-text-scroll",
        start: "top 80%",
      },
    });

    gsap.fromTo(
      firstMessageSplit.words,
      { opacity: 0.1 },
      {
        opacity: 1,
        stagger: 0.1,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "30% 50%",
          scrub: 1,
        },
      },
    );
    gsap.fromTo(
      secondMessageSplit.words,
      { opacity: 0.1 },
      {
        opacity: 1,
        stagger: 0.1,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "center 80%",
          end: "50% 50%",
          scrub: 1,
        },
      },
    );
  });
  return (
    <section ref={sectionRef} className="message-content">
      <div className="container mx-auto flex-center py-28 relative">
        <div className="w-full h-full">
          <div className="msg-wrapper">
            <h1 className="first-message text-milk">
              Stir up your fearless past and
            </h1>

            <div
              style={{ clipPath: "polygon(50% 0, 50% 0, 51% 100%, 51% 100%)" }}
              className="msg-text-scroll"
            >
              <div className="bg-light-brown md:pb-5 pb-3 px-5">
                <h1 className="text-red-brown">Fuel Up</h1>
              </div>
            </div>

            <h1 className="second-message text-milk">
              your future with every gulp of Perfect Protein
            </h1>
          </div>
          <div className="flex-center md:mt-20 mt-10">
            <div className="max-w-md px-10 flex-center overflow-hidden">
              <p ref={paragraphRef}>
                Rev up your rebel spirit and feed the adventure of life with
                SPYLT, where you’re one chug away from epic nostalgia and
                fearless fun.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
