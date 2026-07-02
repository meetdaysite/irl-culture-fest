"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function PartnerForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    organisation: "",
    designation: "",
    email: "",
    phone: "",
    tier: "Founding Partner",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("https://formspree.io/f/PLACEHOLDER", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.fullName,
          company: formData.organisation,
          designation: formData.designation,
          email: formData.email,
          phone: formData.phone,
          tier: formData.tier,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({
          fullName: "",
          organisation: "",
          designation: "",
          email: "",
          phone: "",
          tier: "Founding Partner",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section
      id="partner-form"
      className="relative overflow-hidden"
      style={{ background: "#FF2B2B", paddingTop: 96, paddingBottom: 156 }}
    >
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes moveStripes {
          from { background-position: 0 0; }
          to { background-position: 56.57px 56.57px; }
        }
        .moving-stripes {
          background-image: repeating-linear-gradient(
            -45deg,
            rgba(0, 0, 0, 0.08),
            rgba(0, 0, 0, 0.08) 20px,
            transparent 20px,
            transparent 40px
          );
          background-size: 56.57px 56.57px;
          animation: moveStripes 4s linear infinite;
        }
      `}} />

      {/* Moving Diagonal Stripes Background */}
      <div className="absolute inset-0 moving-stripes pointer-events-none z-0" />

      <div
        className="mx-auto relative z-10 w-full flex flex-col items-center"
        style={{ maxWidth: 1200, paddingLeft: 48, paddingRight: 48 }}
      >
        {/* Heading */}
        <h2
          className="font-display text-white leading-tight text-center max-w-4xl"
          style={{
            fontSize: "clamp(32px, 4.5vw, 64px)",
          }}
        >
          READY TO BUILD THE OFFLINE ECONOMY TOGETHER?
        </h2>

        {/* Subheading */}
        <p className="font-body text-[17px] text-white leading-relaxed mt-4 mb-12 opacity-90 text-center max-w-2xl">
          Fill in the form below and the IRL Culture Fest team will get back to you within 48 hours.
        </p>

        {/* Form Card (rendered as div for AJAX submit) */}
        <div
          className="bg-white rounded-[24px] p-8 sm:p-12 w-full max-w-[680px] border border-[#0D0D0D]"
          style={{
            boxShadow: "8px 8px 0px 0px #0D0D0D",
          }}
        >
          {status === "success" ? (
            <div className="text-center py-12">
              <span className="text-5xl mb-4 block">🎉</span>
              <h3 className="font-display text-2xl text-[#0D0D0D] mb-4">
                THANK YOU FOR GETTING IN TOUCH!
              </h3>
              <p className="font-body text-[#555] text-base">
                Your partnership inquiry has been successfully sent. We will review it and get back to you within 48 hours.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-8 bg-[#0D0D0D] text-white font-body text-sm font-bold px-6 py-3 rounded-full hover:bg-[#FF2B2B] transition-colors cursor-pointer"
              >
                Submit another inquiry
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-6 font-[family-name:var(--font-space-grotesk)]">
              {/* Full Name */}
              <div className="flex flex-col gap-2">
                <label className="text-[12px] uppercase font-bold text-[#666] tracking-wider">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="e.g. John Doe"
                  className="w-full text-sm px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-[#1A1A1A] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF2B2B] focus:border-transparent transition"
                  required
                />
              </div>

              {/* Organisation */}
              <div className="flex flex-col gap-2">
                <label className="text-[12px] uppercase font-bold text-[#666] tracking-wider">
                  Organisation
                </label>
                <input
                  type="text"
                  name="organisation"
                  value={formData.organisation}
                  onChange={handleChange}
                  placeholder="e.g. Acme Corp"
                  className="w-full text-sm px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-[#1A1A1A] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF2B2B] focus:border-transparent transition"
                  required
                />
              </div>

              {/* Designation */}
              <div className="flex flex-col gap-2">
                <label className="text-[12px] uppercase font-bold text-[#666] tracking-wider">
                  Designation
                </label>
                <input
                  type="text"
                  name="designation"
                  value={formData.designation}
                  onChange={handleChange}
                  placeholder="e.g. Marketing Director"
                  className="w-full text-sm px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-[#1A1A1A] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF2B2B] focus:border-transparent transition"
                  required
                />
              </div>

              {/* Email & Phone Rows */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-[12px] uppercase font-bold text-[#666] tracking-wider">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full text-sm px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-[#1A1A1A] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF2B2B] focus:border-transparent transition"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[12px] uppercase font-bold text-[#666] tracking-wider">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full text-sm px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-[#1A1A1A] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF2B2B] focus:border-transparent transition"
                    required
                  />
                </div>
              </div>

              {/* Select Tier */}
              <div className="flex flex-col gap-2">
                <label className="text-[12px] uppercase font-bold text-[#666] tracking-wider">
                  Partnership Tier Interest
                </label>
                <select
                  name="tier"
                  value={formData.tier}
                  onChange={handleChange}
                  className="w-full text-sm px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-[#FF2B2B] focus:border-transparent transition appearance-none"
                  style={{
                    backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23666' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 16px center",
                    backgroundSize: "16px",
                  }}
                >
                  <option>Founding Partner</option>
                  <option>Co-Curator</option>
                  <option>Brand Ecosystem Champion</option>
                  <option>Community Enabler</option>
                  <option>Not sure yet</option>
                </select>
              </div>

              {/* Message Textarea */}
              <div className="flex flex-col gap-2">
                <label className="text-[12px] uppercase font-bold text-[#666] tracking-wider">
                  Tell us about your brand and what you're looking for
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Share details about your goals, hubs you'd like to curation-enable or host..."
                  rows={5}
                  className="w-full text-sm px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-[#1A1A1A] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF2B2B] focus:border-transparent transition resize-none"
                  required
                />
              </div>

              {status === "error" && (
                <p className="text-sm text-[#FF2B2B] font-semibold mt-2">
                  ⚠️ Something went wrong. Please try again or email us directly.
                </p>
              )}

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                disabled={status === "submitting"}
                className="w-full mt-6 bg-[#0D0D0D] text-white hover:bg-[#FF2B2B] hover:text-white border-2 border-transparent hover:border-white font-display text-[18px] tracking-wider py-4 rounded-full transition-all duration-250 cursor-pointer disabled:opacity-50"
              >
                {status === "submitting" ? "Sending..." : "Send Partnership Inquiry →"}
              </button>
            </div>
          )}
        </div>

        {/* Alternate contact info */}
        <div className="mt-8 text-center font-body text-sm text-white">
          Or email us directly at{" "}
          <a
            href="mailto:info@meetday.ai"
            className="text-white underline hover:text-[#0D0D0D] transition-colors"
          >
            info@meetday.ai
          </a>
        </div>
      </div>

    </section>
  );
}
