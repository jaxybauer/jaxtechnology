import { motion } from "framer-motion";
import { Zap, Wind, Wifi, Droplets, Layers, Camera } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import BookingQR from "@/components/home/BookingQR";

const services = [
  {
    icon: Zap,
    title: "General Electrical Technician",
    description:
      "Full-spectrum electrical services including installations, repairs, fault finding, and compliance certificates for residential and commercial properties.",
    image: "/images/service-1.png",
    color: "text-yellow-500",
    bg: "bg-yellow-50",
    border: "border-yellow-100",
    accent: "from-yellow-400 to-amber-500",
  },
  {
    icon: Wind,
    title: "AC Installation & Maintenance",
    description:
      "Professional air conditioning installation, servicing, and repairs for all major brands. Keep your space comfortable year-round with our certified technicians.",
    image: "/images/service-2.png",
    color: "text-cyan-500",
    bg: "bg-cyan-50",
    border: "border-cyan-100",
    accent: "from-cyan-400 to-sky-500",
  },
  {
    icon: Wifi,
    title: "Internet / Starlink Setup",
    description:
      "Expert setup and configuration of internet connections and Starlink satellite systems, ensuring fast and reliable connectivity for homes and businesses.",
    image: "/images/service-3.png",
    color: "text-purple-500",
    bg: "bg-purple-50",
    border: "border-purple-100",
    accent: "from-purple-400 to-indigo-500",
  },
  {
    icon: Droplets,
    title: "Plumbing",
    description:
      "Comprehensive plumbing services covering installations, leak repairs, drain clearing, geyser replacements, and general maintenance.",
    image: "/images/service-4.png",
    color: "text-blue-500",
    bg: "bg-blue-50",
    border: "border-blue-100",
    accent: "from-blue-400 to-indigo-500",
  },
  {
    icon: Layers,
    title: "POP / Plasterboard Technician",
    description:
      "Skilled plastering and plasterboard work including ceilings, partition walls, skimming, and finishing for new builds and renovations.",
    image: "/images/service-5.png",
    color: "text-pink-500",
    bg: "bg-pink-50",
    border: "border-pink-100",
    accent: "from-pink-400 to-fuchsia-500",
  },
  {
    icon: Camera,
    title: "CCTV Setup & Installation",
    description:
      "Professional CCTV system design, installation, and configuration for homes and businesses. Keep your property secure with reliable surveillance solutions.",
    image: "/images/service-6.png",
    color: "text-slate-600",
    bg: "bg-slate-100",
    border: "border-slate-200",
    accent: "from-slate-500 to-slate-700",
  },
];

export default function Services() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-cyan-50/30">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-cyan-200/20 to-purple-200/20 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-pink-200/15 to-cyan-100/10 blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 md:pt-28 md:pb-20 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-3 py-1 rounded-full bg-cyan-50 text-cyan-600 text-xs font-semibold uppercase tracking-wider mb-5"
          >
            What We Offer
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.1]"
          >
            Our <span className="gradient-text">Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 md:mt-6 text-lg text-slate-500 max-w-xl mx-auto"
          >
            Professional, reliable, and affordable technical services for homes and businesses.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                whileHover={{ y: -8 }}
                className={`rounded-2xl border ${service.border} bg-white overflow-hidden shadow-sm hover:shadow-2xl transition-shadow duration-300 group cursor-pointer`}
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                  {/* Icon badge */}
                  <div className={`absolute top-4 left-4 w-12 h-12 rounded-xl bg-white/95 backdrop-blur flex items-center justify-center shadow-lg`}>
                    <service.icon className={`w-6 h-6 ${service.color}`} />
                  </div>
                  {/* Title overlay */}
                  <h3 className="absolute bottom-4 left-4 right-4 text-lg font-bold text-white drop-shadow-md">
                    {service.title}
                  </h3>
                </div>
                {/* Body */}
                <div className="p-6">
                  <p className="text-sm text-slate-500 leading-relaxed">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking QR */}
      <BookingQR />

      {/* CTA */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight mb-4">
              Ready to get started?
            </h2>
            <p className="text-slate-500 mb-8">
              Get in touch with our team and we'll find the right solution for you.
            </p>
            <Link
              to={createPageUrl("Contact")}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold text-white gradient-bg hover:opacity-90 transition-opacity shadow-lg shadow-cyan-500/20"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}