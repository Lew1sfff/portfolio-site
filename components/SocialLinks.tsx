"use client";

import { Camera, Globe, Mail } from "lucide-react";
import { useLang } from "./LangProvider";

const socials = [
  {
    icon: Camera,
    labelKey: "contact.social.xiaohongshu",
    href: "#",
    color: "hover:text-hot-orange",
  },
  {
    icon: Globe,
    labelKey: "contact.social.website",
    href: "#",
    color: "hover:text-electric",
  },
  {
    icon: Mail,
    labelKey: "contact.social.email",
    href: "mailto:Lew1s1224@foxmail.com",
    color: "hover:text-neon-green",
  },
];

export default function SocialLinks() {
  const { t } = useLang();

  return (
    <section>
      <h2 className="text-xl font-semibold text-text-primary mb-6">
        {t("contact.social")}
      </h2>
      <div className="flex flex-wrap gap-4">
        {socials.map((social) => {
          const Icon = social.icon;
          return (
            <a
              key={social.labelKey}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-3 px-6 py-3 rounded-full border border-dark-600 text-text-secondary ${social.color} hover:border-current transition-all duration-300`}
            >
              <Icon size={20} />
              <span className="text-sm">{t(social.labelKey)}</span>
            </a>
          );
        })}
      </div>
    </section>
  );
}
