"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { formConfig, siteConfig } from "./copy";

interface AssessmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AssessmentModal({
  isOpen,
  onClose,
}: AssessmentModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    role: "",
    arrRange: "",
    productType: "",
    concern: "",
  });

  const handleClose = useCallback(() => {
    onClose();
    setTimeout(() => setSubmitted(false), 300);
  }, [onClose]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEsc);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen, handleClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const mailtoLink = `mailto:${siteConfig.email}?subject=Assessment%20Request%20-%20${encodeURIComponent(formData.company)}&body=${encodeURIComponent(
    `Name: ${formData.name}\nCompany: ${formData.company}\nRole: ${formData.role}\nARR Range: ${formData.arrRange}\nProduct Type: ${formData.productType}\nBiggest Concern: ${formData.concern}`
  )}`;

  const inputClasses =
    "w-full rounded-xl border border-[var(--color-border)] bg-white px-4 py-3 text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-muted-2)] outline-none transition-colors focus:border-[var(--color-a1)] focus:ring-2 focus:ring-[rgba(46,196,182,0.2)]";
  const labelClasses =
    "mb-1.5 block text-sm font-medium text-[var(--color-text-primary)]";

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          onClick={handleClose}
          role="dialog"
          aria-modal="true"
          aria-label="Request an assessment"
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative z-10 w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl bg-white p-8 shadow-xl"
          >
            {/* Close */}
            <button
              onClick={handleClose}
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-[var(--color-text-tertiary)] transition-colors hover:bg-[var(--color-bg-panel)] hover:text-[var(--color-text-primary)]"
              aria-label="Close modal"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              >
                <path d="M4 4l8 8M12 4l-8 8" />
              </svg>
            </button>

            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <h3 className="text-xl font-semibold text-[var(--color-text-primary)]">
                    See If It&apos;s a Fit
                  </h3>
                  <p className="mt-1 text-sm text-[var(--color-text-secondary)]">
                    Tell us about your product. We&apos;ll follow up within 2
                    business days.
                  </p>

                  <form
                    onSubmit={handleSubmit}
                    className="mt-6 space-y-4"
                  >
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className={labelClasses}>
                          Name
                        </label>
                        <input
                          id="name"
                          type="text"
                          required
                          className={inputClasses}
                          placeholder="Jane Smith"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className={labelClasses}>
                          Company
                        </label>
                        <input
                          id="company"
                          type="text"
                          required
                          className={inputClasses}
                          placeholder="Acme SaaS"
                          value={formData.company}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              company: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="role" className={labelClasses}>
                        Role
                      </label>
                      <input
                        id="role"
                        type="text"
                        required
                        className={inputClasses}
                        placeholder="CEO, VP Product, CTO..."
                        value={formData.role}
                        onChange={(e) =>
                          setFormData({ ...formData, role: e.target.value })
                        }
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="arrRange" className={labelClasses}>
                          ARR Range
                        </label>
                        <select
                          id="arrRange"
                          required
                          className={inputClasses}
                          value={formData.arrRange}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              arrRange: e.target.value,
                            })
                          }
                        >
                          <option value="">Select...</option>
                          {formConfig.arrRanges.map((r) => (
                            <option key={r.value} value={r.value}>
                              {r.label}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="productType" className={labelClasses}>
                          Product Type
                        </label>
                        <select
                          id="productType"
                          required
                          className={inputClasses}
                          value={formData.productType}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              productType: e.target.value,
                            })
                          }
                        >
                          <option value="">Select...</option>
                          {formConfig.productTypes.map((t) => (
                            <option key={t.value} value={t.value}>
                              {t.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="concern" className={labelClasses}>
                        Biggest concern about AI in your product
                      </label>
                      <textarea
                        id="concern"
                        required
                        rows={3}
                        className={`${inputClasses} resize-none`}
                        placeholder="What keeps you up at night regarding AI and your product?"
                        value={formData.concern}
                        onChange={(e) =>
                          setFormData({ ...formData, concern: e.target.value })
                        }
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn-shine mt-2 w-full rounded-xl bg-[var(--color-text-primary)] px-6 py-3 text-sm font-medium text-white transition-all hover:bg-[#111C33] hover:shadow-md active:scale-[0.98]"
                    >
                      Submit Request
                    </button>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="py-8 text-center"
                >
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-a5)]">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="var(--color-a1)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--color-text-primary)]">
                    Request received.
                  </h3>
                  <p className="mx-auto mt-2 max-w-sm text-sm text-[var(--color-text-secondary)]">
                    We&apos;ll review your submission and follow up within 2
                    business days to discuss fit and next steps.
                  </p>

                  <div className="mt-6 space-y-3">
                    <a
                      href={mailtoLink}
                      className="inline-flex items-center gap-2 rounded-xl border border-[var(--color-border)] px-5 py-2.5 text-sm font-medium text-[var(--color-text-primary)] transition-colors hover:bg-[var(--color-bg-panel)]"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect x="1" y="3" width="14" height="10" rx="2" />
                        <path d="M1 5l7 4 7-4" />
                      </svg>
                      Send via email as backup
                    </a>
                    <p className="text-[13px] text-[var(--color-text-tertiary)]">
                      Or email us directly at{" "}
                      <a
                        href={`mailto:${siteConfig.email}`}
                        className="underline"
                      >
                        {siteConfig.email}
                      </a>
                    </p>
                  </div>

                  <button
                    onClick={handleClose}
                    className="mt-6 text-sm text-[var(--color-text-tertiary)] transition-colors hover:text-[var(--color-text-secondary)]"
                  >
                    Close
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
