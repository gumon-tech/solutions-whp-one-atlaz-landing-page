import type { SiteDictionary } from "@/data/site-copy";

export function AudienceSection({ dictionary }: { dictionary: SiteDictionary }) {
  return (
    <section className="section-card" id="audiences">
      <div className="section-heading">
        <div>
          <p className="section-kicker">{dictionary.audiences.eyebrow}</p>
          <h2>{dictionary.audiences.title}</h2>
        </div>
        <p className="section-copy section-copy-compact">{dictionary.audiences.intro}</p>
      </div>

      <div className="audience-grid">
        {dictionary.audiences.items.map((item) => (
          <article className="audience-card" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
