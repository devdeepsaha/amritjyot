import React from "react";
import About from "./components/About.jsx";
import Appointment from "./components/Appointment.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Services from "./components/Services.jsx";
import StoreVisit from "./components/StoreVisit.jsx";
import Testimonials from "./components/Testimonials.jsx";
import WhatsAppButton from "./components/WhatsAppButton.jsx";
import { useScrollReveal } from "./hooks/useScrollReveal.js";
import AboutUs from "./pages/AboutUs.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";

export default function App() {
  useScrollReveal();
  const pathname = window.location.pathname;
  const isAboutPage = pathname === "/about-us";
  const isPrivacyPage = pathname === "/privacy-policy";

  return (
    <>
      <Header />
      {isAboutPage ? (
        <AboutUs />
      ) : isPrivacyPage ? (
        <PrivacyPolicy />
      ) : (
        <main>
          <Hero />
          <Services />
          <About />
          <Testimonials />
          <StoreVisit />
          <Appointment />
          
        </main>
      )}
      <Footer />
      <WhatsAppButton />
    </>
  );
}
