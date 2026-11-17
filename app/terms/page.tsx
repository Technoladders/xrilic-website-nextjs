import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { termsHtml } from "@/lib/legal-html";

export const metadata: Metadata = {
  title: "Terms & Conditions | Xrilic",
  description: "The terms that apply to xrilic.ai and the Xrilic platform.",
};

export default function TermsPage() {
  return <LegalPage title="Terms & Conditions" html={termsHtml} />;
}
