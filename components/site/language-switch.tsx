import Link from "next/link";

import type { Locale } from "@/lib/i18n";

export function LanguageSwitch({ locale }: { locale: Locale }) {
  return (
    <div className="locale-switch" aria-label={locale === "th" ? "สลับภาษา" : "Language switcher"}>
      <Link className={locale === "th" ? "locale-button active" : "locale-button"} href="/th">
        TH
      </Link>
      <Link className={locale === "en" ? "locale-button active" : "locale-button"} href="/en">
        EN
      </Link>
    </div>
  );
}
