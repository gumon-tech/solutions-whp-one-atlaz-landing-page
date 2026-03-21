"use client";

import { useState } from "react";

import type { SiteDictionary } from "@/data/site-copy";

export function CtaSection({ dictionary }: { dictionary: SiteDictionary }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(dictionary.closing.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  return (
    <section className="cta-panel section-card">
      <div className="cta-copy">
        <p className="section-kicker">{dictionary.closing.eyebrow}</p>
        <h2>{dictionary.closing.title}</h2>
        <p className="section-copy">{dictionary.closing.copy}</p>
      </div>

      <div className="contact-shell">
        <p className="contact-prompt">{dictionary.closing.prompt}</p>

        <div className="contact-action-row">
          <div className="contact-email-pill">{dictionary.closing.email}</div>
          <button className="button primary contact-copy-button" onClick={handleCopy} type="button">
            {dictionary.closing.primaryCta}
          </button>
        </div>

        <p className="contact-feedback" aria-live="polite">
          {copied ? dictionary.closing.copied : dictionary.closing.email}
        </p>
      </div>
    </section>
  );
}
