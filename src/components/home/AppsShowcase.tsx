import { motion } from "framer-motion";
import {
  Building2,
  Scissors,
  Users,
  CreditCard,
  BarChart3,
  Calendar,
  ShoppingBag,
  Megaphone,
} from "lucide-react";

const apps = [
  {
    name: "Jax Property",
    tagline: "Property management, simplified.",
    description:
      "Manage tenants, leases, payments, maintenance, and reporting — all in one powerful dashboard designed for property managers.",
    status: "Coming Soon",
    icon: Building2,
    gradient: "from-cyan-500 to-blue-600",
    lightBg: "bg-cyan-50",
    screenshot: "/images/screenshot-beauty.png",
    features: [
      { icon: Users, label: "Tenant Management" },
      { icon: CreditCard, label: "Payment Tracking" },
      { icon: BarChart3, label: "Analytics & Reports" },
    ],
  },
  {
    name: "Jax Beauty",
    tagline: "Your beauty business, elevated.",
    description:
      "From appointments and client management to inventory and marketing — everything a beauty business needs to thrive.",
    status: "Coming Soon",
    icon: Scissors,
    gradient: "from-pink-500 to-purple-600",
    lightBg: "bg-pink-50",
    screenshot: "/images/screenshot-property.png",
    features: [
      { icon: Calendar, label: "Smart Scheduling" },
      { icon: ShoppingBag, label: "Inventory Control" },
      { icon: Megaphone, label: "Marketing Tools" },
    ],
  },
];

export default function AppsShowcase() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-purple-50 text-purple-600 text-xs font-semibold uppercase tracking-wider mb-4">
            Our Products
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            Apps built for <span className="gradient-text">real businesses</span>
          </h2>
          <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
            Each app is purpose-built, deeply featured, and designed to work together as part of the Jax ecosystem.
          </p>
        </motion.div>

        <div className="space-y-16 md:space-y-8">
          {apps.map((app, idx) => (
            <motion.div
              key={app.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className={`rounded-3xl border border-slate-100 overflow-hidden md:grid md:grid-cols-2 ${app.lightBg}`}
            >
              {/* Content side */}
              <div className={`p-8 md:p-12 lg:p-16 flex flex-col justify-center ${idx % 2 === 1 ? "md:order-2" : ""}`}>
                <div className={`inline-flex items-center gap-2 w-fit px-3 py-1.5 rounded-full bg-gradient-to-r ${app.gradient} text-white text-xs font-semibold mb-6`}>
                  <app.icon className="w-3.5 h-3.5" />
                  {app.name}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight">{app.tagline}</h3>
                <p className="mt-4 text-slate-500 leading-relaxed">{app.description}</p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {app.features.map((f) => (
                    <div key={f.label} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-sm font-medium text-slate-700">
                      <f.icon className="w-4 h-4 text-slate-400" />
                      {f.label}
                    </div>
                  ))}
                </div>

                <span className="mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 text-white text-xs font-semibold uppercase tracking-wider">
                  {app.status}
                </span>
              </div>

              {/* Visual side */}
              <div className={`relative min-h-[280px] md:min-h-0 flex items-center justify-center p-6 md:p-8 ${idx % 2 === 1 ? "md:order-1" : ""}`}>
                <div className="w-full rounded-2xl overflow-hidden shadow-2xl border border-white/60">
                  <img src={app.screenshot} alt={app.name} className="w-full object-cover" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}