import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

export interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
}

export default function PricingSection({
  tiers,
  accentGradient = "from-cyan-500 to-blue-600",
}: {
  tiers: PricingTier[];
  accentGradient?: string;
}) {
  return (
    <section className="py-24 md:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-600 text-xs font-semibold uppercase tracking-wider mb-4">
            Pricing
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            Simple, <span className="gradient-text">transparent</span> pricing
          </h2>
          <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
            Choose the plan that fits your business. Upgrade or downgrade at any time.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {tiers.map((tier, idx) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative flex flex-col rounded-3xl border p-8 ${
                tier.highlighted
                  ? "bg-slate-900 border-slate-900 text-white shadow-2xl scale-105"
                  : "bg-white border-slate-200 text-slate-900 shadow-sm"
              }`}
            >
              {tier.highlighted && (
                <div className={`absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-gradient-to-r ${accentGradient} text-white text-xs font-semibold`}>
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className={`text-lg font-bold ${tier.highlighted ? "text-white" : "text-slate-900"}`}>
                  {tier.name}
                </h3>
                <p className={`mt-1 text-sm ${tier.highlighted ? "text-slate-400" : "text-slate-500"}`}>
                  {tier.description}
                </p>
              </div>

              <div className="mb-8">
                <span className={`text-5xl font-extrabold tracking-tight ${tier.highlighted ? "text-white" : "text-slate-900"}`}>
                  {tier.price}
                </span>
                {tier.period && (
                  <span className={`ml-2 text-sm font-medium ${tier.highlighted ? "text-slate-400" : "text-slate-500"}`}>
                    {tier.period}
                  </span>
                )}
              </div>

              <ul className="space-y-3 mb-10 flex-1">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className={`mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center bg-gradient-to-r ${accentGradient}`}>
                      <Check className="w-3 h-3 text-white" />
                    </span>
                    <span className={`text-sm ${tier.highlighted ? "text-slate-300" : "text-slate-600"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Was createPageUrl("Onboarding"), which 404s: there is no
                  Onboarding page, and the onboarding flow it pointed at was
                  Base44-backed and has been removed. Contact is the real
                  destination for "get started" on a site with no sign-up. */}
              <Link
                to={createPageUrl("Contact")}
                className={`w-full text-center py-3 px-6 rounded-full text-sm font-semibold transition-all duration-200 ${
                  tier.highlighted
                    ? `bg-gradient-to-r ${accentGradient} text-white hover:opacity-90`
                    : "bg-slate-100 text-slate-900 hover:bg-slate-200"
                }`}
              >
                {tier.cta}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}