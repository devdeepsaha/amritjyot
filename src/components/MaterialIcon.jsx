import React from "react";

const icons = {
  calendar_today: <path d="M7 2v3M17 2v3M3.5 9h17M5 5h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z" />,
  call: <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.7 19.7 0 0 1-8.6-3.1 19.3 19.3 0 0 1-6-6A19.7 19.7 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />,
  schedule: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
  check_circle: <><circle cx="12" cy="12" r="9" /><path d="m8 12 2.7 2.7L16.5 9" /></>,
  error: <><circle cx="12" cy="12" r="9" /><path d="M12 7v6M12 17h.01" /></>,
  fact_check: <><rect x="4" y="4" width="16" height="16" rx="2" /><path d="m8 12 2 2 4-5M15 14h2M15 17h2" /></>,
  visibility: <><path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z" /><circle cx="12" cy="12" r="3" /></>,
  biotech: <><path d="M10 2v6l-5 9a3 3 0 0 0 2.6 4.5h8.8A3 3 0 0 0 19 17l-5-9V2" /><path d="M8 2h8M8.5 14h7" /></>,
  eyeglasses: <path d="M4 14h4l2-4h4l2 4h4M2 14a4 4 0 1 0 8 0M14 14a4 4 0 1 0 8 0" />,
  location_on: <><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="3" /></>,
  arrow_forward: <path d="M5 12h14M13 5l7 7-7 7" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  photo_library: <><rect x="5" y="5" width="14" height="14" rx="2" /><path d="M8 15l2.5-3 2 2.4 1.5-1.8 2 2.4M3 9v12h12" /></>,
  zoom_in: <><circle cx="11" cy="11" r="7" /><path d="M21 21l-5-5M11 8v6M8 11h6" /></>,
  star: <path d="m12 2 2.9 6 6.6.9-4.8 4.7 1.1 6.6L12 17l-5.8 3.2 1.1-6.6-4.8-4.7 6.6-.9L12 2Z" />,
  star_half: <path d="M12 2v15l-5.8 3.2 1.1-6.6-4.8-4.7 6.6-.9L12 2Zm0 0 2.9 6 6.6.9-4.8 4.7 1.1 6.6L12 17" />,
};

export default function MaterialIcon({ children, className = "", filled = false }) {
  const solid = filled || children === "star" || children === "star_half";

  return (
    <svg
      aria-hidden="true"
      className={`inline-block h-[1em] w-[1em] shrink-0 ${className}`}
      fill={solid ? "currentColor" : "none"}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      {icons[children] ?? icons.check_circle}
    </svg>
  );
}
