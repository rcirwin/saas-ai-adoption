import Link from "next/link";

export const metadata = {
  title: "Terms & Conditions | Future Ready Studio",
  description: "Terms and Conditions for Future Ready Studio services.",
};

export default function TermsConditionsPage() {
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
            Terms &amp; Conditions
          </h1>
          <p className="mt-4 text-sm text-[var(--color-text-tertiary)]">Last updated: February 16, 2026</p>

          <div className="mt-8 space-y-8">
            <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">
              Welcome to Future Ready Studio (&quot;Future Ready Studio,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). These Terms and Conditions (&quot;Terms&quot;) govern your use of our website and related services (&quot;Service&quot;). By accessing or using our services, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our Service.
            </p>

            {/* 1 */}
            <section>
              <h2 className="mb-4 text-xl font-semibold text-[var(--color-text-primary)]">1. Acceptance of Terms</h2>
              <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">
                By accessing and using Future Ready Studio services, you accept and agree to be bound by these Terms and all applicable laws and regulations. You also agree to comply with our Privacy Policy, which is incorporated herein by reference. If you do not agree to these Terms, you must immediately cease using our Service.
              </p>
            </section>

            {/* 2 */}
            <section>
              <h2 className="mb-4 text-xl font-semibold text-[var(--color-text-primary)]">2. Description of Service</h2>
              <p className="mb-4 text-sm text-[var(--color-text-secondary)]">Future Ready Studio provides:</p>
              <ul className="list-inside list-disc space-y-2 text-sm text-[var(--color-text-secondary)]">
                <li><strong className="text-[var(--color-text-primary)]">AI Integration Planning Assessments:</strong> A fixed-scope, 8-12 week engagement for B2B SaaS products that produces four deliverables: Workflow &amp; Pain Point Audit, User-Centered Insight Synthesis, Data Readiness &amp; Competitive Moat Assessment, and AI-Enhanced Experience &amp; Agentic Blueprint</li>
                <li><strong className="text-[var(--color-text-primary)]">Strategic Advisory:</strong> Guidance on AI adoption, agent readiness, and workflow optimization for SaaS products</li>
                <li><strong className="text-[var(--color-text-primary)]">Published Applications:</strong> Consumer-facing mobile applications including Buy Canadian, Meal Flow AI, and Travel Bug</li>
              </ul>
            </section>

            {/* 3 */}
            <section>
              <h2 className="mb-4 text-xl font-semibold text-[var(--color-text-primary)]">3. Assessment Agreements and Scope</h2>
              <h3 className="mb-2 text-base font-semibold text-[var(--color-text-primary)]">Assessment Agreements</h3>
              <p className="mb-4 text-sm text-[var(--color-text-secondary)]">Specific assessment terms will be outlined in separate Service Agreements that include:</p>
              <ul className="mb-4 list-inside list-disc space-y-2 text-sm text-[var(--color-text-secondary)]">
                <li>Detailed assessment scope and deliverables</li>
                <li>Timeline and milestone schedules (typically 8-12 weeks)</li>
                <li>Payment terms and pricing</li>
                <li>Specific terms for intellectual property ownership of deliverables</li>
                <li>Data access requirements and confidentiality provisions</li>
              </ul>

              <h3 className="mb-2 text-base font-semibold text-[var(--color-text-primary)]">Service Modifications</h3>
              <p className="text-sm text-[var(--color-text-secondary)]">
                We reserve the right to modify, suspend, or discontinue any aspect of our services with reasonable notice to existing clients.
              </p>
            </section>

            {/* 4 */}
            <section>
              <h2 className="mb-4 text-xl font-semibold text-[var(--color-text-primary)]">4. Use License and Restrictions</h2>
              <h3 className="mb-2 text-base font-semibold text-[var(--color-text-primary)]">License Grant</h3>
              <p className="mb-4 text-sm text-[var(--color-text-secondary)]">
                We grant you a limited, non-exclusive, non-transferable license to use our delivered assessment artifacts and services in accordance with the specific assessment agreements.
              </p>

              <h3 className="mb-2 text-base font-semibold text-[var(--color-text-primary)]">Restrictions</h3>
              <p className="mb-4 text-sm text-[var(--color-text-secondary)]">You may not:</p>
              <ul className="list-inside list-disc space-y-2 text-sm text-[var(--color-text-secondary)]">
                <li>Reverse engineer our proprietary assessment methodologies without permission</li>
                <li>Resell or redistribute our assessment deliverables or services without written consent</li>
                <li>Use our services for illegal or unauthorized purposes</li>
                <li>Attempt to gain unauthorized access to our systems or other clients&apos; data</li>
              </ul>
            </section>

            {/* 5 */}
            <section>
              <h2 className="mb-4 text-xl font-semibold text-[var(--color-text-primary)]">5. Client Responsibilities</h2>
              <p className="mb-4 text-sm text-[var(--color-text-secondary)]">As our client, you agree to:</p>
              <ul className="list-inside list-disc space-y-2 text-sm text-[var(--color-text-secondary)]">
                <li><strong className="text-[var(--color-text-primary)]">Designate a Product Champion:</strong> Provide a primary point of contact who can facilitate access and communication</li>
                <li><strong className="text-[var(--color-text-primary)]">Provide Product Access:</strong> Grant walkthrough access to your product, subscription analytics, and user feedback data</li>
                <li><strong className="text-[var(--color-text-primary)]">Enable User Research:</strong> Provide access to engage with users for interviews and feedback sessions</li>
                <li><strong className="text-[var(--color-text-primary)]">Timely Communication:</strong> Respond to requests for feedback, approvals, and clarifications within agreed timeframes</li>
                <li><strong className="text-[var(--color-text-primary)]">Payment Obligations:</strong> Make payments according to agreed schedules and terms</li>
              </ul>
            </section>

            {/* 6 */}
            <section>
              <h2 className="mb-4 text-xl font-semibold text-[var(--color-text-primary)]">6. Intellectual Property Rights</h2>
              <h3 className="mb-2 text-base font-semibold text-[var(--color-text-primary)]">Client IP Rights</h3>
              <p className="mb-4 text-sm text-[var(--color-text-secondary)]">
                Upon full payment, clients receive ownership of all assessment deliverables and artifacts, including the Workflow &amp; Pain Point Audit, User-Centered Insight Synthesis, Data Readiness &amp; Competitive Moat Assessment, and AI-Enhanced Experience &amp; Agentic Blueprint.
              </p>

              <h3 className="mb-2 text-base font-semibold text-[var(--color-text-primary)]">Our IP Rights</h3>
              <p className="mb-4 text-sm text-[var(--color-text-secondary)]">We retain rights to:</p>
              <ul className="mb-4 list-inside list-disc space-y-2 text-sm text-[var(--color-text-secondary)]">
                <li>Our proprietary assessment methodologies, frameworks, and processes</li>
                <li>General knowledge and experience gained during assessments</li>
                <li>Any pre-existing IP we bring to engagements</li>
              </ul>

              <h3 className="mb-2 text-base font-semibold text-[var(--color-text-primary)]">Third-Party Rights</h3>
              <p className="text-sm text-[var(--color-text-secondary)]">
                We respect third-party intellectual property rights and expect clients to do the same. Assessments involving third-party services or APIs are subject to those providers&apos; terms.
              </p>
            </section>

            {/* 7 */}
            <section>
              <h2 className="mb-4 text-xl font-semibold text-[var(--color-text-primary)]">7. Assessment Deliverables and Timelines</h2>
              <ul className="list-inside list-disc space-y-2 text-sm text-[var(--color-text-secondary)]">
                <li><strong className="text-[var(--color-text-primary)]">Phased Delivery:</strong> Assessments are delivered across 4 phases over 8-12 weeks: Intake &amp; Discovery, User Research &amp; Workflow Mapping, Analysis &amp; Blueprint Development, and Review Workshop &amp; Final Artifacts</li>
                <li><strong className="text-[var(--color-text-primary)]">Review Workshops:</strong> Interactive review sessions are included for challenging assumptions and refining priorities</li>
                <li><strong className="text-[var(--color-text-primary)]">Follow-Up Access:</strong> 30 days of follow-up access for questions is included after final delivery</li>
                <li><strong className="text-[var(--color-text-primary)]">Timeline Dependencies:</strong> Assessment timelines may be affected by client responsiveness and availability of users for research</li>
              </ul>
            </section>

            {/* 8 */}
            <section>
              <h2 className="mb-4 text-xl font-semibold text-[var(--color-text-primary)]">8. Prohibited Uses</h2>
              <p className="mb-4 text-sm text-[var(--color-text-secondary)]">You may not use our services to:</p>
              <ul className="list-inside list-disc space-y-2 text-sm text-[var(--color-text-secondary)]">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe on intellectual property rights</li>
                <li>Develop competing assessment services using our proprietary methods</li>
                <li>Engage in activities that could harm our reputation or other clients</li>
              </ul>
            </section>

            {/* 9 */}
            <section>
              <h2 className="mb-4 text-xl font-semibold text-[var(--color-text-primary)]">9. Payment Terms</h2>
              <p className="mb-4 text-sm text-[var(--color-text-secondary)]">Unless otherwise specified in assessment agreements:</p>
              <ul className="list-inside list-disc space-y-2 text-sm text-[var(--color-text-secondary)]">
                <li>The AI Integration Planning assessment is a fixed-scope engagement at $30,000</li>
                <li>Payment schedules are defined in the assessment agreement</li>
                <li>Invoices are due within 30 days of receipt</li>
                <li>Late payments may result in assessment suspension</li>
                <li>All fees are non-refundable unless explicitly agreed otherwise</li>
                <li>Clients are responsible for any applicable taxes</li>
              </ul>
            </section>

            {/* 10 */}
            <section>
              <h2 className="mb-4 text-xl font-semibold text-[var(--color-text-primary)]">10. Confidentiality</h2>
              <p className="mb-4 text-sm text-[var(--color-text-secondary)]">We maintain strict confidentiality regarding:</p>
              <ul className="list-inside list-disc space-y-2 text-sm text-[var(--color-text-secondary)]">
                <li>Client business information and proprietary data</li>
                <li>Assessment details, findings, and deliverables</li>
                <li>User research data and interview findings</li>
                <li>Any sensitive information shared during engagements</li>
              </ul>
              <p className="mt-4 text-sm text-[var(--color-text-secondary)]">
                A mutual NDA is signed before kickoff. All work is conducted under strict confidentiality. We do not share findings, data, or artifacts with anyone outside the engagement.
              </p>
            </section>

            {/* 11 */}
            <section>
              <h2 className="mb-4 text-xl font-semibold text-[var(--color-text-primary)]">11. Privacy Policy</h2>
              <p className="text-sm text-[var(--color-text-secondary)]">
                Your privacy is important to us. Our{" "}
                <Link href="/privacy-policy" className="text-[var(--color-a1)] hover:underline">Privacy Policy</Link>{" "}
                explains how we collect, use, and protect your information. By using our services, you also agree to our Privacy Policy, which is incorporated into these Terms by reference.
              </p>
            </section>

            {/* 12 */}
            <section>
              <h2 className="mb-4 text-xl font-semibold text-[var(--color-text-primary)]">12. Service Availability</h2>
              <p className="mb-4 text-sm text-[var(--color-text-secondary)]">We strive to provide reliable service but cannot guarantee:</p>
              <ul className="list-inside list-disc space-y-2 text-sm text-[var(--color-text-secondary)]">
                <li>Uninterrupted availability of our website or services</li>
                <li>Immediate response to all support requests</li>
                <li>Unlimited modifications to deliverables without additional costs</li>
              </ul>
            </section>

            {/* 13 */}
            <section>
              <h2 className="mb-4 text-xl font-semibold text-[var(--color-text-primary)]">13. Assessment Disclaimers</h2>
              <h3 className="mb-2 text-base font-semibold text-[var(--color-text-primary)]">Assessment Limitations</h3>
              <ul className="mb-4 list-inside list-disc space-y-2 text-sm text-[var(--color-text-secondary)]">
                <li>Assessment outcomes depend on the quality and completeness of data and access provided</li>
                <li>Recommendations are based on analysis at the time of the assessment and market conditions may change</li>
                <li>The assessment produces decision clarity and a blueprint, not implementation or code</li>
                <li>We cannot guarantee specific business results from implementing assessment recommendations</li>
              </ul>

              <h3 className="mb-2 text-base font-semibold text-[var(--color-text-primary)]">AI and Technology Considerations</h3>
              <ul className="list-inside list-disc space-y-2 text-sm text-[var(--color-text-secondary)]">
                <li>AI capabilities and the agent ecosystem are rapidly evolving</li>
                <li>Recommendations reflect current best practices which may evolve</li>
                <li>Implementation success depends on execution quality and organizational readiness</li>
              </ul>
            </section>

            {/* 14 */}
            <section>
              <h2 className="mb-4 text-xl font-semibold text-[var(--color-text-primary)]">14. Termination</h2>
              <h3 className="mb-2 text-base font-semibold text-[var(--color-text-primary)]">Termination by Client</h3>
              <p className="mb-4 text-sm text-[var(--color-text-secondary)]">
                Clients may terminate assessments with written notice, subject to payment for completed work and reasonable cancellation fees as outlined in the assessment agreement.
              </p>

              <h3 className="mb-2 text-base font-semibold text-[var(--color-text-primary)]">Termination by Us</h3>
              <p className="mb-4 text-sm text-[var(--color-text-secondary)]">We may terminate engagements if clients:</p>
              <ul className="mb-4 list-inside list-disc space-y-2 text-sm text-[var(--color-text-secondary)]">
                <li>Violate these Terms or assessment agreements</li>
                <li>Fail to make required payments</li>
                <li>Fail to provide necessary access or resources</li>
                <li>Become unresponsive for extended periods</li>
              </ul>

              <h3 className="mb-2 text-base font-semibold text-[var(--color-text-primary)]">Effect of Termination</h3>
              <p className="text-sm text-[var(--color-text-secondary)]">
                Upon termination, clients receive deliverables for completed and paid phases. Confidentiality and intellectual property provisions survive termination.
              </p>
            </section>

            {/* 15 */}
            <section>
              <h2 className="mb-4 text-xl font-semibold text-[var(--color-text-primary)]">15. Disclaimers</h2>
              <p className="mb-4 text-sm uppercase text-[var(--color-text-secondary)]">Our services are provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, including:</p>
              <ul className="list-inside list-disc space-y-2 text-sm text-[var(--color-text-secondary)]">
                <li>MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE</li>
                <li>SPECIFIC PERFORMANCE OUTCOMES OR BUSINESS RESULTS</li>
                <li>UNINTERRUPTED OR ERROR-FREE OPERATION</li>
                <li>COMPATIBILITY WITH ALL SYSTEMS OR TECHNOLOGIES</li>
              </ul>
            </section>

            {/* 16 */}
            <section>
              <h2 className="mb-4 text-xl font-semibold text-[var(--color-text-primary)]">16. Limitation of Liability</h2>
              <p className="mb-4 text-sm uppercase text-[var(--color-text-secondary)]">To the maximum extent permitted by law, Future Ready Studio shall not be liable for:</p>
              <ul className="mb-4 list-inside list-disc space-y-2 text-sm text-[var(--color-text-secondary)]">
                <li>INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES</li>
                <li>LOSS OF PROFITS, DATA, USE, OR OTHER INTANGIBLE LOSSES</li>
                <li>DAMAGES RESULTING FROM THIRD-PARTY SERVICES OR INTEGRATIONS</li>
                <li>BUSINESS INTERRUPTION OR SYSTEM DOWNTIME</li>
              </ul>
              <p className="text-sm uppercase text-[var(--color-text-secondary)]">
                Our total liability shall not exceed the total amount paid by the client for the specific assessment giving rise to the claim.
              </p>
            </section>

            {/* 17 */}
            <section>
              <h2 className="mb-4 text-xl font-semibold text-[var(--color-text-primary)]">17. Indemnification</h2>
              <p className="mb-4 text-sm text-[var(--color-text-secondary)]">You agree to indemnify and hold harmless Future Ready Studio from any claims, damages, losses, or expenses arising from:</p>
              <ul className="list-inside list-disc space-y-2 text-sm text-[var(--color-text-secondary)]">
                <li>Your use of our services</li>
                <li>Your violation of these Terms</li>
                <li>Your violation of any third-party rights</li>
                <li>Your business operations using our delivered assessment artifacts</li>
              </ul>
            </section>

            {/* 18 */}
            <section>
              <h2 className="mb-4 text-xl font-semibold text-[var(--color-text-primary)]">18. Governing Law</h2>
              <p className="text-sm text-[var(--color-text-secondary)]">
                These Terms are governed by and construed in accordance with applicable Canadian law. Any disputes arising from these Terms or your use of our Service shall be resolved through appropriate legal channels.
              </p>
            </section>

            {/* 19 */}
            <section>
              <h2 className="mb-4 text-xl font-semibold text-[var(--color-text-primary)]">19. Changes to Terms</h2>
              <p className="mb-4 text-sm text-[var(--color-text-secondary)]">We reserve the right to modify these Terms at any time. Changes will be effective:</p>
              <ul className="mb-4 list-inside list-disc space-y-2 text-sm text-[var(--color-text-secondary)]">
                <li>Immediately upon posting for minor changes</li>
                <li>After providing reasonable notice for material changes</li>
                <li>Upon mutual agreement for active assessment modifications</li>
              </ul>
              <p className="text-sm text-[var(--color-text-secondary)]">
                Continued use of our services after changes constitutes acceptance of the modified Terms.
              </p>
            </section>

            {/* 20 */}
            <section>
              <h2 className="mb-4 text-xl font-semibold text-[var(--color-text-primary)]">20. Contact Information</h2>
              <p className="mb-4 text-sm text-[var(--color-text-secondary)]">If you have questions about these Terms &amp; Conditions, please contact us:</p>
              <div className="rounded-xl bg-[var(--color-bg-panel)] p-6">
                <p className="mb-2 text-sm text-[var(--color-text-secondary)]"><strong className="text-[var(--color-text-primary)]">Email:</strong> ryan@futurereadystudio.com</p>
                <p className="text-sm text-[var(--color-text-secondary)]"><strong className="text-[var(--color-text-primary)]">Subject Line:</strong> Terms &amp; Conditions Inquiry</p>
              </div>
              <p className="mt-4 text-sm text-[var(--color-text-secondary)]">We will respond to inquiries within a reasonable timeframe.</p>
              <p className="mt-6 text-sm italic text-[var(--color-text-tertiary)]">These Terms &amp; Conditions are effective as of February 16, 2026, and apply to all users of Future Ready Studio services.</p>
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
