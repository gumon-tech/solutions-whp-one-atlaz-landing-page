import Image from "next/image";

import type { SiteDictionary } from "@/data/site-copy";
import type { Locale } from "@/lib/i18n";

export function OverviewSection({
  locale,
  dictionary
}: {
  locale: Locale;
  dictionary: SiteDictionary;
}) {
  return (
    <section className="content-grid section-card" id="overview">
      <div className="section-body">
        <p className="section-kicker">{dictionary.overview.eyebrow}</p>
        <h2>{dictionary.overview.title}</h2>
        <p className="section-copy">{dictionary.overview.copy}</p>
        <div className="bullet-list">
          {dictionary.overview.points.map((item) => (
            <div className="bullet-item" key={item}>
              <span className="bullet-dot" />
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="visual-stack">
        <div className="photo-frame photo-frame-mid">
          <Image
            alt={locale === "th" ? "ภาพมุมสูงกรุงเทพมหานครริมแม่น้ำ" : "Bangkok aerial view by the river"}
            className="section-photo"
            fill
            sizes="(max-width: 960px) 100vw, 44vw"
            src="/scene-crops/overview-bangkok-aerial-16x10.jpg"
          />
          <div className="photo-overlay" />
        </div>
        <div className="inline-note">
          <strong>{locale === "th" ? "Find the place. Read the signal." : "Find the place. Read the signal."}</strong>
          <p>{locale === "th" ? "Move with conviction." : "Move with conviction."}</p>
        </div>
      </div>
    </section>
  );
}
