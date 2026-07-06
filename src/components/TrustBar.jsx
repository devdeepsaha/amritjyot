import React from "react";
import RatingStars from "./RatingStars.jsx";

export default function TrustBar({ className = "", innerClassName = "" }) {
  return (
    <section className={`py-sm md:py-md bg-white border-y border-outline-variant ${className}`}>
      <div
        className={`max-w-container-max mx-auto px-gutter flex flex-col md:flex-row items-center justify-between gap-xs md:gap-md ${innerClassName}`}
      >
        <div className="flex items-center gap-sm md:gap-md">
          <RatingStars half />
          <span className="font-headline-md text-headline-md text-primary">4.9 Rating</span>
          <span className="text-on-surface-variant border-l border-outline-variant pl-sm md:pl-md">
            based on 127 Google Reviews
          </span>
        </div>
        <div className="font-label-md text-label-md text-primary tracking-widest uppercase font-bold">
          Best Eye Care in Jharkhand
        </div>
      </div>
    </section>
  );
}
