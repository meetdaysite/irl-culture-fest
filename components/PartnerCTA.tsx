"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function PartnerCTA() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const formId = process.env.NEXT_PUBLIC_FORMSPREE_ID || "YOUR_FORM_ID";

    try {
      await fetch(`https://formspree.io/f/${formId}`, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      setSubmitted(true);
      form.reset();
    } catch {
      // Silently handle — in production replace YOUR_FORM_ID
    }
  };

  return (
    <section
      id="partner"
      className="relative flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "#FF2D2D", paddingTop: 60, paddingBottom: 80, minHeight: "100vh" }}
    >

      {/* Diagonal Stripes Overlay */}
      <div className="absolute inset-0 diagonal-stripes pointer-events-none" />

      <div
        className="relative z-10 mx-auto w-full text-left grid md:grid-cols-2 gap-12 items-start"
        style={{ maxWidth: 1200, paddingLeft: 48, paddingRight: 48 }}
      >
        {/* Left Column: Written Content */}
        <div>
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-white"
            style={{
              fontSize: "clamp(32px, 4.5vw, 64px)",
              lineHeight: 1.0,
              letterSpacing: "0.01em",
              marginBottom: 20,
            }}
          >
            LET&apos;S MAKE THE OFFLINE ECONOMY SUSTAINABLE
          </motion.h2>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-body text-white/90 text-base sm:text-lg mb-4 leading-relaxed"
          >
            Every thriving cultural movement needs a home, a stage, and an engine.
            We are building all three.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-body text-white/70 text-sm sm:text-base"
          >
            Join us as a founding partner, co-curator, or brand ecosystem
            champion.
          </motion.p>
        </div>

        {/* Right Column: Contact Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-2xl p-8 sm:p-10 w-full"
        >
          {submitted ? (
            <div className="py-10 text-center">
              <div className="text-5xl mb-4">🎉</div>
              <h3
                className="font-display text-[#1A1A1A] mb-2"
                style={{
                  fontSize: "clamp(18px, 2.2vw, 26px)",
                  letterSpacing: "0.03em",
                }}
              >
                Thank You!
              </h3>
              <p className="font-body text-[#555]">
                We&apos;ll be in touch soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  required
                  className="w-full font-body text-sm px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-[#1A1A1A] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF2D2D] focus:border-transparent transition"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="organization"
                  placeholder="Organization"
                  required
                  className="w-full font-body text-sm px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-[#1A1A1A] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF2D2D] focus:border-transparent transition"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="w-full font-body text-sm px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-[#1A1A1A] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF2D2D] focus:border-transparent transition"
                />
              </div>
              <div>
                <select
                  name="role"
                  required
                  defaultValue=""
                  className="w-full font-body text-sm px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-[#FF2D2D] focus:border-transparent transition appearance-none"
                >
                  <option value="" disabled>
                    Select Role
                  </option>
                  <option value="Founding Partner">Founding Partner</option>
                  <option value="Co-Curator">Co-Curator</option>
                  <option value="Brand Ecosystem Champion">
                    Brand Ecosystem Champion
                  </option>
                  <option value="Super-Host">Super-Host</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Message"
                  rows={4}
                  className="w-full font-body text-sm px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-[#1A1A1A] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF2D2D] focus:border-transparent transition resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full font-body font-semibold text-base bg-[#1A1A1A] text-white py-3.5 rounded-full transition-all hover:bg-[#333] hover:scale-[1.02] cursor-pointer"
              >
                Submit
              </button>
            </form>
          )}
        </motion.div>
      </div>

      {/* Torn Paper Divider → next section: Footer #1A1A1A */}
      {/* Straight Divider → Footer #1A1A1A */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "2px",
          background: "#1A1A1A",
          zIndex: 2,
        }}
      />
    </section>
  );
}
