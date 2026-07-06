import React from "react";

export default function PrivacyPolicy() {
  return (
    <main className="bg-background">
      <section className="py-xl bg-white">
        <div className="max-w-4xl mx-auto px-gutter">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container font-label-md text-label-md mb-md">
            Privacy Policy
          </span>
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-md">
            Privacy Policy
          </h1>
          <div className="space-y-md font-body-md text-body-md text-on-surface-variant">
            <p>
              Amrit Jyot Eye Care respects your privacy. Information submitted through appointment
              forms or direct contact is used to respond to your enquiry and coordinate clinic visits.
            </p>
            <p>
              We may collect basic details such as name, phone number, preferred service, preferred
              date, and your message when you choose to provide them.
            </p>
            <p>
              We do not sell personal information. Links to third-party platforms such as Google
              Maps, WhatsApp, Facebook, and Instagram are governed by their own privacy practices.
            </p>
            <p>
              For privacy-related requests, contact the clinic directly at the phone number listed on
              the website.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
