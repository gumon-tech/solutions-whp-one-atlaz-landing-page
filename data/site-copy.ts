import type { Locale } from "@/lib/i18n";

export type SiteDictionary = {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    tagline: string;
    links: Array<{ label: string; href: string }>;
    languageLabel: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    lead: string;
    primaryCta: string;
    secondaryCta: string;
    highlights: string[];
    stats: Array<{ value: string; label: string }>;
    visualTitle: string;
    visualCopy: string;
  };
  overview: {
    eyebrow: string;
    title: string;
    copy: string;
    points: string[];
  };
  capabilities: {
    eyebrow: string;
    title: string;
    intro: string;
    items: Array<{ title: string; copy: string }>;
  };
  workflow: {
    eyebrow: string;
    title: string;
    intro: string;
    steps: Array<{ title: string; copy: string }>;
  };
  audiences: {
    eyebrow: string;
    title: string;
    intro: string;
    items: Array<{ title: string; copy: string }>;
  };
  closing: {
    eyebrow: string;
    title: string;
    copy: string;
    primaryCta: string;
    secondaryCta: string;
  };
  footer: {
    summary: string;
    contactLabel: string;
    contactValue: string;
    sourceLabel: string;
  };
};

export const siteCopy: Record<Locale, SiteDictionary> = {
  th: {
    meta: {
      title: "One Atlaz | แพลตฟอร์มข้อมูลเชิงพื้นที่สำหรับที่ดิน ตลาด และดีล",
      description:
        "One Atlaz ช่วยให้ทีมค้นหา ประเมิน และขยับโอกาสจากทำเลได้ในระบบเดียว ด้วยข้อมูลที่ดิน สัญญาณตลาด บริบทพื้นที่ และการประสานงานของดีล"
    },
    nav: {
      tagline: "แพลตฟอร์มสำหรับที่ดิน ตลาด และดีลโฟลว์",
      links: [
        { label: "ภาพรวม", href: "#overview" },
        { label: "ความสามารถ", href: "#capabilities" },
        { label: "วิธีใช้งาน", href: "#workflow" },
        { label: "เหมาะกับใคร", href: "#audiences" }
      ],
      languageLabel: "ภาษา"
    },
    hero: {
      eyebrow: "Location Intelligence, Composed",
      title: "มองหา ประเมิน และขยับโอกาสจากทำเลได้ในระบบเดียว",
      lead:
        "One Atlaz รวมข้อมูลที่ดิน ความเคลื่อนไหวของตลาด บริบทของพื้นที่ และการเดินงานของดีลไว้ในแพลตฟอร์มเดียวที่เริ่มต้นจากแผนที่ เพื่อให้ทีมตัดสินใจได้เร็วขึ้นและมั่นใจขึ้น",
      primaryCta: "ขอชมเดโม",
      secondaryCta: "ดูความสามารถ",
      highlights: ["ข้อมูลที่ดิน", "สัญญาณตลาด", "บริบทพื้นที่", "ดีลโฟลว์"],
      stats: [
        { value: "Map-First", label: "เริ่มวิเคราะห์จากทำเลและแปลงที่ดิน" },
        { value: "Connected", label: "เชื่อมข้อมูลตลาด คอนเทนต์ และงานดีลเข้าด้วยกัน" },
        { value: "Traceable", label: "ติดตามเอกสาร การตัดสินใจ และ next step ได้ชัดเจน" }
      ],
      visualTitle: "One map for land, market, and deal flow",
      visualCopy: "เห็นภาพรวมพื้นที่ สัญญาณสำคัญ และสถานะการทำงานในมุมมองเดียว"
    },
    overview: {
      eyebrow: "ทำไมทีมจึงเลือก One Atlaz",
      title: "แพลตฟอร์มเดียวที่ช่วยให้ข้อมูล ทำเล และการตัดสินใจ เชื่อมถึงกัน",
      copy:
        "สารจากเว็บไซต์หลักของ One Atlaz ชี้ชัดว่าแพลตฟอร์มนี้ถูกออกแบบมาเพื่อให้ทีม locate opportunity, evaluate context และ keep momentum from insight to action ได้ต่อเนื่องยิ่งขึ้น เราจึงปรับหน้านี้ให้เล่าเรื่องในมุมลูกค้าอย่างตรงไปตรงมา",
      points: [
        "เริ่มจากแผนที่เพื่อคัดกรองทำเลและพื้นที่ที่ควรดูต่อ",
        "อ่านข้อมูลที่ดิน ผังเมือง โครงสร้างพื้นฐาน และสัญญาณตลาดในภาพเดียว",
        "แชร์บริบท เอกสาร และความคืบหน้าของดีลโดยไม่ต้องสลับหลายเครื่องมือ"
      ]
    },
    capabilities: {
      eyebrow: "ความสามารถหลักของแพลตฟอร์ม",
      title: "สิ่งที่ลูกค้าจะเห็นชัดเมื่อใช้งาน One Atlaz",
      intro:
        "เนื้อหาส่วนนี้อิงจากข้อความบนเว็บไซต์หลัก แล้วเรียบเรียงใหม่ให้เหมาะกับการนำเสนอขายงานและสาธิตกับลูกค้า",
      items: [
        {
          title: "Map Intelligence",
          copy: "ตรวจดูแปลงที่ดิน โครงสร้างพื้นฐาน แนวการพัฒนา และบริบทเมืองผ่าน workspace ที่เริ่มจากแผนที่"
        },
        {
          title: "Market Discovery",
          copy: "ค้นหาโอกาสได้เร็วขึ้นผ่านการดูพื้นที่ รายการทรัพย์ และข้อมูลตลาดอย่างเป็นระบบ"
        },
        {
          title: "Narrative and Trust",
          copy: "เล่าเรื่องของทรัพย์หรือพื้นที่ด้วยข้อมูลที่อ่านง่าย ช่วยให้ลูกค้าและพาร์ตเนอร์ตัดสินใจจากบริบทที่ครบกว่า"
        },
        {
          title: "Deal Coordination",
          copy: "เก็บเอกสาร บันทึกการตัดสินใจ และ next action ของดีลไว้ใน flow เดียวกัน"
        }
      ]
    },
    workflow: {
      eyebrow: "จากการค้นหาไปสู่การลงมือ",
      title: "Workflow ที่ช่วยให้ทีมไม่เสียจังหวะระหว่างการดูทำเลกับการขยับดีล",
      intro:
        "เราใช้แกนความคิดเดียวกับบนเว็บไซต์เดิมคือ Search with precision, Evaluate with clarity, Move with speed แล้วปรับให้เหมาะกับการอธิบายฟังก์ชันต่อผู้มีอำนาจตัดสินใจ",
      steps: [
        {
          title: "ค้นหาอย่างแม่นยำ",
          copy: "เริ่มจากย่าน แปลงที่ดิน หรือ corridor ที่สนใจ แล้วคัดกรองให้เหลือพื้นที่ที่ควรใช้เวลาต่อ"
        },
        {
          title: "ประเมินอย่างชัดเจน",
          copy: "ดูผังเมือง การเข้าถึง สภาพแวดล้อม ข้อมูลตลาด และสัญญาณจากพื้นที่จริงก่อนตัดสินใจ"
        },
        {
          title: "เดินหน้าต่อได้เร็ว",
          copy: "ส่งต่อข้อมูลให้ทีม แชร์เอกสาร และกำหนดขั้นตอนถัดไปโดยไม่หลุดจากบริบทเดิม"
        }
      ]
    },
    audiences: {
      eyebrow: "เหมาะกับใครบ้าง",
      title: "ออกแบบมาสำหรับทีมที่ทำงานอยู่ตรงจุดตัดของทำเล เงินทุน และจังหวะเวลา",
      intro:
        "เว็บไซต์หลักระบุชัดว่า One Atlaz เหมาะกับ land owners, investors, developers, brokers และ enterprise teams หน้านี้จึงสรุปให้ลูกค้าเข้าใจทันทีว่าแพลตฟอร์มตอบโจทย์ใครบ้าง",
      items: [
        {
          title: "เจ้าของที่ดินและเจ้าของทรัพย์",
          copy: "นำเสนอทรัพย์อย่างมีบริบท ควบคุมการเปิดเผยข้อมูล และเปลี่ยนความสนใจให้ไปสู่บทสนทนาที่จริงจัง"
        },
        {
          title: "นักลงทุนและที่ปรึกษา",
          copy: "ประเมินโอกาสได้เร็วขึ้นด้วยข้อมูลที่ดิน สัญญาณตลาด และบริบทเมืองที่เชื่อมถึงกัน"
        },
        {
          title: "นักพัฒนาโครงการ",
          copy: "อ่านศักยภาพของที่ดิน สื่อสารแผนพัฒนา และเดินหน้าการตัดสินใจด้วยข้อมูลที่พร้อมกว่า"
        },
        {
          title: "โบรกเกอร์และทีมปฏิบัติการ",
          copy: "ทำให้ทีมทำงานจากภาพเดียวกันตั้งแต่การค้นหา การประเมิน ไปจนถึงการติดตามดีล"
        }
      ]
    },
    closing: {
      eyebrow: "ขอชมการใช้งาน",
      title: "เหมาะสำหรับการนำเสนอแพลตฟอร์มให้ลูกค้า พาร์ตเนอร์ และทีมภายใน",
      copy:
        "หากต้องการนำ One Atlaz ไปใช้เพื่อดูทำเล ประเมินโอกาส หรือจัดการ workflow ของดีล เราสามารถต่อยอดจากหน้าเวอร์ชันนี้ไปสู่ deck, microsite หรือ demo flow เฉพาะกลุ่มลูกค้าได้ทันที",
      primaryCta: "นัดพรีเซนต์",
      secondaryCta: "อีเมลหาเรา"
    },
    footer: {
      summary:
        "หน้าเวอร์ชันนี้เรียบเรียงใหม่จากสารบนเว็บไซต์ oneatlaz.com เพื่อใช้เป็น customer-facing presentation site ที่เน้นความเข้าใจง่ายและการเล่า value proposition ให้ชัดขึ้น",
      contactLabel: "ติดต่อ",
      contactValue: "hello@oneatlaz.com",
      sourceLabel: "อ้างอิงสารจากเว็บไซต์หลัก One Atlaz"
    }
  },
  en: {
    meta: {
      title: "One Atlaz | A Platform for Land Intelligence, Market Context, and Deal Flow",
      description:
        "One Atlaz helps teams discover, evaluate, and advance location-based opportunities through one map-first system for land data, market movement, place context, and deal coordination."
    },
    nav: {
      tagline: "A platform for land, market, and deal flow",
      links: [
        { label: "Overview", href: "#overview" },
        { label: "Capabilities", href: "#capabilities" },
        { label: "Workflow", href: "#workflow" },
        { label: "Audience", href: "#audiences" }
      ],
      languageLabel: "Language"
    },
    hero: {
      eyebrow: "Location Intelligence, Composed",
      title: "Discover, evaluate, and advance location-based opportunity in one place",
      lead:
        "One Atlaz brings land intelligence, market movement, place context, and deal coordination into a single map-first platform so teams can move from first search to next decision with more clarity and confidence.",
      primaryCta: "Request a Demo",
      secondaryCta: "See Capabilities",
      highlights: ["Land Intelligence", "Market Signals", "Place Context", "Deal Flow"],
      stats: [
        { value: "Map-First", label: "Start with geography, parcels, and place context" },
        { value: "Connected", label: "Bring market, content, and operational work into one system" },
        { value: "Traceable", label: "Keep documents, decisions, and next steps visible" }
      ],
      visualTitle: "One map for land, market, and deal flow",
      visualCopy: "A clearer view of opportunity, local signal, and team movement"
    },
    overview: {
      eyebrow: "Why Teams Choose One Atlaz",
      title: "A platform where data, geography, and decision-making stay connected",
      copy:
        "The messaging on oneatlaz.com is centered on helping teams locate opportunity, evaluate context, and keep momentum from insight to action. This version reframes that same product story into a more direct customer-facing presentation.",
      points: [
        "Start with the map to narrow down the places worth deeper review",
        "Read land data, planning context, infrastructure, and market movement together",
        "Share context, documents, and deal progress without switching across disconnected tools"
      ]
    },
    capabilities: {
      eyebrow: "Platform Capabilities",
      title: "What customers can understand quickly from a One Atlaz presentation",
      intro:
        "This section keeps the core capability structure from the main website, but presents it in a cleaner sales and walkthrough format.",
      items: [
        {
          title: "Map Intelligence",
          copy: "Review parcels, infrastructure, development context, and city structure through a map-led workspace."
        },
        {
          title: "Market Discovery",
          copy: "Find opportunities faster through place-based search, listings, and structured market information."
        },
        {
          title: "Narrative and Trust",
          copy: "Present each property or place with clearer context so clients and partners can make more informed decisions."
        },
        {
          title: "Deal Coordination",
          copy: "Keep documents, decisions, and next actions organized inside one connected workflow."
        }
      ]
    },
    workflow: {
      eyebrow: "From Search to Next Move",
      title: "A workflow that reduces friction between evaluating place and progressing the deal",
      intro:
        "We keep the logic of Search with precision, Evaluate with clarity, Move with speed from the main site, then rewrite it for a customer-facing walkthrough.",
      steps: [
        {
          title: "Search with precision",
          copy: "Start from district, parcel, or corridor and narrow the field before the team spends time in the wrong places."
        },
        {
          title: "Evaluate with clarity",
          copy: "Review planning, access, surrounding context, market information, and on-the-ground signal before making the call."
        },
        {
          title: "Move with speed",
          copy: "Share documents, align the team, and define the next action without losing the context behind the opportunity."
        }
      ]
    },
    audiences: {
      eyebrow: "Who It Is For",
      title: "Built for teams working where place, capital, and timing meet",
      intro:
        "The main website explicitly calls out land owners, investors, developers, brokers, and enterprise teams. This section turns that into a fast customer-read summary.",
      items: [
        {
          title: "Land owners and property holders",
          copy: "Present assets with stronger context, control disclosure, and turn serious interest into better conversations."
        },
        {
          title: "Investors and advisors",
          copy: "Assess opportunities faster through connected land data, market movement, and local context."
        },
        {
          title: "Developers",
          copy: "Read land potential, communicate project direction, and move development decisions with more confidence."
        },
        {
          title: "Brokers and operating teams",
          copy: "Keep everyone aligned from search and evaluation through deal tracking and handoff."
        }
      ]
    },
    closing: {
      eyebrow: "Request a Walkthrough",
      title: "Made for customer presentations, partner conversations, and internal alignment",
      copy:
        "If you want to use One Atlaz to present location opportunity, evaluate land, or organize deal workflow, this version can be extended into a focused deck, microsite, or demo flow for a specific audience.",
      primaryCta: "Book a Presentation",
      secondaryCta: "Email Us"
    },
    footer: {
      summary:
        "This version rewrites the core messaging from oneatlaz.com into a customer-facing presentation site with clearer value communication and easier section management.",
      contactLabel: "Contact",
      contactValue: "hello@oneatlaz.com",
      sourceLabel: "Based on messaging from the main One Atlaz website"
    }
  }
};
