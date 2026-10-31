import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ShieldCheck,
  FileText,
  Calendar,
  Building,
  Mail,
  Lock,
  Cookie,
  Smartphone,
  Database,
  UserCheck,
  AlertTriangle,
  Globe,
} from 'lucide-react';
import '@/styles/legal-info.css';

export const metadata: Metadata = {
  title: 'Privacy Policy | Reddybookofficial',
  description:
    'Read the official Privacy Policy for Reddybookofficial (https://reddybookofficial.mobi/). Learn how we collect, protect, retain, and manage personal data.',
  alternates: {
    canonical: '/privacy-policy',
  },
  openGraph: {
    title: 'Privacy Policy | Reddybookofficial',
    description:
      'Understand how Reddybookofficial collects, protects and handles your personal information, cookies and data privacy rights.',
    type: 'website',
  },
};

export default function PrivacyPolicyPage() {
  const sections = [
    { id: 'interpretation', label: '1. Interpretation & Definitions' },
    { id: 'data-collection', label: '2. Types of Data Collected' },
    { id: 'tracking-cookies', label: '3. Tracking & Cookies Policy' },
    { id: 'data-use', label: '4. Use of Your Personal Data' },
    { id: 'data-sharing', label: '5. Sharing of Personal Data' },
    { id: 'sms-notice', label: '6. Text Messages (SMS) Notice' },
    { id: 'data-retention', label: '7. Retention of Personal Data' },
    { id: 'data-transfer', label: '8. Transfer of Personal Data' },
    { id: 'delete-data', label: '9. Delete Your Personal Data' },
    { id: 'disclosure', label: '10. Disclosure of Personal Data' },
    { id: 'security', label: '11. Security of Personal Data' },
    { id: 'children-privacy', label: '12. Children & Minors Privacy' },
    { id: 'third-party-links', label: '13. Links to Other Websites' },
    { id: 'policy-changes', label: '14. Changes to This Policy' },
    { id: 'contact', label: '15. Contact Us' },
  ];

  return (
    <div className="legal-info-page">
      <div className="container">
        {/* Breadcrumbs */}
        <nav className="page-breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span className="page-breadcrumb-separator">/</span>
          <span className="page-breadcrumb-current">Privacy Policy</span>
        </nav>

        {/* Hero Header */}
        <header className="page-hero">
          <div className="hero-pill-badge">
            <Lock size={14} />
            <span>Data Protection & Privacy</span>
          </div>
          <h1 className="page-hero-title">Privacy Policy</h1>
          <p className="page-hero-subtitle">
            This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
          </p>
          <div className="page-hero-meta">
            <div className="hero-meta-item">
              <Calendar size={16} />
              <span>Last updated: October 30, 2026</span>
            </div>
            <div className="hero-meta-item">
              <Building size={16} />
              <span>Entity: Reddybookofficial (Puducherry, India)</span>
            </div>
          </div>
        </header>

        {/* Legal Layout */}
        <div className="legal-layout">
          {/* Sticky Table of Contents */}
          <aside className="legal-toc-sidebar" aria-label="Table of Contents">
            <h3 className="legal-toc-title">
              <FileText size={16} />
              <span>Table of Contents</span>
            </h3>
            <ul className="legal-toc-list">
              {sections.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="legal-toc-link">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </aside>

          {/* Main Legal Document Body */}
          <article className="legal-article-body">
            <div className="legal-highlight-box" style={{ marginTop: 0 }}>
              <p>
                We use Your Personal Data to provide and improve the Service. We collect, use, and disclose Your information as described in this Privacy Policy and, where required by applicable law, only where We have a valid legal basis to do so, including Your consent (where consent is required).
              </p>
            </div>

            {/* Section 1 */}
            <section id="interpretation" className="legal-section">
              <h2 className="legal-section-title">1. Interpretation and Definitions</h2>

              <h3 className="legal-subsection-title">Interpretation</h3>
              <p className="legal-paragraph">
                The words whose initial letters are capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
              </p>

              <h3 className="legal-subsection-title">Definitions</h3>
              <p className="legal-paragraph">For the purposes of this Privacy Policy:</p>
              <ul className="legal-list">
                <li className="legal-list-item">
                  <strong>Account</strong> means a unique account created for You to access Our Service or parts of Our Service.
                </li>
                <li className="legal-list-item">
                  <strong>Affiliate</strong> means an entity that controls, is controlled by, or is under common control with a party, where &quot;control&quot; means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.
                </li>
                <li className="legal-list-item">
                  <strong>Company</strong> (referred to as either &quot;the Company&quot;, &quot;We&quot;, &quot;Us&quot; or &quot;Our&quot; in this Privacy Policy) refers to <strong>Reddybookofficial</strong>.
                </li>
                <li className="legal-list-item">
                  <strong>Cookies</strong> are small files that are placed on Your computer, mobile device or any other device by a website, containing the details of Your browsing history on that website, among its many uses.
                </li>
                <li className="legal-list-item">
                  <strong>Country/State</strong> refers to: Puducherry, India.
                </li>
                <li className="legal-list-item">
                  <strong>Device</strong> means any device that can access the Service, such as a computer, a cell phone or a digital tablet.
                </li>
                <li className="legal-list-item">
                  <strong>Personal Data</strong> (or &quot;Personal Information&quot;) is any information that relates to an identified or identifiable individual. We use &quot;Personal Data&quot; and &quot;Personal Information&quot; interchangeably unless a law uses a specific term.
                </li>
                <li className="legal-list-item">
                  <strong>Service</strong> refers to the Website.
                </li>
                <li className="legal-list-item">
                  <strong>Service Provider</strong> means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used.
                </li>
                <li className="legal-list-item">
                  <strong>Usage Data</strong> refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).
                </li>
                <li className="legal-list-item">
                  <strong>User</strong> means any individual who accesses or uses the Service.
                </li>
                <li className="legal-list-item">
                  <strong>Website</strong> refers to Reddybookofficial, accessible from{' '}
                  <a href="https://reddybookofficial.mobi/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-gold)' }}>
                    https://reddybookofficial.mobi/
                  </a>.
                </li>
                <li className="legal-list-item">
                  <strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.
                </li>
              </ul>
            </section>

            {/* Section 2 */}
            <section id="data-collection" className="legal-section">
              <h2 className="legal-section-title">2. Collecting and Using Your Personal Information</h2>

              <h3 className="legal-subsection-title">Types of Data Collected</h3>
              <p className="legal-paragraph">
                <strong>Personal Data:</strong> While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:
              </p>
              <ul className="legal-list">
                <li className="legal-list-item">Email address</li>
              </ul>

              <h3 className="legal-subsection-title">Usage Data</h3>
              <p className="legal-paragraph">
                Usage Data is collected automatically when using the Service.
              </p>
              <p className="legal-paragraph">
                Usage Data may include information such as Your Device&apos;s Internet Protocol address (e.g. IP address), browser type, browser version, the pages of Our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.
              </p>
              <p className="legal-paragraph">
                When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device&apos;s unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data.
              </p>
            </section>

            {/* Section 3 */}
            <section id="tracking-cookies" className="legal-section">
              <h2 className="legal-section-title">3. Tracking Technologies and Cookies</h2>
              <p className="legal-paragraph">
                We use tracking technologies (such as cookies) to track the activity and to improve Our Service. The technologies We use may include:
              </p>
              <ul className="legal-list">
                <li className="legal-list-item">
                  <strong>Cookies or Browser Cookies:</strong> A cookie is a small file placed on Your Device. You can instruct Your browser to refuse all Cookies or to indicate when a Cookie is being sent. However, if You do not accept Cookies, You may not be able to use some parts of Our Service.
                </li>
                <li className="legal-list-item">
                  <strong>Web Beacons:</strong> Certain sections of Our Service may contain small electronic files known as web beacons that permit the Company to count users who have visited those pages and for related website statistics (e.g., recording popularity of a section and verifying server integrity).
                </li>
              </ul>

              <p className="legal-paragraph">
                Cookies can be &quot;Persistent&quot; or &quot;Session&quot; Cookies. Persistent Cookies remain on Your device when You go offline, while Session Cookies are deleted as soon as You close Your web browser.
              </p>

              <div className="legal-table-wrapper">
                <table className="legal-table">
                  <thead>
                    <tr>
                      <th>Cookie Type</th>
                      <th>Category</th>
                      <th>Administered By</th>
                      <th>Purpose</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Necessary / Essential</strong></td>
                      <td>Session Cookies</td>
                      <td>Us</td>
                      <td>Essential to provide services available through Website and enable core security features and authentication.</td>
                    </tr>
                    <tr>
                      <td><strong>Notice Acceptance</strong></td>
                      <td>Persistent Cookies</td>
                      <td>Us</td>
                      <td>Identify whether users have accepted cookie usage notice and honor consent choices on future visits.</td>
                    </tr>
                    <tr>
                      <td><strong>Functionality Cookies</strong></td>
                      <td>Persistent Cookies</td>
                      <td>Us</td>
                      <td>Remember choices You make (e.g. language preferences, UI themes) to provide a tailored experience.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 4 */}
            <section id="data-use" className="legal-section">
              <h2 className="legal-section-title">4. Use of Your Personal Data</h2>
              <p className="legal-paragraph">The Company may use Personal Data for the following purposes:</p>
              <ul className="legal-list">
                <li className="legal-list-item">
                  <strong>To provide and maintain Our Service:</strong> including monitoring the usage and operational health of Our Service.
                </li>
                <li className="legal-list-item">
                  <strong>To manage Your Account:</strong> to manage Your registration as a user of the Service and give access to authorized functionalities.
                </li>
                <li className="legal-list-item">
                  <strong>For the performance of a contract:</strong> the development, compliance and undertaking of purchase agreements for services or items.
                </li>
                <li className="legal-list-item">
                  <strong>To contact You:</strong> by email, telephone calls, SMS, or equivalent electronic communication forms regarding security updates and service notices.
                </li>
                <li className="legal-list-item">
                  <strong>To provide news &amp; offers:</strong> special offers and general information about other goods, services and events similar to those inquired about (with opt-out available anytime).
                </li>
                <li className="legal-list-item">
                  <strong>To manage Your requests:</strong> attending and managing inquiries submitted to our team.
                </li>
                <li className="legal-list-item">
                  <strong>For business transfers &amp; analytics:</strong> data analysis, identifying usage trends, and evaluating campaign effectiveness.
                </li>
              </ul>
            </section>

            {/* Section 5 */}
            <section id="data-sharing" className="legal-section">
              <h2 className="legal-section-title">5. Sharing of Your Personal Data</h2>
              <p className="legal-paragraph">We may share Your Personal Data in the following situations:</p>
              <ul className="legal-list">
                <li className="legal-list-item">
                  <strong>With Service Providers:</strong> to monitor and analyze the use of Our Service and communicate with You.
                </li>
                <li className="legal-list-item">
                  <strong>For business transfers:</strong> during negotiations of any merger, sale of Company assets, or acquisition.
                </li>
                <li className="legal-list-item">
                  <strong>With Affiliates:</strong> requiring affiliates to honor this Privacy Policy.
                </li>
                <li className="legal-list-item">
                  <strong>With other users:</strong> in public areas where interactions are visible to other visitors.
                </li>
                <li className="legal-list-item">
                  <strong>With Your consent:</strong> disclosing personal data for any other purpose where explicit consent is provided.
                </li>
              </ul>
            </section>

            {/* Section 6 */}
            <section id="sms-notice" className="legal-section">
              <h2 className="legal-section-title">6. Text Messages Privacy Notice</h2>
              <p className="legal-paragraph">
                You have the option to receive text (SMS) messages from Us. If You opt in to text messages, We will send You updates, notifications, and other communications as described below. When You opt in, We will collect and store the information You provide in connection with text messaging, such as Your phone number, the date and method of Your consent, and message delivery and read information.
              </p>
              <div className="legal-highlight-box">
                <p>
                  <strong>No Mobile Sharing:</strong> No mobile information will be shared with or sold to third parties or affiliates for marketing or promotional purposes. The phone numbers and consent records We collect for texting are never shared with anyone for any purpose, except the Service Providers that technically have to handle them to deliver the texts.
                </p>
              </div>
              <p className="legal-paragraph">
                Consent to receive text messages is not a condition of any purchase or use of Our Service. If You consent to receive SMS from Us, You agree to receive text messages related to customer care, account notifications, authentication passcodes (OTP), security alerts, and promotional announcements.
              </p>
              <p className="legal-paragraph" style={{ fontStyle: 'italic', color: 'var(--text-muted)' }}>
                Reply STOP to opt-out. Reply HELP for support. Message &amp; data rates may apply. Messaging frequency may vary. Carriers are not liable for delayed or undelivered messages.
              </p>
            </section>

            {/* Section 7 */}
            <section id="data-retention" className="legal-section">
              <h2 className="legal-section-title">7. Retention of Your Personal Data</h2>
              <p className="legal-paragraph">
                The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy, complying with legal obligations, resolving disputes, and enforcing legal agreements.
              </p>

              <div className="legal-table-wrapper">
                <table className="legal-table">
                  <thead>
                    <tr>
                      <th>Data Category</th>
                      <th>Retention Window</th>
                      <th>Purpose &amp; Rationale</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>User Accounts</strong></td>
                      <td>Duration of account + up to 24 months</td>
                      <td>Post-termination support, resolving outstanding disputes, audit trails.</td>
                    </tr>
                    <tr>
                      <td><strong>Customer Support Data</strong></td>
                      <td>Up to 24 months from ticket closure</td>
                      <td>Resolving follow-up inquiries, tracking quality, legal defense.</td>
                    </tr>
                    <tr>
                      <td><strong>Chat Transcripts</strong></td>
                      <td>Up to 24 months</td>
                      <td>Quality assurance and staff training.</td>
                    </tr>
                    <tr>
                      <td><strong>Usage Data &amp; Analytics</strong></td>
                      <td>Up to 24 months from collection</td>
                      <td>Analyzing traffic trends, telemetry, security and anomaly monitoring.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="legal-paragraph">
                When retention periods expire, We securely delete or anonymize Personal Data through certified deletion procedures, scheduled backup purge routines, or non-reversible anonymization into aggregate statistical indicators.
              </p>
            </section>

            {/* Section 8 */}
            <section id="data-transfer" className="legal-section">
              <h2 className="legal-section-title">8. Transfer of Your Personal Data</h2>
              <p className="legal-paragraph">
                Your information, including Personal Data, is processed at the Company&apos;s operating offices and in any other places where the parties involved in the processing are located. Where required by applicable law, We ensure that international transfers of Your Personal Data are subject to appropriate safeguards and adequate technical controls.
              </p>
            </section>

            {/* Section 9 */}
            <section id="delete-data" className="legal-section">
              <h2 className="legal-section-title">9. Delete Your Personal Data</h2>
              <p className="legal-paragraph">
                You have the right to delete or request that We assist in deleting the Personal Data that We have collected about You. You may contact Us to request access to, correct, or delete any Personal Data that You have provided to Us. Please note, however, that We may need to retain certain information when We have a legal obligation or lawful basis to do so.
              </p>
            </section>

            {/* Section 10 */}
            <section id="disclosure" className="legal-section">
              <h2 className="legal-section-title">10. Disclosure of Your Personal Data</h2>
              <h3 className="legal-subsection-title">Business Transactions</h3>
              <p className="legal-paragraph">
                If the Company is involved in a merger, acquisition or asset sale, Your Personal Data may be transferred. We will provide notice before Your Personal Data is transferred and becomes subject to a different Privacy Policy.
              </p>
              <h3 className="legal-subsection-title">Law Enforcement &amp; Legal Obligations</h3>
              <p className="legal-paragraph">
                Under certain circumstances, the Company may disclose Your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g. a court or government agency), or to protect and defend the rights, property, and safety of Users and the public.
              </p>
            </section>

            {/* Section 11 */}
            <section id="security" className="legal-section">
              <h2 className="legal-section-title">11. Security of Your Personal Data</h2>
              <p className="legal-paragraph">
                The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage, is 100% secure. While We strive to use commercially reasonable means to protect Your Personal Data, We cannot guarantee its absolute security.
              </p>
            </section>

            {/* Section 12 */}
            <section id="children-privacy" className="legal-section">
              <h2 className="legal-section-title">12. Children&apos;s and Minors&apos; Privacy</h2>
              <p className="legal-paragraph">
                The Service is not directed to, and We do not knowingly collect Personal Information from, anyone under the age of 16. If You are a parent or guardian and You believe Your child has provided Us with Personal Information, please contact Us. If We become aware that We have collected Personal Information from anyone under the age of 16, We will take steps to remove that information from Our servers as soon as reasonably possible.
              </p>
            </section>

            {/* Section 13 */}
            <section id="third-party-links" className="legal-section">
              <h2 className="legal-section-title">13. Links to Other Websites</h2>
              <p className="legal-paragraph">
                Our Service may contain links to other websites that are not operated by Us. If You click on a third-party link, You will be directed to that third party&apos;s site. We strongly advise You to review the Privacy Policy of every site You visit. We assume no responsibility for the content or privacy practices of any third-party services.
              </p>
            </section>

            {/* Section 14 */}
            <section id="policy-changes" className="legal-section">
              <h2 className="legal-section-title">14. Changes to this Privacy Policy</h2>
              <p className="legal-paragraph">
                We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date at the top of this Privacy Policy.
              </p>
            </section>

            {/* Section 15 */}
            <section id="contact" className="legal-section">
              <h2 className="legal-section-title">15. Contact Us</h2>
              <p className="legal-paragraph">
                If You have any questions about this Privacy Policy, You can contact Us:
              </p>

              <div className="info-contact-card">
                <div className="info-contact-left">
                  <h4>Privacy Inquiries &amp; Data Officer</h4>
                  <p>Send data deletion, privacy or cookie requests directly to our team.</p>
                </div>
                <a href="mailto:reddybookofficialonline26@gmail.com" className="info-contact-email-btn">
                  <Mail size={16} />
                  <span>reddybookofficialonline26@gmail.com</span>
                </a>
              </div>
            </section>
          </article>
        </div>
      </div>
    </div>
  );
}
