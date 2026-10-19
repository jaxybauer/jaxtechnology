import { motion } from "framer-motion";
import {
  Layers,
  Zap,
  Shield,
  BarChart3,
  Globe,
  RefreshCcw,
} from "lucide-react";

const features = [
  {
    icon: Layers,
    title: "Modular Architecture",
    description: "Pick the apps you need. Each module works independently or together as a unified system.",
    color: "text-cyan-500",
    bg: "bg-cyan-50",
  },
  {
    icon: Zap,
    title: "Automation Built-In",
    description: "Automate repetitive tasks, from payment reminders to appointment confirmations.",
    color: "text-purple-500",
    bg: "bg-purple-50",
  },
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    description: "Your data is protected with industry-leading encryption and compliance standards.",
    color: "text-pink-500",
    bg: "bg-pink-50",
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description: "Make informed decisions with powerful dashboards and actionable insights across all apps.",
    color: "text-blue-500",
    bg: "bg-blue-50",
  },
  {
    icon: Globe,
    title: "Cloud-Native Platform",
    description: "Access your business from anywhere. Fully responsive, always available, zero downtime.",
    color: "text-emerald-500",
    bg: "bg-emerald-50",
  },
  {
    icon: RefreshCcw,
    title: "Continuous Updates",
    description: "New features and improvements delivered seamlessly — no migrations, no disruptions.",
    color: "text-orange-500",
    bg: "bg-orange-50",
  },
];

export default function FeaturesGrid() {
  return (
    <section className="py-24 md:py-32 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-cyan-50 text-cyan-600 text-xs font-semibold uppercase tracking-wider mb-4">
            Why Jax Technology
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            Built different. <span className="gradient-text">Built better.</span>
          </h2>
          <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
            Every decision we make is focused on helping your business operate smarter and grow faster.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group p-8 rounded-2xl bg-white border border-slate-100 hover:border-slate-200 hover:shadow-lg transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-xl ${feature.bg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                <feature.icon className={`w-6 h-6 ${feature.color}`} />
              </div>
              <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}