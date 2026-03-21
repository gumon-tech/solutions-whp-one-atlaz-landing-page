import Image from "next/image";

import type { SiteDictionary } from "@/data/site-copy";
import type { Locale } from "@/lib/i18n";

export function CapabilitiesSection({
  locale,
  dictionary
}: {
  locale: Locale;
  dictionary: SiteDictionary;
}) {
  return (
    <section className="section-card" id="capabilities">
      <div className="section-heading">
        <div>
          <p className="section-kicker">{dictionary.capabilities.eyebrow}</p>
          <h2>{dictionary.capabilities.title}</h2>
        </div>
        <p className="section-copy section-copy-compact">{dictionary.capabilities.intro}</p>
      </div>

      <div className="capability-layout">
        <div className="capability-grid">
          {dictionary.capabilities.items.map((item) => (
            <article className="info-card" key={item.title}>
              <p className="card-index">{item.title}</p>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>

        <div className="photo-frame photo-frame-tall">
          <Image
            alt={locale === "th" ? "ภาพเมืองภูเก็ตย่านเมืองเก่า" : "Phuket old town"}
            className="section-photo"
            fill
            sizes="(max-width: 960px) 100vw, 36vw"
            src="/thailand-scenes/phuket-old-town.jpg"
          />
          <div className="photo-overlay" />
        </div>
      </div>
    </section>
  );
}
