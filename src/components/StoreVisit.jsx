import React, { useEffect, useRef, useState } from "react";
import { mapEmbedUrl, visitPhotos } from "../data/siteData.js";
import MaterialIcon from "./MaterialIcon.jsx";

export default function StoreVisit() {
  const [activeTab, setActiveTab] = useState("overview");
  const [activePhoto, setActivePhoto] = useState(null);
  const photosRef = useRef(null);
  const previewPhotos = visitPhotos.slice(0, 3);

  useEffect(() => {
    document.body.style.overflow = activePhoto ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [activePhoto]);

  const openPhotosTab = () => {
    setActiveTab("photos");
    window.setTimeout(() => photosRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 50);
  };

  return (
    <section className="py-xl bg-white" id="visit">
      <div className="max-w-container-max mx-auto px-gutter">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-md mb-xl">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container font-label-md text-label-md mb-md">
              Store Visits
            </span>
            <h2 className="font-display-lg text-display-lg-mobile md:text-headline-lg text-primary mb-md">
              Visit the Clinic &amp; Optical Store
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Explore the eyewear display, diagnostic rooms, and facilities before you arrive.
            </p>
          </div>
          <a
            className="bg-primary text-on-primary px-gutter py-sm rounded-lg font-label-md text-label-md hover:opacity-90 transition-all inline-flex items-center justify-center gap-sm"
            href="#appointment"
          >
            <MaterialIcon>calendar_today</MaterialIcon>
            Book Visit
          </a>
        </div>

        <div className="flex gap-sm mb-gutter rounded-xl bg-surface-container-low p-xs w-full md:w-fit">
          <TabButton active={activeTab === "overview"} onClick={() => setActiveTab("overview")} tabId="visit">
            Visit
          </TabButton>
          <TabButton active={activeTab === "photos"} onClick={openPhotosTab} tabId="photos">
            Photos
          </TabButton>
        </div>

        {activeTab === "overview" ? (
          <div className="mb-xl">
            <div className="md:hidden swipe-row">
              {previewPhotos.map((photo) => (
                <PhotoPreviewButton key={photo.src} photo={photo} onClick={openPhotosTab} mobile />
              ))}
            </div>
            <div className="hidden md:grid grid-cols-3 gap-gutter">
              {previewPhotos.map((photo) => (
                <PhotoPreviewButton key={photo.src} photo={photo} onClick={openPhotosTab} />
              ))}
            </div>
            <div className="flex justify-center mt-gutter">
              <button
                className="bg-primary text-on-primary px-lg py-md rounded-xl font-headline-md text-headline-md hover:shadow-lg hover:opacity-90 transition-all inline-flex items-center justify-center gap-sm"
                onClick={openPhotosTab}
                type="button"
              >
                View All Photos
                <MaterialIcon>arrow_forward</MaterialIcon>
              </button>
            </div>
          </div>
        ) : (
          <div className="mb-xl scroll-mt-24" ref={photosRef}>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-md mb-gutter">
              <div>
                <span className="font-label-md text-label-md text-on-surface-variant uppercase">
                  Photo Gallery
                </span>
                <h3 className="font-headline-lg text-headline-lg text-primary mt-sm">
                  Clinic &amp; Store Photos
                </h3>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
                Tap any photo to view it full screen.
              </p>
            </div>
            <div className="md:hidden swipe-row">
              {visitPhotos.map((photo) => (
                <PhotoZoomButton key={photo.src} photo={photo} onClick={() => setActivePhoto(photo)} mobile />
              ))}
            </div>
            <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-gutter">
              {visitPhotos.map((photo) => (
                <PhotoZoomButton key={photo.src} photo={photo} onClick={() => setActivePhoto(photo)} />
              ))}
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter rounded-[40px] overflow-hidden bg-surface-container-low shadow-sm">
          <div className="lg:col-span-4 p-lg md:p-xl flex flex-col justify-center">
            <span className="font-label-md text-label-md text-on-surface-variant uppercase">
              Find us
            </span>
            <h3 className="font-headline-lg text-headline-lg text-primary mt-sm mb-md">
              Sector 2 Market, Ranchi
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant mb-lg">
              AMRIT JYOT EYE CARE - Best Optical Shop, Eye Care, Glaucoma, Retina Specialist and
              Diagnostic in Ranchi.
            </p>
            <div className="flex items-start gap-sm text-on-surface-variant">
              <MaterialIcon className="text-primary">location_on</MaterialIcon>
              <p className="text-label-md font-label-md">
                Sector 2 Market, Sector 2, Masibari, Ranchi, Jharkhand 834004
              </p>
            </div>
          </div>
          <div className="lg:col-span-8 min-h-[420px] bg-surface-container">
            <iframe
              allowFullScreen
              className="w-full h-full min-h-[420px]"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              src={mapEmbedUrl}
              style={{ border: 0 }}
              title="Amrit Jyot Eye Care Google Map"
            />
          </div>
        </div>
      </div>

      {activePhoto ? (
        <div
          className="fixed inset-0 z-[100] bg-black/90 p-md md:p-lg flex items-center justify-center"
          onClick={() => setActivePhoto(null)}
          role="dialog"
          aria-modal="true"
          aria-label={activePhoto.title}
        >
          <button
            aria-label="Close photo"
            className="absolute right-md top-md md:right-lg md:top-lg w-12 h-12 rounded-full bg-white text-primary flex items-center justify-center shadow-lg"
            onClick={() => setActivePhoto(null)}
            type="button"
          >
            <MaterialIcon>close</MaterialIcon>
          </button>
          <div className="max-w-6xl w-full" onClick={(event) => event.stopPropagation()}>
            <img
              alt={activePhoto.alt}
              className="w-full max-h-[82vh] object-contain rounded-2xl"
              decoding="async"
              src={activePhoto.src}
            />
            <p className="mt-md text-center text-white font-headline-md text-headline-md">
              {activePhoto.title}
            </p>
          </div>
        </div>
      ) : null}
    </section>
  );
}

function TabButton({ active, children, onClick, tabId }) {
  return (
    <button
      data-gallery-tab={tabId}
      className={`flex-1 md:flex-none px-gutter py-sm rounded-lg font-label-md text-label-md transition-all ${
        active ? "bg-primary text-on-primary shadow-sm" : "text-on-surface-variant hover:text-primary"
      }`}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
}

function PhotoPreviewButton({ photo, onClick, mobile = false }) {
  return (
    <button
      className={`group relative overflow-hidden rounded-3xl bg-surface-container-low shadow-sm text-left ${
        mobile ? "swipe-card h-[320px]" : "h-96"
      }`}
      onClick={onClick}
      type="button"
    >
      <img
        alt={photo.alt}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        decoding="async"
        loading="lazy"
        src={photo.src}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
      <div className="absolute left-md right-md bottom-md flex items-center justify-between gap-md">
        <span className="rounded-xl bg-white/85 backdrop-blur-sm px-md py-sm font-label-md text-label-md text-primary shadow-sm">
          {photo.title}
        </span>
        <span className="w-11 h-11 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-sm">
          <MaterialIcon>photo_library</MaterialIcon>
        </span>
      </div>
    </button>
  );
}

function PhotoZoomButton({ photo, onClick, mobile = false }) {
  return (
    <button
      className={`group relative overflow-hidden rounded-3xl bg-surface-container-low shadow-sm text-left ${
        mobile ? "swipe-card h-[320px]" : "h-72"
      }`}
      onClick={onClick}
      type="button"
    >
      <img
        alt={photo.alt}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        decoding="async"
        loading="lazy"
        src={photo.src}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent opacity-90" />
      <div className="absolute left-md right-md bottom-md flex items-center justify-between gap-md">
        <span className="rounded-xl bg-white/90 backdrop-blur-sm px-md py-sm font-label-md text-label-md text-primary shadow-sm">
          {photo.title}
        </span>
        <span className="w-10 h-10 rounded-full bg-white/90 text-primary flex items-center justify-center shadow-sm">
          <MaterialIcon>zoom_in</MaterialIcon>
        </span>
      </div>
    </button>
  );
}
