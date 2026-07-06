import React, { useState } from "react";
import MaterialIcon from "./MaterialIcon.jsx";

export default function Appointment() {
  const [service, setService] = useState("General Checkup");
  const [patientName, setPatientName] = useState("");
  const [submitState, setSubmitState] = useState("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitState("submitting");
    setMessage("");

    const form = event.currentTarget;
    const name = form.elements["Full Name"].value.trim();
    const phone = form.elements["Phone Number"].value.trim();
    const date = form.elements["Preferred Date"].value.trim();
    const otherDetails = form.elements["Other Service Details"]?.value.trim() ?? "";

    if (!/^[A-Za-z ]+$/.test(name)) {
      setSubmitState("error");
      setMessage("Please enter a valid name using letters and spaces only.");
      return;
    }

    if (!/^[0-9]{10}$/.test(phone)) {
      setSubmitState("error");
      setMessage("Please enter a valid 10 digit phone number using numbers only.");
      return;
    }

    if (!date) {
      setSubmitState("error");
      setMessage("Please choose a preferred date.");
      return;
    }

    if (service === "Others" && !otherDetails) {
      setSubmitState("error");
      setMessage("Please write your reason for visit.");
      return;
    }

    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      form.reset();
      setService("General Checkup");
      setPatientName("");
      setSubmitState("success");
      setMessage("Your appointment request has been sent. Our team will contact you shortly.");
    } catch {
      setSubmitState("error");
      setMessage("Something went wrong. Please call us directly at 078700 80606.");
    }
  };

  return (
    <section className="py-xl bg-primary" id="appointment">
      <div className="max-w-container-max mx-auto px-gutter">
        <div className="bg-white rounded-3xl md:rounded-[40px] overflow-hidden shadow-2xl flex flex-col md:flex-row">
          <div className="md:w-1/2 p-gutter md:p-xl bg-surface-container-low">
            <h2 className="font-headline-lg text-headline-lg md:font-display-lg md:text-display-lg-mobile text-primary mb-sm md:mb-md">
              Book Your Visit
            </h2>
            <p className="font-body-md text-body-md md:font-body-lg md:text-body-lg text-on-surface-variant mb-md md:mb-xl">
              Share your details and our team will contact you to confirm your slot.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-sm md:gap-lg">
              <ContactItem icon="call" label="Call Us Directly" value="078700 80606" />
              <ContactItem icon="schedule" label="Working Hours" value="9am-7:30pm daily" />
            </div>
          </div>

          <div className="md:w-1/2 p-gutter md:p-xl">
            <form
              action="https://formsubmit.co/devdeep120205@gmail.com"
              className="space-y-sm md:space-y-md"
              method="POST"
              onSubmit={handleSubmit}
            >
              <input
                name="_subject"
                type="hidden"
                value={`Appointment request${patientName.trim() ? ` - ${patientName.trim()}` : ""}`}
              />
              <input name="_template" type="hidden" value="table" />
              <input name="_captcha" type="hidden" value="false" />
              <div>
                <label className="block font-label-md text-label-md text-on-surface-variant mb-xs">
                  Full Name
                </label>
                <input
                  className="w-full bg-surface-container border-none rounded-xl focus:ring-2 focus:ring-tertiary-fixed-dim transition-all px-md py-sm md:p-md"
                  name="Full Name"
                  onChange={(event) => setPatientName(event.target.value)}
                  pattern="[A-Za-z ]+"
                  placeholder="Enter name"
                  required
                  type="text"
                  value={patientName}
                />
              </div>
              <div>
                <label className="block font-label-md text-label-md text-on-surface-variant mb-xs">
                  Phone Number
                </label>
                <input
                  className="w-full bg-surface-container border-none rounded-xl focus:ring-2 focus:ring-tertiary-fixed-dim transition-all px-md py-sm md:p-md"
                  inputMode="numeric"
                  maxLength="10"
                  minLength="10"
                  name="Phone Number"
                  pattern="[0-9]{10}"
                  placeholder="Enter number"
                  required
                  type="tel"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                <div>
                  <label className="block font-label-md text-label-md text-on-surface-variant mb-xs">
                    Preferred Service
                  </label>
                  <select
                    className="w-full bg-surface-container border-none rounded-xl focus:ring-2 focus:ring-tertiary-fixed-dim transition-all px-md py-sm md:p-md appearance-none"
                    name="Preferred Service"
                    onChange={(event) => setService(event.target.value)}
                    required
                    value={service}
                  >
                    <option>General Checkup</option>
                    <option>Glaucoma</option>
                    <option>Retina</option>
                    <option>Optical</option>
                    <option>Others</option>
                  </select>
                </div>
                <div>
                  <label className="block font-label-md text-label-md text-on-surface-variant mb-xs">
                    Preferred Date
                  </label>
                  <input
                    className="w-full bg-surface-container border-none rounded-xl focus:ring-2 focus:ring-tertiary-fixed-dim transition-all px-md py-sm md:p-md"
                    name="Preferred Date"
                    required
                    type="date"
                  />
                </div>
              </div>
              {service === "Others" ? (
                <div>
                  <label className="block font-label-md text-label-md text-on-surface-variant mb-xs">
                    Tell us what you need
                  </label>
                  <textarea
                    className="w-full min-h-24 md:min-h-32 bg-surface-container border-none rounded-xl focus:ring-2 focus:ring-tertiary-fixed-dim transition-all px-md py-sm md:p-md resize-y"
                    name="Other Service Details"
                    placeholder="Write your reason for visit"
                    required={service === "Others"}
                  />
                </div>
              ) : null}
              <button
                className="w-full bg-primary text-on-primary py-sm md:py-md rounded-xl font-headline-md text-headline-md shadow-lg hover:shadow-xl hover:opacity-90 disabled:opacity-70 disabled:cursor-not-allowed transition-all mt-sm md:mt-md"
                disabled={submitState === "submitting"}
                type="submit"
              >
                {submitState === "submitting" ? "Sending..." : "Confirm Appointment"}
              </button>
            </form>
          </div>
        </div>
      </div>

      {submitState === "success" || submitState === "error" ? (
        <div
          aria-modal="true"
          className="fixed inset-0 z-[100] bg-black/40 px-gutter flex items-center justify-center"
          role="dialog"
        >
          <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-lg text-center">
            <div
              className={`w-14 h-14 rounded-full mx-auto mb-md flex items-center justify-center ${
                submitState === "success" ? "bg-tertiary-fixed text-tertiary" : "bg-error-container text-error"
              }`}
            >
              <MaterialIcon>{submitState === "success" ? "check_circle" : "error"}</MaterialIcon>
            </div>
            <h3 className="font-headline-md text-headline-md text-primary mb-sm">
              {submitState === "success" ? "Request Sent" : "Could Not Send"}
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant mb-md">{message}</p>
            <button
              className="bg-primary text-on-primary px-lg py-sm rounded-xl font-label-md text-label-md hover:opacity-90 transition-all"
              onClick={() => setSubmitState("idle")}
              type="button"
            >
              Close
            </button>
          </div>
        </div>
      ) : null}
    </section>
  );
}

function ContactItem({ icon, label, value }) {
  return (
    <div className="flex items-center gap-sm md:gap-md">
      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-primary shrink-0">
        <MaterialIcon>{icon}</MaterialIcon>
      </div>
      <div>
        <p className="font-label-md text-label-md text-on-surface-variant">{label}</p>
        <p className="font-headline-md text-headline-md text-primary">{value}</p>
      </div>
    </div>
  );
}
