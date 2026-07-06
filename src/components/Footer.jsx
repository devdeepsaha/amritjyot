import React from "react";
import { companyLinks, images, socialLinks } from "../data/siteData.js";
import MaterialIcon from "./MaterialIcon.jsx";

export default function Footer() {
  return (
    <footer className="bg-surface-container dark:bg-surface-container-low border-t border-outline-variant dark:border-outline full-width">
      <div className="w-full py-xl px-gutter grid grid-cols-1 md:grid-cols-3 gap-lg max-w-container-max mx-auto">
        <div className="max-w-sm">
          <div className="flex items-center gap-sm font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed-dim mb-sm">
            <img
              alt="Amrit Jyot Eye Care logo"
              className="h-9 w-9 rounded-full object-cover"
              height="32"
              loading="lazy"
              src={images.logo}
              width="32"
            />
            Amrit Jyot Eye Care
          </div>
          <p className="text-on-surface-variant font-body-md mb-md">
            Premier eye care clinic in Ranchi providing specialized medical services and luxury
            eyewear collections.
          </p>
          <div className="flex items-start gap-sm text-on-surface-variant">
            <MaterialIcon className="text-primary">location_on</MaterialIcon>
            <p className="text-label-md font-label-md">
              Sector 2 Market, Sector 2, Masibari, Ranchi, Jharkhand 834004
            </p>
          </div>
        </div>

        <div className="md:justify-self-center">
          <FooterLinks title="Company" links={companyLinks} />
        </div>

        <div className="md:justify-self-start">
          <h4 className="font-headline-md text-headline-md text-primary mb-md">Social</h4>
          <div className="flex gap-md">
            {socialLinks.map((link) => (
              <SocialIcon key={link.label} {...link} />
            ))}
          </div>
        </div>
      </div>
      <div className="max-w-container-max mx-auto px-gutter py-md border-t border-outline-variant flex flex-col md:flex-row justify-between items-center text-center gap-md">
        <p className="text-on-surface-variant font-label-md text-label-md">
          &copy; 2024 Amrit Jyot Eye Care. All rights reserved. Sector 2 Market, Ranchi.
        </p>
      </div>
    </footer>
  );
}

function FooterLinks({ title, links }) {
  return (
    <div>
      <h4 className="font-headline-md text-headline-md text-primary mb-md">{title}</h4>
      <ul className="space-y-sm">
        {links.map((link) => (
          <li key={link.label}>
            <a
              className="text-on-surface-variant hover:text-primary transition-all font-label-md text-label-md"
              href={link.href}
              rel={link.external ? "noreferrer" : undefined}
              target={link.external ? "_blank" : undefined}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialIcon({ href, icon, label }) {
  return (
    <a
      aria-label={label}
      className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary shadow-sm hover:scale-110 transition-transform"
      href={href}
      rel="noreferrer"
      target="_blank"
    >
      {icon === "facebook" ? <FacebookIcon /> : <InstagramIcon />}
    </a>
  );
}

function FacebookIcon() {
  return (
    <svg aria-hidden="true" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22 12.06C22 6.49 17.52 2 12 2S2 6.49 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.84c0-2.52 1.49-3.91 3.77-3.91 1.09 0 2.23.2 2.23.2v2.47h-1.26c-1.24 0-1.63.78-1.63 1.57v1.89h2.77l-.44 2.91h-2.33V22C18.34 21.24 22 17.08 22 12.06Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg aria-hidden="true" className="w-5 h-5" viewBox="0 0 24 24" fill="none">
      <rect width="17" height="17" x="3.5" y="3.5" rx="5" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
    </svg>
  );
}
