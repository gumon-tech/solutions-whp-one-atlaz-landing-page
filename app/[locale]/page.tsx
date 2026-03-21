import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { AudienceSection } from "@/components/site/audience-section";
import { CapabilitiesSection } from "@/components/site/capabilities-section";
import { CtaSection } from "@/components/site/cta-section";
import { HeroSection } from "@/components/site/hero-section";
import { OverviewSection } from "@/components/site/overview-section";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { WorkflowSection } from "@/components/site/workflow-section";
import { siteCopy } from "@/data/site-copy";
import { isLocale, locales, type Locale } from "@/lib/i18n";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const dictionary = siteCopy[locale];

  return {
    title: dictionary.meta.title,
    description: dictionary.meta.description,
    openGraph: {
      title: dictionary.meta.title,
      description: dictionary.meta.description,
      images: ["/og-image.svg"]
    },
    twitter: {
      card: "summary_large_image",
      title: dictionary.meta.title,
      description: dictionary.meta.description,
      images: ["/og-image.svg"]
    }
  };
}

export default async function LocalePage({ params }: PageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const dictionary = siteCopy[locale as Locale];

  return (
    <main className={`page-shell locale-${locale}`}>
      <SiteHeader dictionary={dictionary} locale={locale as Locale} />
      <HeroSection dictionary={dictionary} locale={locale as Locale} />
      <OverviewSection dictionary={dictionary} locale={locale as Locale} />
      <CapabilitiesSection dictionary={dictionary} locale={locale as Locale} />
      <WorkflowSection dictionary={dictionary} locale={locale as Locale} />
      <AudienceSection dictionary={dictionary} />
      <CtaSection dictionary={dictionary} />
      <SiteFooter dictionary={dictionary} />
    </main>
  );
}
