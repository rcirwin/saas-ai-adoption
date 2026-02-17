import Link from "next/link";

export const metadata = {
  title: "Customer Support | Future Ready Studio",
  description: "Get support for Future Ready Studio services and published applications.",
};

export default function SupportPage() {
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
        {/* Hero */}
        <div className="mb-16">
          <h1 className="text-4xl font-semibold tracking-tight text-[var(--color-text-primary)] md:text-5xl">
            Customer Support
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-[var(--color-text-secondary)]">
            We&apos;re here to help you succeed with your AI Integration Planning assessment and our published applications.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-[var(--color-border)] bg-white p-8">
            <div className="mb-4 flex items-center gap-3">
              <svg className="h-6 w-6 text-[var(--color-a1)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M2 7l10 6 10-6" />
              </svg>
              <h3 className="text-xl font-semibold text-[var(--color-text-primary)]">Email Support</h3>
            </div>
            <p className="mb-4 text-sm leading-relaxed text-[var(--color-text-secondary)]">
              Get comprehensive support for assessment inquiries and technical questions.
            </p>

            <div className="mb-4 rounded-xl border border-[var(--color-a1)]/15 bg-[var(--color-a5)]/20 p-4">
              <h4 className="mb-2 font-semibold text-[var(--color-text-primary)]">Portfolio App Support</h4>
              <p className="mb-3 text-sm text-[var(--color-text-secondary)]">
                We provide dedicated customer support for all our published applications.
              </p>
              <ul className="space-y-1 text-sm">
                <li>
                  <a
                    href="https://sites.google.com/view/buy-canadian-products-app?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-[var(--color-a1)] hover:underline"
                  >
                    Buy Canadian
                  </a>
                </li>
                <li>
                  <a
                    href="https://mealflow.ai/mobile/support"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-[var(--color-a1)] hover:underline"
                  >
                    Meal Flow AI
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.gottravelbug.com/support"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-[var(--color-a1)] hover:underline"
                  >
                    Travel Bug
                  </a>
                </li>
              </ul>
            </div>

            <a
              href="mailto:ryan@futurereadystudio.com"
              className="font-medium text-[var(--color-a1)] hover:underline"
            >
              ryan@futurereadystudio.com
            </a>
          </div>

          <div className="rounded-2xl border border-[var(--color-border)] bg-white p-8">
            <div className="mb-4 flex items-center gap-3">
              <svg className="h-6 w-6 text-[var(--color-a1)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
              </svg>
              <h3 className="text-xl font-semibold text-[var(--color-text-primary)]">Assessment Inquiry</h3>
            </div>
            <p className="mb-4 text-sm leading-relaxed text-[var(--color-text-secondary)]">
              Have questions about the SaaS AI Integration Planning assessment? Reach out and we&apos;ll discuss fit and next steps.
            </p>
            <a
              href="mailto:ryan@futurereadystudio.com?subject=Assessment Inquiry"
              className="font-medium text-[var(--color-a1)] hover:underline"
            >
              Schedule a Conversation
            </a>
          </div>
        </div>

        {/* Support Hours */}
        <div className="mt-16 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-panel)] p-8">
          <div className="mb-6 flex items-center gap-3">
            <svg className="h-6 w-6 text-[var(--color-a1)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l4 2" />
            </svg>
            <h3 className="text-2xl font-semibold text-[var(--color-text-primary)]">Support Hours</h3>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h4 className="mb-2 font-semibold text-[var(--color-text-primary)]">Email Support</h4>
              <p className="text-sm text-[var(--color-text-secondary)]">Monday - Friday: 9:00 AM - 6:00 PM EST</p>
              <p className="text-sm text-[var(--color-text-secondary)]">Response time: Within 24 hours</p>
            </div>
            <div>
              <h4 className="mb-2 font-semibold text-[var(--color-text-primary)]">Assessment Consultations</h4>
              <p className="text-sm text-[var(--color-text-secondary)]">Monday - Friday: By appointment</p>
              <p className="text-sm text-[var(--color-text-secondary)]">We&apos;ll respond within 2 business days</p>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-16">
          <div className="mb-8 flex items-center gap-3">
            <svg className="h-6 w-6 text-[var(--color-a1)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" />
              <path d="M12 17h.01" />
            </svg>
            <h3 className="text-2xl font-semibold text-[var(--color-text-primary)]">Frequently Asked Questions</h3>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-[var(--color-border)] bg-white p-6">
              <h4 className="mb-2 font-semibold text-[var(--color-text-primary)]">How do I get support for your published mobile apps?</h4>
              <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">
                Contact us directly at ryan@futurereadystudio.com with your app name and issue description. We provide full customer support for Buy Canadian, Meal Flow AI, Travel Bug, and all applications we&apos;ve developed.
              </p>
            </div>

            <div className="rounded-2xl border border-[var(--color-border)] bg-white p-6">
              <h4 className="mb-2 font-semibold text-[var(--color-text-primary)]">What if I encounter a bug in one of your apps?</h4>
              <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">
                Report any bugs or technical issues via email with details about your device, app version, and the specific problem. We prioritize bug fixes and typically release updates within 1-2 weeks for critical issues.
              </p>
            </div>

            <div className="rounded-2xl border border-[var(--color-border)] bg-white p-6">
              <h4 className="mb-2 font-semibold text-[var(--color-text-primary)]">How do I get started with an AI Integration Planning assessment?</h4>
              <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">
                Contact us via email to schedule an initial conversation. We&apos;ll discuss your product, your users, and whether the assessment is a good fit. If it is, we&apos;ll walk you through the intake process and timeline.
              </p>
            </div>

            <div className="rounded-2xl border border-[var(--color-border)] bg-white p-6">
              <h4 className="mb-2 font-semibold text-[var(--color-text-primary)]">What support do you provide during and after the assessment?</h4>
              <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">
                During the 8-12 week engagement, you&apos;ll have regular check-ins and review sessions. After delivery of the final artifacts, you receive 30 days of follow-up access for questions about the deliverables and implementation guidance.
              </p>
            </div>

            <div className="rounded-2xl border border-[var(--color-border)] bg-white p-6">
              <h4 className="mb-2 font-semibold text-[var(--color-text-primary)]">What do I need to provide for the assessment?</h4>
              <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">
                A Product Champion who can give us walkthrough access to product and subscription analytics, user feedback data, and access to engage with users for interviews and feedback. We provide a detailed intake checklist before we start.
              </p>
            </div>

            <div className="rounded-2xl border border-[var(--color-border)] bg-white p-6">
              <h4 className="mb-2 font-semibold text-[var(--color-text-primary)]">How long does the assessment take?</h4>
              <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">
                8 to 12 weeks from kickoff to final deliverables. The first two weeks are intake and discovery, the final weeks are review workshops. Most of the deep analysis happens in the middle phases with minimal disruption to your team.
              </p>
            </div>
          </div>
        </div>

        {/* Legal Information */}
        <div className="mt-16 rounded-2xl border border-[var(--color-border)] bg-white p-8">
          <div className="mb-6 flex items-center gap-3">
            <svg className="h-6 w-6 text-[var(--color-a1)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
              <path d="M14 2v6h6" />
              <path d="M16 13H8" />
              <path d="M16 17H8" />
              <path d="M10 9H8" />
            </svg>
            <h3 className="text-2xl font-semibold text-[var(--color-text-primary)]">Legal &amp; Business Information</h3>
          </div>
          <div className="space-y-4 text-sm text-[var(--color-text-secondary)]">
            <p>
              <strong className="text-[var(--color-text-primary)]">Business Name:</strong> 11978853 CANADA INC. (doing business as Future Ready Studio)
            </p>
            <p>
              <strong className="text-[var(--color-text-primary)]">D-U-N-S Number:</strong> 240407557
            </p>
            <p>
              <strong className="text-[var(--color-text-primary)]">Business Registration:</strong> Federally incorporated in Canada
            </p>
            <p>
              <strong className="text-[var(--color-text-primary)]">Privacy Policy:</strong>{" "}
              <Link href="/privacy-policy" className="text-[var(--color-a1)] hover:underline">
                View our Privacy Policy
              </Link>
            </p>
            <p>
              <strong className="text-[var(--color-text-primary)]">Terms of Service:</strong>{" "}
              <Link href="/terms-conditions" className="text-[var(--color-a1)] hover:underline">
                View our Terms &amp; Conditions
              </Link>
            </p>
          </div>
        </div>
      </main>

      {/* Minimal footer */}
      <footer className="border-t border-[var(--color-border)] py-8">
        <div className="mx-auto max-w-[1120px] px-6 text-center text-xs text-[var(--color-text-tertiary)] md:px-8">
          &copy; {new Date().getFullYear()} 11978853 CANADA INC. doing business as Future Ready Studio
        </div>
      </footer>
    </div>
  );
}
