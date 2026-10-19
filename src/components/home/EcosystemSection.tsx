import { motion } from "framer-motion";
import { Building2, Scissors, Package, Rocket } from "lucide-react";

const items = [
  { icon: Building2, label: "Jax Property", status: "Coming Soon", color: "bg-cyan-500" },
  { icon: Scissors, label: "Jax Beauty", status: "Coming Soon", color: "bg-pink-500" },
  { icon: Package, label: "Jax Procurement", status: "Coming Soon", color: "bg-slate-300" },
  { icon: Rocket, label: "More Apps", status: "Planned", color: "bg-slate-200" },
];

export default function EcosystemSection() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-pink-50 text-pink-600 text-xs font-semibold uppercase tracking-wider mb-4">
            Ecosystem
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            A growing <span className="gradient-text">ecosystem</span> of apps
          </h2>
          <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
            We're building the future of business software — one powerful module at a time. More apps are on the way.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-3xl mx-auto">
          {items.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative flex flex-col items-center p-6 md:p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-md transition-all"
            >
              <div className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center mb-4`}>
                <item.icon className="w-7 h-7 text-white" />
              </div>
              <span className="text-sm font-semibold text-slate-800 text-center">{item.label}</span>
              <span className={`mt-2 text-[10px] font-medium uppercase tracking-wider px-2 py-0.5 rounded-full ${
                item.status === "Live"
                  ? "bg-emerald-100 text-emerald-700"
                  : "bg-slate-200 text-slate-500"
              }`}>
                {item.status}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}