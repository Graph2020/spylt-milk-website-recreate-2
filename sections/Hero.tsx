"use client";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/dist/SplitText";
import { ScrollTrigger } from "gsap/src/all";
import { useRef } from "react";

gsap.registerPlugin(SplitText, ScrollTrigger);

export default function Hero() {
  const isTablet = useMediaQuery({ query: "(max-width: 768px)" });
  const imageRef = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    const titleSplit = new SplitText(".hero-title", { type: "chars" });

    const tl = gsap.timeline({
      delay: 1,
    });

    tl.to(".hero-content", {
      opacity: 1,
      y: 0,
      ease: "power1.inOut",
    })
      .to(
        ".hero-text-scroll",
        {
          duration: 1,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "circ.inOut",
        },
        "-=0.5",
      )
      .from(
        titleSplit.chars,
        {
          y: 20,
          opacity: 0,
          stagger: 0.05,
          ease: "back.out(1.7)",
        },
        "<",
      )
      .to(".hero-container", {
        rotate: 7,
        scale: 0.95,
        y: 20,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: ".hero-container",
          start: "1% top",
          end: "bottom top",
          scrub: 1,
          toggleActions: "play none none reverse",
        },
      });
  }, []);
  return (
    <section className="bg-main-bg">
      <div className="hero-container">
        <Image
          ref={imageRef}
          width={2000}
          height={2000}
          src="/images/static-img.png"
          alt="photo-hero"
          className="absolute bottom-0 left-1/2 -translate-x-1/2"
        />
        <div className="hero-content opacity-0">
          <div className="overflow-hidden">
            <h1 className="hero-title">Freaking Delicious</h1>
          </div>
          <div
            style={{ clipPath: "polygon(53% 0, 52% 0, 47% 100%, 48% 100%)" }}
            className="hero-text-scroll"
          >
            <div className="hero-subtitle">
              <h1>Protein + Caffine</h1>
            </div>
          </div>
          <h2>
            Live life to the fullest  with SPYLT: Shatter boredom and embrace
            your inner kid with every deliciously smooth chug.
          </h2>
          <div className="hero-button">
            <p>Chug a splyt</p>
          </div>
        </div>
      </div>
    </section>
  );
}
