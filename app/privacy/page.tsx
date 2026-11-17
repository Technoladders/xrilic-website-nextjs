import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { privacyHtml } from "@/lib/privacy-html";

export const metadata: Metadata = {
  title: "Privacy Policy | Xrilic",
  description: "How Xrilic Technologies India Private Limited handles personal data across xrilic.ai and the Xrilic platform.",
};

export default function PrivacyPage() {
  return <LegalPage title="Privacy Policy" html={privacyHtml} />;
}
