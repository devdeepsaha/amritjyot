import React from "react";
import { images } from "../data/siteData.js";

export default function AboutUs() {
  return (
    <main className="bg-background">
      <section className="py-xl bg-white">
        <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 md:grid-cols-2 gap-xl items-center">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-fixed text-on-primary-fixed font-label-md text-label-md mb-md">
              About Us
            </span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-md">
              Amrit Jyot Eye Care
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-md">
              We provide specialist-led eye care, advanced diagnostics, and premium optical services
              from Sector 2 Market, Ranchi.
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Our clinic combines experienced doctors, friendly staff, clinical equipment, and a
              stocked eyewear store so patients can move from examination to eyewear selection in one
              trusted place.
            </p>
          </div>
          <img
            alt="Amrit Jyot Eye Care clinic facilities"
            className="w-full rounded-3xl shadow-2xl aspect-[4/3] object-cover"
            decoding="async"
            height="907"
            loading="lazy"
            src={images.hero}
            width="1276"
          />
        </div>
      </section>
    </main>
  );
}
