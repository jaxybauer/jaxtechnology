import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface Screenshot {
  url: string;
  label: string;
}

export default function ScreenshotGallery({
  screenshots,
}: {
  screenshots: Screenshot[];
  accentColor?: string;
}) {
  const [active, setActive] = useState(0);

  React.useEffect(() => {
    setActive(0);
  }, [screenshots]);

  const prev = () => setActive((a) => (a - 1 + screenshots.length) % screenshots.length);
  const next = () => setActive((a) => (a + 1) % screenshots.length);

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">See it in action</h2>
          <p className="mt-3 text-slate-500 text-lg">A real look at the platform interface.</p>
        </motion.div>

        {/* Main screenshot */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-white"
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={active}
                src={screenshots[active].url}
                alt={screenshots[active].label}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
                className="w-full object-contain"
              />
            </AnimatePresence>
          </motion.div>

          {/* Nav arrows */}
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-slate-50 transition-colors border border-slate-200"
          >
            <ChevronLeft className="w-5 h-5 text-slate-600" />
          </button>
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-slate-50 transition-colors border border-slate-200"
          >
            <ChevronRight className="w-5 h-5 text-slate-600" />
          </button>
        </div>

        {/* Thumbnails */}
        <div className="mt-6 flex gap-3 overflow-x-auto pb-2 justify-center">
          {screenshots.map((s, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`flex-shrink-0 rounded-xl overflow-hidden border-2 transition-all ${
                i === active ? `border-transparent ring-2 ring-offset-2 ring-cyan-500` : "border-slate-200 opacity-60 hover:opacity-100"
              }`}
            >
              <img src={s.url} alt={s.label} className="w-28 h-16 object-cover" />
            </button>
          ))}
        </div>

        {/* Label */}
        <p className="text-center mt-4 text-sm font-medium text-slate-500">{screenshots[active].label}</p>
      </div>
    </section>
  );
}