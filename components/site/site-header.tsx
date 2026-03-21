import Link from "next/link";

import type { SiteDictionary } from "@/data/site-copy";
import type { Locale } from "@/lib/i18n";

import { IconMark } from "./icon-mark";
import { LanguageSwitch } from "./language-switch";

export function SiteHeader({
  locale,
  dictionary
}: {
  locale: Locale;
  dictionary: SiteDictionary;
}) {
  return (
    <header className="topbar">
      <Link className="brand" href={`/${locale}`}>
        <IconMark />
        <div className="brand-copy">
          <strong>One Atlaz</strong>
          <span>{dictionary.nav.tagline}</span>
        </div>
      </Link>

      <nav className="site-nav" aria-label={dictionary.nav.languageLabel}>
        {dictionary.nav.links.map((link) => (
          <a className="site-nav-link" href={link.href} key={link.href}>
            {link.label}
          </a>
        ))}
      </nav>

      <LanguageSwitch locale={locale} />
    </header>
  );
}
