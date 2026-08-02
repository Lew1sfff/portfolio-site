"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useLang } from "./LangProvider";

const navLinks = [
  { href: "/", labelKey: "nav.home" },
  { href: "/about", labelKey: "nav.about" },
  { href: "/contact", labelKey: "nav.contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { t, toggleLang, lang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-dark-900/90 backdrop-blur-md shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-text-primary hover:text-electric transition-colors"
        >
          Lew1s' works
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-sm tracking-wide transition-colors ${
                  pathname === link.href
                    ? "text-electric"
                    : "text-text-secondary hover:text-text-primary"
                }`}
              >
                {t(link.labelKey)}
              </Link>
            </li>
          ))}
          {/* Language toggle */}
          <button
            onClick={toggleLang}
            className="text-xs px-2 py-1 rounded border border-dark-600 text-text-muted hover:text-electric hover:border-electric/50 transition-colors"
          >
            {lang === "zh" ? "EN" : "中"}
          </button>
        </ul>

        {/* Mobile toggle */}
        <div className="md:flex items-center gap-3">
          <button
            onClick={toggleLang}
            className="md:hidden text-xs px-2 py-1 rounded border border-dark-600 text-text-muted hover:text-electric transition-colors"
          >
            {lang === "zh" ? "EN" : "中"}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-text-primary p-2"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-dark-900/95 backdrop-blur-md animate-slide-down">
          <ul className="flex flex-col items-center gap-6 py-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-lg tracking-wide transition-colors ${
                    pathname === link.href
                      ? "text-electric"
                      : "text-text-secondary hover:text-text-primary"
                  }`}
                >
                  {t(link.labelKey)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
