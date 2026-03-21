import Image from "next/image";

import type { SiteDictionary } from "@/data/site-copy";
import type { Locale } from "@/lib/i18n";

export function WorkflowSection({
  locale,
  dictionary
}: {
  locale: Locale;
  dictionary: SiteDictionary;
}) {
  return (
    <section className="section-card workflow-shell" id="workflow">
      <div className="section-heading">
        <div>
          <p className="section-kicker">{dictionary.workflow.eyebrow}</p>
          <h2>{dictionary.workflow.title}</h2>
        </div>
        <p className="section-copy section-copy-compact">{dictionary.workflow.intro}</p>
      </div>

      <div className="workflow-layout">
        <div className="photo-frame photo-frame-wide">
          <Image
            alt={locale === "th" ? "ภาพชายหาดพัทยา" : "Pattaya beach"}
            className="section-photo"
            fill
            sizes="(max-width: 960px) 100vw, 42vw"
            src="/thailand-scenes/pattaya-beach.jpg"
          />
          <div className="photo-overlay" />
        </div>

        <div className="step-grid">
          {dictionary.workflow.steps.map((step, index) => (
            <article className="step-card" key={step.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{step.title}</h3>
              <p>{step.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
