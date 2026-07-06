import React from "react";
import { testimonials } from "../data/siteData.js";
import RatingStars from "./RatingStars.jsx";

export default function Testimonials() {
  return (
    <section className="py-xl bg-surface-container-low" id="testimonials">
      <div className="max-w-container-max mx-auto px-gutter">
        <div className="text-center mb-xl">
          <h2 className="font-display-lg text-display-lg-mobile md:text-headline-lg text-primary mb-md">
            Patient Stories
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Real experiences from our valued patients.
          </p>
        </div>
        <div className="md:hidden swipe-row">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} />
          ))}
        </div>
        <div className="hidden md:grid grid-cols-3 gap-gutter">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} desktop />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial, desktop = false }) {
  return (
    <article
      className={`glass-card p-lg rounded-3xl flex flex-col justify-between ${
        desktop ? "" : "swipe-card min-h-[320px]"
      }`}
    >
      <div>
        <RatingStars className="mb-md" />
        <p className="font-body-md text-body-md italic mb-lg text-on-surface-variant">
          "{testimonial.quote}"
        </p>
      </div>
      <div className="flex items-center gap-md">
        <div
          className={`w-12 h-12 rounded-full flex items-center justify-center font-bold ${testimonial.badgeClass}`}
        >
          {testimonial.initials}
        </div>
        <div>
          <p className="font-bold text-primary">{testimonial.name}</p>
          <p className="text-xs text-on-surface-variant">Patient</p>
        </div>
      </div>
    </article>
  );
}
