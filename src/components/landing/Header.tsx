"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig, footerContent } from "./copy";

interface HeaderProps {
  onRequestAssessment: () => void;
}

export default function Header({ onRequestAssessment }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = footerContent.links.filter((l) => l.href.startsWith("#"));

  return (
    <motion.header
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className={`fixed left-0 right-0 top-0 z-[60] transition-all duration-300 ${
        scrolled
          ? "border-b border-[var(--color-border)] bg-[var(--color-bg)]/90 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1120px] items-center justify-between px-6 md:px-8">
        {/* Logo */}
        <a
          href="#hero"
          className="flex items-center gap-2.5"
        >
          <img src="/logo.png" alt={siteConfig.name} className="h-24 w-auto opacity-70" />
          <span className="text-sm font-semibold tracking-tight text-[var(--color-text-primary)]">
            Future Ready Studio
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-text-primary)]"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={onRequestAssessment}
            className="btn-shine rounded-xl bg-[var(--color-text-primary)] px-4 py-2 text-[13px] font-medium text-white transition-all hover:bg-[#111C33] hover:shadow-md active:scale-[0.97]"
          >
            See If It&apos;s a Fit
          </button>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex h-8 w-8 items-center justify-center md:hidden"
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          >
            {mobileMenuOpen ? (
              <>
                <path d="M4 4l10 10" />
                <path d="M14 4L4 14" />
              </>
            ) : (
              <>
                <path d="M2 5h14" />
                <path d="M2 9h14" />
                <path d="M2 13h14" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-b border-[var(--color-border)] bg-[var(--color-bg)] md:hidden"
          >
            <nav className="flex flex-col gap-3 px-6 pb-6" aria-label="Mobile navigation">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-1 text-sm text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-text-primary)]"
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onRequestAssessment();
                }}
                className="mt-2 w-full rounded-xl bg-[var(--color-text-primary)] px-4 py-2.5 text-sm font-medium text-white"
              >
                See If It&apos;s a Fit
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
