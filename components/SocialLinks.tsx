import { Camera, Globe, Mail } from "lucide-react";

const socials = [
  {
    icon: Camera,
    label: "小红书",
    href: "#",
    color: "hover:text-hot-orange",
  },
  {
    icon: Globe,
    label: "个人网站",
    href: "#",
    color: "hover:text-electric",
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:Lew1s1224@foxmail.com",
    color: "hover:text-neon-green",
  },
];

export default function SocialLinks() {
  return (
    <section>
      <h2 className="text-xl font-semibold text-text-primary mb-6">
        社交平台
      </h2>
      <div className="flex flex-wrap gap-4">
        {socials.map((social) => {
          const Icon = social.icon;
          return (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-3 px-6 py-3 rounded-full border border-dark-600 text-text-secondary ${social.color} hover:border-current transition-all duration-300`}
            >
              <Icon size={20} />
              <span className="text-sm">{social.label}</span>
            </a>
          );
        })}
      </div>
    </section>
  );
}
