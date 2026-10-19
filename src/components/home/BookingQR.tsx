import { motion } from "framer-motion";
import { QrCode, ExternalLink } from "lucide-react";

const QR_IMAGE = "/images/booking-qr.png";
const BOOKING_URL = "https://app.useflowgo.com/bookings/jax-technology";

export default function BookingQR() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center gap-8 p-8 md:p-10 rounded-3xl border border-slate-100 bg-gradient-to-br from-slate-50 to-white shadow-lg shadow-slate-100/60"
        >
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 group"
            aria-label="Book a service with Jax Technology"
          >
            <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-sm transition-all group-hover:shadow-xl group-hover:-translate-y-1">
              <img
                src={QR_IMAGE}
                alt="Scan to book a service with Jax Technology"
                className="w-40 h-40 md:w-44 md:h-44 object-contain"
              />
            </div>
          </a>
          <div className="text-center sm:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 text-cyan-600 text-xs font-semibold uppercase tracking-wider mb-4">
              <QrCode className="w-3.5 h-3.5" />
              Book a Service
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              Scan to <span className="gradient-text">book a service</span>
            </h2>
            <p className="mt-3 text-slate-500 leading-relaxed max-w-md">
              Point your phone camera at the QR code to quickly book any of our services — fast, easy, and available across Accra.
            </p>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white gradient-bg hover:opacity-90 transition-opacity shadow-lg shadow-cyan-500/20"
            >
              Book a service
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}