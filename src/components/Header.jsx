import React from "react";
import { images, navLinks } from "../data/siteData.js";

export default function Header() {
  return (
    <header className="bg-white/70 dark:bg-surface/70 backdrop-blur-md shadow-[0_4px_15px_rgba(0,0,0,0.04)] docked full-width top-0 sticky z-50">
      <div className="flex justify-between items-center w-full px-gutter max-w-container-max mx-auto h-14">
        <a
          className="flex items-center gap-xs sm:gap-sm font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed-dim min-w-0"
          href="/"
        >
          <img
            alt="Amrit Jyot Eye Care logo"
            className="h-7 w-7 sm:h-8 sm:w-8 rounded-full object-cover shrink-0"
            height="32"
            src={images.logo}
            width="32"
          />
          <span className="leading-tight text-[13px] sm:text-[16px] md:text-[18px]">
            AMRIT JYOT EYE CARE
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-md">
          {navLinks.map((link) => (
            <a
              key={link.href}
              className="text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed-dim transition-colors font-label-md text-label-md"
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-md">
          <a
            className="bg-primary text-on-primary px-sm sm:px-md py-xs sm:py-sm rounded-lg font-label-md text-[11px] sm:text-label-md hover:opacity-90 active:scale-95 transition-all"
            href="/#appointment"
          >
            Book Appointment
          </a>
        </div>
      </div>
    </header>
  );
}
