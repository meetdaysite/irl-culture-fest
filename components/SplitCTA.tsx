"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function SplitCTA() {
  return (
    <section
      id="split-cta"
      className="relative overflow-hidden"
      style={{ background: "#0D0D0D", paddingTop: 96, paddingBottom: 96 }}
    >
      <div
        className="mx-auto relative z-10 w-full"
        style={{ maxWidth: 1200, paddingLeft: 48, paddingRight: 48 }}
      >
        {/* Heading */}
        <h2
          className="font-display text-white leading-tight"
          style={{
            fontSize: "clamp(24px, 3.5vw, 40px)",
            marginBottom: 48,
          }}
        >
          FIND YOUR PLACE IN THE MOVEMENT.
        </h2>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Card: Attendees */}
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            whileHover={{ scale: 1.03 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-[20px] flex flex-col justify-between items-start"
            style={{
              background: "#F5F0E8",
              padding: "48px 40px",
              border: "none",
            }}
          >
            <div>
              {/* Pill */}
              <span
                className="inline-block font-body text-[11px] uppercase font-bold rounded-[20px] px-4 py-1.5"
                style={{ background: "#f2af29", color: "#0D0D0D" }}
              >
                FOR COMMUNITY BUILDERS
              </span>

              {/* Heading */}
              <h3
                className="font-display text-[32px] leading-tight"
                style={{ color: "#0D0D0D", marginTop: 20 }}
              >
                You build the culture.
              </h3>

              {/* Body */}
              <p
                className="font-body text-base leading-[1.7]"
                style={{ color: "#333333", marginTop: 16 }}
              >
                Whether you run a book club, a dance collective, a street food pop-up, or a film screening series — this fest was built for you. Come find your people, find your stage, and find the resources to keep going.
              </p>
            </div>

            {/* CTA Button */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              style={{ marginTop: 32 }}
            >
              <Link
                href="#passes"
                className="inline-block font-body text-[14px] font-semibold text-center rounded-full transition-all duration-250 cursor-pointer"
                style={{
                  background: "#0D0D0D",
                  color: "#FFFFFF",
                  padding: "14px 32px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#FF2B2B";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#0D0D0D";
                }}
              >
                Apply to Attend →
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Card: Partners */}
          <motion.div
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            whileHover={{ scale: 1.03 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="rounded-[20px] flex flex-col justify-between items-start"
            style={{
              background: "#FF2B2B",
              padding: "48px 40px",
            }}
          >
            <div>
              {/* Pill */}
              <span
                className="inline-block font-body text-[11px] uppercase font-bold rounded-[20px] px-4 py-1.5"
                style={{ background: "#f2af29", color: "#0D0D0D" }}
              >
                FOR BRANDS & PARTNERS
              </span>

              {/* Heading */}
              <h3
                className="font-display text-[32px] leading-tight text-white"
                style={{ marginTop: 20 }}
              >
                You power the culture.
              </h3>

              {/* Body */}
              <p
                className="font-body text-base leading-[1.7]"
                style={{ color: "rgba(255,255,255,0.85)", marginTop: 16 }}
              >
                Brands, agencies, venues, and platforms — your audience is here. Skip the digital noise and meet India's most engaged offline communities face to face.
              </p>
            </div>

            {/* CTA Button */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              style={{ marginTop: 32 }}
            >
              <Link
                href="#passes"
                className="inline-block font-body text-[14px] font-semibold text-center rounded-full transition-all duration-250 cursor-pointer"
                style={{
                  background: "#FFFFFF",
                  color: "#FF2B2B",
                  padding: "14px 32px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#0D0D0D";
                  e.currentTarget.style.color = "#FFFFFF";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#FFFFFF";
                  e.currentTarget.style.color = "#FF2B2B";
                }}
              >
                Become a Partner →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
