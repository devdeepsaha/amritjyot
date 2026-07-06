import React from "react";
import { diagnosticItems, eyewearBrands, services } from "../data/siteData.js";
import MaterialIcon from "./MaterialIcon.jsx";

export default function Services() {
  return (
    <section className="py-xl bg-surface" id="services">
      <div className="max-w-container-max mx-auto px-gutter">
        <div className="text-center mb-xl">
          <h2 className="font-display-lg text-display-lg-mobile md:text-headline-lg text-primary mb-md">
            Comprehensive Vision Services
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Providing world-class clinical expertise with state-of-the-art diagnostic and surgical
            infrastructure.
          </p>
        </div>

        <div className="md:hidden swipe-row">
          {services.map((service) => (
            <ServiceImageCard
              key={service.title}
              service={service}
              className="swipe-card h-[360px]"
            />
          ))}
          <div className="swipe-card rounded-3xl bg-primary text-on-primary p-lg flex flex-col justify-between h-[360px]">
            <div>
              <div className="w-12 h-12 rounded-xl bg-on-primary/10 flex items-center justify-center mb-md">
                <MaterialIcon className="text-3xl">fact_check</MaterialIcon>
              </div>
              <h3 className="font-headline-lg text-headline-lg mb-sm">Facilities Available</h3>
              <p className="text-on-primary/70 font-body-md">
                Routine checkups, specialist evaluations, imaging, screening, and eyewear fitting.
              </p>
            </div>
            <ul className="space-y-sm mt-lg overflow-hidden">
              {diagnosticItems.slice(0, 4).map((item) => (
                <li key={item} className="flex items-center gap-sm font-label-md">
                  <MaterialIcon className="text-sm shrink-0">check_circle</MaterialIcon>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="swipe-card rounded-3xl bg-white shadow-sm p-lg flex flex-col justify-between h-[360px]">
            <div>
              <span className="font-label-md text-label-md text-on-surface-variant uppercase">
                Premium brands
              </span>
              <h3 className="font-headline-lg text-headline-lg text-primary mt-sm mb-md">
                Optical Collection
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Browse trusted lenses and frames with fitting support inside the clinic.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-sm mt-lg">
              {eyewearBrands.slice(0, 4).map((brand) => (
                <div key={brand} className="rounded-xl bg-surface-container-low px-md py-sm">
                  <p className="font-bold text-primary">{brand}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="hidden md:grid grid-cols-1 md:grid-cols-12 gap-gutter items-stretch">
          <div className="md:col-span-7 flex h-full flex-col gap-gutter">
            <ServiceImageCard service={services[0]} className="min-h-[420px]" />
            <div className="rounded-3xl bg-primary text-on-primary p-lg flex flex-1 flex-col justify-between min-h-[410px]">
              <div>
                <div className="w-12 h-12 rounded-xl bg-on-primary/10 flex items-center justify-center mb-md">
                  <MaterialIcon className="text-3xl">fact_check</MaterialIcon>
                </div>
                <h3 className="font-headline-lg text-headline-lg mb-sm">Facilities Available</h3>
                <p className="text-on-primary/70 font-body-md max-w-xl">
                  A practical clinical setup for routine checkups, specialist evaluations, imaging,
                  screening, and eyewear fitting.
                </p>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-sm mt-lg">
                {diagnosticItems.map((item) => (
                  <li key={item} className="flex items-center gap-sm font-label-md min-w-0">
                    <MaterialIcon className="text-sm shrink-0">check_circle</MaterialIcon>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="md:col-span-5 flex h-full flex-col gap-gutter">
            {services.slice(1).map((service) => (
              <ServiceImageCard key={service.title} service={service} className="min-h-[300px]" />
            ))}

            <div className="rounded-3xl bg-white shadow-sm p-lg flex flex-col justify-between min-h-[360px]">
              <div>
                <span className="font-label-md text-label-md text-on-surface-variant uppercase">
                  Premium brands
                </span>
                <h3 className="font-headline-lg text-headline-lg text-primary mt-sm mb-md">
                  Optical Collection
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Browse frames and lenses from trusted names with fitting support inside the clinic.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-sm mt-lg">
                {eyewearBrands.map((brand) => (
                  <div key={brand} className="rounded-xl bg-surface-container-low px-md py-sm">
                    <p className="font-bold text-primary">{brand}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceImageCard({ service, className = "" }) {
  return (
    <article
      className={`group relative flex overflow-hidden rounded-3xl bg-white shadow-sm ${className}`}
    >
      <img
        alt={service.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        decoding="async"
        loading="lazy"
        src={service.image}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/5" />
      <div className="relative z-10 w-full flex-1 p-lg flex flex-col justify-between text-white">
        <div className="w-12 h-12 rounded-xl bg-white/15 backdrop-blur-sm flex items-center justify-center">
          <MaterialIcon className="text-3xl">{service.icon}</MaterialIcon>
        </div>
        <div>
          <span className="text-tertiary-fixed font-label-md text-label-md mb-2 block">
            {service.label}
          </span>
          <h3 className="font-headline-lg text-headline-lg mb-sm">{service.title}</h3>
          <p className="font-body-md text-body-md text-white/80 max-w-lg">{service.description}</p>
        </div>
      </div>
    </article>
  );
}
