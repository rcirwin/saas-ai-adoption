import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Future Ready Studio",
  description: "Privacy Policy for Future Ready Studio services and applications.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      {/* Minimal header */}
      <div className="mx-auto max-w-[1120px] px-6 py-8 md:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-[var(--color-text-tertiary)] transition-colors hover:text-[var(--color-text-primary)]"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10 12L6 8l4-4" />
          </svg>
          Back to Home
        </Link>
      </div>

      <main className="mx-auto max-w-[1120px] px-6 pb-24 md:px-8">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-semibold tracking-tight text-[var(--color-text-primary)] md:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-[var(--color-text-tertiary)]">Last updated: February 16, 2026</p>

          <div className="mt-8 space-y-8">
            <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">
              At Future Ready Studio (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and related services.
            </p>
            <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">
              By using our website and services, you consent to the practices described in this policy. If you do not agree with the terms of this privacy policy, please do not use our services.
            </p>

            {/* 1 */}
            <section>
              <h2 className="mb-4 text-xl font-semibold text-[var(--color-text-primary)]">1. Information We Collect</h2>

              <h3 className="mb-2 text-base font-semibold text-[var(--color-text-primary)]">Information You Provide Directly:</h3>
              <ul className="mb-4 list-inside list-disc space-y-2 text-sm text-[var(--color-text-secondary)]">
                <li><strong className="text-[var(--color-text-primary)]">Contact Information:</strong> Name, email address, phone number, and company details when you contact us for services</li>
                <li><strong className="text-[var(--color-text-primary)]">Assessment Requirements:</strong> Business needs, product details, ARR range, and product type you share during intake</li>
                <li><strong className="text-[var(--color-text-primary)]">Communication Records:</strong> Information you provide in emails, calls, and meetings with our team</li>
                <li><strong className="text-[var(--color-text-primary)]">Feedback:</strong> Reviews and feedback you provide about our services</li>
              </ul>

              <h3 className="mb-2 text-base font-semibold text-[var(--color-text-primary)]">Information We Collect Automatically:</h3>
              <ul className="list-inside list-disc space-y-2 text-sm text-[var(--color-text-secondary)]">
                <li><strong className="text-[var(--color-text-primary)]">Website Usage:</strong> Pages visited, time spent, and interaction patterns on our website</li>
                <li><strong className="text-[var(--color-text-primary)]">Device Information:</strong> Browser type, operating system, and device specifications</li>
                <li><strong className="text-[var(--color-text-primary)]">Technical Data:</strong> IP address, location data, and referral sources</li>
              </ul>
            </section>

            {/* 2 */}
            <section>
              <h2 className="mb-4 text-xl font-semibold text-[var(--color-text-primary)]">2. How We Use Your Information</h2>
              <p className="mb-4 text-sm text-[var(--color-text-secondary)]">We use the collected information to:</p>
              <ul className="list-inside list-disc space-y-2 text-sm text-[var(--color-text-secondary)]">
                <li><strong className="text-[var(--color-text-primary)]">Conduct Assessments:</strong> Perform AI Integration Planning assessments, analyze workflow data, and deliver assessment artifacts</li>
                <li><strong className="text-[var(--color-text-primary)]">Assessment Management:</strong> Coordinate assessment timelines, deliverables, and client communications</li>
                <li><strong className="text-[var(--color-text-primary)]">Service Improvement:</strong> Analyze usage patterns to enhance our assessment methodology and processes</li>
                <li><strong className="text-[var(--color-text-primary)]">Client Support:</strong> Respond to inquiries, provide assistance, and maintain ongoing support during and after assessments</li>
                <li><strong className="text-[var(--color-text-primary)]">Legal Compliance:</strong> Comply with applicable laws and protect our rights and clients&apos; interests</li>
              </ul>
            </section>

            {/* 3 */}
            <section>
              <h2 className="mb-4 text-xl font-semibold text-[var(--color-text-primary)]">3. Analytics and Performance Data</h2>
              <p className="mb-4 text-sm text-[var(--color-text-secondary)]">We collect and analyze aggregated, anonymized data to improve our services:</p>

              <h3 className="mb-2 text-base font-semibold text-[var(--color-text-primary)]">Analytics We Collect:</h3>
              <ul className="mb-4 list-inside list-disc space-y-2 text-sm text-[var(--color-text-secondary)]">
                <li>Website traffic patterns and popular content areas</li>
                <li>Assessment inquiry trends and common client needs</li>
                <li>Assessment delivery performance metrics</li>
              </ul>

              <h3 className="mb-2 text-base font-semibold text-[var(--color-text-primary)]">How We Use Analytics:</h3>
              <ul className="list-inside list-disc space-y-2 text-sm text-[var(--color-text-secondary)]">
                <li>Improve our assessment methodologies</li>
                <li>Understand market demands for AI integration planning</li>
                <li>Guide service development and specialization areas</li>
                <li>Generate insights about AI adoption trends in SaaS</li>
              </ul>
            </section>

            {/* 4 */}
            <section>
              <h2 className="mb-4 text-xl font-semibold text-[var(--color-text-primary)]">4. Information Sharing and Disclosure</h2>
              <p className="mb-4 text-sm text-[var(--color-text-secondary)]">We do not sell, rent, or trade your personal information to third parties. We may share your information only in the following circumstances:</p>
              <ul className="list-inside list-disc space-y-2 text-sm text-[var(--color-text-secondary)]">
                <li><strong className="text-[var(--color-text-primary)]">With Your Consent:</strong> When you explicitly authorize us to share information</li>
                <li><strong className="text-[var(--color-text-primary)]">Service Providers:</strong> Trusted partners who assist in assessment delivery, hosting, and technical infrastructure</li>
                <li><strong className="text-[var(--color-text-primary)]">Legal Requirements:</strong> To comply with applicable laws, regulations, or legal processes</li>
                <li><strong className="text-[var(--color-text-primary)]">Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets</li>
              </ul>
            </section>

            {/* 5 */}
            <section>
              <h2 className="mb-4 text-xl font-semibold text-[var(--color-text-primary)]">5. Data Storage and Security</h2>
              <h3 className="mb-2 text-base font-semibold text-[var(--color-text-primary)]">Security Measures:</h3>
              <ul className="mb-4 list-inside list-disc space-y-2 text-sm text-[var(--color-text-secondary)]">
                <li>Industry-standard encryption for data transmission and storage</li>
                <li>Secure assessment practices and regular security assessments</li>
                <li>Access controls limiting who can view client information</li>
                <li>Regular backups and disaster recovery procedures</li>
              </ul>

              <h3 className="mb-2 text-base font-semibold text-[var(--color-text-primary)]">Data Retention:</h3>
              <ul className="list-inside list-disc space-y-2 text-sm text-[var(--color-text-secondary)]">
                <li><strong className="text-[var(--color-text-primary)]">Client Information:</strong> Retained during active assessments and for a reasonable period after completion</li>
                <li><strong className="text-[var(--color-text-primary)]">Assessment Data:</strong> Stored according to contractual agreements and legal requirements</li>
                <li><strong className="text-[var(--color-text-primary)]">Analytics Data:</strong> Aggregated data may be retained indefinitely for research and improvement</li>
              </ul>
            </section>

            {/* 6 */}
            <section>
              <h2 className="mb-4 text-xl font-semibold text-[var(--color-text-primary)]">6. Third-Party Services</h2>
              <p className="mb-4 text-sm text-[var(--color-text-secondary)]">Future Ready Studio integrates with various third-party services to deliver our assessments:</p>
              <ul className="list-inside list-disc space-y-2 text-sm text-[var(--color-text-secondary)]">
                <li><strong className="text-[var(--color-text-primary)]">Cloud Platforms:</strong> AWS, Google Cloud, Microsoft Azure for hosting and infrastructure</li>
                <li><strong className="text-[var(--color-text-primary)]">AI Services:</strong> OpenAI, Anthropic, and other AI providers used during analysis</li>
                <li><strong className="text-[var(--color-text-primary)]">Communication Tools:</strong> Email services, video conferencing, and project management platforms</li>
              </ul>
              <p className="mt-4 text-sm text-[var(--color-text-secondary)]">These third-party services have their own privacy policies, and we encourage you to review them.</p>
            </section>

            {/* 7 */}
            <section>
              <h2 className="mb-4 text-xl font-semibold text-[var(--color-text-primary)]">7. Your Rights and Choices</h2>
              <h3 className="mb-2 text-base font-semibold text-[var(--color-text-primary)]">Data Control:</h3>
              <ul className="mb-4 list-inside list-disc space-y-2 text-sm text-[var(--color-text-secondary)]">
                <li><strong className="text-[var(--color-text-primary)]">Access:</strong> Request copies of your personal information we hold</li>
                <li><strong className="text-[var(--color-text-primary)]">Update:</strong> Correct or update your information</li>
                <li><strong className="text-[var(--color-text-primary)]">Delete:</strong> Request deletion of your personal data</li>
                <li><strong className="text-[var(--color-text-primary)]">Portability:</strong> Receive your data in a structured, machine-readable format</li>
              </ul>
              <p className="text-sm text-[var(--color-text-secondary)]">To exercise these rights, contact us at ryan@futurereadystudio.com.</p>
            </section>

            {/* 8 */}
            <section>
              <h2 className="mb-4 text-xl font-semibold text-[var(--color-text-primary)]">8. Assessment Data</h2>
              <p className="mb-4 text-sm text-[var(--color-text-secondary)]">For AI Integration Planning assessments:</p>
              <ul className="list-inside list-disc space-y-2 text-sm text-[var(--color-text-secondary)]">
                <li>We sign a mutual NDA before kickoff</li>
                <li>We require only read-only access to data schemas, product analytics, and user feedback channels</li>
                <li>We do not require access to production databases or PII</li>
                <li>Assessment artifacts and deliverables are the property of the client</li>
                <li>Client data remains the property of the client at all times</li>
                <li>We can provide secure data deletion upon assessment completion</li>
              </ul>
            </section>

            {/* 9 */}
            <section>
              <h2 className="mb-4 text-xl font-semibold text-[var(--color-text-primary)]">9. Children&apos;s Privacy</h2>
              <p className="text-sm text-[var(--color-text-secondary)]">Future Ready Studio services are not intended for individuals under 13 years of age. We do not knowingly collect personal information from children under 13.</p>
            </section>

            {/* 10 */}
            <section>
              <h2 className="mb-4 text-xl font-semibold text-[var(--color-text-primary)]">10. International Data Transfers</h2>
              <p className="text-sm text-[var(--color-text-secondary)]">Your information may be processed and stored in countries other than your own. We ensure that such transfers comply with applicable data protection laws and implement appropriate safeguards.</p>
            </section>

            {/* 11 */}
            <section>
              <h2 className="mb-4 text-xl font-semibold text-[var(--color-text-primary)]">11. Changes to This Policy</h2>
              <p className="mb-4 text-sm text-[var(--color-text-secondary)]">We may update this Privacy Policy periodically. When we make changes:</p>
              <ul className="list-inside list-disc space-y-2 text-sm text-[var(--color-text-secondary)]">
                <li>We will update the &quot;Last updated&quot; date</li>
                <li>For significant changes, we will provide notice via email or website notification</li>
                <li>Your continued use constitutes acceptance of the updated policy</li>
              </ul>
            </section>

            {/* 12 */}
            <section>
              <h2 className="mb-4 text-xl font-semibold text-[var(--color-text-primary)]">12. Contact Us</h2>
              <p className="mb-4 text-sm text-[var(--color-text-secondary)]">If you have any questions, concerns, or requests regarding this Privacy Policy, please contact us:</p>
              <div className="rounded-xl bg-[var(--color-bg-panel)] p-6">
                <p className="mb-2 text-sm text-[var(--color-text-secondary)]"><strong className="text-[var(--color-text-primary)]">Email:</strong> ryan@futurereadystudio.com</p>
                <p className="text-sm text-[var(--color-text-secondary)]"><strong className="text-[var(--color-text-primary)]">Subject Line:</strong> Privacy Policy Inquiry</p>
              </div>
              <p className="mt-4 text-sm text-[var(--color-text-secondary)]">We will respond to your inquiries within a reasonable timeframe and work to address any concerns about our privacy practices.</p>
              <p className="mt-6 text-sm italic text-[var(--color-text-tertiary)]">This Privacy Policy is effective as of February 16, 2026, and applies to all users of Future Ready Studio services.</p>
            </section>
          </div>
        </div>
      </main>

      <footer className="border-t border-[var(--color-border)] py-8">
        <div className="mx-auto max-w-[1120px] px-6 text-center text-xs text-[var(--color-text-tertiary)] md:px-8">
          &copy; {new Date().getFullYear()} 11978853 CANADA INC. doing business as Future Ready Studio
        </div>
      </footer>
    </div>
  );
}
