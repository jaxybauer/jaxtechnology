import { motion } from "framer-motion";
import { Check } from "lucide-react";

export interface Feature {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  highlights: string[];
  bg: string;
  color: string;
}

export default function FeatureList({
  title,
  subtitle,
  features,
  accentColor,
}: {
  title: string;
  subtitle: string;
  features: Feature[];
  accentColor: string;
}) {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">{title}</h2>
          <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">{subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="group p-7 rounded-2xl border border-slate-100 hover:border-slate-200 hover:shadow-lg bg-white transition-all duration-300"
            >
              <div className={`w-11 h-11 rounded-xl ${feature.bg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                <feature.icon className={`w-5 h-5 ${feature.color}`} />
              </div>
              <h3 className="text-base font-bold mb-2">{feature.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-4">{feature.description}</p>
              <ul className="space-y-2">
                {feature.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-xs text-slate-600">
                    <Check className={`w-3.5 h-3.5 mt-0.5 ${accentColor} shrink-0`} />
                    {h}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}