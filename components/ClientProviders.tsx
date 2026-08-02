"use client";

import { LangProvider } from "./LangProvider";
import { Analytics } from "@vercel/analytics/react";
import CustomCursor from "./CustomCursor";
import MouseGlow from "./MouseGlow";
import PageTransition from "./PageTransition";

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <LangProvider>
      <CustomCursor />
      <MouseGlow />
      <PageTransition>
        {children}
      </PageTransition>
      <Analytics />
    </LangProvider>
  );
}
