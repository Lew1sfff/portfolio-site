import Link from "next/link";
import { Camera, Mail, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-dark-950 border-t border-dark-700">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <Link
            href="/"
            className="text-lg font-bold tracking-tight text-text-primary hover:text-electric transition-colors"
          >
            Lew1s' works
          </Link>

          {/* Social links */}
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-text-muted hover:text-electric transition-colors"
              aria-label="Camera"
            >
              <Camera size={20} />
            </a>
            <a
              href="mailto:Lew1s1224@foxmail.com"
              className="text-text-muted hover:text-neon-green transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a
              href="#"
              className="text-text-muted hover:text-hot-orange transition-colors"
              aria-label="Website"
            >
              <Globe size={20} />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-text-muted text-sm">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
