"use client";

import { footerContent, siteConfig } from "./copy";

export default function Footer() {
  return (
    <footer className="relative border-t border-[var(--color-border)]">
      <div className="absolute inset-x-0 top-0 h-0.5" style={{ background: "linear-gradient(90deg, transparent 0%, var(--color-a1) 25%, var(--color-a4) 45%, var(--color-a2) 65%, var(--color-a3) 85%, transparent 100%)", opacity: 0.6 }} />
      <div className="mx-auto max-w-[1120px] px-6 py-12 md:px-8">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          <div className="flex items-center gap-3 text-center md:text-left">
            <img src="/logo.png" alt="Future Ready Studio" className="h-20 w-auto opacity-70" />
            <div>
              <p className="text-sm font-semibold text-[var(--color-text-primary)]">
                Future Ready Studio
              </p>
              <p className="mt-0.5 text-[13px] text-[var(--color-text-tertiary)]">
                Decision clarity for AI-ready SaaS products.
              </p>
            </div>
          </div>
          <nav
            className="flex flex-wrap justify-center gap-6"
            aria-label="Footer navigation"
          >
            {footerContent.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[13px] text-[var(--color-text-tertiary)] transition-colors hover:text-[var(--color-text-secondary)]"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="mt-8 border-t border-[var(--color-border)] pt-6 text-center md:text-left">
          <p className="text-[13px] text-[var(--color-text-tertiary)]">
            {footerContent.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
