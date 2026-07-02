import React from "react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Data Deletion Instructions",
  description: "How to request deletion of your personal data from Xrilic Technologies India Private Limited",
}

export default function DataDeletionInstructions() {
  return (
    <main className="min-h-screen bg-background text-foreground pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] text-white pt-32 pb-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-3">Data Deletion Instructions</h1>
        <p className="text-[#a8b2d8] text-lg">Xrilic Technologies India Private Limited</p>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-12 -mt-8 relative z-10">
        {/* Table of Contents */}
        <div className="bg-card border border-border rounded-xl p-8 mb-12 shadow-sm">
          <h2 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-4">Table of Contents</h2>
          <ol className="list-decimal pl-5 space-y-1.5 text-primary font-medium">
            <li><a href="#overview" className="hover:underline">Overview</a></li>
            <li><a href="#data-we-delete" className="hover:underline">Data We Can Delete</a></li>
            <li><a href="#how-to-request" className="hover:underline">How to Request Deletion</a></li>
            <li><a href="#verification" className="hover:underline">Identity Verification</a></li>
            <li><a href="#processing-timeline" className="hover:underline">Processing Timeline</a></li>
            <li><a href="#what-gets-deleted" className="hover:underline">What Gets Deleted</a></li>
            <li><a href="#what-may-be-retained" className="hover:underline">What May Be Retained</a></li>
            <li><a href="#org-admin" className="hover:underline">Organization Administrator Requests</a></li>
            <li><a href="#whatsapp-data" className="hover:underline">WhatsApp Business Data</a></li>
            <li><a href="#contact" className="hover:underline">Contact Information</a></li>
          </ol>
        </div>

        {/* 1. Overview */}
        <section id="overview" className="bg-card border border-border rounded-xl p-8 mb-6 shadow-sm scroll-mt-24">
          <h2 className="text-xl font-bold text-foreground mb-5 pb-3 border-b border-border">1. Overview</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              At <strong className="text-foreground">XRILIC TECHNOLOGIES INDIA PRIVATE LIMITED</strong> (“Xrilic,” “we,” “our,” or “us”),
              we respect your privacy and give you control over your personal data. This page explains how you can request the deletion of your information from our platform and related services.
            </p>
          </div>
        </section>

        {/* 2. Data We Can Delete */}
        <section id="data-we-delete" className="bg-card border border-border rounded-xl p-8 mb-6 shadow-sm scroll-mt-24">
          <h2 className="text-xl font-bold text-foreground mb-5 pb-3 border-b border-border">2. Data We Can Delete</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>Upon a verified deletion request, we can delete the following types of personal data associated with you:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Your user account and profile information</li>
              <li>Files, documents, or content you uploaded</li>
              <li>AI session history and generated outputs linked to your account</li>
              <li>Communication logs with the platform (where not legally required to retain)</li>
              <li>Authentication tokens and access records</li>
              <li>Data you processed through any integrated services (see WhatsApp section below)</li>
            </ul>
          </div>
        </section>

        {/* 3. How to Request */}
        <section id="how-to-request" className="bg-card border border-border rounded-xl p-8 mb-6 shadow-sm scroll-mt-24">
          <h2 className="text-xl font-bold text-foreground mb-5 pb-3 border-b border-border">3. How to Request Deletion</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>To request deletion of your data, send an email to <a href="mailto:support@xrilic.ai" className="text-primary hover:underline">support@xrilic.ai</a> with:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>The email address associated with your account</li>
              <li>If applicable, the name of your organisation</li>
              <li>A brief reason for your request (optional)</li>
            </ul>
            <p>You may also contact our support team at <a href="mailto:support@xrilic.ai" className="text-primary hover:underline">support@xrilic.ai</a>.</p>
          </div>
        </section>

        {/* 4. Verification */}
        <section id="verification" className="bg-card border border-border rounded-xl p-8 mb-6 shadow-sm scroll-mt-24">
          <h2 className="text-xl font-bold text-foreground mb-5 pb-3 border-b border-border">4. Identity Verification</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              To protect your security, we will verify your identity before processing any deletion request. This may involve confirming your email address,
              requesting a one‑time code, or, in the case of organisation‑level requests, verifying your administrative authority.
            </p>
          </div>
        </section>

        {/* 5. Processing Timeline */}
        <section id="processing-timeline" className="bg-card border border-border rounded-xl p-8 mb-6 shadow-sm scroll-mt-24">
          <h2 className="text-xl font-bold text-foreground mb-5 pb-3 border-b border-border">5. Processing Timeline</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              We will process verified deletion requests within <strong className="text-foreground">60 days</strong> from the date of verification.
              If we require additional time due to the complexity of the request, we will inform you in writing within the initial 60‑day period.
            </p>
          </div>
        </section>

        {/* 6. What Gets Deleted */}
        <section id="what-gets-deleted" className="bg-card border border-border rounded-xl p-8 mb-6 shadow-sm scroll-mt-24">
          <h2 className="text-xl font-bold text-foreground mb-5 pb-3 border-b border-border">6. What Gets Deleted</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>Once your deletion request is processed, the following will be permanently removed:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Your user account and login credentials</li>
              <li>All uploaded files and content</li>
              <li>Records and data associated with your organisation (if an admin‑level deletion)</li>
              <li>AI interaction history and any model fine‑tuning data linked to you</li>
              <li>Personal profile information and preferences</li>
              <li>Authentication tokens and session data</li>
            </ul>
          </div>
        </section>

        {/* 7. What May Be Retained */}
        <section id="what-may-be-retained" className="bg-card border border-border rounded-xl p-8 mb-6 shadow-sm scroll-mt-24">
          <h2 className="text-xl font-bold text-foreground mb-5 pb-3 border-b border-border">7. What May Be Retained</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>Some information may be retained after deletion when necessary for:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Compliance with legal obligations (e.g., tax records, regulatory requirements)</li>
              <li>Fraud prevention and detection</li>
              <li>Network and information security</li>
              <li>Audit and accounting purposes</li>
            </ul>
            <p>Any retained data will be minimised and stored securely, and will not be used for any other purpose.</p>
          </div>
        </section>

        {/* 8. Organisation Admin Requests */}
        <section id="org-admin" className="bg-card border border-border rounded-xl p-8 mb-6 shadow-sm scroll-mt-24">
          <h2 className="text-xl font-bold text-foreground mb-5 pb-3 border-b border-border">8. Organisation Administrator Requests</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              If you are the administrator of an organisation account, you may request deletion of your entire organisation’s data, including the accounts of all team members associated with it.
              This request must be made from the registered admin email and is subject to verification of your authority.
            </p>
            <p>
              After such a deletion, all user accounts, uploaded files, and organisation‑owned records will be permanently removed, except for data we are legally required to retain.
            </p>
          </div>
        </section>

        {/* 9. WhatsApp Business Data */}
        <section id="whatsapp-data" className="bg-card border border-border rounded-xl p-8 mb-6 shadow-sm scroll-mt-24">
          <h2 className="text-xl font-bold text-foreground mb-5 pb-3 border-b border-border">9. WhatsApp Business Data</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              If your use of the Services involved integration with the WhatsApp Business Platform, certain conversation data may be stored within your account.
              Deleting your account will remove those logs from our systems.
              However, message records may still exist on Meta’s servers in accordance with WhatsApp’s data retention policies, which are outside Xrilic’s control.
            </p>
            <p>
              If you wish to delete WhatsApp‑related data from Meta’s systems, you must follow the deletion instructions provided by WhatsApp directly.
            </p>
          </div>
        </section>

        {/* 10. Contact */}
        <section id="contact" className="bg-card border border-border rounded-xl p-8 mb-6 shadow-sm scroll-mt-24">
          <h2 className="text-xl font-bold text-foreground mb-5 pb-3 border-b border-border">10. Contact Information</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed overflow-x-auto">
            <p>If you have any questions about data deletion, please reach out:</p>
            <table className="w-full text-left border-collapse mt-4">
              <tbody className="text-sm">
                <tr>
                  <td className="p-3 border border-border font-bold text-foreground w-1/3 md:w-1/4">Company</td>
                  <td className="p-3 border border-border">XRILIC TECHNOLOGIES INDIA PRIVATE LIMITED</td>
                </tr>
                <tr className="bg-muted/30">
                  <td className="p-3 border border-border font-bold text-foreground">Deletion requests</td>
                  <td className="p-3 border border-border"><a href="mailto:support@xrilic.ai" className="text-primary hover:underline">support@xrilic.ai</a></td>
                </tr>
                <tr>
                  <td className="p-3 border border-border font-bold text-foreground">Support</td>
                  <td className="p-3 border border-border"><a href="mailto:support@xrilic.ai" className="text-primary hover:underline">support@xrilic.ai</a></td>
                </tr>
                <tr className="bg-muted/30">
                  <td className="p-3 border border-border font-bold text-foreground">Website</td>
                  <td className="p-3 border border-border"><a href="https://xrilic.ai" target="_blank" rel="noreferrer" className="text-primary hover:underline">https://xrilic.ai</a></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  )
}