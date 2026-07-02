import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partner With Us — IRL Culture Fest 2026",
  description:
    "Join IRL Culture Fest 2026 as a Founding Partner, Co-Curator, or Brand Ecosystem Champion. Connect your brand with India's most engaged offline communities across Delhi, Mumbai, Bangalore and Pune.",
};

export default function PartnerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
