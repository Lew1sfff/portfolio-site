"use client";

import { createContext, useContext, useState, useCallback, type ReactNode } from "react";

type Lang = "zh" | "en";

interface LangContextType {
  lang: Lang;
  toggleLang: () => void;
  t: (key: string) => string;
}

const LangContext = createContext<LangContextType>({
  lang: "zh",
  toggleLang: () => {},
  t: (key: string) => key,
});

export const useLang = () => useContext(LangContext);

const translations: Record<string, Record<Lang, string>> = {
  // Navbar
  "nav.home": { zh: "首页", en: "Home" },
  "nav.about": { zh: "关于", en: "About" },
  "nav.contact": { zh: "联系", en: "Contact" },

  // Hero
  "hero.tag": { zh: "Lew1s' works", en: "Lew1s' works" },
  "hero.word1": { zh: "设计", en: "Design" },
  "hero.word2": { zh: "摄影", en: "Photo" },
  "hero.subtitle": { zh: "用镜头捕捉细节，用设计讲述故事", en: "Capturing details with lenses, telling stories with design" },

  // Project Grid
  "grid.tag": { zh: "精选项目", en: "Selected Works" },
  "grid.title": { zh: "精选项目", en: "Selected Works" },

  // Gallery
  "gallery.hint": { zh: "点击作品可放大浏览", en: "Click to enlarge" },

  // About
  "about.tag": { zh: "关于我", en: "About Me" },
  "about.title": { zh: "关于我", en: "About Me" },
  "about.skills.tag": { zh: "技能", en: "Skills" },
  "about.skills.title": { zh: "技能", en: "Skills" },
  "about.exp.tag": { zh: "经历", en: "Experience" },
  "about.exp.title": { zh: "经历", en: "Experience" },

  // Contact
  "contact.tag": { zh: "联系我", en: "Contact" },
  "contact.title": { zh: "联系我", en: "Contact Me" },
  "contact.desc": { zh: "有合作意向或想聊聊？欢迎通过以下方式联系我。", en: "Have a project in mind? Feel free to reach out." },
  "contact.email": { zh: "邮箱", en: "Email" },
  "contact.phone": { zh: "电话", en: "Phone" },
  "contact.copy": { zh: "点击复制", en: "Click to copy" },
  "contact.copied": { zh: "已复制", en: "Copied" },
  "contact.social": { zh: "社交平台", en: "Social" },
  "contact.social.xiaohongshu": { zh: "小红书", en: "Xiaohongshu" },
  "contact.social.website": { zh: "个人网站", en: "Website" },
  "contact.social.email": { zh: "邮箱", en: "Email" },

  // Footer
  "footer.rights": { zh: "版权所有", en: "All rights reserved" },

  // Navigation
  "nav.prev": { zh: "上一个项目", en: "Previous" },
  "nav.next": { zh: "下一个项目", en: "Next" },
  "nav.back": { zh: "返回", en: "Back" },

  // Filter
  "filter.all": { zh: "全部", en: "All" },
  "filter.photography": { zh: "商业摄影", en: "Photography" },
  "filter.portrait": { zh: "人像", en: "Portrait" },
  "filter.design": { zh: "设计", en: "Design" },
  "filter.social": { zh: "社交媒体", en: "Social Media" },
  "filter.empty": { zh: "暂无此类项目", en: "No projects in this category" },

  // Skills
  "skill.commercial": { zh: "商业摄影", en: "Commercial Photography" },
  "skill.product": { zh: "产品拍摄", en: "Product Shooting" },
  "skill.portrait": { zh: "人像摄影", en: "Portrait Photography" },
  "skill.video": { zh: "视频拍摄", en: "Video Production" },
  "skill.graphics": { zh: "平面设计", en: "Graphic Design" },
  "skill.poster": { zh: "海报设计", en: "Poster Design" },
  "skill.branding": { zh: "品牌视觉", en: "Brand Identity" },
  "skill.social": { zh: "社交媒体", en: "Social Media" },
  "skill.creative": { zh: "创意策划", en: "Creative Planning" },
};

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("zh");

  const toggleLang = useCallback(() => {
    setLang((l) => (l === "zh" ? "en" : "zh"));
  }, []);

  const t = useCallback(
    (key: string) => translations[key]?.[lang] ?? key,
    [lang]
  );

  return (
    <LangContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LangContext.Provider>
  );
}
