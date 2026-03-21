import type { SiteDictionary } from "@/data/site-copy";

import { IconMark } from "./icon-mark";

export function SiteFooter({ dictionary }: { dictionary: SiteDictionary }) {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <div className="brand">
          <IconMark />
          <div className="brand-copy">
            <strong>One Atlaz</strong>
            <span>{dictionary.footer.sourceLabel}</span>
          </div>
        </div>
      </div>

      <p className="footer-summary">{dictionary.footer.summary}</p>

      <div className="footer-contact">
        <span>{dictionary.footer.contactLabel}</span>
        <a href={`mailto:${dictionary.footer.contactValue}`}>{dictionary.footer.contactValue}</a>
      </div>
    </footer>
  );
}
