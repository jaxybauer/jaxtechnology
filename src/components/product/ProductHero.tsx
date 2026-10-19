import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function ProductHero({
  icon: Icon,
  name,
  tagline,
  description,
  gradient,
  lightBg,
}: {
  icon: React.ComponentType<{ className?: string }>;
  name: string;
  tagline: string;
  /** Either paragraphs already split, or one string we split on blank lines. */
  description: string | string[];
  gradient: string;
  lightBg: string;
}) {
  return (
    <section className={`relative overflow-hidden ${lightBg}`}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br ${gradient} opacity-10 blur-3xl`} />
        <div className={`absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-gradient-to-tr ${gradient} opacity-5 blur-3xl`} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 md:pt-28 md:pb-32">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${gradient} text-white text-xs font-semibold mb-6`}
          >
            <Icon className="w-4 h-4" />
            {name}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.1]"
          >
            {tagline}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 max-w-2xl space-y-4"
          >
            {(Array.isArray(description) ? description : description.split(/\s{2,}|\n\n+/)).map((para, i) => (
              <p key={i} className="text-lg md:text-xl text-slate-500 leading-relaxed">
                {para.trim()}
              </p>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <button className={`px-8 py-4 rounded-full text-base font-semibold text-white bg-gradient-to-r ${gradient} hover:opacity-90 transition-all shadow-lg flex items-center gap-2`}>
              Get Started
              <ArrowRight className="w-4 h-4" />
            </button>
            <button className="px-8 py-4 rounded-full text-base font-semibold text-slate-700 bg-white border border-slate-200 hover:shadow-md transition-all">
              Request Demo
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}