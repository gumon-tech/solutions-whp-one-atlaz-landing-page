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
    prompt: string;
    email: string;
    primaryCta: string;
    copied: string;
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
        "One Atlaz ช่วยให้ทีมค้นหา ประเมิน และขยับโอกาสจากทำเลได้ในระบบเดียว ด้วยข้อมูลที่ดิน สัญญาณตลาด บริบทพื้นที่ และการทำงานของดีลที่เชื่อมถึงกัน"
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
        { value: "Connected", label: "เชื่อมข้อมูลตลาด คอนเทนต์ และการทำงานของดีลเข้าด้วยกัน" },
        { value: "Traceable", label: "ติดตามเอกสาร การตัดสินใจ และขั้นตอนถัดไปได้ชัดเจน" }
      ],
      visualTitle: "One map for land, market, and deal flow",
      visualCopy: "เห็นภาพรวมพื้นที่ สัญญาณสำคัญ และสถานะการทำงานในมุมมองเดียว"
    },
    overview: {
      eyebrow: "ทำไมทีมจึงเลือก One Atlaz",
      title: "แพลตฟอร์มเดียวที่ช่วยให้ข้อมูล ทำเล และการตัดสินใจ เชื่อมถึงกัน",
      copy:
        "One Atlaz ช่วยให้ทีมมองเห็นโอกาสจากทำเลได้เร็วขึ้น อ่านบริบทของพื้นที่ได้ครบขึ้น และเดินหน้าการตัดสินใจได้อย่างต่อเนื่องในระบบเดียว",
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
        "One Atlaz ถูกออกแบบมาเพื่อช่วยให้การค้นหา ประเมิน และขยับโอกาสจากทำเลเกิดขึ้นได้อย่างเป็นระบบและชัดเจนยิ่งขึ้น",
      items: [
        {
          title: "Map Intelligence",
          copy: "ตรวจดูแปลงที่ดิน โครงสร้างพื้นฐาน แนวการพัฒนา และบริบทเมืองผ่านพื้นที่ทำงานที่เริ่มจากแผนที่"
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
          copy: "เก็บเอกสาร บันทึกการตัดสินใจ และขั้นตอนถัดไปของดีลไว้ในกระบวนการเดียวกัน"
        }
      ]
    },
    workflow: {
      eyebrow: "จากการค้นหาไปสู่การลงมือ",
      title: "กระบวนการทำงานที่ช่วยให้ทีมไม่เสียจังหวะระหว่างการดูทำเลกับการขยับดีล",
      intro:
        "ตั้งแต่การคัดกรองพื้นที่ที่น่าสนใจ ไปจนถึงการแชร์ข้อมูลและกำหนดขั้นตอนถัดไป ทุกอย่างถูกจัดให้อยู่ในลำดับการทำงานที่ต่อเนื่องและเข้าใจง่าย",
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
        "เหมาะสำหรับทีมที่ต้องมองทำเล ประเมินบริบท และเดินหน้าการตัดสินใจร่วมกันด้วยข้อมูลที่ชัดและเชื่อมถึงกัน",
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
      title: "ขอสิทธิ์เข้าถึงแบบส่วนตัว",
      copy:
        "สำหรับนักลงทุน เจ้าของที่ดิน นักพัฒนา โบรกเกอร์ และพาร์ตเนอร์เชิงกลยุทธ์ที่ต้องการมองโอกาสจากทำเลได้ชัดเจนยิ่งขึ้น",
      prompt: "สำหรับการขอใช้งานล่วงหน้า ขอเดโม หรือพูดคุยความร่วมมือเชิงกลยุทธ์ ติดต่อได้ที่",
      email: "hello@oneatlaz.com",
      primaryCta: "คัดลอกอีเมล",
      copied: "คัดลอกอีเมลแล้ว"
    },
    footer: {
      summary:
        "One Atlaz คือแพลตฟอร์มที่ช่วยให้ทีมค้นหา ประเมิน และขยับโอกาสจากทำเลได้อย่างมั่นใจยิ่งขึ้น ผ่านข้อมูลที่ดิน สัญญาณตลาด บริบทพื้นที่ และการทำงานของดีลที่เชื่อมถึงกัน",
      contactLabel: "ติดต่อ",
      contactValue: "hello@oneatlaz.com",
      sourceLabel: "One Atlaz"
    }
  },
  en: {
    meta: {
      title: "One Atlaz | A Platform for Land Intelligence, Market Context, and Deal Flow",
      description:
        "One Atlaz helps teams discover, evaluate, and advance location-based opportunities through one map-first system for land data, market context, place insight, and connected deal workflow."
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
        "One Atlaz gives teams a clearer way to identify location-based opportunity, understand place context, and move from insight to action without losing momentum.",
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
        "One Atlaz is built to make location discovery, evaluation, and deal progression feel more structured, more visible, and easier to act on.",
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
        "From narrowing the right geography to sharing documents and defining next actions, the workflow is designed to keep teams aligned and moving.",
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
        "Designed for teams that need to assess location, read context, and move decisions forward with a shared view of the opportunity.",
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
      title: "Request private access",
      copy:
        "For investors, land owners, developers, brokers, and strategic partners exploring location-based opportunity.",
      prompt: "For early access, demo inquiries, or strategic partnership conversations, email",
      email: "hello@oneatlaz.com",
      primaryCta: "Copy Address",
      copied: "Address copied"
    },
    footer: {
      summary:
        "One Atlaz helps teams discover, evaluate, and advance location-based opportunity through connected land data, market context, place insight, and deal workflow.",
      contactLabel: "Contact",
      contactValue: "hello@oneatlaz.com",
      sourceLabel: "One Atlaz"
    }
  }
};
