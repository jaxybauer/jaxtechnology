import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

export default function CTASection() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl gradient-bg p-10 md:p-16 lg:p-20 text-center"
        >
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-white/10 blur-2xl" />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
              Ready to get started?
            </h2>
            <p className="mt-4 md:mt-6 text-lg text-white/80 max-w-2xl mx-auto">
              Get in touch with our team for a free quote. Fast response, fair pricing, and quality workmanship across Accra.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to={createPageUrl("Contact")}
                className="w-full sm:w-auto px-8 py-4 rounded-full text-base font-semibold bg-white text-slate-900 hover:bg-white/90 transition-all shadow-lg flex items-center justify-center gap-2"
              >
                Request a Free Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:+233598239768"
                className="w-full sm:w-auto px-8 py-4 rounded-full text-base font-semibold text-white border-2 border-white/30 hover:border-white/50 transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                +233 59 823 9768
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}