import type { SiteDictionary } from "@/data/site-copy";
import type { Locale } from "@/lib/i18n";

import { IconMark } from "./icon-mark";

export function SiteFooter({
  dictionary,
  locale
}: {
  dictionary: SiteDictionary;
  locale: Locale;
}) {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-brand-block">
          <div className="brand">
            <IconMark />
            <div className="brand-copy">
              <strong>One Atlaz</strong>
              <span>{dictionary.footer.sourceLabel}</span>
            </div>
          </div>
          <p className="footer-summary">{dictionary.footer.summary}</p>
        </div>

        <nav
          className="footer-nav"
          aria-label={locale === "th" ? "ลิงก์ภายในเว็บไซต์" : "Footer navigation"}
        >
          <p className="footer-heading">{locale === "th" ? "Explore" : "Explore"}</p>
          <div className="footer-link-list">
            {dictionary.nav.links.map((link) => (
              <a href={link.href} key={link.href}>
                {link.label}
              </a>
            ))}
          </div>
        </nav>

        <div className="footer-contact-card">
          <p className="footer-heading">{dictionary.footer.contactLabel}</p>
          <a className="footer-email-pill" href={`mailto:${dictionary.footer.contactValue}`}>
            {dictionary.footer.contactValue}
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>{locale === "th" ? "© 2026 One Atlaz. สงวนลิขสิทธิ์" : "© 2026 One Atlaz. All rights reserved."}</span>
        <span>{locale === "th" ? "Location intelligence, composed." : "Location intelligence, composed."}</span>
      </div>
    </footer>
  );
}
