import { useState } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";


const LOGO_URL = "/images/jax-logo.png";

const navLinks = [
  { label: "Home", page: "Home" },
  { label: "Services", page: "Services" },
  { label: "Contact", page: "Contact" },
];

export default function Layout({
  children,
  currentPageName,
}: {
  children: React.ReactNode;
  /** Set by the router; the nav uses it to highlight the active link. */
  currentPageName?: string;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <style>{`
        :root {
          --jax-cyan: #22D3EE;
          --jax-purple: #7C3AED;
          --jax-pink: #EC4899;
          --jax-navy: #0F172A;
        }
        html { scroll-behavior: smooth; }
        .gradient-text {
          background: linear-gradient(135deg, #22D3EE, #7C3AED, #EC4899);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .gradient-bg {
          background: linear-gradient(135deg, #22D3EE, #7C3AED);
        }
        .gradient-bg-pink {
          background: linear-gradient(135deg, #EC4899, #7C3AED);
        }
      `}</style>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
          <Link to={createPageUrl("Home")} className="flex items-center gap-2.5">
            <img src={LOGO_URL} alt="Jax Technology" className="h-9 md:h-11 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.page}
                to={createPageUrl(link.page)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  currentPageName === link.page
                    ? "bg-slate-900 text-white"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                {link.label}
              </Link>
            ))}

          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-slate-50"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden overflow-hidden border-t border-slate-100"
            >
              <div className="px-4 py-4 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.page}
                    to={createPageUrl(link.page)}
                    onClick={() => setMobileOpen(false)}
                    className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                      currentPageName === link.page
                        ? "bg-slate-900 text-white"
                        : "text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Page Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
            <div className="md:col-span-1">
              <img src={LOGO_URL} alt="Jax Technology" className="h-10 w-auto mb-4 brightness-0 invert" />
              <p className="text-slate-400 text-sm leading-relaxed">
                Building modular business applications for the modern enterprise. One platform, infinite possibilities.
              </p>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-4">Company</h4>
              <ul className="space-y-3">
                <li><Link to={createPageUrl("Services")} className="text-sm text-slate-400 hover:text-white transition-colors">Services</Link></li>
                <li><Link to={createPageUrl("Contact")} className="text-sm text-slate-400 hover:text-white transition-colors">Contact Us</Link></li>
                <li><span className="text-sm text-slate-400 hover:text-white transition-colors cursor-pointer">Careers</span></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-4">Resources</h4>
              <ul className="space-y-3">
                <li><span className="text-sm text-slate-500">More apps coming soon</span></li>
                <li><span className="text-sm text-slate-400 hover:text-white transition-colors cursor-pointer">Blog</span></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs text-slate-500">© 2026 Jax Technology. All rights reserved.</p>
            <div className="flex gap-6">
              <span className="text-xs text-slate-500 hover:text-slate-400 cursor-pointer">Privacy</span>
              <span className="text-xs text-slate-500 hover:text-slate-400 cursor-pointer">Terms</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}