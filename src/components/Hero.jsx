import React from "react";
import { images } from "../data/siteData.js";
import MaterialIcon from "./MaterialIcon.jsx";
import TrustBar from "./TrustBar.jsx";

export default function Hero() {
  return (
    <>
      <section className="relative min-h-[calc(100svh-56px)] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            alt="Amrit Jyot Eye Care clinic facilities"
            className="w-full h-full object-cover"
            decoding="sync"
            fetchPriority="high"
            height="907"
            src={images.hero}
            width="1276"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/70 to-white/10" />
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-background via-background/80 to-transparent" />
        </div>
        <div className="relative z-10 max-w-container-max mx-auto px-gutter w-full min-h-[calc(100svh-56px)] md:min-h-0 flex items-center pt-8 md:pt-12 pb-8 md:pb-32">
          <div className="max-w-2xl w-full">
            <span className="inline-block px-3 md:px-4 py-1 md:py-1.5 rounded-full bg-primary-fixed text-on-primary-fixed font-label-md text-label-md mb-sm md:mb-md">
              15000+ customers served in Ranchi
            </span>
            <h1 className="font-display-lg text-[25px] leading-[1.12] md:text-display-lg text-primary mb-sm md:mb-md">
              Specialist Eye Care &amp; <br className="hidden md:block" />
              Premium Optical Under One Roof
            </h1>
            <p className="font-body-lg text-[13.5px] leading-[1.45] md:text-body-lg text-on-surface-variant mb-md max-w-lg">
              Expert glaucoma, retina, diagnostic, and optical services delivered with modern
              equipment, experienced doctors, and a stocked eyewear store in Sector 2 Market.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-sm max-w-lg mb-lg">
              <HeroStat value="15000+" label="Customers served" />
              <HeroStat value="4.9/5" label="Google rating" />
              <HeroStat value="9 am - 7:30 pm" label="Daily hours" className="hidden md:block" />
            </div>
            <div className="flex flex-col sm:flex-row gap-md">
              <a
                className="bg-primary text-on-primary px-lg py-md min-h-[58px] rounded-xl font-headline-md text-[16px] md:text-headline-md text-center hover:shadow-lg transition-all flex items-center justify-center gap-2"
                href="#appointment"
              >
                Book an Appointment
                <MaterialIcon>calendar_today</MaterialIcon>
              </a>
              <a
                className="hidden sm:block glass-card text-primary px-lg py-md rounded-xl font-headline-md text-headline-md text-center hover:bg-white/90 transition-all"
                href="#services"
              >
                Explore Services
              </a>
            </div>
          </div>
        </div>
        <TrustBar className="hidden md:block absolute inset-x-0 bottom-0 z-20" />
      </section>
      <TrustBar className="md:hidden" />
    </>
  );
}

function HeroStat({ value, label, className = "" }) {
  return (
    <div className={`glass-card rounded-xl px-sm md:px-md py-sm ${className}`}>
      <p className="font-headline-md text-headline-md text-primary">{value}</p>
      <p className="font-label-md text-label-md text-on-surface-variant">{label}</p>
    </div>
  );
}
