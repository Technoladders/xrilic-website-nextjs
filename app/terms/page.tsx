import React from "react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms & Conditions for Xrilic Technologies India Private Limited",
}

export default function TermsAndConditions() {
  return (
    <main className="min-h-screen bg-background text-foreground pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] text-white pt-32 pb-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-3">Terms &amp; Conditions</h1>
        <p className="text-[#a8b2d8] text-lg">Xrilic Technologies India Private Limited</p>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-12 -mt-8 relative z-10">
        {/* Table of Contents */}
        <div className="bg-card border border-border rounded-xl p-8 mb-12 shadow-sm">
          <h2 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-4">Table of Contents</h2>
          <ol className="list-decimal pl-5 space-y-1.5 text-primary font-medium">
            <li><a href="#acceptance" className="hover:underline">Acceptance of Terms</a></li>
            <li><a href="#services" className="hover:underline">Services Provided</a></li>
            <li><a href="#accounts" className="hover:underline">User Accounts &amp; Responsibilities</a></li>
            <li><a href="#acceptable-use" className="hover:underline">Acceptable Use</a></li>
            <li><a href="#ai-services" className="hover:underline">AI Services &amp; Generated Content</a></li>
            <li><a href="#user-content" className="hover:underline">User Content &amp; Data</a></li>
            <li><a href="#whatsapp" className="hover:underline">WhatsApp Business Integration</a></li>
            <li><a href="#third-party" className="hover:underline">Third‑Party Services</a></li>
            <li><a href="#intellectual-property" className="hover:underline">Intellectual Property</a></li>
            <li><a href="#billing" className="hover:underline">Subscription &amp; Billing</a></li>
            <li><a href="#availability" className="hover:underline">Availability &amp; Service Interruptions</a></li>
            <li><a href="#disclaimer" className="hover:underline">Disclaimer</a></li>
            <li><a href="#limitation" className="hover:underline">Limitation of Liability</a></li>
            <li><a href="#indemnification" className="hover:underline">Indemnification</a></li>
            <li><a href="#termination" className="hover:underline">Termination</a></li>
            <li><a href="#governing-law" className="hover:underline">Governing Law &amp; Jurisdiction</a></li>
            <li><a href="#changes" className="hover:underline">Changes to Terms</a></li>
            <li><a href="#contact" className="hover:underline">Contact Information</a></li>
          </ol>
        </div>

        {/* 1. Acceptance */}
        <section id="acceptance" className="bg-card border border-border rounded-xl p-8 mb-6 shadow-sm scroll-mt-24">
          <h2 className="text-xl font-bold text-foreground mb-5 pb-3 border-b border-border">1. Acceptance of Terms</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              These Terms &amp; Conditions (“<strong className="text-foreground">Terms</strong>”) govern your access to and use of the website, platform, and services provided by
              <strong className="text-foreground"> XRILIC TECHNOLOGIES INDIA PRIVATE LIMITED</strong> (“<strong className="text-foreground">Xrilic</strong>,” “<strong className="text-foreground">we</strong>,” “<strong className="text-foreground">us</strong>,” or “<strong className="text-foreground">our</strong>”),
              including <strong className="text-foreground">xrilic.ai</strong> and all related applications and APIs (collectively, the “<strong className="text-foreground">Services</strong>”).
            </p>
            <p>
              By creating an account, accessing, or using the Services, you acknowledge that you have read, understood, and agree to be bound by these Terms.
              If you are using the Services on behalf of an organization, you represent that you have the authority to bind that organization to these Terms.
              If you do not agree, you must not use the Services.
            </p>
          </div>
        </section>

        {/* 2. Services */}
        <section id="services" className="bg-card border border-border rounded-xl p-8 mb-6 shadow-sm scroll-mt-24">
          <h2 className="text-xl font-bold text-foreground mb-5 pb-3 border-b border-border">2. Services Provided</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Xrilic provides a suite of software‑as‑a‑service tools that may include, but are not limited to, AI‑powered automation, data processing, communication features, and integration with third‑party platforms.
              We reserve the right to modify, suspend, or discontinue any feature or part of the Services at any time, with or without notice.
            </p>
          </div>
        </section>

        {/* 3. Accounts */}
        <section id="accounts" className="bg-card border border-border rounded-xl p-8 mb-6 shadow-sm scroll-mt-24">
          <h2 className="text-xl font-bold text-foreground mb-5 pb-3 border-b border-border">3. User Accounts &amp; Responsibilities</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>When you create an account, you must provide accurate and complete information. You are responsible for:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Maintaining the confidentiality of your login credentials.</li>
              <li>All activities that occur under your account.</li>
              <li>Notifying us immediately of any unauthorised use or security breach at <a href="mailto:support@xrilic.ai" className="text-primary hover:underline">support@xrilic.ai</a>.</li>
            </ul>
            <p>Organisation accounts may have an appointed administrator who can manage team members and data. The administrator is responsible for ensuring that all users under the organisation comply with these Terms.</p>
          </div>
        </section>

        {/* 4. Acceptable Use */}
        <section id="acceptable-use" className="bg-card border border-border rounded-xl p-8 mb-6 shadow-sm scroll-mt-24">
          <h2 className="text-xl font-bold text-foreground mb-5 pb-3 border-b border-border">4. Acceptable Use</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>You agree not to:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Use the Services for any unlawful purpose or in violation of any applicable laws.</li>
              <li>Upload or transmit viruses, malware, or any malicious code.</li>
              <li>Attempt to gain unauthorised access to our systems, networks, or data.</li>
              <li>Interfere with or disrupt the integrity or performance of the Services.</li>
              <li>Use automated means (scraping, bots) to extract data without our prior written permission.</li>
              <li>Infringe upon the intellectual property or privacy rights of others.</li>
            </ul>
          </div>
        </section>

        {/* 5. AI Services */}
        <section id="ai-services" className="bg-card border border-border rounded-xl p-8 mb-6 shadow-sm scroll-mt-24">
          <h2 className="text-xl font-bold text-foreground mb-5 pb-3 border-b border-border">5. AI Services &amp; Generated Content</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              The Services may include features powered by artificial intelligence. You retain ownership of the inputs you provide. Xrilic does not claim ownership of AI‑generated outputs produced from your inputs.
              However, you are solely responsible for evaluating the accuracy and appropriateness of any AI‑generated content before using it.
            </p>
            <p>
              We may use aggregated and de‑identified data to improve our AI models. We will not use your identifiable personal content to train AI models without your explicit consent.
            </p>
          </div>
        </section>

        {/* 6. User Content & Data */}
        <section id="user-content" className="bg-card border border-border rounded-xl p-8 mb-6 shadow-sm scroll-mt-24">
          <h2 className="text-xl font-bold text-foreground mb-5 pb-3 border-b border-border">6. User Content &amp; Data</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              You retain all rights to the data, files, and content you upload or process through the Services (“<strong className="text-foreground">User Content</strong>”).
              By submitting User Content, you grant us a limited, worldwide, non‑exclusive, royalty‑free licence to use, reproduce, and process that content solely to provide and improve the Services.
            </p>
            <p>
              You represent that you have all necessary rights to your User Content and that it does not violate these Terms or any applicable law.
            </p>
          </div>
        </section>

        {/* 7. WhatsApp Business Integration */}
        <section id="whatsapp" className="bg-card border border-border rounded-xl p-8 mb-6 shadow-sm scroll-mt-24">
          <h2 className="text-xl font-bold text-foreground mb-5 pb-3 border-b border-border">7. WhatsApp Business Integration</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              The Services may integrate with the WhatsApp Business Platform. By using any feature that sends or receives messages via WhatsApp, you agree to comply with Meta’s
              WhatsApp Business Terms of Service, Business Policy, and any applicable guidelines. You are responsible for obtaining all necessary consents from message recipients and for
              the content of messages sent through the integration.
            </p>
            <p>
              Xrilic acts solely as a technology provider enabling the integration and is not responsible for the content of your messages or for any actions Meta may take against your WhatsApp Business account.
            </p>
          </div>
        </section>

        {/* 8. Third-Party Services */}
        <section id="third-party" className="bg-card border border-border rounded-xl p-8 mb-6 shadow-sm scroll-mt-24">
          <h2 className="text-xl font-bold text-foreground mb-5 pb-3 border-b border-border">8. Third‑Party Services</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              The Services may contain links or integrations with third‑party websites, APIs, or services that are not owned or controlled by Xrilic.
              We are not responsible for the content, privacy practices, or terms of any third‑party services. Your use of such services is at your own risk and subject to their respective terms.
            </p>
          </div>
        </section>

        {/* 9. Intellectual Property */}
        <section id="intellectual-property" className="bg-card border border-border rounded-xl p-8 mb-6 shadow-sm scroll-mt-24">
          <h2 className="text-xl font-bold text-foreground mb-5 pb-3 border-b border-border">9. Intellectual Property</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              The Services, including the underlying code, design, UI, branding, and all related materials, are the exclusive property of XRILIC TECHNOLOGIES INDIA PRIVATE LIMITED and its licensors.
              Except as explicitly stated, nothing in these Terms grants you any right, title, or interest in our intellectual property.
            </p>
            <p>
              You may not copy, modify, distribute, sell, or create derivative works of the Services without our prior written consent.
            </p>
          </div>
        </section>

        {/* 10. Subscription & Billing */}
        <section id="billing" className="bg-card border border-border rounded-xl p-8 mb-6 shadow-sm scroll-mt-24">
          <h2 className="text-xl font-bold text-foreground mb-5 pb-3 border-b border-border">10. Subscription &amp; Billing</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Paid plans are subject to the specific terms agreed upon during your subscription. Fees, billing cycles, and payment methods are defined in your service order or invoice.
              Unless stated otherwise, all fees are non‑refundable.
            </p>
            <p>
              We reserve the right to change our pricing or introduce new fees with advance notice. Continued use after a price change constitutes your acceptance of the new fees.
            </p>
          </div>
        </section>

        {/* 11. Availability */}
        <section id="availability" className="bg-card border border-border rounded-xl p-8 mb-6 shadow-sm scroll-mt-24">
          <h2 className="text-xl font-bold text-foreground mb-5 pb-3 border-b border-border">11. Availability &amp; Service Interruptions</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              We strive to maintain a high level of uptime, but the Services may be temporarily unavailable due to maintenance, updates, or events beyond our control.
              We will make reasonable efforts to schedule maintenance during off‑peak hours and to notify users in advance when possible.
            </p>
          </div>
        </section>

        {/* 12. Disclaimer */}
        <section id="disclaimer" className="bg-card border border-border rounded-xl p-8 mb-6 shadow-sm scroll-mt-24">
          <h2 className="text-xl font-bold text-foreground mb-5 pb-3 border-b border-border">12. Disclaimer</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              THE SERVICES ARE PROVIDED ON AN “AS IS” AND “AS AVAILABLE” BASIS, WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.
              TO THE FULLEST EXTENT PERMITTED BY LAW, XRILIC DISCLAIMS ALL WARRANTIES, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON‑INFRINGEMENT.
            </p>
          </div>
        </section>

        {/* 13. Limitation of Liability */}
        <section id="limitation" className="bg-card border border-border rounded-xl p-8 mb-6 shadow-sm scroll-mt-24">
          <h2 className="text-xl font-bold text-foreground mb-5 pb-3 border-b border-border">13. Limitation of Liability</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, XRILIC SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES,
              OR ANY LOSS OF PROFITS, REVENUE, DATA, OR BUSINESS OPPORTUNITIES, ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF THE SERVICES.
            </p>
            <p>
              OUR TOTAL AGGREGATE LIABILITY UNDER THESE TERMS SHALL NOT EXCEED THE AMOUNT YOU PAID US IN THE TWELVE (12) MONTHS PRECEDING THE EVENT GIVING RISE TO THE CLAIM.
            </p>
          </div>
        </section>

        {/* 14. Indemnification */}
        <section id="indemnification" className="bg-card border border-border rounded-xl p-8 mb-6 shadow-sm scroll-mt-24">
          <h2 className="text-xl font-bold text-foreground mb-5 pb-3 border-b border-border">14. Indemnification</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              You agree to indemnify and hold harmless XRILIC TECHNOLOGIES INDIA PRIVATE LIMITED, its directors, employees, and agents from any claims, damages, liabilities,
              costs, or expenses (including reasonable legal fees) arising out of your violation of these Terms, your User Content, or your misuse of the Services.
            </p>
          </div>
        </section>

        {/* 15. Termination */}
        <section id="termination" className="bg-card border border-border rounded-xl p-8 mb-6 shadow-sm scroll-mt-24">
          <h2 className="text-xl font-bold text-foreground mb-5 pb-3 border-b border-border">15. Termination</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              We may suspend or terminate your access to the Services at any time, without prior notice, if we believe you have violated these Terms or if required by law.
              You may stop using the Services and delete your account at any time. Upon termination, any rights granted to you under these Terms will cease immediately.
            </p>
          </div>
        </section>

        {/* 16. Governing Law */}
        <section id="governing-law" className="bg-card border border-border rounded-xl p-8 mb-6 shadow-sm scroll-mt-24">
          <h2 className="text-xl font-bold text-foreground mb-5 pb-3 border-b border-border">16. Governing Law &amp; Jurisdiction</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              These Terms shall be governed and construed in accordance with the laws of India. Any disputes arising out of or relating to these Terms shall be subject to the exclusive jurisdiction of the courts in Coimbatore, Tamil Nadu.
            </p>
          </div>
        </section>

        {/* 17. Changes */}
        <section id="changes" className="bg-card border border-border rounded-xl p-8 mb-6 shadow-sm scroll-mt-24">
          <h2 className="text-xl font-bold text-foreground mb-5 pb-3 border-b border-border">17. Changes to Terms</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              We may update these Terms from time to time. If we make material changes, we will notify you via email or through a prominent notice on the platform.
              Your continued use of the Services after the effective date of the revised Terms constitutes your acceptance of the changes.
            </p>
          </div>
        </section>

        {/* 18. Contact */}
        <section id="contact" className="bg-card border border-border rounded-xl p-8 mb-6 shadow-sm scroll-mt-24">
          <h2 className="text-xl font-bold text-foreground mb-5 pb-3 border-b border-border">18. Contact Information</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed overflow-x-auto">
            <p>For any questions about these Terms, please contact us at:</p>
            <table className="w-full text-left border-collapse mt-4">
              <tbody className="text-sm">
                <tr>
                  <td className="p-3 border border-border font-bold text-foreground w-1/3 md:w-1/4">Company</td>
                  <td className="p-3 border border-border">XRILIC TECHNOLOGIES INDIA PRIVATE LIMITED</td>
                </tr>
                <tr className="bg-muted/30">
                  <td className="p-3 border border-border font-bold text-foreground">Email</td>
                  <td className="p-3 border border-border"><a href="mailto:support@xrilic.ai" className="text-primary hover:underline">support@xrilic.ai</a></td>
                </tr>
                <tr>
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