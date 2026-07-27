"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push("/")}
      className="fixed top-6 left-6 lg:left-8 z-[200] flex items-center gap-2 text-white/60 hover:text-electric transition-colors text-sm backdrop-blur-sm bg-dark-950/50 px-4 py-2 rounded-full border border-white/10 hover:border-electric/30"
      style={{ pointerEvents: "auto" }}
    >
      <ArrowLeft size={16} />
      返回
    </button>
  );
}
