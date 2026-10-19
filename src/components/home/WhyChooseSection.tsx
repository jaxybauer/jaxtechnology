import { motion } from "framer-motion";
import { UserCheck, Clock, BadgeDollarSign, ShieldCheck } from "lucide-react";

const reasons = [
  {
    icon: UserCheck,
    title: "Trusted Technicians",
    description: "Every technician is vetted, trained, and experienced — ensuring safe, reliable work on every job.",
    color: "text-cyan-500",
    bg: "bg-cyan-50",
  },
  {
    icon: Clock,
    title: "Fast Response Across Accra",
    description: "We pride ourselves on quick arrival times and efficient service, whether it's an emergency fix or a scheduled installation.",
    color: "text-purple-500",
    bg: "bg-purple-50",
  },
  {
    icon: BadgeDollarSign,
    title: "Fair & Transparent Pricing",
    description: "No hidden fees. No surprises. Just honest, competitive pricing for premium service.",
    color: "text-emerald-500",
    bg: "bg-emerald-50",
  },
  {
    icon: ShieldCheck,
    title: "Reliable, Professional Service",
    description: "We show up on time, complete the job properly, and leave your space clean and safe.",
    color: "text-pink-500",
    bg: "bg-pink-50",
  },
];

export default function WhyChooseSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-cyan-50 text-cyan-600 text-xs font-semibold uppercase tracking-wider mb-4">
            Why People Choose Jax Technology
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            Service you can <span className="gradient-text">count on</span>
          </h2>
          <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
            We make it easy to keep your home, office, or business running smoothly.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group p-7 rounded-2xl bg-white border border-slate-100 hover:border-slate-200 hover:shadow-lg transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-xl ${reason.bg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                <reason.icon className={`w-6 h-6 ${reason.color}`} />
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-emerald-500 text-sm font-bold">✔</span>
                <h3 className="text-base font-bold">{reason.title}</h3>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}