import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

const HERO_IMAGE = "/images/hero.png";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-cyan-50/30">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-cyan-200/20 to-purple-200/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-pink-200/15 to-cyan-200/15 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="text-xs font-semibold text-slate-600">Serving Accra & All of Ghana</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.08]"
            >
              Reliable Home & Business <span className="gradient-text">Services Across Accra</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="mt-6 text-lg text-slate-500 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              From electrical work to AC installations, Starlink setup, plumbing, CCTV security, and POP ceilings — our technicians deliver fast, professional service you can trust.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="mt-9 flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4"
            >
              <Link
                to={createPageUrl("Contact")}
                className="w-full sm:w-auto px-8 py-4 rounded-full text-base font-semibold text-white gradient-bg hover:opacity-90 transition-all shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2"
              >
                Get a Free Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to={createPageUrl("Services")}
                className="w-full sm:w-auto px-8 py-4 rounded-full text-base font-semibold text-slate-700 bg-white border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all flex items-center justify-center gap-2"
              >
                View Our Services
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="mt-8 flex items-center justify-center lg:justify-start gap-2 text-sm text-slate-500"
            >
              <Phone className="w-4 h-4 text-cyan-500" />
              <span>Call / WhatsApp</span>
              <a href="tel:+233598239768" className="font-semibold text-slate-700 hover:text-cyan-600 transition-colors">
                +233 59 823 9768
              </a>
            </motion.div>
          </div>

          {/* Right: hero image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-tr from-cyan-200/30 to-purple-200/30 blur-2xl rounded-3xl" />
            <img
              src={HERO_IMAGE}
              alt="Jax Technology technicians installing a CCTV security system"
              className="relative rounded-3xl shadow-2xl shadow-slate-300/40 w-full object-cover"
            />
          </motion.div>
        </div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: "Fast", label: "Response Across Accra" },
            { value: "Vetted", label: "Certified Technicians" },
            { value: "Fair", label: "Transparent Pricing" },
            { value: "24/7", label: "Reliable Service" },
          ].map((stat, i) => (
            <div key={i} className="text-center p-6 rounded-2xl bg-white/70 backdrop-blur-sm border border-slate-100">
              <div className="text-xl md:text-2xl font-bold gradient-text">{stat.value}</div>
              <div className="mt-1 text-sm text-slate-500">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}