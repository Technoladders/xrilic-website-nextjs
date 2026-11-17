import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { dataDeletionHtml } from "@/lib/legal-html";

export const metadata: Metadata = {
  title: "Data Deletion Instructions | Xrilic",
  description: "How to request deletion of your data from Xrilic.",
};

export default function DataDeletionPage() {
  return <LegalPage title="Data Deletion Instructions" html={dataDeletionHtml} />;
}
