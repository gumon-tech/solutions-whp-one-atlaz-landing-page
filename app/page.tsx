"use client";

import { useEffect, useState } from "react";

type Locale = "en" | "th";

const imagery = {
  hero: "/city-scenes/hero-bangkok-night.jpg",
  intro: "/city-scenes/intro-bangkok-aerial.jpg",
  narrative: "/city-scenes/narrative-bangkok-skyline.jpg",
  preview: "/city-scenes/preview-bangkok-river.jpg",
  pillars: "/city-scenes/pillars-pattaya-coast.jpg",
  layers: "/city-scenes/layers-bangkok-dusk.jpg",
  workflow: "/city-scenes/workflow-bangkok-lights.jpg",
  audience: "/city-scenes/audience-phuket-town.jpg",
  closing: "/city-scenes/closing-pattaya-evening.jpg"
};

type Dictionary = {
  navTagline: string;
  hero: {
    eyebrow: string;
    title: string;
    lead: string;
    primaryCta: string;
    secondaryCta: string;
    chips: string[];
    metrics: Array<{ value: string; label: string }>;
    signalKicker: string;
    signalTitle: string;
    trustKicker: string;
    trustTitle: string;
    mapLabelLeft: string;
    mapLabelRight: string;
  };
  intro: {
    kicker: string;
    title: string;
    copy: string;
    quote: string;
    manifestoKicker: string;
    manifestoTitle: string;
    manifestoCopy: string;
  };
  narrative: {
    kicker: string;
    title: string;
    visualLabelLeft: string;
    visualLabelRight: string;
    steps: Array<{ index: string; title: string; description: string }>;
  };
  preview: {
    kicker: string;
    title: string;
    copy: string;
    topbarLeft: string;
    topbarRight: string;
    stats: Array<{ value: string; label: string }>;
  };
  pillarsKicker: string;
  pillars: Array<{ index: string; title: string; description: string }>;
  layers: {
    kicker: string;
    title: string;
    meta: string[];
    summary: string;
    whyLabel: string;
    why: string;
    items: string[];
  };
  workflow: {
    kicker: string;
    title: string;
    steps: Array<{ index: string; title: string; description: string }>;
  };
  ecosystem: {
    kicker: string;
    title: string;
    items: string[];
  };
  audiences: {
    items: Array<{ label: string; text: string }>;
  };
  closing: {
    kicker: string;
    title: string;
    copy: string;
    accessKicker: string;
    accessTitle: string;
    accessCopy: string;
    emailPrompt: string;
    cta: string;
    copied: string;
  };
  footer: {
    tagline: string;
    navLabel: string;
    links: Array<{ label: string; href: string }>;
    contactLabel: string;
    contactValue: string;
    copyright: string;
  };
};

