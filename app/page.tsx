"use client";

import { useEffect, useState } from "react";

type Locale = "en" | "th";

const imagery = {
  hero:
    "https://images.unsplash.com/photo-1638403286066-3ff648656a6a?auto=format&fit=crop&w=1800&q=80",
  narrative:
    "https://images.unsplash.com/photo-1757847112131-759d64e3466e?auto=format&fit=crop&w=1800&q=80",
  preview:
    "https://images.unsplash.com/photo-1745244732535-594682ee2523?auto=format&fit=crop&w=1800&q=80"
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
  };
  manifesto: {
    kicker: string;
    title: string;
    copy: string;
  };
  narrative: {
    kicker: string;
    title: string;
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
    kicker: string;
    title: string;
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
};

const dictionaries: Record<Locale, Dictionary> = {
  en: {
    navTagline: "The Location Economy Platform",
    hero: {
      eyebrow: "One Platform. One Map.",
      title: "See the city as opportunity.",
      lead:
        "One Atlaz is a global-first location economy platform connecting spatial intelligence, marketplace activity, place-based content, and deal flow in one operating system.",
      primaryCta: "Explore Platform",
      secondaryCta: "Request Access",
      chips: ["Spatial Data", "Marketplace", "Content Layer", "Deal Flow"],
      metrics: [
        { value: "Map-native", label: "Business intelligence" },
        { value: "Cross-pillar", label: "Discovery to execution" },
        { value: "Traceable", label: "Documents and workflow" }
      ],
      signalKicker: "Location Signal",
      signalTitle: "Map + data + deal context",
      trustKicker: "Trust Layer",
      trustTitle: "Content anchored to place",
      mapLabelLeft: "Global Layer",
      mapLabelRight: "Bangkok / APAC"
    },
    intro: {
      kicker: "Strategic Positioning",
      title: "A location platform, not another listing portal.",
      copy:
        "The brand should feel like infrastructure for business movement. One Atlaz helps operators understand context, identify opportunity, and move work forward on one shared location layer.",
      quote: "The map is not a background. It is the operating surface."
    },
    manifesto: {
      kicker: "Brand Frame",
      title: "Built like an intelligence product. Framed like a global brand.",
      copy:
        "The visual system should project precision, confidence, and modern urban depth, never generic proptech. This is where parcel logic, market narrative, and transaction gravity meet."
    },
    narrative: {
      kicker: "Scroll Narrative",
      title: "Move through the city as layers become conviction.",
      steps: [
        {
          index: "01",
          title: "Spatial Context",
          description: "Start with parcels, corridors, density, and access. Let geography frame the first question."
        },
        {
          index: "02",
          title: "Urban Signal",
          description: "Overlay zoning, planning momentum, and infrastructure to see what the market is not yet pricing correctly."
        },
        {
          index: "03",
          title: "Business Action",
          description: "Carry that insight into content, communication, and deal workflow without leaving the platform."
        }
      ]
    },
    preview: {
      kicker: "Signature Experience",
      title: "A homepage that feels like market intelligence, not marketplace clutter.",
      copy:
        "The first screen must establish three things immediately: One Atlaz understands geography, it is designed for serious operators, and it can move a user from insight to action.",
      topbarLeft: "One Atlaz Console",
      topbarRight: "Live Opportunity Surface",
      stats: [
        { value: "Parcel", label: "Land boundary and lot visibility" },
        { value: "Zoning", label: "Planning, regulation, and urban context" },
        { value: "Deals", label: "Documents, negotiation, and workflow traceability" }
      ]
    },
    pillarsKicker: "Platform Pillars",
    pillars: [
      {
        index: "01",
        title: "Map Intelligence",
        description: "Read parcels, infrastructure, and urban context as one operational layer."
      },
      {
        index: "02",
        title: "Market Discovery",
        description: "Move from search to opportunity with structured listings and location-aware discovery."
      },
      {
        index: "03",
        title: "Content and Trust",
        description: "Turn place-based content into attention, credibility, and qualified lead flow."
      },
      {
        index: "04",
        title: "Deal Operations",
        description: "Bring negotiation, documents, and business workflow into a traceable system."
      }
    ],
    layers: {
      kicker: "Data Architecture",
      title: "Multiple layers, one operational surface.",
      why:
        "When location becomes the shared reference point, discovery, analysis, communication, and transactions stop living in separate tools.",
      items: [
        "Parcel and land boundaries",
        "Urban planning and zoning",
        "Infrastructure and future development projects",
        "Market listings and organization data",
        "Pinned content and location feed",
        "Deal status, documents, and payment events"
      ]
    },
    workflow: {
      kicker: "Workflow",
      title: "From discovery to deal, in one narrative.",
      steps: [
        {
          index: "01",
          title: "Discover",
          description: "Search by place, parcel, corridor, or signal-rich area instead of generic keywords alone."
        },
        {
          index: "02",
          title: "Understand",
          description: "Overlay planning, infrastructure, market, and content signals to frame the real opportunity."
        },
        {
          index: "03",
          title: "Activate",
          description: "Open communication, exchange documents, and turn intent into a structured business workflow."
        }
      ]
    },
    ecosystem: {
      kicker: "Ecosystem Fit",
      title: "Designed for the people who shape land, markets, and local narratives.",
      items: ["Land Owners", "Investors", "Developers", "Brokers", "Creators", "Enterprise Teams"]
    },
    audiences: {
      kicker: "Built For",
      title: "Decision-makers across the location economy.",
      items: [
        {
          label: "Owners",
          text: "Present assets with context, control disclosure, and move serious interest into workflow."
        },
        {
          label: "Investors",
          text: "See opportunity through data layers, market signals, and transaction readiness."
        },
        {
          label: "Developers",
          text: "Evaluate land potential, communicate projects, and activate campaigns tied to place."
        },
        {
          label: "Operators",
          text: "Keep teams aligned across map, marketplace, content, and deal execution."
        }
      ]
    },
    closing: {
      kicker: "Closing Frame",
      title: "The interface for place-based opportunity at global scale.",
      copy:
        "Dark, map-native, and precise. One Atlaz should feel less like a website and more like a control layer for urban opportunity.",
      accessKicker: "Request Access",
      accessTitle: "Join the early access conversation.",
      accessCopy:
        "For investors, land owners, developers, and strategic partners who want a clearer way to understand and activate location-based opportunity.",
      emailPrompt:
        "For request access, demo inquiries, or strategic partnership conversations, please email",
      cta: "Copy Email",
      copied: "Email copied"
    }
  },
  th: {
    navTagline: "The Location Economy Platform",
    hero: {
      eyebrow: "One Platform. One Map.",
      title: "มองเมืองให้เป็นโอกาส",
      lead:
        "One Atlaz คือแพลตฟอร์มเศรษฐกิจเชิงพื้นที่ที่เชื่อม spatial intelligence, marketplace, place-based content และ deal flow ไว้ใน operating system เดียวกัน",
      primaryCta: "สำรวจแพลตฟอร์ม",
      secondaryCta: "Request Access",
      chips: ["Spatial Data", "Marketplace", "Content Layer", "Deal Flow"],
      metrics: [
        { value: "Map-native", label: "Business intelligence" },
        { value: "Cross-pillar", label: "จาก discovery สู่ execution" },
        { value: "Traceable", label: "เอกสารและ workflow" }
      ],
      signalKicker: "Location Signal",
      signalTitle: "Map + data + deal context",
      trustKicker: "Trust Layer",
      trustTitle: "Content anchored to place",
      mapLabelLeft: "Global Layer",
      mapLabelRight: "Bangkok / APAC"
    },
    intro: {
      kicker: "Strategic Positioning",
      title: "นี่คือ location platform ไม่ใช่เว็บประกาศทั่วไป",
      copy:
        "ภาพลักษณ์ของ One Atlaz ควรให้ความรู้สึกเหมือนโครงสร้างพื้นฐานสำหรับการขับเคลื่อนธุรกิจ ไม่ใช่เพียงพื้นที่แสดงรายการทรัพย์ แต่เป็นระบบที่ช่วยให้ผู้ใช้งานเข้าใจบริบท เห็นโอกาส และทำงานต่อบน location layer เดียวกัน",
      quote: "แผนที่ไม่ใช่พื้นหลัง แต่มันคือผิวการทำงานของทั้งแพลตฟอร์ม"
    },
    manifesto: {
      kicker: "Brand Frame",
      title: "ต้องมีความเป็น intelligence product และ global brand พร้อมกัน",
      copy:
        "งานภาพต้องสื่อความแม่นยำ ความมั่นใจ และความลึกเชิงเมืองแบบร่วมสมัย ไม่ควรดูเป็น proptech ทั่วไป แต่ต้องรู้สึกว่าข้อมูลที่ดิน ตลาด และธุรกรรมมาบรรจบกันบนระบบเดียว"
    },
    narrative: {
      kicker: "Scroll Narrative",
      title: "เลื่อนผ่านเมือง เห็นข้อมูลค่อย ๆ กลายเป็นความมั่นใจในการตัดสินใจ",
      steps: [
        {
          index: "01",
          title: "Spatial Context",
          description: "เริ่มจาก parcel, corridor, ความหนาแน่น และการเข้าถึง ให้ภูมิศาสตร์เป็นตัวตั้งของคำถามแรก"
        },
        {
          index: "02",
          title: "Urban Signal",
          description: "ซ้อน zoning, planning momentum และโครงสร้างพื้นฐาน เพื่อเห็นสิ่งที่ตลาดยังตีราคาไม่ครบ"
        },
        {
          index: "03",
          title: "Business Action",
          description: "พา insight นั้นต่อไปสู่ content, การสื่อสาร และ deal workflow โดยไม่ต้องออกจากแพลตฟอร์ม"
        }
      ]
    },
    preview: {
      kicker: "Signature Experience",
      title: "หน้าแรกควรให้ความรู้สึกเหมือน market intelligence ไม่ใช่ marketplace ที่รก",
      copy:
        "ผู้ใช้งานควรรับรู้ตั้งแต่หน้าจอแรกว่าแพลตฟอร์มนี้เข้าใจภูมิศาสตร์ ถูกออกแบบมาสำหรับมืออาชีพ และสามารถพาผู้ใช้จาก insight ไปสู่ action ได้จริง",
      topbarLeft: "One Atlaz Console",
      topbarRight: "Live Opportunity Surface",
      stats: [
        { value: "Parcel", label: "มองเห็นขอบเขตแปลงและข้อมูลที่ดิน" },
        { value: "Zoning", label: "อ่านผังเมือง กฎเกณฑ์ และบริบทพื้นที่" },
        { value: "Deals", label: "เชื่อมเอกสาร การเจรจา และสถานะ workflow" }
      ]
    },
    pillarsKicker: "Platform Pillars",
    pillars: [
      {
        index: "01",
        title: "Map Intelligence",
        description: "มองแปลงที่ดิน โครงสร้างพื้นฐาน และบริบทเมืองใน operating layer เดียวกัน"
      },
      {
        index: "02",
        title: "Market Discovery",
        description: "เปลี่ยนจากการค้นหาไปสู่การคัดเลือกโอกาสด้วย listing และ discovery ที่อิง location"
      },
      {
        index: "03",
        title: "Content and Trust",
        description: "ให้คอนเทนต์ที่ผูกกับพื้นที่สร้างความน่าเชื่อถือ ความสนใจ และ lead ที่มีคุณภาพ"
      },
      {
        index: "04",
        title: "Deal Operations",
        description: "รวมการสื่อสาร เอกสาร และ workflow ทางธุรกิจให้อยู่ในระบบที่ตรวจสอบย้อนหลังได้"
      }
    ],
    layers: {
      kicker: "Data Architecture",
      title: "หลายชั้นข้อมูล แต่ทำงานบนผิวระบบเดียวกัน",
      why:
        "เมื่อ location กลายเป็นจุดอ้างอิงร่วม การค้นหา การวิเคราะห์ การสื่อสาร และการทำธุรกรรมจะไม่กระจัดกระจายอยู่ในหลายเครื่องมืออีกต่อไป",
      items: [
        "ขอบเขตแปลงและข้อมูลที่ดิน",
        "ผังเมืองและ zoning",
        "โครงสร้างพื้นฐานและโครงการอนาคต",
        "ข้อมูลตลาดและข้อมูลองค์กร",
        "คอนเทนต์ที่ปักหมุดบนแผนที่",
        "สถานะดีล เอกสาร และเหตุการณ์ทางการเงิน"
      ]
    },
    workflow: {
      kicker: "Workflow",
      title: "จากการค้นพบ ไปสู่การทำดีล ในเรื่องราวเดียวกัน",
      steps: [
        {
          index: "01",
          title: "Discover",
          description: "ค้นหาด้วยพื้นที่ แปลงที่ดิน corridor หรือบริเวณที่มีสัญญาณโอกาสสูง ไม่ใช่แค่คีย์เวิร์ดทั่วไป"
        },
        {
          index: "02",
          title: "Understand",
          description: "ซ้อนข้อมูลผังเมือง โครงสร้างพื้นฐาน ตลาด และคอนเทนต์ เพื่อเห็นบริบทของโอกาสอย่างครบขึ้น"
        },
        {
          index: "03",
          title: "Activate",
          description: "เปิดการสื่อสาร แลกเปลี่ยนเอกสาร และเปลี่ยนความสนใจให้กลายเป็น workflow ทางธุรกิจที่ชัดเจน"
        }
      ]
    },
    ecosystem: {
      kicker: "Ecosystem Fit",
      title: "ออกแบบมาสำหรับคนที่กำลังกำหนดอนาคตของที่ดิน ตลาด และเรื่องเล่าของพื้นที่",
      items: ["เจ้าของที่ดิน", "นักลงทุน", "นักพัฒนา", "โบรกเกอร์", "ครีเอเตอร์", "ทีมองค์กร"]
    },
    audiences: {
      kicker: "Built For",
      title: "สำหรับผู้ตัดสินใจใน location economy",
      items: [
        {
          label: "Owners",
          text: "นำเสนอทรัพย์พร้อมบริบท ควบคุมการเปิดเผยข้อมูล และเปลี่ยนความสนใจจริงให้เข้าสู่ workflow ได้ดีขึ้น"
        },
        {
          label: "Investors",
          text: "มองเห็นศักยภาพผ่าน data layers สัญญาณตลาด และความพร้อมของธุรกรรมได้เร็วขึ้น"
        },
        {
          label: "Developers",
          text: "ประเมินศักยภาพที่ดิน สื่อสารโครงการ และขับเคลื่อนแคมเปญที่ผูกกับพื้นที่จริง"
        },
        {
          label: "Operators",
          text: "ทำให้ทีมทำงานสอดคล้องกันระหว่างแผนที่ marketplace content และการขับเคลื่อนดีล"
        }
      ]
    },
    closing: {
      kicker: "Closing Frame",
      title: "อินเทอร์เฟซสำหรับโอกาสที่ขับเคลื่อนด้วยสถานที่ในระดับสากล",
      copy:
        "One Atlaz ควรให้ความรู้สึกเข้ม คม และ map-native ราวกับเป็น control layer สำหรับโอกาสในเมือง ไม่ใช่แค่เว็บไซต์อีกหนึ่งหน้า",
      accessKicker: "Request Access",
      accessTitle: "เริ่มบทสนทนาเพื่อเข้าใช้งานก่อน",
      accessCopy:
        "สำหรับนักลงทุน เจ้าของที่ดิน นักพัฒนา และ strategic partners ที่ต้องการวิธีมองและขับเคลื่อนโอกาสเชิงพื้นที่ได้ชัดเจนยิ่งขึ้น",
      emailPrompt:
        "หากต้องการ Request Access, ขอเดโม หรือพูดคุยเรื่อง strategic partnership กรุณาส่งอีเมลมาที่",
      cta: "Copy Email",
      copied: "คัดลอกอีเมลแล้ว"
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

export default function Home() {
  const [locale, setLocale] = useState<Locale>("en");
  const [copied, setCopied] = useState(false);
  const t = dictionaries[locale];

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
        <a className="brand" href="#top" aria-label="One Atlaz home">
          <LogoMark />
          <div className="brand-copy">
            <strong>One Atlaz</strong>
            <span>{t.navTagline}</span>
          </div>
        </a>

        <div className="locale-switch" aria-label="Language switcher">
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

      <section className="hero hero-grid" id="top">
        <div className="hero-copy">
          <p className="eyebrow">{t.hero.eyebrow}</p>
          <h1>{t.hero.title}</h1>
          <p className="lead">{t.hero.lead}</p>

          <div className="actions">
            <a className="button primary" href="#preview">
              {t.hero.primaryCta}
            </a>
            <a className="button secondary" href="#waitlist">
              {t.hero.secondaryCta}
            </a>
          </div>

          <div className="hero-strip" aria-label="Platform capabilities">
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

      <section className="section intro-panel" id="platform">
        <div className="statement-block">
          <p className="section-kicker">{t.intro.kicker}</p>
          <h2>{t.intro.title}</h2>
        </div>
        <div className="statement-side">
          <p className="section-copy">{t.intro.copy}</p>
          <blockquote className="quote-card">{t.intro.quote}</blockquote>
        </div>
      </section>

      <section className="section manifesto-panel">
        <div className="manifesto-copy">
          <p className="section-kicker">{t.manifesto.kicker}</p>
          <h2>{t.manifesto.title}</h2>
        </div>
        <p className="section-copy manifesto-text">{t.manifesto.copy}</p>
      </section>

      <section className="section narrative-panel">
        <div className="narrative-sticky">
          <div className="narrative-visual">
            <div className="narrative-visual-header">
              <span>Atlas Scene</span>
              <span>Parcel x Urban x Deal</span>
            </div>
            <img className="scene-image" src={imagery.narrative} alt="Aerial city view at night" />
            <div className="scene-overlay" />
          </div>
        </div>

        <div className="narrative-flow">
          <p className="section-kicker">{t.narrative.kicker}</p>
          <h2>{t.narrative.title}</h2>
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

      <section className="section preview-panel" id="preview">
        <div className="preview-copy">
          <p className="section-kicker">{t.preview.kicker}</p>
          <h2>{t.preview.title}</h2>
          <p className="section-copy">{t.preview.copy}</p>
        </div>

        <div className="preview-board" aria-hidden="true">
          <div className="preview-topbar">
            <span>{t.preview.topbarLeft}</span>
            <span>{t.preview.topbarRight}</span>
          </div>
          <div className="preview-asset-frame">
            <img className="preview-asset" src={imagery.preview} alt="Night city skyline with red highlights" />
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

      <section className="section pillar-shell">
        <div className="section-headline">
          <p className="section-kicker">{t.pillarsKicker}</p>
        </div>
        <div className="pillar-grid">
          {t.pillars.map((pillar, index) => (
            <article
              className={index === 0 ? "panel-card feature-large" : "panel-card"}
              key={pillar.title}
            >
              <p className="panel-index">{pillar.index}</p>
              <h3>{pillar.title}</h3>
              <p>{pillar.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section layers-panel" id="layers">
        <div className="layers-head">
          <p className="section-kicker">{t.layers.kicker}</p>
          <h2>{t.layers.title}</h2>
        </div>

        <div className="layers-grid">
          <article className="panel-card panel-emphasis">
            <p className="mini-label">Why it matters</p>
            <p className="statement">{t.layers.why}</p>
          </article>

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

      <section className="section workflow-panel">
        <div className="workflow-head">
          <p className="section-kicker">{t.workflow.kicker}</p>
          <h2>{t.workflow.title}</h2>
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

      <section className="section ecosystem-panel">
        <div className="ecosystem-copy">
          <p className="section-kicker">{t.ecosystem.kicker}</p>
          <h2>{t.ecosystem.title}</h2>
        </div>
        <div className="partner-strip" aria-label="Partner types">
          {t.ecosystem.items.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <section className="section audience-panel">
        <div className="section-headline">
          <p className="section-kicker">{t.audiences.kicker}</p>
          <h2>{t.audiences.title}</h2>
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

      <section className="section closing-panel" id="waitlist">
        <div className="closing-copy">
          <p className="section-kicker">{t.closing.kicker}</p>
          <h2>{t.closing.title}</h2>
          <p className="section-copy">{t.closing.copy}</p>
        </div>

        <div className="waitlist-card">
          <div>
            <p className="mini-label">{t.closing.accessKicker}</p>
            <h3>{t.closing.accessTitle}</h3>
            <p className="section-copy">{t.closing.accessCopy}</p>
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
    </main>
  );
}
