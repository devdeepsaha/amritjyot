import React from "react";
import { images } from "../data/siteData.js";

export default function About() {
  return (
    <section className="py-xl bg-white" id="about">
      <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 md:grid-cols-2 gap-xl items-center">
        <div className="order-2 md:order-1">
          <div className="inline-block px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container font-label-md text-label-md mb-md">
            Our Vision
          </div>
          <h2 className="font-display-lg text-display-lg-mobile md:text-headline-lg text-primary mb-md">
            Compassionate Care Meets Clinical Precision
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-md">
            A friendly and caring environment with experienced doctors and staff. At Amrit Jyot, we
            pride ourselves on precision and patient comfort. Our facility is designed to provide a
            seamless healthcare journey from diagnosis to recovery.
          </p>
          <p className="font-body-md text-body-md text-on-surface-variant mb-lg">
            Located in the heart of Sector 2 Market, Ranchi, we have become a trusted destination
            for eye health in Jharkhand, combining high-tech diagnostic tools with a personalized
            boutique approach to eyewear.
          </p>
          <div className="grid grid-cols-2 gap-md">
            <div className="border-l-4 border-primary pl-md py-2">
              <p className="font-headline-md text-headline-md text-primary">100%</p>
              <p className="font-label-md text-label-md text-on-surface-variant">Qualified Staff</p>
            </div>
            <div className="border-l-4 border-primary pl-md py-2">
              <p className="font-headline-md text-headline-md text-primary">9-7:30</p>
              <p className="font-label-md text-label-md text-on-surface-variant">Open Daily</p>
            </div>
          </div>
        </div>
        <div className="order-1 md:order-2 rounded-3xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
          <img
            alt="A modern, brightly lit medical consultation room with diagnostic machines and a doctor consulting a patient"
            className="w-full aspect-[4/5] object-cover"
            decoding="async"
            height="834"
            loading="lazy"
            src={images.about}
            width="667"
          />
        </div>
      </div>
    </section>
  );
}
