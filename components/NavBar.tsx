"use client";
import Image from "next/image";
import type { JSX } from "react";

import React from "react";
import { useMediaQuery } from "react-responsive";

export default function NavBar(): JSX.Element {
  const isTablet = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <nav className="fixed top-0 md:p-9 p-3 z-50">
      <Image
        width={isTablet ? 80 : 100}
        height={isTablet ? 24 : 30}
        src="/images/nav-logo.svg"
        alt="image-logo"
      />
    </nav>
  );
}