const dictionaries: Record<Locale, Dictionary> = {
  en: {
    navTagline: "Location Intelligence, Refined",
    hero: {
      eyebrow: "Location Intelligence, Composed",
      title: "See the city as opportunity.",
      lead:
        "One Atlaz brings land intelligence, market movement, place context, and deal coordination into a single, map-first operating layer.",
      primaryCta: "View Platform",
      secondaryCta: "Request Access",
      chips: ["Spatial Intelligence", "Market Signals", "Place Context", "Deal Execution"],
      metrics: [
        { value: "Map-Led", label: "Intelligence for land and place" },
        { value: "End-to-End", label: "From first search to next step" },
        { value: "Traceable", label: "Documents, decisions, and deal flow" }
      ],
      signalKicker: "Opportunity View",
      signalTitle: "Map, market, and deal movement",
      trustKicker: "Context Layer",
      trustTitle: "Stories, updates, and local signal",
      mapLabelLeft: "One Atlaz Platform",
      mapLabelRight: "Bangkok / APAC"
    },
    intro: {
      kicker: "Why Teams Choose One Atlaz",
      title: "One map for land, market, and deal flow.",
      copy:
        "It gives teams a clearer way to locate opportunity, evaluate context, and keep momentum from insight to action.",
      quote: "Find the place. Read the signal. Move with conviction.",
      manifestoKicker: "Why It Works",
      manifestoTitle: "A calmer, clearer system for location-based decisions.",
      manifestoCopy:
        "Land data, market context, place narrative, and deal progress remain connected from first review to final decision."
    },
    narrative: {
      kicker: "How It Works",
      title: "Search with precision. Evaluate with clarity. Move with speed.",
      visualLabelLeft: "Urban View",
      visualLabelRight: "Map x Market x Deal",
      steps: [
        {
          index: "01",
          title: "Start with geography",
          description: "Use parcels, corridors, density, and access to narrow the field before time is lost."
        },
        {
          index: "02",
          title: "Read the full picture",
          description: "Review zoning, infrastructure, and market movement side by side before you commit capital or attention."
        },
        {
          index: "03",
          title: "Advance with alignment",
          description: "Share information, coordinate decisions, and move the deal forward without leaving the platform."
        }
      ]
    },
    preview: {
      kicker: "Platform Overview",
      title: "A more composed way to work with location-based opportunity.",
      copy:
        "See land data, planning context, market movement, and active deal work in one view so decisions arrive earlier and with more confidence.",
      topbarLeft: "One Atlaz Workspace",
      topbarRight: "Live Opportunity Layer",
      stats: [
        { value: "Parcel", label: "Boundaries, lots, and site structure" },
        { value: "Zoning", label: "Planning rules and urban context" },
        { value: "Deals", label: "Documents, coordination, and progress" }
      ]
    },
    pillarsKicker: "Platform Capabilities",
    pillars: [
      {
        index: "01",
        title: "Map Intelligence",
        description: "Review parcels, infrastructure, and city context in one map-based workspace."
      },
      {
        index: "02",
        title: "Market Discovery",
        description: "Surface opportunities faster with structured listings and place-based search."
      },
      {
        index: "03",
        title: "Narrative and Trust",
        description: "Present each opportunity with the context and updates serious teams need to act."
      },
      {
        index: "04",
        title: "Deal Operations",
        description: "Keep documents, coordination, and progress organized from first contact to close."
      }
    ],
    layers: {
      kicker: "Everything in One Place",
      title: "The layers your team needs, arranged in one view.",
      meta: ["Parcel Structure", "Planning Context", "Market Signals"],
      summary:
        "Bring land, planning, market, and deal intelligence together so every team can work from the same picture.",
      whyLabel: "Why it matters",
      why:
        "Instead of switching between disconnected tools, teams can review opportunity, share context, and progress work inside one system.",
      items: [
        "Parcel and land boundaries",
        "Planning policy and zoning",
        "Infrastructure and future development projects",
        "Market listings and organization data",
        "Pinned notes and place-based updates",
        "Deal status, documents, and payment events"
      ]
    },
    workflow: {
      kicker: "From Search to Deal",
      title: "Go from first review to next move without losing momentum.",
      steps: [
        {
          index: "01",
          title: "Discover",
          description: "Search by place, parcel, or district to identify the opportunities worth reviewing first."
        },
        {
          index: "02",
          title: "Understand",
          description: "Review planning, infrastructure, market information, and updates before making the call."
        },
        {
          index: "03",
          title: "Activate",
          description: "Share documents, coordinate conversations, and keep the deal moving with a clear next step."
        }
      ]
    },
    ecosystem: {
      kicker: "Who It's For",
      title: "Built for teams working across land, investment, development, and brokerage.",
      items: ["Land Owners", "Investors", "Developers", "Brokers", "Advisors", "Enterprise Teams"]
    },
    audiences: {
      items: [
        {
          label: "Owners",
          text: "Present assets with control, manage disclosures carefully, and turn serious interest into active deals."
        },
        {
          label: "Investors",
          text: "Assess opportunities faster with land, market, and transaction intelligence in one place."
        },
        {
          label: "Developers",
          text: "Evaluate land potential, communicate projects, and move development plans with better context."
        },
        {
          label: "Operators",
          text: "Keep teams aligned across maps, listings, place context, and deal progress."
        }
      ]
    },
    closing: {
      kicker: "Early Access",
      title: "For teams working at the intersection of place, capital, and timing.",
      copy:
        "One Atlaz brings map context, market movement, and deal progress into one composed interface.",
      accessKicker: "Contact",
      accessTitle: "Request private access.",
      accessCopy:
        "For investors, land owners, developers, brokers, and strategic partners exploring location-based opportunity.",
      emailPrompt:
        "For early access, demo inquiries, or strategic partnership conversations, email",
      cta: "Copy Address",
      copied: "Email copied"
    },
    footer: {
      tagline: "A more composed interface for location-based opportunity.",
      navLabel: "Navigate",
      links: [
        { label: "Platform", href: "#platform" },
        { label: "Overview", href: "#preview" },
        { label: "Access", href: "#waitlist" }
      ],
      contactLabel: "Contact",
      contactValue: "hello@oneatlaz.com",
      copyright: "© 2026 One Atlaz. All rights reserved."
    }
  },
  th: {
    navTagline: "ปัญญาเชิงพื้นที่ ในรูปแบบที่ชัดกว่า",
    hero: {
      eyebrow: "ปัญญาเชิงพื้นที่ ในระบบเดียว",
      title: "มองเมืองให้เป็นโอกาส",
      lead:
        "One Atlaz รวมข้อมูลที่ดิน สัญญาณตลาด บริบทของพื้นที่ และการประสานงานเรื่องดีลไว้ใน operating layer ที่เริ่มจากแผนที่",
      primaryCta: "ดูแพลตฟอร์ม",
      secondaryCta: "ขอสิทธิ์ใช้งาน",
      chips: ["ข้อมูลเชิงพื้นที่", "สัญญาณตลาด", "บริบทของพื้นที่", "การขับเคลื่อนดีล"],
      metrics: [
        { value: "เริ่มจากแผนที่", label: "อ่านศักยภาพของที่ดินและพื้นที่" },
        { value: "เชื่อมครบวงจร", label: "จากการดูครั้งแรกสู่ขั้นตอนถัดไป" },
        { value: "ตรวจสอบย้อนหลังได้", label: "เอกสาร การตัดสินใจ และความคืบหน้าของดีล" }
      ],
      signalKicker: "ภาพรวมโอกาส",
      signalTitle: "แผนที่ ตลาด และการเคลื่อนตัวของดีล",
      trustKicker: "ชั้นข้อมูลบริบท",
      trustTitle: "เรื่องราว อัปเดต และสัญญาณจากพื้นที่",
      mapLabelLeft: "One Atlaz Platform",
      mapLabelRight: "กรุงเทพฯ / เอเชียแปซิฟิก"
    },
    intro: {
      kicker: "เหตุผลที่ทีมเลือก One Atlaz",
      title: "แผนที่เดียว\nสำหรับที่ดิน\nตลาด และดีล",
      copy:
        "ช่วยให้ทีมมองหาโอกาส อ่านบริบท และขับเคลื่อนงานต่อได้ในระบบที่นิ่งและชัดกว่าเดิม",
      quote: "หาพื้นที่ที่ใช่ อ่านสัญญาณให้ครบ แล้วเดินหน้าด้วยความมั่นใจ",
      manifestoKicker: "ทำไมถึงตอบโจทย์",
      manifestoTitle: "ระบบที่สงบ ชัด และพร้อมสำหรับการตัดสินใจจากทำเล",
      manifestoCopy:
        "ข้อมูลที่ดิน บริบทตลาด เรื่องราวของพื้นที่ และความคืบหน้าของดีลเชื่อมต่อกันตั้งแต่การค้นหาครั้งแรกจนถึงการตัดสินใจ"
    },
    narrative: {
      kicker: "วิธีใช้งาน",
      title: "ค้นหาอย่างแม่นยำ ประเมินอย่างชัดเจน และเดินหน้าต่อได้เร็ว",
      visualLabelLeft: "มุมมองเมือง",
      visualLabelRight: "แผนที่ x ตลาด x ดีล",
      steps: [
        {
          index: "01",
          title: "เริ่มจากภูมิศาสตร์",
          description: "ใช้แปลงที่ดิน แนวเส้นทาง ความหนาแน่น และการเข้าถึง เพื่อคัดกรองพื้นที่ก่อนเสียเวลาไปกับสิ่งที่ไม่ใช่"
        },
        {
          index: "02",
          title: "อ่านภาพรวมให้ครบ",
          description: "ดูผังเมือง โครงสร้างพื้นฐาน และความเคลื่อนไหวของตลาดควบคู่กันก่อนใช้ทั้งเวลาและเงินทุน"
        },
        {
          index: "03",
          title: "เดินหน้าด้วยความพร้อม",
          description: "แชร์ข้อมูล ประสานการตัดสินใจ และขยับดีลต่อได้โดยไม่ต้องสลับเครื่องมือ"
        }
      ]
    },
    preview: {
      kicker: "ภาพรวมแพลตฟอร์ม",
      title: "วิธีที่สุขุมและชัดกว่าในการทำงานกับโอกาสตามทำเล",
      copy:
        "เห็นข้อมูลที่ดิน ผังเมือง สัญญาณตลาด และความเคลื่อนไหวของดีลในมุมมองเดียว เพื่อให้การตัดสินใจเกิดได้เร็วขึ้นและมั่นใจขึ้น",
      topbarLeft: "ศูนย์ควบคุม One Atlaz",
      topbarRight: "ชั้นข้อมูลโอกาสแบบสด",
      stats: [
        { value: "แปลงที่ดิน", label: "ขอบเขต ล็อต และโครงสร้างของที่ดิน" },
        { value: "ผังเมือง", label: "กติกาเมืองและบริบทการพัฒนา" },
        { value: "ดีล", label: "เอกสาร การประสานงาน และความคืบหน้า" }
      ]
    },
    pillarsKicker: "ขีดความสามารถของแพลตฟอร์ม",
    pillars: [
      {
        index: "01",
        title: "ความฉลาดของแผนที่",
        description: "ดูแปลงที่ดิน โครงสร้างพื้นฐาน และบริบทของเมืองบนแผนที่เดียวกัน"
      },
      {
        index: "02",
        title: "การค้นพบตลาด",
        description: "ค้นหาโอกาสได้เร็วขึ้นด้วยรายการทรัพย์และการค้นหาที่อิงกับทำเล"
      },
      {
        index: "03",
        title: "บริบทและความน่าเชื่อถือ",
        description: "นำเสนอแต่ละโอกาสด้วยข้อมูล อัปเดต และบริบทที่ช่วยให้ตัดสินใจได้เร็วขึ้น"
      },
      {
        index: "04",
        title: "การขับเคลื่อนดีล",
        description: "จัดการเอกสาร การประสานงาน และความคืบหน้าของดีลตั้งแต่ต้นจนจบ"
      }
    ],
    layers: {
      kicker: "ทุกข้อมูลในที่เดียว",
      title: "ชั้นข้อมูลที่ทีมต้องใช้ ถูกจัดวางไว้ในมุมมองเดียว",
      meta: ["โครงสร้างแปลง", "บริบทการวางผัง", "สัญญาณตลาด"],
      summary:
        "รวมข้อมูลที่ดิน ผังเมือง ตลาด และดีลไว้ด้วยกัน เพื่อให้ทุกทีมทำงานจากภาพเดียวกัน",
      whyLabel: "ทำไมสิ่งนี้สำคัญ",
      why:
        "แทนที่จะสลับหลายเครื่องมือ ทีมสามารถดูโอกาส แชร์บริบท และเดินหน้างานต่อได้ในระบบเดียว",
      items: [
        "ขอบเขตแปลงและข้อมูลที่ดิน",
        "ผังเมืองและข้อกำหนดการใช้ประโยชน์ที่ดิน",
        "โครงสร้างพื้นฐานและโครงการอนาคต",
        "ข้อมูลตลาดและข้อมูลองค์กร",
        "โน้ตและอัปเดตที่ปักหมุดบนแผนที่",
        "สถานะดีล เอกสาร และเหตุการณ์ทางการเงิน"
      ]
    },
    workflow: {
      kicker: "จากการค้นหาสู่การทำดีล",
      title: "จากการดูครั้งแรก ไปสู่การขยับครั้งถัดไปอย่างไม่สะดุด",
      steps: [
        {
          index: "01",
          title: "ค้นหา",
          description: "ค้นหาด้วยพื้นที่ แปลงที่ดิน หรือย่านที่น่าสนใจ เพื่อเจอโอกาสที่ควรดูต่อก่อน"
        },
        {
          index: "02",
          title: "ทำความเข้าใจ",
          description: "ดูผังเมือง โครงสร้างพื้นฐาน ข้อมูลตลาด และอัปเดตที่เกี่ยวข้องก่อนตัดสินใจ"
        },
        {
          index: "03",
          title: "ขับเคลื่อน",
          description: "แชร์เอกสาร ประสานการทำงาน และพาดีลไปสู่ขั้นตอนถัดไปอย่างชัดเจน"
        }
      ]
    },
    ecosystem: {
      kicker: "เหมาะสำหรับ",
      title: "สร้างมาสำหรับทีมที่ทำงานกับที่ดิน การลงทุน การพัฒนา และงานนายหน้า",
      items: ["เจ้าของที่ดิน", "นักลงทุน", "นักพัฒนา", "โบรกเกอร์", "ที่ปรึกษา", "ทีมองค์กร"]
    },
    audiences: {
      items: [
        {
          label: "เจ้าของทรัพย์",
          text: "นำเสนอทรัพย์อย่างมีชั้นเชิง ควบคุมการเปิดเผยข้อมูล และเปลี่ยนความสนใจจริงให้กลายเป็นดีล"
        },
        {
          label: "นักลงทุน",
          text: "ประเมินโอกาสได้เร็วขึ้นด้วยข้อมูลที่ดิน สัญญาณตลาด และความพร้อมของธุรกรรมในที่เดียว"
        },
        {
          label: "นักพัฒนา",
          text: "ประเมินศักยภาพที่ดิน สื่อสารโครงการ และเดินหน้าแผนพัฒนาด้วยบริบทที่พร้อมกว่า"
        },
        {
          label: "ทีมปฏิบัติการ",
          text: "ทำให้ทีมทำงานตรงกันระหว่างแผนที่ รายการทรัพย์ บริบทของพื้นที่ และความคืบหน้าของดีล"
        }
      ]
    },
    closing: {
      kicker: "Early Access",
      title: "สำหรับทีมที่ทำงานอยู่ตรงจุดตัดของทำเล เงินทุน และจังหวะเวลา",
      copy:
        "One Atlaz รวมข้อมูลแผนที่ ตลาด และดีลไว้ในอินเทอร์เฟซที่นิ่ง ชัด และพร้อมสำหรับการตัดสินใจ",
      accessKicker: "ติดต่อเรา",
      accessTitle: "ขอสิทธิ์เข้าใช้งานแบบ private access",
      accessCopy:
        "สำหรับนักลงทุน เจ้าของที่ดิน นักพัฒนา โบรกเกอร์ และพันธมิตรที่ต้องการทำงานกับโอกาสตามทำเลได้ชัดเจนขึ้น",
      emailPrompt:
        "หากต้องการขอสิทธิ์เข้าใช้งาน ขอเดโม หรือพูดคุยเรื่องความร่วมมือ กรุณาส่งอีเมลมาที่",
      cta: "คัดลอกอีเมล",
      copied: "คัดลอกอีเมลแล้ว"
    },
    footer: {
      tagline: "อินเทอร์เฟซที่สุขุมและชัดกว่า สำหรับการทำงานกับโอกาสตามทำเล",
      navLabel: "ไปยังส่วนต่าง ๆ",
      links: [
        { label: "แพลตฟอร์ม", href: "#platform" },
        { label: "ภาพรวม", href: "#preview" },
        { label: "ขอเข้าใช้งาน", href: "#waitlist" }
      ],
      contactLabel: "ติดต่อ",
      contactValue: "hello@oneatlaz.com",
      copyright: "© 2026 One Atlaz สงวนลิขสิทธิ์"
    }
  }
};

