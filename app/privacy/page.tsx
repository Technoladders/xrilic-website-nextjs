// app/privacy/page.tsx
import React from "react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for xrilic.ai - how Xrilic handles personal data, including Google, Microsoft and Meta (WhatsApp) user data.",
}

const LAST_UPDATED = "October 29, 2026"

const sectionClass = "bg-card border border-border rounded-xl p-8 mb-6 shadow-sm scroll-mt-24"
const headingClass = "text-xl font-bold text-foreground mb-5 pb-3 border-b border-border flex items-center gap-3"
const subHeadingClass = "text-lg font-bold text-foreground mt-6 mb-2"
const callout = "bg-primary/5 border-l-4 border-primary rounded-r-lg p-4 my-6 text-foreground"
const th = "p-3 border border-border font-bold"
const td = "p-3 border border-border"

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-background text-foreground pb-16">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] text-white pt-32 pb-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-3">Privacy Policy</h1>
        <p className="text-[#a8b2d8] text-lg">Xrilic Technologies India Private Limited</p>
        <div className="inline-block bg-white/10 border border-white/20 text-slate-200 text-xs px-4 py-1.5 rounded-full mt-6 tracking-wide">
          Last Updated: {LAST_UPDATED}
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-12 -mt-8 relative z-10">
        {/* TABLE OF CONTENTS */}
        <div className="bg-card border border-border rounded-xl p-8 mb-12 shadow-sm">
          <h2 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-4">Table of Contents</h2>
          <ol className="list-decimal pl-5 space-y-1.5 text-primary font-medium">
            <li><a href="#overview" className="hover:underline">Overview &amp; Scope</a></li>
            <li><a href="#information-we-collect" className="hover:underline">Information We Collect</a></li>
            <li><a href="#how-we-use" className="hover:underline">How We Use Your Information</a></li>
            <li><a href="#google-data" className="hover:underline">Google User Data &amp; Limited Use</a></li>
            <li><a href="#microsoft-data" className="hover:underline">Microsoft User Data</a></li>
            <li><a href="#meta-data" className="hover:underline">Meta Platform Data (WhatsApp &amp; Facebook Login)</a></li>
            <li><a href="#ai-data" className="hover:underline">AI Processing</a></li>
            <li><a href="#sharing" className="hover:underline">Sharing &amp; Disclosure</a></li>
            <li><a href="#cookies" className="hover:underline">Cookies &amp; Tracking Technologies</a></li>
            <li><a href="#retention" className="hover:underline">Data Retention</a></li>
            <li><a href="#security" className="hover:underline">Security</a></li>
            <li><a href="#your-rights" className="hover:underline">Your Rights &amp; Choices</a></li>
            <li><a href="#children" className="hover:underline">Children&apos;s Privacy</a></li>
            <li><a href="#international" className="hover:underline">International Data Transfers</a></li>
            <li><a href="#changes" className="hover:underline">Changes to This Policy</a></li>
            <li><a href="#contact" className="hover:underline">Contact Us</a></li>
          </ol>
        </div>

        {/* 1. OVERVIEW */}
        <section id="overview" className={sectionClass}>
          <h2 className={headingClass}>1. Overview &amp; Scope</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              <strong className="text-foreground">XRILIC TECHNOLOGIES INDIA PRIVATE LIMITED</strong> (&ldquo;xrilic,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) operates
              the xrilic.ai website and the SourceXR / Xrilic business platform (the &ldquo;Services&rdquo;), which helps recruiting and sales teams run
              email and WhatsApp outreach, track replies and manage hiring workflows. This Privacy Policy explains what personal data we handle, why, and the
              choices you have.
            </p>
            <p>
              Our customers are businesses. When a customer connects its own Gmail, Microsoft 365 / Outlook or WhatsApp Business account to the Services,
              or sends outreach to candidates and prospects, the customer decides which contacts and messages are processed and we process that data on the customer&apos;s behalf
              to provide the Services.
            </p>
            <div className={callout}>
              <strong className="text-primary">Who this applies to:</strong> account holders and team members of our customers, trial users, visitors to xrilic.ai, and individuals
              (for example job candidates) whose details a customer processes through the Services.
            </div>
          </div>
        </section>

        {/* 2. INFORMATION WE COLLECT */}
        <section id="information-we-collect" className={sectionClass}>
          <h2 className={headingClass}>2. Information We Collect</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <h3 className={subHeadingClass}>2.1 Information You Provide to Us</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong className="text-foreground">Account information:</strong> name, work email address, organization, role and login credentials.</li>
              <li><strong className="text-foreground">Customer content:</strong> candidate and prospect records, job details, email and WhatsApp templates, sequences, notes and files you upload.</li>
              <li><strong className="text-foreground">Communications:</strong> messages, feedback or support requests you send to us.</li>
            </ul>

            <h3 className={subHeadingClass}>2.2 Information From Connected Accounts</h3>
            <p>If you choose to connect a third-party account, we receive the data described in Sections 4 (Google), 5 (Microsoft) and 6 (Meta / WhatsApp). We never connect an account without your explicit action and consent.</p>

            <h3 className={subHeadingClass}>2.3 Information Collected Automatically</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong className="text-foreground">Usage data:</strong> pages visited, features used and actions taken.</li>
              <li><strong className="text-foreground">Device &amp; technical data:</strong> IP address, browser type, operating system and language settings.</li>
              <li><strong className="text-foreground">Log data:</strong> timestamps, error reports and performance metrics.</li>
              <li><strong className="text-foreground">Cookies &amp; similar technologies:</strong> see Section 9.</li>
            </ul>

            <div className={callout}>
              <strong className="text-primary">What we do NOT collect:</strong> we do not intentionally collect sensitive personal data such as racial or ethnic origin, biometric data, health information or government ID numbers, and we do not ask you to submit them. We never receive your Google, Microsoft or Meta account passwords.
            </div>
          </div>
        </section>

        {/* 3. HOW WE USE */}
        <section id="how-we-use" className={sectionClass}>
          <h2 className={headingClass}>3. How We Use Your Information</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed overflow-x-auto">
            <p>We use personal data only for the purposes below. Data received from Google, Microsoft or Meta is subject to the additional, stricter limits in Sections 4 to 6.</p>
            <table className="w-full text-left border-collapse mt-4 min-w-[600px]">
              <thead>
                <tr className="bg-muted text-foreground">
                  <th className={th}>Purpose</th>
                  <th className={th}>Data Used</th>
                  <th className={th}>Legal Basis (GDPR)</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr>
                  <td className={td}>Provide and operate the Services (sending outreach, tracking replies, managing workflows)</td>
                  <td className={td}>Account info, customer content, connected-account data</td>
                  <td className={td}>Contract performance</td>
                </tr>
                <tr className="bg-muted/30">
                  <td className={td}>Authenticate and secure your account</td>
                  <td className={td}>Name, email, IP address</td>
                  <td className={td}>Contract performance / Legitimate interests</td>
                </tr>
                <tr>
                  <td className={td}>Maintain and improve the functionality of the Services you use</td>
                  <td className={td}>Usage data, technical data</td>
                  <td className={td}>Legitimate interests</td>
                </tr>
                <tr className="bg-muted/30">
                  <td className={td}>Send service-related communications</td>
                  <td className={td}>Email address</td>
                  <td className={td}>Contract performance</td>
                </tr>
                <tr>
                  <td className={td}>Send product updates and marketing (opt-in; website and account contacts only, never mailbox data)</td>
                  <td className={td}>Email address</td>
                  <td className={td}>Consent</td>
                </tr>
                <tr className="bg-muted/30">
                  <td className={td}>Analytics on our public website</td>
                  <td className={td}>Usage data, technical data</td>
                  <td className={td}>Legitimate interests / Consent</td>
                </tr>
                <tr>
                  <td className={td}>Comply with legal obligations and prevent fraud and abuse</td>
                  <td className={td}>Account and usage data</td>
                  <td className={td}>Legal obligation / Legitimate interests</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 4. GOOGLE */}
        <section id="google-data" className={sectionClass}>
          <h2 className={headingClass}>4. Google User Data &amp; Limited Use</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed overflow-x-auto">
            <div className={callout}>
              <strong className="text-primary">Limited Use statement:</strong> xrilic&apos;s use and transfer to any other app of information received from Google APIs will adhere to the{" "}
              <a href="https://developers.google.com/terms/api-services-user-data-policy" target="_blank" rel="noreferrer" className="text-primary hover:underline">Google API Services User Data Policy</a>,
              including the Limited Use requirements. The use of raw or derived user data received from Workspace APIs will adhere to the Google User Data Policy, including the Limited Use requirements.
            </div>

            <h3 className={subHeadingClass}>4.1 What we access, and why</h3>
            <p>When a user connects a Gmail account to send and track outreach, xrilic asks for the following Google permissions. Users may decline either one on the Google consent screen.</p>
            <table className="w-full text-left border-collapse mt-4 min-w-[600px]">
              <thead>
                <tr className="bg-muted text-foreground">
                  <th className={th}>Scope</th>
                  <th className={th}>What we use it for</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr>
                  <td className={td}><code>openid</code>, <code>email</code>, <code>profile</code></td>
                  <td className={td}>Identify which Google account was connected (email address and display name) so that outreach is sent from, and attributed to, the right mailbox.</td>
                </tr>
                <tr className="bg-muted/30">
                  <td className={td}><code>https://www.googleapis.com/auth/gmail.send</code></td>
                  <td className={td}>Send the outreach emails the user composes or schedules in xrilic, from the user&apos;s own Gmail address.</td>
                </tr>
                <tr>
                  <td className={td}><code>https://www.googleapis.com/auth/gmail.readonly</code></td>
                  <td className={td}>Read incoming messages in order to detect replies, out-of-office responses and bounces to outreach sent through xrilic, so that sequences stop automatically and the user can read and answer replies inside xrilic. We do not use this scope to modify, delete, archive or label any message.</td>
                </tr>
              </tbody>
            </table>

            <h3 className={subHeadingClass}>4.2 How we use Google user data</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>We use Google user data <strong className="text-foreground">only</strong> to provide and improve the user-facing email-sending and reply-tracking features described above.</li>
              <li>We do <strong className="text-foreground">not</strong> use Google user data for advertising, including retargeting, personalized or interest-based advertising.</li>
              <li>We do <strong className="text-foreground">not</strong> sell Google user data or transfer it to data brokers, information resellers or advertisers.</li>
              <li>We do <strong className="text-foreground">not</strong> use Google user data to create, train or improve any generalized or foundational AI/ML model, and we do not permit any third party to do so (see Section 7).</li>
              <li>We do <strong className="text-foreground">not</strong> allow humans to read Google user data unless (a) we have the user&apos;s affirmative agreement for specific messages, (b) it is necessary for security purposes such as investigating abuse, (c) it is necessary to comply with applicable law, or (d) the data is aggregated and anonymized and used for internal operations.</li>
              <li>We do <strong className="text-foreground">not</strong> transfer Google user data to others except as necessary to provide or improve these user-facing features, to comply with applicable law, or as part of a merger, acquisition or sale of assets with notice to users.</li>
            </ul>

            <h3 className={subHeadingClass}>4.3 Storage, protection and removal</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>OAuth access and refresh tokens are stored encrypted, are used only by our server-side functions, and are never exposed to the browser.</li>
              <li>We store the content of replies and bounces to outreach (such as sender, subject and body) so users can see them in the product. Messages are read from Gmail through the Gmail API; we do not copy a user&apos;s mailbox.</li>
              <li>A user can disconnect their Gmail account at any time in xrilic, which revokes our Google grant and deletes the stored tokens. Users can also remove xrilic&apos;s access directly at{" "}
                <a href="https://myaccount.google.com/permissions" target="_blank" rel="noreferrer" className="text-primary hover:underline">myaccount.google.com/permissions</a>.
              </li>
              <li>To delete the data we hold, follow our <a href="/data-deletion" className="text-primary hover:underline">Data Deletion Instructions</a>.</li>
            </ul>
          </div>
        </section>

        {/* 5. MICROSOFT */}
        <section id="microsoft-data" className={sectionClass}>
          <h2 className={headingClass}>5. Microsoft User Data</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed overflow-x-auto">
            <p>When a user connects a Microsoft 365 / Outlook.com mailbox, xrilic uses the Microsoft identity platform (Microsoft Entra ID) and Microsoft Graph with the delegated permissions below. Access is limited to what the signed-in user (and, where required, their tenant administrator) consents to.</p>
            <table className="w-full text-left border-collapse mt-4 min-w-[600px]">
              <thead>
                <tr className="bg-muted text-foreground">
                  <th className={th}>Permission</th>
                  <th className={th}>What we use it for</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr>
                  <td className={td}><code>openid</code>, <code>profile</code>, <code>User.Read</code></td>
                  <td className={td}>Identify the connected account (email address and display name).</td>
                </tr>
                <tr className="bg-muted/30">
                  <td className={td}><code>offline_access</code></td>
                  <td className={td}>Keep the connection active with a refresh token so scheduled outreach can be sent when the user is not signed in.</td>
                </tr>
                <tr>
                  <td className={td}><code>Mail.Send</code></td>
                  <td className={td}>Send outreach emails from the user&apos;s own mailbox.</td>
                </tr>
                <tr className="bg-muted/30">
                  <td className={td}><code>Mail.ReadWrite</code></td>
                  <td className={td}>Read replies and bounces to outreach, and create the draft that is then sent or used to reply, so sent messages have stable identifiers. We do not delete, move or alter the user&apos;s other mail.</td>
                </tr>
                <tr>
                  <td className={td}><code>MailboxSettings.Read</code></td>
                  <td className={td}>Read the mailbox time zone and working-hours settings so scheduled sends respect the user&apos;s local time.</td>
                </tr>
              </tbody>
            </table>
            <p>Microsoft user data is used only to provide the email-sending and reply-tracking features of the Services. We do not sell it, use it for advertising, or use it to train AI/ML models, and the commitments in Section 4.2 apply equally to Microsoft data. Users can disconnect a mailbox in xrilic, or remove xrilic&apos;s access at{" "}
              <a href="https://myapps.microsoft.com" target="_blank" rel="noreferrer" className="text-primary hover:underline">myapps.microsoft.com</a>.
            </p>
          </div>
        </section>

        {/* 6. META */}
        <section id="meta-data" className={sectionClass}>
          <h2 className={headingClass}>6. Meta Platform Data (WhatsApp &amp; Facebook Login)</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              xrilic is a Meta Tech Provider for the WhatsApp Business Platform. Our business customers use <strong className="text-foreground">Facebook Login for Business</strong> with
              the Meta SDK and <strong className="text-foreground">Embedded Signup</strong> to connect their own WhatsApp Business Account (WABA) and phone number to xrilic, so that they can message their own contacts.
              Meta, not xrilic, operates Facebook Login and WhatsApp; their terms and privacy notices also apply.
            </p>

            <h3 className={subHeadingClass}>6.1 Data we receive from Meta</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong className="text-foreground">Business account data:</strong> WABA ID, phone number IDs and display numbers, display name, quality rating, messaging limits, and message-template names and approval status.</li>
              <li><strong className="text-foreground">Access tokens:</strong> the business-integration token issued when the customer completes Embedded Signup. It is stored encrypted and used only on the server.</li>
              <li><strong className="text-foreground">Message data:</strong> content and delivery/read statuses of messages sent and received on the customer&apos;s WhatsApp number, with the sender&apos;s phone number and profile name, delivered to us through Meta webhooks.</li>
              <li><strong className="text-foreground">Consent records:</strong> opt-in and opt-out status for each contact.</li>
            </ul>
            <p>We do not receive the customer&apos;s Facebook password, personal Facebook profile data or friends list.</p>

            <h3 className={subHeadingClass}>6.2 How we use it</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>To send approved message templates and in-window replies on the customer&apos;s behalf, show conversations in a shared inbox, display delivery and read status, and pause an automated sequence when a contact replies.</li>
              <li>To honor opt-outs (for example &ldquo;STOP&rdquo;) by suppressing the number from further business-initiated messages.</li>
              <li>To show the customer its own number, quality rating and approved templates in settings.</li>
            </ul>
            <p>We do not sell Meta Platform Data, use it for advertising, or use it to build profiles for any purpose other than providing the Services to the customer that owns the WhatsApp account. We follow the Meta Platform Terms and the WhatsApp Business Terms and Messaging Guidelines. Customers are responsible for obtaining valid opt-in from their contacts.</p>

            <h3 className={subHeadingClass}>6.3 Disconnecting and deletion</h3>
            <p>A customer can disconnect a WhatsApp number in xrilic; we then unsubscribe from the account&apos;s webhooks and delete the stored access token. You can also remove xrilic from your Facebook account at <em>Settings &amp; privacy &rarr; Settings &rarr; Business integrations</em>. For removal of stored message data see our{" "}
              <a href="/data-deletion" className="text-primary hover:underline">Data Deletion Instructions</a>. Message copies that exist inside WhatsApp or on Meta&apos;s servers are governed by Meta&apos;s policies.
            </p>
          </div>
        </section>

        {/* 7. AI */}
        <section id="ai-data" className={sectionClass}>
          <h2 className={headingClass}>7. AI Processing</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed overflow-x-auto">
            <p>Some features of the Services use third-party AI models, for example to classify a reply (interested / not interested / out of office / referral) or to draft a suggested message that a person reviews before sending. AI output never sends a message by itself.</p>

            <h3 className={subHeadingClass}>7.1 AI providers</h3>
            <table className="w-full text-left border-collapse mt-4 min-w-[600px]">
              <thead>
                <tr className="bg-muted text-foreground">
                  <th className={th}>Provider</th>
                  <th className={th}>Used for</th>
                  <th className={th}>Training on our data</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr>
                  <td className={td}>OpenAI (OpenAI API, business/API terms)</td>
                  <td className={td}>Reply classification and message drafting; the minimum text needed for the request is sent</td>
                  <td className={td}>No. Under OpenAI&apos;s API terms, data sent through the API is not used to train OpenAI models.</td>
                </tr>
              </tbody>
            </table>

            <h3 className={subHeadingClass}>7.2 Our commitments</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>We do <strong className="text-foreground">not</strong> use Google user data, Microsoft user data or Meta Platform Data to train, fine-tune or improve any generalized or foundational AI/ML model, ours or anyone else&apos;s.</li>
              <li>We only send data to AI providers that contractually do not train their models on API data, and only as needed to deliver the feature the user invoked.</li>
              <li>We do not use customer content, including messages, in a way that identifies individuals to improve our own models.</li>
              <li>If this list of AI providers changes, we will update this page before the change takes effect.</li>
            </ul>
            <div className={callout}>
              <strong className="text-primary">Please note:</strong> do not enter passwords, financial data, medical records or government IDs into AI features. AI-generated content can be inaccurate; review it before use.
            </div>
          </div>
        </section>

        {/* 8. SHARING */}
        <section id="sharing" className={sectionClass}>
          <h2 className={headingClass}>8. Sharing &amp; Disclosure</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>We do not sell personal information. We share data only in the following circumstances:</p>

            <h3 className={subHeadingClass}>8.1 Service Providers</h3>
            <p>We use trusted processors that act on our instructions and are contractually bound to protect data:</p>
            <ul className="space-y-3 mt-3">
              <li><span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-2.5 py-1 rounded-full mr-2 mb-1">Database &amp; Hosting</span> Supabase (database, authentication, serverless functions) and our cloud infrastructure providers</li>
              <li><span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-2.5 py-1 rounded-full mr-2 mb-1">AI</span> OpenAI, as described in Section 7</li>
              <li><span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-2.5 py-1 rounded-full mr-2 mb-1">Email</span> Transactional email delivery for account and service messages</li>
              <li><span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-2.5 py-1 rounded-full mr-2 mb-1">Analytics</span> Google Analytics on our public website only (never fed with mailbox or WhatsApp content)</li>
            </ul>

            <h3 className={subHeadingClass}>8.2 Business Transfers</h3>
            <p>If xrilic is involved in a merger, acquisition or sale of assets, personal data may be transferred to the successor, which must honor this policy. We will notify you before data becomes subject to a different privacy policy.</p>

            <h3 className={subHeadingClass}>8.3 Legal Requirements</h3>
            <p>We may disclose information when required by law or valid legal process, or to protect rights, safety and security. We review requests for legality and disclose only the minimum required.</p>

            <h3 className={subHeadingClass}>8.4 With Your Consent</h3>
            <p>We share information with third parties when you have given your explicit consent.</p>
          </div>
        </section>

        {/* 9. COOKIES */}
        <section id="cookies" className={sectionClass}>
          <h2 className={headingClass}>9. Cookies &amp; Tracking Technologies</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed overflow-x-auto">
            <p>We use cookies and similar technologies on our website and web application to operate the Services and understand how our public site is used.</p>
            <table className="w-full text-left border-collapse mt-4 min-w-[600px]">
              <thead>
                <tr className="bg-muted text-foreground">
                  <th className={th}>Cookie Type</th>
                  <th className={th}>Purpose</th>
                  <th className={th}>Can You Opt Out?</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr>
                  <td className={`${td} font-semibold text-foreground`}>Essential</td>
                  <td className={td}>Login sessions and security tokens</td>
                  <td className={td}>No, required for the service</td>
                </tr>
                <tr className="bg-muted/30">
                  <td className={`${td} font-semibold text-foreground`}>Analytics</td>
                  <td className={td}>Page views and feature usage on our website (Google Analytics)</td>
                  <td className={td}>Yes, via browser settings or the Google Analytics opt-out add-on</td>
                </tr>
                <tr>
                  <td className={`${td} font-semibold text-foreground`}>Preferences</td>
                  <td className={td}>Remember settings such as theme</td>
                  <td className={td}>Yes, via browser settings</td>
                </tr>
              </tbody>
            </table>
            <p>Disabling essential cookies may affect how the Services work. Email open and click tracking, if enabled by a customer for its outreach, is described to the customer in the product and applies to messages that customer sends.</p>
          </div>
        </section>

        {/* 10. RETENTION */}
        <section id="retention" className={sectionClass}>
          <h2 className={headingClass}>10. Data Retention</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>We keep personal data only as long as needed for the purposes in this policy, unless the law requires longer.</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong className="text-foreground">Account data:</strong> for the life of the account and up to 90 days after deletion.</li>
              <li><strong className="text-foreground">Connected-account tokens (Google, Microsoft, Meta):</strong> deleted when the account is disconnected or the customer account is deleted.</li>
              <li><strong className="text-foreground">Email and WhatsApp message data:</strong> kept for the life of the customer account so history remains available, then deleted within 60 days of a verified deletion request or account closure, or earlier on request.</li>
              <li><strong className="text-foreground">Usage &amp; analytics data:</strong> up to 24 months in identifiable form; aggregated or anonymized data may be kept longer.</li>
              <li><strong className="text-foreground">Support communications:</strong> up to 3 years.</li>
            </ul>
            <p>When data is no longer needed we delete or anonymize it, including from backups in the normal backup cycle.</p>
          </div>
        </section>

        {/* 11. SECURITY */}
        <section id="security" className={sectionClass}>
          <h2 className={headingClass}>11. Security</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>We protect data with technical and organizational measures, including:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Encryption in transit (TLS) and encryption at rest for stored OAuth and API tokens</li>
              <li>Server-side-only use of provider tokens; they are never sent to the browser</li>
              <li>Per-organization data isolation with database row-level security and role-based access</li>
              <li>Webhook signature verification and PKCE for OAuth sign-in</li>
              <li>Incident response procedures, with notification of affected customers and authorities as required by law</li>
            </ul>
            <div className={callout}>
              No method of transmission or storage is 100% secure. If you suspect unauthorized access, contact <a href="mailto:support@xrilic.ai" className="text-primary hover:underline">support@xrilic.ai</a> immediately.
            </div>
          </div>
        </section>

        {/* 12. YOUR RIGHTS */}
        <section id="your-rights" className={sectionClass}>
          <h2 className={headingClass}>12. Your Rights &amp; Choices</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed overflow-x-auto">
            <p>Depending on where you live, including under the GDPR, the CCPA/CPRA and India&apos;s Digital Personal Data Protection Act, you may have the right to:</p>
            <table className="w-full text-left border-collapse mt-4 min-w-[600px]">
              <thead>
                <tr className="bg-muted text-foreground">
                  <th className={th}>Right</th>
                  <th className={th}>Description</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr><td className={`${td} font-semibold text-foreground`}>Access</td><td className={td}>Request a copy of the personal data we hold about you</td></tr>
                <tr className="bg-muted/30"><td className={`${td} font-semibold text-foreground`}>Correction</td><td className={td}>Correct inaccurate or incomplete data</td></tr>
                <tr><td className={`${td} font-semibold text-foreground`}>Deletion</td><td className={td}>Request deletion of your data (see <a href="/data-deletion" className="text-primary hover:underline">Data Deletion Instructions</a>)</td></tr>
                <tr className="bg-muted/30"><td className={`${td} font-semibold text-foreground`}>Portability</td><td className={td}>Receive your data in a structured, machine-readable format</td></tr>
                <tr><td className={`${td} font-semibold text-foreground`}>Restriction / Objection</td><td className={td}>Restrict or object to certain processing, including direct marketing</td></tr>
                <tr className="bg-muted/30"><td className={`${td} font-semibold text-foreground`}>Withdraw consent</td><td className={td}>Withdraw consent at any time, including by disconnecting a Google, Microsoft or WhatsApp account</td></tr>
                <tr><td className={`${td} font-semibold text-foreground`}>No sale</td><td className={td}>We do not sell personal data</td></tr>
              </tbody>
            </table>
            <p>To exercise a right, email <a href="mailto:support@xrilic.ai" className="text-primary hover:underline">support@xrilic.ai</a>. We respond within 30 days or the period required by law, and may need to verify your identity. If a customer sent you a message and you contact us, we may direct your request to that customer, who controls the data.</p>
            <p>You can opt out of marketing emails at any time using the unsubscribe link or by contacting us; service messages will continue.</p>
          </div>
        </section>

        {/* 13. CHILDREN */}
        <section id="children" className={sectionClass}>
          <h2 className={headingClass}>13. Children&apos;s Privacy</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>The Services are intended for business use and are not directed to children under <strong className="text-foreground">18</strong>. We do not knowingly collect personal data from children. If you believe a child has provided us data, contact <a href="mailto:support@xrilic.ai" className="text-primary hover:underline">support@xrilic.ai</a> and we will delete it.</p>
          </div>
        </section>

        {/* 14. INTERNATIONAL */}
        <section id="international" className={sectionClass}>
          <h2 className={headingClass}>14. International Data Transfers</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>We are based in India and our providers may process data in other countries. Where we transfer personal data out of the EEA, UK or other regions that restrict transfers, we rely on safeguards such as Standard Contractual Clauses or adequacy decisions.</p>
          </div>
        </section>

        {/* 15. CHANGES */}
        <section id="changes" className={sectionClass}>
          <h2 className={headingClass}>15. Changes to This Policy</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>We may update this policy as our practices, technology or legal requirements change. We will update the &ldquo;Last Updated&rdquo; date and, for material changes, notify account holders by email or in-product notice before the change takes effect. We will not use Google, Microsoft or Meta data for a new purpose without first obtaining your consent and, where required, re-verifying with the relevant platform.</p>
          </div>
        </section>

        {/* 16. CONTACT */}
        <section id="contact" className={sectionClass}>
          <h2 className={headingClass}>16. Contact Us</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed overflow-x-auto">
            <p>Questions, concerns or requests about this Privacy Policy or our data practices:</p>
            <table className="w-full text-left border-collapse mt-4">
              <tbody className="text-sm">
                <tr>
                  <td className={`${td} font-bold text-foreground w-1/3 md:w-1/4`}>Company</td>
                  <td className={td}>XRILIC TECHNOLOGIES INDIA PRIVATE LIMITED</td>
                </tr>
                <tr className="bg-muted/30">
                  <td className={`${td} font-bold text-foreground`}>Privacy inquiries</td>
                  <td className={td}><a href="mailto:support@xrilic.ai" className="text-primary hover:underline">support@xrilic.ai</a></td>
                </tr>
                <tr>
                  <td className={`${td} font-bold text-foreground`}>Security concerns</td>
                  <td className={td}><a href="mailto:support@xrilic.ai" className="text-primary hover:underline">support@xrilic.ai</a></td>
                </tr>
                <tr className="bg-muted/30">
                  <td className={`${td} font-bold text-foreground`}>Data deletion</td>
                  <td className={td}><a href="/data-deletion" className="text-primary hover:underline">https://xrilic.ai/data-deletion</a></td>
                </tr>
                <tr>
                  <td className={`${td} font-bold text-foreground`}>Website</td>
                  <td className={td}><a href="https://xrilic.ai" target="_blank" rel="noreferrer" className="text-primary hover:underline">https://xrilic.ai</a></td>
                </tr>
              </tbody>
            </table>
            <div className={callout}>
              <strong className="text-primary">EEA / UK users:</strong> if we have not resolved a concern, you may lodge a complaint with your local data protection authority.
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
