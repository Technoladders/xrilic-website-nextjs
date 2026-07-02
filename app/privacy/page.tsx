// app/privacy/page.tsx
import React from "react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for xrilic.ai - AI-Powered SaaS Platform",
}

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-background text-foreground pb-16">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] text-white pt-32 pb-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-3">Privacy Policy</h1>
        {/* <p className="text-[#a8b2d8] text-lg">xrilic.ai — AI-Powered SaaS Platform</p> */}
        {/* <div className="inline-block bg-white/10 border border-white/20 text-slate-200 text-xs px-4 py-1.5 rounded-full mt-6 tracking-wide">
          Effective Date: April 1, 2026 &nbsp;·&nbsp; Last Updated: April 1, 2026
        </div> */}
      </section>

      <div className="max-w-6xl mx-auto px-6 py-12 -mt-8 relative z-10">
        
        {/* TABLE OF CONTENTS */}
        <div className="bg-card border border-border rounded-xl p-8 mb-12 shadow-sm">
          <h2 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-4">Table of Contents</h2>
          <ol className="list-decimal pl-5 space-y-1.5 text-primary font-medium">
            <li><a href="#overview" className="hover:underline">Overview & Scope</a></li>
            <li><a href="#information-we-collect" className="hover:underline">Information We Collect</a></li>
            <li><a href="#how-we-use" className="hover:underline">How We Use Your Information</a></li>
            <li><a href="#ai-data" className="hover:underline">AI Inputs & Generated Content</a></li>
            <li><a href="#sharing" className="hover:underline">Sharing & Disclosure</a></li>
            <li><a href="#cookies" className="hover:underline">Cookies & Tracking Technologies</a></li>
            <li><a href="#retention" className="hover:underline">Data Retention</a></li>
            <li><a href="#security" className="hover:underline">Security</a></li>
            <li><a href="#your-rights" className="hover:underline">Your Rights & Choices</a></li>
            <li><a href="#children" className="hover:underline">Children's Privacy</a></li>
            <li><a href="#international" className="hover:underline">International Data Transfers</a></li>
            <li><a href="#changes" className="hover:underline">Changes to This Policy</a></li>
            <li><a href="#contact" className="hover:underline">Contact Us</a></li>
          </ol>
        </div>

        {/* 1. OVERVIEW */}
        <section id="overview" className="bg-card border border-border rounded-xl p-8 mb-6 shadow-sm scroll-mt-24">
          <h2 className="text-xl font-bold text-foreground mb-5 pb-3 border-b border-border flex items-center gap-3">
            {/* <span className="w-8 h-8 rounded bg-primary/10 text-primary flex items-center justify-center text-sm shrink-0">📋</span>  */}
            1. Overview & Scope
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>Welcome to <strong className="text-foreground">xrilic.ai</strong> ("xrilic," "we," "our," or "us"). We are committed to protecting your privacy and handling your personal data with transparency, integrity, and respect.</p>
            <p>This Privacy Policy explains how we collect, use, share, and protect information about you when you access or use our AI-powered SaaS platform, website at <strong className="text-foreground">xrilic.ai</strong>, and any associated services, features, or applications (collectively, the "Services").</p>
            <p>By accessing or using our Services, you agree to the terms of this Privacy Policy. If you do not agree, please discontinue use of the Services.</p>
            
            <div className="bg-primary/5 border-l-4 border-primary rounded-r-lg p-4 my-6 text-foreground">
              <strong className="text-primary">Who this applies to:</strong> This policy applies to all users of xrilic.ai — including registered account holders, trial users, and visitors to our website.
            </div>
          </div>
        </section>

        {/* 2. INFORMATION WE COLLECT */}
        <section id="information-we-collect" className="bg-card border border-border rounded-xl p-8 mb-6 shadow-sm scroll-mt-24">
          <h2 className="text-xl font-bold text-foreground mb-5 pb-3 border-b border-border flex items-center gap-3">
            {/* <span className="w-8 h-8 rounded bg-primary/10 text-primary flex items-center justify-center text-sm shrink-0">📥</span>  */}
            2. Information We Collect
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>We collect information in three ways: information you provide directly, information collected automatically, and information from third parties.</p>

            <h3 className="text-lg font-bold text-foreground mt-6 mb-2">2.1 Information You Provide to Us</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong className="text-foreground">Account information:</strong> Your name, email address, username, and password when you register for an account.</li>
              <li><strong className="text-foreground">Profile data:</strong> Any additional information you add to your profile, such as job title, company name, or profile photo.</li>
              <li><strong className="text-foreground">Communications:</strong> Messages, feedback, or support requests you send to us directly.</li>
            </ul>

            <h3 className="text-lg font-bold text-foreground mt-6 mb-2">2.2 Information Collected Automatically</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong className="text-foreground">Usage data:</strong> Pages visited, features used, actions taken, session duration, click patterns, and navigation paths within the platform.</li>
              <li><strong className="text-foreground">Device & technical data:</strong> IP address, browser type, operating system, device identifiers, screen resolution, and language settings.</li>
              <li><strong className="text-foreground">Log data:</strong> Server logs including timestamps, error reports, and performance metrics.</li>
              <li><strong className="text-foreground">Cookies & tracking technologies:</strong> See Section 6 for details.</li>
            </ul>

            <h3 className="text-lg font-bold text-foreground mt-6 mb-2">2.3 AI Inputs & Content</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong className="text-foreground">Prompts & queries:</strong> Text, instructions, or questions you submit to our AI models.</li>
              <li><strong className="text-foreground">Uploaded files & content:</strong> Documents, images, datasets, or other files you upload to use with our Services.</li>
              <li><strong className="text-foreground">AI-generated outputs:</strong> Content created by our AI models in response to your inputs.</li>
            </ul>

            <div className="bg-primary/5 border-l-4 border-primary rounded-r-lg p-4 my-6 text-foreground">
              <strong className="text-primary">What we do NOT collect:</strong> We do not collect sensitive personal data such as racial or ethnic origin, biometric data, health information, financial account credentials, or government-issued ID numbers through our standard Services.
            </div>
          </div>
        </section>

        {/* 3. HOW WE USE */}
        <section id="how-we-use" className="bg-card border border-border rounded-xl p-8 mb-6 shadow-sm scroll-mt-24">
          <h2 className="text-xl font-bold text-foreground mb-5 pb-3 border-b border-border flex items-center gap-3">
            {/* <span className="w-8 h-8 rounded bg-primary/10 text-primary flex items-center justify-center text-sm shrink-0">⚙️</span>  */}
            3. How We Use Your Information
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed overflow-x-auto">
            <p>We use the information we collect for the following purposes:</p>

            <table className="w-full text-left border-collapse mt-4 min-w-[600px]">
              <thead>
                <tr className="bg-muted text-foreground">
                  <th className="p-3 border border-border font-bold">Purpose</th>
                  <th className="p-3 border border-border font-bold">Data Used</th>
                  <th className="p-3 border border-border font-bold">Legal Basis (GDPR)</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr>
                  <td className="p-3 border border-border">Provide and operate the Services</td>
                  <td className="p-3 border border-border">Account info, usage data, AI inputs</td>
                  <td className="p-3 border border-border">Contract performance</td>
                </tr>
                <tr className="bg-muted/30">
                  <td className="p-3 border border-border">Authenticate and secure your account</td>
                  <td className="p-3 border border-border">Name, email, IP address</td>
                  <td className="p-3 border border-border">Contract performance / Legitimate interests</td>
                </tr>
                <tr>
                  <td className="p-3 border border-border">Improve and develop our AI models & platform</td>
                  <td className="p-3 border border-border">Usage data, aggregated/anonymized AI inputs</td>
                  <td className="p-3 border border-border">Legitimate interests</td>
                </tr>
                <tr className="bg-muted/30">
                  <td className="p-3 border border-border">Personalize your experience</td>
                  <td className="p-3 border border-border">Usage data, preferences</td>
                  <td className="p-3 border border-border">Legitimate interests / Consent</td>
                </tr>
                <tr>
                  <td className="p-3 border border-border">Send service-related communications</td>
                  <td className="p-3 border border-border">Email address</td>
                  <td className="p-3 border border-border">Contract performance</td>
                </tr>
                <tr className="bg-muted/30">
                  <td className="p-3 border border-border">Send product updates and marketing (opt-in)</td>
                  <td className="p-3 border border-border">Email address</td>
                  <td className="p-3 border border-border">Consent</td>
                </tr>
                <tr>
                  <td className="p-3 border border-border">Analytics and performance monitoring</td>
                  <td className="p-3 border border-border">Usage data, technical data</td>
                  <td className="p-3 border border-border">Legitimate interests</td>
                </tr>
                <tr className="bg-muted/30">
                  <td className="p-3 border border-border">Comply with legal obligations</td>
                  <td className="p-3 border border-border">All applicable data</td>
                  <td className="p-3 border border-border">Legal obligation</td>
                </tr>
                <tr>
                  <td className="p-3 border border-border">Prevent fraud and abuse</td>
                  <td className="p-3 border border-border">Usage data, IP address</td>
                  <td className="p-3 border border-border">Legitimate interests</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 4. AI DATA */}
        <section id="ai-data" className="bg-card border border-border rounded-xl p-8 mb-6 shadow-sm scroll-mt-24">
          <h2 className="text-xl font-bold text-foreground mb-5 pb-3 border-b border-border flex items-center gap-3">
            {/* <span className="w-8 h-8 rounded bg-primary/10 text-primary flex items-center justify-center text-sm shrink-0">🤖</span>  */}
            4. AI Inputs & Generated Content
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>As an AI-powered platform, xrilic.ai processes inputs you submit to generate outputs. We want to be transparent about how this data is handled.</p>

            <h3 className="text-lg font-bold text-foreground mt-6 mb-2">4.1 How We Process AI Inputs</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Your inputs are processed by our AI systems to generate the responses or content you request.</li>
              <li>Inputs may be temporarily stored to enable session continuity and to provide the service.</li>
              <li>We may use aggregated and <strong className="text-foreground">de-identified</strong> inputs to train, fine-tune, or evaluate our AI models. We will not use your identifiable personal content to train AI models without your explicit consent.</li>
            </ul>

            <h3 className="text-lg font-bold text-foreground mt-6 mb-2">4.2 Your Control Over AI Data</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>You may opt out of having your AI inputs used for model training by adjusting your account settings or contacting us at <a href="mailto:support@xrilic.ai" className="text-primary hover:underline">support@xrilic.ai</a>.</li>
              <li>You may request deletion of your stored AI inputs at any time (subject to technical and legal limitations).</li>
            </ul>

            <div className="bg-primary/5 border-l-4 border-primary rounded-r-lg p-4 my-6 text-foreground">
              <strong className="text-primary">Important:</strong> Please do not submit sensitive personal information — such as passwords, financial data, medical records, or government IDs — as inputs to our AI. We are not responsible for sensitive information you voluntarily include in AI prompts.
            </div>

            <h3 className="text-lg font-bold text-foreground mt-6 mb-2">4.3 AI-Generated Content</h3>
            <p>Outputs generated by our AI are provided "as is." xrilic.ai does not claim ownership of AI-generated content created using your inputs. However, you are responsible for ensuring that the use of such content complies with applicable laws and third-party rights.</p>
          </div>
        </section>

        {/* 5. SHARING */}
        <section id="sharing" className="bg-card border border-border rounded-xl p-8 mb-6 shadow-sm scroll-mt-24">
          <h2 className="text-xl font-bold text-foreground mb-5 pb-3 border-b border-border flex items-center gap-3">
            {/* <span className="w-8 h-8 rounded bg-primary/10 text-primary flex items-center justify-center text-sm shrink-0">🔗</span>  */}
            5. Sharing & Disclosure
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>We do not sell your personal information. We may share your data only in the following circumstances:</p>

            <h3 className="text-lg font-bold text-foreground mt-6 mb-2">5.1 Service Providers</h3>
            <p>We work with trusted third-party vendors to help us operate our platform. These include:</p>
            <ul className="space-y-3 mt-3">
              <li><span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-2.5 py-1 rounded-full mr-2 mb-1">Cloud Hosting</span> Infrastructure and storage providers (e.g., AWS, Google Cloud, Azure)</li>
              <li><span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-2.5 py-1 rounded-full mr-2 mb-1">Analytics</span> Usage analytics tools to improve the platform</li>
              <li><span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-2.5 py-1 rounded-full mr-2 mb-1">Email</span> Email delivery services for transactional communications</li>
              <li><span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-2.5 py-1 rounded-full mr-2 mb-1">Security</span> Fraud detection and security monitoring services</li>
              <li><span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-2.5 py-1 rounded-full mr-2 mb-1">Support</span> Customer support platforms</li>
            </ul>
            <p>All service providers are contractually required to protect your data and may only use it to perform services on our behalf.</p>

            <h3 className="text-lg font-bold text-foreground mt-6 mb-2">5.2 Business Transfers</h3>
            <p>In the event of a merger, acquisition, restructuring, or sale of assets, your information may be transferred to the acquiring entity. We will notify you via email or a prominent notice on our website prior to your data becoming subject to a different privacy policy.</p>

            <h3 className="text-lg font-bold text-foreground mt-6 mb-2">5.3 Legal Requirements</h3>
            <p>We may disclose your information if required to do so by law or in response to valid legal requests from public authorities (e.g., courts, regulatory agencies), to protect our legal rights, or to prevent fraud or security threats.</p>

            <h3 className="text-lg font-bold text-foreground mt-6 mb-2">5.4 With Your Consent</h3>
            <p>We may share your information with third parties when you have given us your explicit consent to do so.</p>
          </div>
        </section>

        {/* 6. COOKIES */}
        <section id="cookies" className="bg-card border border-border rounded-xl p-8 mb-6 shadow-sm scroll-mt-24">
          <h2 className="text-xl font-bold text-foreground mb-5 pb-3 border-b border-border flex items-center gap-3">
            {/* <span className="w-8 h-8 rounded bg-primary/10 text-primary flex items-center justify-center text-sm shrink-0">🍪</span>  */}
            6. Cookies & Tracking Technologies
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed overflow-x-auto">
            <p>We use cookies and similar technologies (pixel tags, local storage, etc.) to operate our Services, understand how users interact with our platform, and improve your experience.</p>

            <table className="w-full text-left border-collapse mt-4 min-w-[600px]">
              <thead>
                <tr className="bg-muted text-foreground">
                  <th className="p-3 border border-border font-bold">Cookie Type</th>
                  <th className="p-3 border border-border font-bold">Purpose</th>
                  <th className="p-3 border border-border font-bold">Can You Opt Out?</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr>
                  <td className="p-3 border border-border font-semibold text-foreground">Essential</td>
                  <td className="p-3 border border-border">Required for the platform to function (e.g., login sessions, security tokens)</td>
                  <td className="p-3 border border-border">No — required for the service</td>
                </tr>
                <tr className="bg-muted/30">
                  <td className="p-3 border border-border font-semibold text-foreground">Analytics</td>
                  <td className="p-3 border border-border">Track usage patterns to improve the platform (e.g., page views, feature usage)</td>
                  <td className="p-3 border border-border">Yes — via cookie settings</td>
                </tr>
                <tr>
                  <td className="p-3 border border-border font-semibold text-foreground">Preferences</td>
                  <td className="p-3 border border-border">Remember your settings and customizations</td>
                  <td className="p-3 border border-border">Yes — via cookie settings</td>
                </tr>
                <tr className="bg-muted/30">
                  <td className="p-3 border border-border font-semibold text-foreground">Marketing</td>
                  <td className="p-3 border border-border">Measure effectiveness of campaigns (only if opted in)</td>
                  <td className="p-3 border border-border">Yes — via cookie settings</td>
                </tr>
              </tbody>
            </table>

            <p>You can manage your cookie preferences through our cookie consent banner or your browser settings. Note that disabling essential cookies may impact the functionality of the Services.</p>
          </div>
        </section>

        {/* 7. RETENTION */}
        <section id="retention" className="bg-card border border-border rounded-xl p-8 mb-6 shadow-sm scroll-mt-24">
          <h2 className="text-xl font-bold text-foreground mb-5 pb-3 border-b border-border flex items-center gap-3">
            {/* <span className="w-8 h-8 rounded bg-primary/10 text-primary flex items-center justify-center text-sm shrink-0">🗂️</span>  */}
            7. Data Retention
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>We retain personal data only for as long as necessary to fulfil the purposes described in this policy, unless a longer retention period is required by law.</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong className="text-foreground">Account data:</strong> Retained for the duration of your account and for up to 90 days following account deletion, unless a longer period is required by law.</li>
              <li><strong className="text-foreground">Usage & analytics data:</strong> Retained in identifiable form for up to 24 months; may be retained in aggregated/anonymized form indefinitely.</li>
              <li><strong className="text-foreground">AI inputs & outputs:</strong> Retained for a limited period to enable session continuity and platform functionality. You may request earlier deletion at any time.</li>
              <li><strong className="text-foreground">Support communications:</strong> Retained for up to 3 years to assist with ongoing support and legal compliance.</li>
            </ul>
            <p>When data is no longer required, we securely delete or anonymize it.</p>
          </div>
        </section>

        {/* 8. SECURITY */}
        <section id="security" className="bg-card border border-border rounded-xl p-8 mb-6 shadow-sm scroll-mt-24">
          <h2 className="text-xl font-bold text-foreground mb-5 pb-3 border-b border-border flex items-center gap-3">
            {/* <span className="w-8 h-8 rounded bg-primary/10 text-primary flex items-center justify-center text-sm shrink-0">🔒</span>  */}
            8. Security
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>We take the security of your information seriously and implement industry-standard technical and organizational measures to protect it, including:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Encryption of data in transit using TLS/SSL</li>
              <li>Encryption of sensitive data at rest</li>
              <li>Access controls and role-based permissions to limit who can access your data</li>
              <li>Regular security assessments and penetration testing</li>
              <li>Incident response procedures to address potential data breaches</li>
            </ul>
            <div className="bg-primary/5 border-l-4 border-primary rounded-r-lg p-4 my-6 text-foreground">
              Despite our efforts, no method of transmission over the internet or electronic storage is 100% secure. If you suspect unauthorized access to your account, please contact us immediately at <a href="mailto:security@xrilic.ai" className="text-primary hover:underline">security@xrilic.ai</a>.
            </div>
          </div>
        </section>

        {/* 9. YOUR RIGHTS */}
        <section id="your-rights" className="bg-card border border-border rounded-xl p-8 mb-6 shadow-sm scroll-mt-24">
          <h2 className="text-xl font-bold text-foreground mb-5 pb-3 border-b border-border flex items-center gap-3">
            {/* <span className="w-8 h-8 rounded bg-primary/10 text-primary flex items-center justify-center text-sm shrink-0">⚖️</span>  */}
            9. Your Rights & Choices
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed overflow-x-auto">
            <p>Depending on your location, you may have the following rights regarding your personal data:</p>

            <table className="w-full text-left border-collapse mt-4 min-w-[600px]">
              <thead>
                <tr className="bg-muted text-foreground">
                  <th className="p-3 border border-border font-bold">Right</th>
                  <th className="p-3 border border-border font-bold">Description</th>
                  <th className="p-3 border border-border font-bold">Applies Under</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr>
                  <td className="p-3 border border-border font-semibold text-foreground">Access</td>
                  <td className="p-3 border border-border">Request a copy of the personal data we hold about you</td>
                  <td className="p-3 border border-border">GDPR, CCPA</td>
                </tr>
                <tr className="bg-muted/30">
                  <td className="p-3 border border-border font-semibold text-foreground">Rectification</td>
                  <td className="p-3 border border-border">Request correction of inaccurate or incomplete data</td>
                  <td className="p-3 border border-border">GDPR</td>
                </tr>
                <tr>
                  <td className="p-3 border border-border font-semibold text-foreground">Erasure</td>
                  <td className="p-3 border border-border">Request deletion of your personal data ("right to be forgotten")</td>
                  <td className="p-3 border border-border">GDPR, CCPA</td>
                </tr>
                <tr className="bg-muted/30">
                  <td className="p-3 border border-border font-semibold text-foreground">Portability</td>
                  <td className="p-3 border border-border">Receive your data in a structured, machine-readable format</td>
                  <td className="p-3 border border-border">GDPR</td>
                </tr>
                <tr>
                  <td className="p-3 border border-border font-semibold text-foreground">Restriction</td>
                  <td className="p-3 border border-border">Request that we restrict processing of your data in certain circumstances</td>
                  <td className="p-3 border border-border">GDPR</td>
                </tr>
                <tr className="bg-muted/30">
                  <td className="p-3 border border-border font-semibold text-foreground">Objection</td>
                  <td className="p-3 border border-border">Object to processing based on legitimate interests or for direct marketing</td>
                  <td className="p-3 border border-border">GDPR</td>
                </tr>
                <tr>
                  <td className="p-3 border border-border font-semibold text-foreground">Opt-out of sale</td>
                  <td className="p-3 border border-border">We do not sell personal data. No opt-out required.</td>
                  <td className="p-3 border border-border">CCPA</td>
                </tr>
                <tr className="bg-muted/30">
                  <td className="p-3 border border-border font-semibold text-foreground">Withdraw consent</td>
                  <td className="p-3 border border-border">Withdraw consent at any time where processing is consent-based</td>
                  <td className="p-3 border border-border">GDPR, CCPA</td>
                </tr>
              </tbody>
            </table>

            <p>To exercise any of these rights, please submit a request to <a href="mailto:support@xrilic.ai" className="text-primary hover:underline">support@xrilic.ai</a>. We will respond within 30 days (or within the timeframe required by applicable law). We may need to verify your identity before processing your request.</p>

            <h3 className="text-lg font-bold text-foreground mt-6 mb-2">Unsubscribing from Marketing</h3>
            <p>You may opt out of marketing emails at any time by clicking the "unsubscribe" link at the bottom of any marketing email, or by contacting us directly. You will still receive essential service-related communications.</p>
          </div>
        </section>

        {/* 10. CHILDREN */}
        <section id="children" className="bg-card border border-border rounded-xl p-8 mb-6 shadow-sm scroll-mt-24">
          <h2 className="text-xl font-bold text-foreground mb-5 pb-3 border-b border-border flex items-center gap-3">
            {/* <span className="w-8 h-8 rounded bg-primary/10 text-primary flex items-center justify-center text-sm shrink-0">👶</span>  */}
            10. Children's Privacy
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>xrilic.ai is not directed to children under the age of <strong className="text-foreground">13</strong> (or 16 in certain jurisdictions, including the EEA). We do not knowingly collect personal data from children. If we become aware that we have inadvertently collected data from a child without verifiable parental consent, we will take immediate steps to delete that information.</p>
            <p>If you believe we have collected information from a child, please contact us at <a href="mailto:support@xrilic.ai" className="text-primary hover:underline">support@xrilic.ai</a>.</p>
          </div>
        </section>

        {/* 11. INTERNATIONAL */}
        <section id="international" className="bg-card border border-border rounded-xl p-8 mb-6 shadow-sm scroll-mt-24">
          <h2 className="text-xl font-bold text-foreground mb-5 pb-3 border-b border-border flex items-center gap-3">
            {/* <span className="w-8 h-8 rounded bg-primary/10 text-primary flex items-center justify-center text-sm shrink-0">🌍</span>  */}
            11. International Data Transfers
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>xrilic.ai operates globally, and your information may be transferred to and processed in countries other than your country of residence. These countries may have data protection laws that differ from your own.</p>
            <p>When we transfer personal data outside the European Economic Area (EEA), we ensure appropriate safeguards are in place, including:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Standard Contractual Clauses (SCCs) approved by the European Commission</li>
              <li>Adequacy decisions where applicable</li>
              <li>Binding Corporate Rules (BCRs) where relevant</li>
            </ul>
            <p>By using our Services, you acknowledge that your data may be transferred internationally in accordance with this policy.</p>
          </div>
        </section>

        {/* 12. CHANGES */}
        <section id="changes" className="bg-card border border-border rounded-xl p-8 mb-6 shadow-sm scroll-mt-24">
          <h2 className="text-xl font-bold text-foreground mb-5 pb-3 border-b border-border flex items-center gap-3">
            {/* <span className="w-8 h-8 rounded bg-primary/10 text-primary flex items-center justify-center text-sm shrink-0">🔄</span>  */}
            12. Changes to This Policy
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. When we make material changes, we will:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Update the "Last Updated" date at the top of this page</li>
              <li>Notify you via email (to the address on your account) at least 14 days before the changes take effect</li>
              <li>Display a prominent notice within the platform</li>
            </ul>
            <p>Your continued use of the Services after the effective date of any changes constitutes your acceptance of the revised policy. We encourage you to review this page periodically.</p>
          </div>
        </section>

        {/* 13. CONTACT */}
        <section id="contact" className="bg-card border border-border rounded-xl p-8 mb-6 shadow-sm scroll-mt-24">
          <h2 className="text-xl font-bold text-foreground mb-5 pb-3 border-b border-border flex items-center gap-3">
            {/* <span className="w-8 h-8 rounded bg-primary/10 text-primary flex items-center justify-center text-sm shrink-0">✉️</span>  */}
            13. Contact Us
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed overflow-x-auto">
            <p>If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:</p>

            <table className="w-full text-left border-collapse mt-4">
              <tbody className="text-sm">
                <tr>
                  <td className="p-3 border border-border font-bold text-foreground w-1/3 md:w-1/4">Company</td>
                  <td className="p-3 border border-border">xrilic.ai</td>
                </tr>
                <tr className="bg-muted/30">
                  <td className="p-3 border border-border font-bold text-foreground">Privacy inquiries</td>
                  <td className="p-3 border border-border"><a href="mailto:support@xrilic.ai" className="text-primary hover:underline">support@xrilic.ai</a></td>
                </tr>
                <tr>
                  <td className="p-3 border border-border font-bold text-foreground">Security concerns</td>
                  <td className="p-3 border border-border"><a href="mailto:security@xrilic.ai" className="text-primary hover:underline">security@xrilic.ai</a></td>
                </tr>
                <tr className="bg-muted/30">
                  <td className="p-3 border border-border font-bold text-foreground">Website</td>
                  <td className="p-3 border border-border"><a href="https://xrilic.ai" target="_blank" rel="noreferrer" className="text-primary hover:underline">https://xrilic.ai</a></td>
                </tr>
              </tbody>
            </table>

            <div className="bg-primary/5 border-l-4 border-primary rounded-r-lg p-4 my-6 text-foreground">
              <strong className="text-primary">EEA Users:</strong> If you are located in the European Economic Area and have concerns about our data practices that we have not resolved, you have the right to lodge a complaint with your local data protection authority (DPA).
            </div>
          </div>
        </section>

    
      </div>
    </main>
  )
}