function LogoMark() {
  return (
    <svg
      aria-hidden="true"
      className="brand-mark"
      viewBox="0 0 72 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="4" y="4" width="64" height="64" rx="20" className="brand-mark-base" />
      <path
        d="M18 46.5L36 18L54 46.5H46.8L36 29.1L25.2 46.5H18Z"
        className="brand-mark-fill"
      />
      <path d="M22 50H50" className="brand-mark-line" />
      <path d="M16 56H56" className="brand-mark-line-soft" />
    </svg>
  );
}

function renderTitle(title: string) {
  const lines = title.split("\n");
  const className = lines.length > 1 ? "title-line title-line-locked" : "title-line";

  return lines.map((line, index) => (
    <span className={className} key={`${line}-${index}`}>
      {line}
    </span>
  ));
}

export default function Home() {
  const [locale, setLocale] = useState<Locale>("en");
  const [copied, setCopied] = useState(false);
  const t = dictionaries[locale];
  const heroTitle =
    locale === "th" ? "มองเมือง\nให้เป็นโอกาส" : "See the city\nas opportunity.";

  useEffect(() => {
    document.documentElement.lang = locale === "th" ? "th" : "en";
  }, [locale]);

  async function handleCopyEmail() {
    try {
      await navigator.clipboard.writeText("hello@oneatlaz.com");
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  return (
    <main className={`page-shell locale-${locale}`}>
      <header className="topbar">
        <a
          className="brand"
          href="#top"
          aria-label={locale === "th" ? "หน้าแรก One Atlaz" : "One Atlaz home"}
        >
          <LogoMark />
          <div className="brand-copy">
            <strong>One Atlaz</strong>
            <span>{t.navTagline}</span>
          </div>
        </a>

        <div
          className="locale-switch"
          aria-label={locale === "th" ? "สลับภาษา" : "Language switcher"}
        >
          <button
            className={locale === "en" ? "locale-button active" : "locale-button"}
            onClick={() => setLocale("en")}
            type="button"
          >
            EN
          </button>
          <button
            className={locale === "th" ? "locale-button active" : "locale-button"}
            onClick={() => setLocale("th")}
            type="button"
          >
            TH
          </button>
        </div>
      </header>

      <section className="hero hero-grid section-tone-hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">{t.hero.eyebrow}</p>
          <h1>{renderTitle(heroTitle)}</h1>
          <p className="lead">{t.hero.lead}</p>

          <div className="actions">
            <a className="button primary" href="#preview">
              {t.hero.primaryCta}
            </a>
            <a className="button secondary" href="#waitlist">
              {t.hero.secondaryCta}
            </a>
          </div>

          <div
            className="hero-strip"
            aria-label={locale === "th" ? "ความสามารถหลักของแพลตฟอร์ม" : "Platform capabilities"}
          >
            {t.hero.chips.map((chip) => (
              <span key={chip}>{chip}</span>
            ))}
          </div>

          <div className="metric-row">
            {t.hero.metrics.map((metric) => (
              <article className="metric-card" key={metric.value}>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </article>
            ))}
          </div>
        </div>

        <div className="hero-stage" aria-hidden="true">
          <div className="hero-glow hero-glow-a" />
          <div className="hero-glow hero-glow-b" />
          <div className="hero-map">
            <img className="hero-photo" src={imagery.hero} alt="" />
            <div className="hero-photo-overlay" />
            <div className="map-label map-label-left">{t.hero.mapLabelLeft}</div>
            <div className="map-label map-label-right">{t.hero.mapLabelRight}</div>
            <div className="hero-contour contour-one" />
            <div className="hero-contour contour-two" />
            <div className="hero-contour contour-three" />
            <div className="hero-route route-a" />
            <div className="hero-route route-b" />
            <div className="hero-node node-alpha" />
            <div className="hero-node node-beta" />
            <div className="hero-node node-gamma" />
            <div className="parcel parcel-a" />
            <div className="parcel parcel-b" />
            <div className="signal-card signal-main">
              <span className="signal-kicker">{t.hero.signalKicker}</span>
              <strong>{t.hero.signalTitle}</strong>
            </div>
            <div className="signal-card signal-side">
              <span className="signal-kicker">{t.hero.trustKicker}</span>
              <strong>{t.hero.trustTitle}</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-soft intro-panel section-tone-warm" id="platform">
        <div className="statement-block">
          <p className="section-kicker">{t.intro.kicker}</p>
          <h2 className="title-intro">{renderTitle(t.intro.title)}</h2>
          <p className="section-copy">{t.intro.copy}</p>
          <blockquote className="quote-card">{t.intro.quote}</blockquote>
        </div>
        <div className="statement-side">
          <div className="section-media-card intro-media" aria-hidden="true">
            <img className="section-photo" src={imagery.intro} alt="" />
            <div className="section-photo-overlay" />
          </div>
          <div className="manifesto-inline">
            <p className="section-kicker">{t.intro.manifestoKicker}</p>
            <h3>{t.intro.manifestoTitle}</h3>
            <p className="section-copy">{t.intro.manifestoCopy}</p>
          </div>
        </div>
      </section>

      <section className="section section-feature narrative-panel section-tone-neutral">
        <div className="narrative-sticky">
          <div className="narrative-visual">
            <div className="narrative-visual-header">
              <span>{t.narrative.visualLabelLeft}</span>
              <span>{t.narrative.visualLabelRight}</span>
            </div>
            <img className="scene-image" src={imagery.narrative} alt="" />
            <div className="scene-overlay" />
          </div>
        </div>

        <div className="narrative-flow">
          <p className="section-kicker">{t.narrative.kicker}</p>
          <h2 className="title-narrative">{t.narrative.title}</h2>
          <div className="narrative-steps">
            {t.narrative.steps.map((step) => (
              <article className="narrative-card" key={step.index}>
                <span>{step.index}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-feature preview-panel section-tone-cool" id="preview">
        <div className="preview-copy">
          <p className="section-kicker">{t.preview.kicker}</p>
          <h2 className="title-preview">{t.preview.title}</h2>
          <p className="section-copy">{t.preview.copy}</p>
        </div>

        <div className="preview-board" aria-hidden="true">
          <div className="preview-topbar">
            <span>{t.preview.topbarLeft}</span>
            <span>{t.preview.topbarRight}</span>
          </div>
          <div className="preview-asset-frame">
            <img className="preview-asset" src={imagery.preview} alt="" />
          </div>
          <div className="preview-body">
            <div className="preview-map">
              <div className="preview-ring ring-one" />
              <div className="preview-ring ring-two" />
              <div className="preview-scan" />
              <div className="preview-marker marker-one" />
              <div className="preview-marker marker-two" />
              <div className="preview-marker marker-three" />
            </div>
            <div className="preview-sidebar">
              {t.preview.stats.map((stat) => (
                <div className="preview-stat" key={stat.value}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section-soft pillar-shell section-tone-neutral">
        <div className="section-headline">
          <p className="section-kicker">{t.pillarsKicker}</p>
        </div>
        <div className="pillar-top">
          <div className="pillar-stack">
            <article className="panel-card feature-large" key={t.pillars[0].title}>
              <p className="panel-index">{t.pillars[0].index}</p>
              <h3>{t.pillars[0].title}</h3>
              <p>{t.pillars[0].description}</p>
            </article>
            <article className="panel-card pillar-support" key={t.pillars[1].title}>
              <p className="panel-index">{t.pillars[1].index}</p>
              <h3>{t.pillars[1].title}</h3>
              <p>{t.pillars[1].description}</p>
            </article>
            {t.pillars.slice(2).map((pillar) => (
              <article className="panel-card pillar-support" key={pillar.title}>
                <p className="panel-index">{pillar.index}</p>
                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>
              </article>
            ))}
          </div>
          <div className="section-media-card pillar-banner" aria-hidden="true">
            <img className="section-photo" src={imagery.pillars} alt="" />
            <div className="section-photo-overlay" />
          </div>
        </div>
      </section>

      <section className="section section-soft layers-panel section-tone-warm" id="layers">
        <div className="layers-top">
          <div className="layers-head">
            <p className="section-kicker">{t.layers.kicker}</p>
            <h2 className="title-layers">{t.layers.title}</h2>
            <div className="layers-meta">
              {t.layers.meta.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <p className="layers-copy">{t.layers.summary}</p>
          </div>

          <div className="layers-side">
            <div className="layers-visual" aria-hidden="true">
              <img className="section-photo" src={imagery.layers} alt="" />
              <div className="section-photo-overlay" />
              <div className="layers-visual-grid" />
              <div className="layers-visual-orbit orbit-primary" />
              <div className="layers-visual-orbit orbit-secondary" />
              <div className="layers-visual-line" />
              <div className="layers-visual-node node-one" />
              <div className="layers-visual-node node-two" />
              <div className="layers-visual-node node-three" />
            </div>

            <article className="panel-card panel-emphasis">
              <p className="mini-label">{t.layers.whyLabel}</p>
              <p className="statement">{t.layers.why}</p>
            </article>
          </div>
        </div>

        <div className="layers-grid">
          <div className="layer-list">
            {t.layers.items.map((layer) => (
              <div className="layer-item" key={layer}>
                <span className="layer-dot" />
                <span>{layer}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft workflow-panel section-tone-cool">
        <div className="workflow-top">
          <div className="workflow-head">
            <p className="section-kicker">{t.workflow.kicker}</p>
            <h2 className="title-workflow">{t.workflow.title}</h2>
          </div>
          <div className="section-media-card workflow-visual" aria-hidden="true">
            <img className="section-photo" src={imagery.workflow} alt="" />
            <div className="section-photo-overlay" />
          </div>
        </div>

        <div className="journey-grid">
          {t.workflow.steps.map((step) => (
            <article className="journey-card" key={step.title}>
              <span>{step.index}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-soft audience-panel section-tone-neutral">
        <div className="audience-top">
          <div className="section-headline">
            <p className="section-kicker">{t.ecosystem.kicker}</p>
            <h2 className="title-audience">{t.ecosystem.title}</h2>
            <div
              className="partner-strip"
              aria-label={locale === "th" ? "กลุ่มผู้ใช้งานและพันธมิตร" : "Audience and partner types"}
            >
              {t.ecosystem.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
          <div className="audience-side">
            <div className="section-media-card audience-visual" aria-hidden="true">
              <img className="section-photo" src={imagery.audience} alt="" />
              <div className="section-photo-overlay" />
            </div>
          </div>
        </div>
        <div className="audience-grid">
          {t.audiences.items.map((audience) => (
            <article className="audience-card" key={audience.label}>
              <h3>{audience.label}</h3>
              <p>{audience.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-feature closing-panel section-tone-warm" id="waitlist">
        <div className="closing-top">
          <div className="closing-copy">
            <p className="section-kicker">{t.closing.kicker}</p>
            <h2 className="title-closing">{t.closing.title}</h2>
            <p className="section-copy">{t.closing.copy}</p>
          </div>
          <div className="section-media-card closing-visual" aria-hidden="true">
            <img className="section-photo" src={imagery.closing} alt="" />
            <div className="section-photo-overlay" />
          </div>
        </div>

        <div className="waitlist-card">
          <div className="closing-story">
            <div>
              <p className="mini-label">{t.closing.accessKicker}</p>
              <h3>{t.closing.accessTitle}</h3>
              <p className="section-copy">{t.closing.accessCopy}</p>
            </div>
          </div>

          <div className="contact-card">
            <p className="contact-copy">{t.closing.emailPrompt}</p>
            <div className="email-copy-row">
              <code className="email-pill">hello@oneatlaz.com</code>
              <button className="button primary submit-button" type="button" onClick={handleCopyEmail}>
                {t.closing.cta}
              </button>
            </div>
            <p className="copy-feedback" aria-live="polite">
              {copied ? t.closing.copied : "hello@oneatlaz.com"}
            </p>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-brand">
          <a
            className="brand footer-brand-link"
            href="#top"
            aria-label={locale === "th" ? "กลับไปด้านบน" : "Back to top"}
          >
            <LogoMark />
            <div className="brand-copy">
              <strong>One Atlaz</strong>
              <span>{t.navTagline}</span>
            </div>
          </a>
          <p className="footer-tagline">{t.footer.tagline}</p>
          <p className="footer-copy-feedback">{t.footer.copyright}</p>
        </div>

        <nav className="footer-column" aria-label={t.footer.navLabel}>
          <p className="footer-label">{t.footer.navLabel}</p>
          <div className="footer-links">
            {t.footer.links.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
        </nav>

        <div className="footer-column">
          <p className="footer-label">{t.footer.contactLabel}</p>
          <button className="footer-email" type="button" onClick={handleCopyEmail}>
            {t.footer.contactValue}
          </button>
          <p className="footer-email-status" aria-live="polite">
            {copied ? t.closing.copied : "\u00A0"}
          </p>
        </div>
      </footer>
    </main>
  );
}
