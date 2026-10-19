import { motion } from "framer-motion";
import { Zap, Wind, Wifi, Droplets, Layers, Camera } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

const services = [
  {
    icon: Zap,
    title: "Electrical Services",
    description: "General electrical repairs, wiring, lighting installations, fuse board upgrades, safety checks, and more.",
    image: "/images/service-1.png",
    color: "text-yellow-500",
    accent: "from-yellow-400 to-amber-500",
  },
  {
    icon: Wind,
    title: "AC Installation & Maintenance",
    description: "Professional AC installation, servicing, gas refills, troubleshooting, and long-term maintenance plans.",
    image: "/images/service-2.png",
    color: "text-cyan-500",
    accent: "from-cyan-400 to-sky-500",
  },
  {
    icon: Wifi,
    title: "Internet & Starlink Setup",
    description: "Full Starlink installation, router configuration, network optimisation, and home/office WiFi setup.",
    image: "/images/service-3.png",
    color: "text-purple-500",
    accent: "from-purple-400 to-indigo-500",
  },
  {
    icon: Droplets,
    title: "Plumbing Services",
    description: "Leak repairs, pipe replacements, bathroom fittings, water heater installation, and full plumbing maintenance.",
    image: "/images/service-4.png",
    color: "text-blue-500",
    accent: "from-blue-400 to-indigo-500",
  },
  {
    icon: Layers,
    title: "POP & Plasterboard Works",
    description: "POP ceilings, plasterboard partitions, wall finishing, decorative designs, and structural interior upgrades.",
    image: "/images/service-5.png",
    color: "text-pink-500",
    accent: "from-pink-400 to-fuchsia-500",
  },
  {
    icon: Camera,
    title: "CCTV Installation & Security Systems",
    description: "Camera installation, DVR/NVR setup, remote monitoring configuration, and complete security system deployment.",
    image: "/images/service-6.png",
    color: "text-slate-600",
    accent: "from-slate-500 to-slate-700",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 md:py-28 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-purple-50 text-purple-600 text-xs font-semibold uppercase tracking-wider mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            Everything you need, <span className="gradient-text">done right</span>
          </h2>
          <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
            A full range of technical services for homes and businesses — delivered by certified specialists.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              whileHover={{ y: -8 }}
              className="rounded-2xl border border-slate-100 bg-white overflow-hidden shadow-sm hover:shadow-2xl transition-shadow duration-300 group cursor-pointer"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-white/95 backdrop-blur flex items-center justify-center shadow-lg">
                  <service.icon className={`w-6 h-6 ${service.color}`} />
                </div>
                <h3 className="absolute bottom-4 left-4 right-4 text-lg font-bold text-white drop-shadow-md">
                  {service.title}
                </h3>
              </div>
              <div className="p-6">
                <p className="text-sm text-slate-500 leading-relaxed">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link
            to={createPageUrl("Services")}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold text-white gradient-bg hover:opacity-90 transition-opacity shadow-lg shadow-cyan-500/20"
          >
            See All Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
}