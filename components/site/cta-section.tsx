import type { SiteDictionary } from "@/data/site-copy";

export function CtaSection({ dictionary }: { dictionary: SiteDictionary }) {
  return (
    <section className="cta-panel section-card">
      <div>
        <p className="section-kicker">{dictionary.closing.eyebrow}</p>
        <h2>{dictionary.closing.title}</h2>
        <p className="section-copy">{dictionary.closing.copy}</p>
      </div>

      <div className="cta-actions">
        <a className="button primary" href="mailto:hello@oneatlaz.com">
          {dictionary.closing.primaryCta}
        </a>
        <a className="button secondary" href="mailto:hello@oneatlaz.com">
          {dictionary.closing.secondaryCta}
        </a>
      </div>
    </section>
  );
}
