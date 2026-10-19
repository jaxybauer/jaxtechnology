import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const points = [
  "Professional service on every job",
  "Fast turnaround you can rely on",
  "Dependable results, every time",
  "Servicing homes, offices & businesses",
];

export default function TrustPartnerSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-xs font-semibold uppercase tracking-wider mb-4">
            Your Trusted Partner
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            For Home & Business <span className="gradient-text">Support</span>
          </h2>
          <p className="mt-5 text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Whether you're upgrading your home, setting up a new office, or fixing an urgent issue, Jax Technology delivers professional service, fast turnaround, and dependable results every time.
          </p>
          <p className="mt-4 text-base text-slate-500 max-w-2xl mx-auto leading-relaxed">
            We're committed to making life easier for residents and businesses across Accra — one reliable service at a time.
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto text-left">
            {points.map((point, i) => (
              <motion.div
                key={point}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100"
              >
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                <span className="text-sm font-medium text-slate-700">{point}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}