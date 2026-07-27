"use client";

import { useState } from "react";
import { Mail, Phone, Check } from "lucide-react";

const contacts = [
  {
    icon: Mail,
    label: "邮箱",
    value: "Lew1s1224@foxmail.com",
    color: "electric",
  },
  {
    icon: Phone,
    label: "电话",
    value: "13758725906",
    color: "hot-orange",
  },
];

const colorMap: Record<string, { bg: string; text: string; border: string }> = {
  electric: {
    bg: "bg-electric/10",
    text: "text-electric",
    border: "border-electric/20 hover:border-electric/50",
  },
  "neon-green": {
    bg: "bg-neon-green/10",
    text: "text-neon-green",
    border: "border-neon-green/20 hover:border-neon-green/50",
  },
  "hot-orange": {
    bg: "bg-hot-orange/10",
    text: "text-hot-orange",
    border: "border-hot-orange/20 hover:border-hot-orange/50",
  },
};

export default function ContactCards() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = async (value: string, index: number) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch {
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = value;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    }
  };

  return (
    <section className="mb-16">
      <p className="text-electric text-sm tracking-[0.2em] uppercase mb-4">
        Contact
      </p>
      <h1 className="text-4xl md:text-5xl font-bold text-text-primary tracking-tight mb-4">
        联系我
      </h1>
      <p className="text-text-secondary text-lg mb-12 max-w-2xl">
        有合作意向或想聊聊？欢迎通过以下方式联系我。
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
        {contacts.map((contact, index) => {
          const colors = colorMap[contact.color];
          const Icon = contact.icon;
          const isCopied = copiedIndex === index;

          return (
            <button
              key={contact.label}
              onClick={() => handleCopy(contact.value, index)}
              className={`group relative p-8 rounded-xl border transition-all duration-300 text-left ${colors.bg} ${colors.border}`}
            >
              <Icon className={`w-8 h-8 ${colors.text} mb-4`} />
              <p className="text-text-muted text-sm mb-1">{contact.label}</p>
              <p className={`text-lg font-medium ${colors.text}`}>
                {contact.value}
              </p>
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                {isCopied ? (
                  <Check className="w-5 h-5 text-neon-green" />
                ) : (
                  <span className="text-text-muted text-xs">点击复制</span>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}
