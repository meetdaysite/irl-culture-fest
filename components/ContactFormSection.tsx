"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import DecorativeStar from "@/components/DecorativeStar";

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    organisation: "",
    designation: "",
    email: "",
    phone: "",
    interest: "All Access Pass",
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
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus("success");
        setFormData({
          fullName: "",
          organisation: "",
          designation: "",
          email: "",
          phone: "",
          interest: "All Access Pass",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden"
      style={{ background: "#FF2B2B", paddingTop: 96, paddingBottom: 120 }}
    >
      {/* Decorative stars */}
      <DecorativeStar size={160} color="#f2af29" opacity={0.12} top="30px" right="4%" spin spinDuration={40} />
      <DecorativeStar size={90} color="#FFFFFF" opacity={0.15} top="35%" left="2%" rotate={33} />
      <DecorativeStar size={120} color="#1A1A1A" opacity={0.15} bottom="15%" right="2%" spin spinDuration={32} />
      <DecorativeStar size={70} color="#FFFFFF" opacity={0.1} bottom="5%" left="8%" rotate={15} />
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes moveStripes {
          from { background-position: 0 0; }
          to { background-position: 56.57px 56.57px; }
        }
        .moving-stripes-contact {
          background-image: repeating-linear-gradient(
            -45deg,
            rgba(0,0,0,0.07),
            rgba(0,0,0,0.07) 20px,
            transparent 20px,
            transparent 40px
          );
          background-size: 56.57px 56.57px;
          animation: moveStripes 4s linear infinite;
        }
      `}} />

      {/* Animated stripe background */}
      <div className="absolute inset-0 moving-stripes-contact pointer-events-none z-0" />

      <div
        className="mx-auto relative z-10 flex flex-col items-center"
        style={{ maxWidth: 1200, paddingLeft: 48, paddingRight: 48 }}
      >
        {/* Eyebrow */}
        {/* <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-body font-bold text-xs sm:text-sm uppercase tracking-wider text-white/70 mb-4"
        >
          ✦ Get In Touch
        </motion.p> */}

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-white leading-tight text-center max-w-3xl mb-4"
          style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
        >
          Ready to Build the Offline Economy Together?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-body text-white/80 text-base sm:text-lg text-center max-w-xl mb-12"
        >
          Fill in the form below and the IRL Culture Fest team will get back to you within 48 hours.
        </motion.p>

        {/* Form card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="bg-white rounded-[24px] p-8 sm:p-12 w-full max-w-[680px] border-2 border-[#0D0D0D]"
          style={{ boxShadow: "8px 8px 0px 0px #0D0D0D" }}
        >
          {status === "success" ? (
            <div className="text-center py-12">
              <span className="text-5xl mb-4 block">🎉</span>
              <h3 className="font-display text-2xl text-[#0D0D0D] mb-4">
                Thank You For Getting In Touch!
              </h3>
              <p className="font-body text-[#555] text-base">
                Your inquiry has been sent. We will review it and get back to you within 48 hours.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-8 bg-[#0D0D0D] text-white font-body text-sm font-bold px-6 py-3 rounded-full hover:bg-[#FF2B2B] transition-colors cursor-pointer"
              >
                Submit another inquiry
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-5 font-body">
              {/* Row: Full Name */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] uppercase font-bold text-[#666] tracking-wider">Full Name</label>
                <input
                  type="text" name="fullName" value={formData.fullName} onChange={handleChange}
                  placeholder="e.g. John Doe" required
                  className="w-full text-sm px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-[#1A1A1A] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF2B2B] focus:border-transparent transition"
                />
              </div>

              {/* Row: Organisation */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] uppercase font-bold text-[#666] tracking-wider">Organisation</label>
                <input
                  type="text" name="organisation" value={formData.organisation} onChange={handleChange}
                  placeholder="e.g. Acme Corp" required
                  className="w-full text-sm px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-[#1A1A1A] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF2B2B] focus:border-transparent transition"
                />
              </div>

              {/* Row: Designation */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] uppercase font-bold text-[#666] tracking-wider">Designation</label>
                <input
                  type="text" name="designation" value={formData.designation} onChange={handleChange}
                  placeholder="e.g. Marketing Director" required
                  className="w-full text-sm px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-[#1A1A1A] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF2B2B] focus:border-transparent transition"
                />
              </div>

              {/* Row: Email + Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] uppercase font-bold text-[#666] tracking-wider">Email</label>
                  <input
                    type="email" name="email" value={formData.email} onChange={handleChange}
                    placeholder="john@example.com" required
                    className="w-full text-sm px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-[#1A1A1A] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF2B2B] focus:border-transparent transition"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] uppercase font-bold text-[#666] tracking-wider">Phone</label>
                  <input
                    type="tel" name="phone" value={formData.phone} onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX" required
                    className="w-full text-sm px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-[#1A1A1A] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF2B2B] focus:border-transparent transition"
                  />
                </div>
              </div>

              {/* Row: Interest */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] uppercase font-bold text-[#666] tracking-wider">I&apos;m interested in</label>
                <select
                  name="interest" value={formData.interest} onChange={handleChange}
                  className="w-full text-sm px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-[#FF2B2B] focus:border-transparent transition appearance-none"
                  style={{
                    backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23666' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 16px center",
                    backgroundSize: "16px",
                  }}
                >
                  <option>All Access Pass</option>
                  <option>Community Leader Pass</option>
                  <option>Live Pitching &amp; Fest Pass</option>
                  <option>Brand Pass</option>
                  <option>Expo Booth Space</option>
                  <option>Sponsorship / Partnership</option>
                  <option>Not sure yet</option>
                </select>
              </div>

              {/* Row: Message */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] uppercase font-bold text-[#666] tracking-wider">Tell us about your goals</label>
                <textarea
                  name="message" value={formData.message} onChange={handleChange}
                  placeholder="Share what you're looking for — pass type, partnership goals, or anything else..."
                  rows={4} required
                  className="w-full text-sm px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-[#1A1A1A] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF2B2B] focus:border-transparent transition resize-none"
                />
              </div>

              {status === "error" && (
                <p className="text-sm text-[#FF2B2B] font-semibold">
                  ⚠️ Something went wrong. Please try again or email us directly.
                </p>
              )}

              {/* Submit */}
              <button
                onClick={handleSubmit}
                disabled={status === "submitting"}
                className="w-full mt-2 bg-[#0D0D0D] text-white hover:bg-[#FF2B2B] hover:text-white border-2 border-transparent hover:border-white font-display text-[17px] tracking-wider py-4 rounded-full transition-all duration-200 cursor-pointer disabled:opacity-50"
              >
                {status === "submitting" ? "Sending..." : "Submit Inquiry →"}
              </button>
            </div>
          )}
        </motion.div>

        {/* Direct email fallback */}
        <p className="mt-8 font-body text-sm text-white/70 text-center">
          Or email us directly at{" "}
          <a href="mailto:info@meetday.ai" className="text-white underline hover:opacity-80 transition-opacity">
            info@meetday.ai
          </a>
        </p>
      </div>
    </section>
  );
}
