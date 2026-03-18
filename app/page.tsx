"use client";

import { useEffect, useState } from "react";

type Locale = "en" | "th";

const imagery = {
  hero:
    "https://images.unsplash.com/photo-1638403286066-3ff648656a6a?auto=format&fit=crop&w=1800&q=80",
  intro:
    "https://images.unsplash.com/photo-1593058097945-4c6c8d09a6b1?auto=format&fit=crop&w=1800&q=80",
  narrative:
    "https://images.unsplash.com/photo-1757847112131-759d64e3466e?auto=format&fit=crop&w=1800&q=80",
  preview:
    "https://images.unsplash.com/photo-1745244732535-594682ee2523?auto=format&fit=crop&w=1800&q=80",
  pillars:
    "https://images.unsplash.com/photo-1698400603302-f16ad7688c6f?auto=format&fit=crop&w=1800&q=80",
  layers:
    "https://images.unsplash.com/photo-1677742331938-d826409dd889?auto=format&fit=crop&w=1800&q=80",
  workflow:
    "https://images.unsplash.com/photo-1724906019868-93ad2c79414f?auto=format&fit=crop&w=1800&q=80",
  audience:
    "https://images.unsplash.com/photo-1746021375306-9dec0f637732?auto=format&fit=crop&w=1800&q=80",
  closing:
    "https://images.unsplash.com/photo-1764083079454-27e446a6d4bc?auto=format&fit=crop&w=1800&q=80"
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
    navTagline: "The Location Economy Platform",
    hero: {
      eyebrow: "One Platform. One Map.",
      title: "See the city as opportunity.",
      lead:
        "One Atlaz brings together spatial intelligence, market activity, place-based content, and deal execution in one platform.",
      primaryCta: "Explore Platform",
      secondaryCta: "Get Early Access",
      chips: ["Spatial Intelligence", "Market Activity", "Place Content", "Deal Execution"],
      metrics: [
        { value: "Map-led", label: "Business intelligence" },
        { value: "End-to-end", label: "From discovery to execution" },
        { value: "Traceable", label: "Documents and deal progress" }
      ],
      signalKicker: "Opportunity View",
      signalTitle: "Map, market, and deal activity",
      trustKicker: "Content",
      trustTitle: "Place-based stories and updates",
      mapLabelLeft: "Global Platform",
      mapLabelRight: "Bangkok / APAC"
    },
    intro: {
      kicker: "Why Teams Choose One Atlaz",
      title: "One map for land, market, and deal activity.",
      copy:
        "One Atlaz helps teams find opportunities faster, compare locations with confidence, and move deals forward in one place.",
      quote: "Find it, assess it, move on it.",
      manifestoKicker: "Why It Works",
      manifestoTitle: "Everything your team needs, connected in one platform.",
      manifestoCopy:
        "Land data, market movement, place-based content, and deal progress stay connected from the first search to the final decision."
    },
    narrative: {
      kicker: "How It Works",
      title: "Search faster. Evaluate better. Move sooner.",
      visualLabelLeft: "City View",
      visualLabelRight: "Map x Market x Deal",
      steps: [
        {
          index: "01",
          title: "Search by place",
          description: "Start with parcels, corridors, density, and access to narrow the right locations faster."
        },
        {
          index: "02",
          title: "Compare with confidence",
          description: "Review zoning, infrastructure, and market movement side by side before you commit time or capital."
        },
        {
          index: "03",
          title: "Move the deal forward",
          description: "Share information, align teams, and keep deal progress moving without leaving the platform."
        }
      ]
    },
    preview: {
      kicker: "Platform Overview",
      title: "A clearer way to work with location-based opportunity.",
      copy:
        "See land data, planning context, and deal activity in one view so your team can make faster, better-informed decisions.",
      topbarLeft: "One Atlaz Workspace",
      topbarRight: "Live Opportunity View",
      stats: [
        { value: "Parcel", label: "Land boundary and lot visibility" },
        { value: "Zoning", label: "Planning, regulation, and urban context" },
        { value: "Deals", label: "Documents, negotiation, and deal traceability" }
      ]
    },
    pillarsKicker: "What You Can Do",
    pillars: [
      {
        index: "01",
        title: "Map Intelligence",
        description: "View parcels, infrastructure, and city information in one map-based workspace."
      },
      {
        index: "02",
        title: "Market Discovery",
        description: "Find opportunities faster with structured listings and place-based search."
      },
      {
        index: "03",
        title: "Content and Trust",
        description: "Present each opportunity with the context and updates people need to act."
      },
      {
        index: "04",
        title: "Deal Operations",
        description: "Keep documents, communication, and progress organized from first contact to close."
      }
    ],
    layers: {
      kicker: "Everything in One Place",
      title: "The data your team needs, connected in one view.",
      meta: ["Parcel Structure", "Zoning Context", "Market Signals"],
      summary:
        "Bring land, planning, market, and deal information together so teams can work from the same picture.",
      whyLabel: "Why teams use it",
      why:
        "Instead of switching between disconnected tools, teams can review opportunities, share information, and move work forward in one platform.",
      items: [
        "Parcel and land boundaries",
        "Urban planning and zoning",
        "Infrastructure and future development projects",
        "Market listings and organization data",
        "Pinned content and place-based updates",
        "Deal status, documents, and payment events"
      ]
    },
    workflow: {
      kicker: "From Search to Deal",
      title: "Go from first look to next step without losing momentum.",
      steps: [
        {
          index: "01",
          title: "Discover",
          description: "Search by place, parcel, or area to find the opportunities worth reviewing first."
        },
        {
          index: "02",
          title: "Understand",
          description: "Review planning, infrastructure, market information, and updates before making a call."
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
      title: "Built for teams working across land, investment, development, and sales.",
      items: ["Land Owners", "Investors", "Developers", "Brokers", "Creators", "Enterprise Teams"]
    },
    audiences: {
      items: [
        {
          label: "Owners",
          text: "Present assets clearly, control disclosures, and turn serious interest into active deals."
        },
        {
          label: "Investors",
          text: "Assess opportunities faster with land, market, and transaction information in one place."
        },
        {
          label: "Developers",
          text: "Evaluate land potential, communicate projects, and move development plans with better information."
        },
        {
          label: "Operators",
          text: "Keep teams aligned across maps, listings, content, and deal progress."
        }
      ]
    },
    closing: {
      kicker: "Get Started",
      title: "For teams working with place, data, and opportunity.",
      copy:
        "One Atlaz brings map context, market movement, and deal progress into one interface.",
      accessKicker: "Contact",
      accessTitle: "Request early access.",
      accessCopy:
        "For investors, land owners, developers, and strategic partners exploring location-based opportunity.",
      emailPrompt:
        "For early access, demo inquiries, or strategic partnership conversations, please email",
      cta: "Copy email",
      copied: "Email copied"
    },
    footer: {
      tagline: "A clearer interface for location-based opportunity.",
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
    navTagline: "แพลตฟอร์มเศรษฐกิจเชิงพื้นที่",
    hero: {
      eyebrow: "หนึ่งแพลตฟอร์ม หนึ่งแผนที่",
      title: "มองเมืองให้เป็นโอกาส",
      lead:
        "One Atlaz รวมข้อมูลทำเล ความเคลื่อนไหวของตลาด คอนเทนต์ที่อิงกับสถานที่ และการขับเคลื่อนดีลไว้ในแพลตฟอร์มเดียว",
      primaryCta: "สำรวจแพลตฟอร์ม",
      secondaryCta: "ขอเข้าใช้งานก่อน",
      chips: ["ข้อมูลเชิงพื้นที่", "ความเคลื่อนไหวของตลาด", "คอนเทนต์ตามสถานที่", "การขับเคลื่อนดีล"],
      metrics: [
        { value: "เริ่มจากแผนที่", label: "มองภาพธุรกิจผ่านข้อมูลเชิงพื้นที่" },
        { value: "เชื่อมครบวงจร", label: "จากการค้นหาไปสู่การขับเคลื่อนจริง" },
        { value: "ตรวจสอบย้อนหลังได้", label: "เอกสาร สถานะ และความคืบหน้าของดีล" }
      ],
      signalKicker: "ภาพรวมโอกาส",
      signalTitle: "แผนที่ ตลาด และความเคลื่อนไหวของดีล",
      trustKicker: "คอนเทนต์",
      trustTitle: "เรื่องราวและอัปเดตที่ผูกกับพื้นที่จริง",
      mapLabelLeft: "แพลตฟอร์มระดับสากล",
      mapLabelRight: "กรุงเทพฯ / เอเชียแปซิฟิก"
    },
    intro: {
      kicker: "เหตุผลที่ทีมเลือก One Atlaz",
      title: "แผนที่เดียว\nสำหรับที่ดิน\nตลาด และดีล",
      copy:
        "One Atlaz ช่วยให้ทีมค้นหาโอกาสได้เร็วขึ้น เปรียบเทียบทำเลได้มั่นใจขึ้น และขยับดีลต่อได้ในที่เดียว",
      quote: "หาให้เจอ ประเมินให้ชัด แล้วเดินหน้าต่อ",
      manifestoKicker: "ทำไมถึงตอบโจทย์",
      manifestoTitle: "ทุกอย่างที่ทีมต้องใช้ เชื่อมต่อกันในแพลตฟอร์มเดียว",
      manifestoCopy:
        "ข้อมูลที่ดิน ความเคลื่อนไหวของตลาด คอนเทนต์ และความคืบหน้าของดีลเชื่อมต่อกันตั้งแต่การค้นหาครั้งแรกจนถึงการตัดสินใจ"
    },
    narrative: {
      kicker: "วิธีใช้งาน",
      title: "ค้นหาไว ประเมินแม่น และเดินหน้าต่อได้เร็ว",
      visualLabelLeft: "ภาพรวมเมือง",
      visualLabelRight: "แผนที่ x ตลาด x ดีล",
      steps: [
        {
          index: "01",
          title: "ค้นหาจากทำเล",
          description: "เริ่มจากแปลงที่ดิน แนวเส้นทาง ความหนาแน่น และการเข้าถึง เพื่อคัดกรองพื้นที่ที่ควรดูต่อ"
        },
        {
          index: "02",
          title: "เปรียบเทียบได้มั่นใจ",
          description: "ดูผังเมือง โครงสร้างพื้นฐาน และความเคลื่อนไหวของตลาดควบคู่กันก่อนตัดสินใจ"
        },
        {
          index: "03",
          title: "ขยับดีลต่อได้ทันที",
          description: "แชร์ข้อมูล ประสานทีม และเดินหน้าดีลต่อได้โดยไม่ต้องสลับเครื่องมือ"
        }
      ]
    },
    preview: {
      kicker: "ภาพรวมแพลตฟอร์ม",
      title: "วิธีที่ชัดกว่าในการทำงานกับโอกาสตามทำเล",
      copy:
        "เห็นข้อมูลที่ดิน ผังเมือง และความเคลื่อนไหวของดีลในมุมมองเดียว เพื่อให้ทีมตัดสินใจได้เร็วและแม่นยำขึ้น",
      topbarLeft: "ศูนย์ควบคุม One Atlaz",
      topbarRight: "มุมมองโอกาสแบบเรียลไทม์",
      stats: [
        { value: "แปลงที่ดิน", label: "เห็นขอบเขตแปลงและข้อมูลที่ดินได้ชัดเจน" },
        { value: "ผังเมือง", label: "อ่านข้อกำหนด กติกา และบริบทของพื้นที่" },
        { value: "ดีล", label: "เชื่อมเอกสาร การเจรจา และสถานะของงาน" }
      ]
    },
    pillarsKicker: "สิ่งที่ทำได้",
    pillars: [
      {
        index: "01",
        title: "ความฉลาดของแผนที่",
        description: "ดูแปลงที่ดิน โครงสร้างพื้นฐาน และข้อมูลเมืองบนแผนที่เดียวกัน"
      },
      {
        index: "02",
        title: "การค้นพบตลาด",
        description: "ค้นหาโอกาสได้เร็วขึ้นด้วยรายการทรัพย์และการค้นหาที่อิงกับทำเล"
      },
      {
        index: "03",
        title: "คอนเทนต์และความน่าเชื่อถือ",
        description: "นำเสนอแต่ละโอกาสด้วยข้อมูลและอัปเดตที่ช่วยให้ตัดสินใจได้ง่ายขึ้น"
      },
      {
        index: "04",
        title: "การขับเคลื่อนดีล",
        description: "จัดการเอกสาร การสื่อสาร และความคืบหน้าของดีลตั้งแต่ต้นจนจบ"
      }
    ],
    layers: {
      kicker: "ทุกข้อมูลในที่เดียว",
      title: "ข้อมูลที่ทีมต้องใช้ เชื่อมต่อกันในมุมมองเดียว",
      meta: ["ตรรกะของแปลง", "ชั้นข้อมูลผังเมือง", "บริบทของตลาด"],
      summary:
        "รวมข้อมูลที่ดิน ผังเมือง ตลาด และดีลไว้ด้วยกัน เพื่อให้ทุกคนทำงานจากภาพเดียวกัน",
      whyLabel: "เหตุผลที่ทีมเลือกใช้",
      why:
        "แทนที่จะสลับหลายเครื่องมือ ทีมสามารถดูโอกาส แชร์ข้อมูล และเดินหน้างานต่อได้ในแพลตฟอร์มเดียว",
      items: [
        "ขอบเขตแปลงและข้อมูลที่ดิน",
        "ผังเมืองและข้อกำหนดการใช้ประโยชน์ที่ดิน",
        "โครงสร้างพื้นฐานและโครงการอนาคต",
        "ข้อมูลตลาดและข้อมูลองค์กร",
        "คอนเทนต์ที่ปักหมุดบนแผนที่",
        "สถานะดีล เอกสาร และเหตุการณ์ทางการเงิน"
      ]
    },
    workflow: {
      kicker: "จากการค้นหาสู่การทำดีล",
      title: "ดูโอกาสแรกจนถึงขั้นตอนถัดไปได้ต่อเนื่อง",
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
      title: "สร้างมาสำหรับทีมที่ทำงานกับที่ดิน การลงทุน การพัฒนา และการขาย",
      items: ["เจ้าของที่ดิน", "นักลงทุน", "นักพัฒนา", "โบรกเกอร์", "ครีเอเตอร์", "ทีมองค์กร"]
    },
    audiences: {
      items: [
        {
          label: "เจ้าของทรัพย์",
          text: "นำเสนอทรัพย์ให้ชัด ควบคุมการเปิดเผยข้อมูล และเปลี่ยนความสนใจจริงให้กลายเป็นดีล"
        },
        {
          label: "นักลงทุน",
          text: "ประเมินโอกาสได้เร็วขึ้นด้วยข้อมูลที่ดิน ข้อมูลตลาด และความพร้อมของธุรกรรมในที่เดียว"
        },
        {
          label: "นักพัฒนา",
          text: "ประเมินศักยภาพที่ดิน สื่อสารโครงการ และเดินหน้าแผนพัฒนาด้วยข้อมูลที่พร้อมกว่า"
        },
        {
          label: "ทีมปฏิบัติการ",
          text: "ทำให้ทีมทำงานตรงกันระหว่างแผนที่ รายการทรัพย์ คอนเทนต์ และความคืบหน้าของดีล"
        }
      ]
    },
    closing: {
      kicker: "เริ่มต้นกับ One Atlaz",
      title: "สำหรับทีมที่ต้องการเห็นโอกาสเร็วขึ้นและขยับดีลได้ชัดขึ้น",
      copy:
        "One Atlaz รวมข้อมูลแผนที่ ตลาด และดีลไว้ในที่เดียว เพื่อให้ทีมตัดสินใจและเดินหน้างานได้เร็วขึ้น",
      accessKicker: "ติดต่อเรา",
      accessTitle: "ขอเข้าใช้งานก่อน",
      accessCopy:
        "สำหรับนักลงทุน เจ้าของที่ดิน นักพัฒนา และพันธมิตรที่ต้องการทำงานกับโอกาสตามทำเลได้ชัดเจนขึ้น",
      emailPrompt:
        "หากต้องการขอสิทธิ์เข้าใช้งาน ขอเดโม หรือพูดคุยเรื่องความร่วมมือ กรุณาส่งอีเมลมาที่",
      cta: "คัดลอกอีเมล",
      copied: "คัดลอกอีเมลแล้ว"
    },
    footer: {
      tagline: "อินเทอร์เฟซที่ชัดกว่า สำหรับการทำงานกับโอกาสตามทำเล",
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

      <section className="section intro-panel section-tone-warm" id="platform">
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

      <section className="section narrative-panel section-tone-neutral">
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

      <section className="section preview-panel section-tone-cool" id="preview">
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

      <section className="section pillar-shell section-tone-neutral">
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

      <section className="section layers-panel section-tone-warm" id="layers">
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

      <section className="section workflow-panel section-tone-cool">
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

      <section className="section audience-panel section-tone-neutral">
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

      <section className="section closing-panel section-tone-warm" id="waitlist">
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
