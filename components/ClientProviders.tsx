"use client";

import { LangProvider } from "./LangProvider";
import { ThemeProvider } from "./ThemeProvider";
import { Analytics } from "@vercel/analytics/react";
import CustomCursor from "./CustomCursor";
import MouseGlow from "./MouseGlow";
import PageTransition from "./PageTransition";

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <LangProvider>
        <CustomCursor />
        <MouseGlow />
        <PageTransition>
          {children}
        </PageTransition>
        <Analytics />
      </LangProvider>
    </ThemeProvider>
  );
}
