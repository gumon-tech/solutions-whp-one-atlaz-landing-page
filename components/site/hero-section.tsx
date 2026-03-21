import Image from "next/image";

import type { SiteDictionary } from "@/data/site-copy";
import type { Locale } from "@/lib/i18n";

export function HeroSection({
  locale,
  dictionary
}: {
  locale: Locale;
  dictionary: SiteDictionary;
}) {
  return (
    <section className="hero-panel section-card">
      <div className="hero-copy">
        <p className="eyebrow">{dictionary.hero.eyebrow}</p>
        <h1>{dictionary.hero.title}</h1>
        <p className="section-copy section-copy-large">{dictionary.hero.lead}</p>

        <div className="hero-actions">
          <a className="button primary" href="mailto:hello@oneatlaz.com">
            {dictionary.hero.primaryCta}
          </a>
          <a className="button secondary" href="#capabilities">
            {dictionary.hero.secondaryCta}
          </a>
        </div>

        <div className="chip-row" aria-label={locale === "th" ? "ความสามารถหลัก" : "Core highlights"}>
          {dictionary.hero.highlights.map((item) => (
            <span className="chip" key={item}>
              {item}
            </span>
          ))}
        </div>

        <div className="stat-grid">
          {dictionary.hero.stats.map((stat) => (
            <article className="stat-card" key={stat.value}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </article>
          ))}
        </div>
      </div>

      <div className="hero-visual">
        <div className="photo-frame photo-frame-hero">
          <Image
            alt={locale === "th" ? "ภาพเส้นขอบฟ้ากรุงเทพมหานคร" : "Bangkok skyline"}
            className="section-photo"
            fill
            priority
            sizes="(max-width: 960px) 100vw, 48vw"
            src="/thailand-scenes/bangkok-skyline.jpg"
          />
          <div className="photo-overlay" />
          <div className="floating-card floating-card-main">
            <p>{dictionary.hero.visualTitle}</p>
          </div>
          <div className="floating-card floating-card-side">
            <p>{dictionary.hero.visualCopy}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
