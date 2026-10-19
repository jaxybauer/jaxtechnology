import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  User,
  MessageSquare,
  Tag,
  Send,
  Phone,
  ChevronDown,
  CheckCircle2,
  Headphones,
  Clock,
} from "lucide-react";
import BookingQR from "@/components/home/BookingQR";

/** Where the contact form sends to. Changing it here changes it everywhere. */
const CONTACT_EMAIL = "info@jax-technology.com";

const faqs = [
  {
    question: "What is Jax Technology?",
    answer:
      "Jax Technology is a professional installation, repair, and maintenance services company based in Accra, Ghana. We connect individuals, homeowners, businesses, and property managers with skilled, vetted professionals who deliver reliable, high-quality technical and property maintenance services.",
  },
  {
    question: "What services does Jax Technology offer?",
    answer:
      "We offer CCTV installation and security systems, Starlink and internet networking, plumbing services, POP and ceiling installations, air conditioning services, electrical services, and general property maintenance — covering installations, repairs, and routine maintenance for homes and businesses.",
  },
  {
    question: "Where is Jax Technology located, and which areas do you cover?",
    answer:
      "We are based in Accra, Ghana, serving residential and commercial customers across the Greater Accra Region. We also undertake projects outside Accra, subject to project scope, location, and availability.",
  },
  {
    question: "Why should I choose Jax Technology?",
    answer:
      "We understand the challenges of finding dependable technicians. That's why we provide access to vetted professionals who are skilled, experienced, and committed to delivering quality workmanship — with a convenient, professional service experience from initial enquiry through to project completion.",
  },
  {
    question: "Do you handle emergency repairs?",
    answer:
      "Yes. Our experienced technicians are available for emergency repairs as well as new installations, routine maintenance, and technical support. Contact us and we'll arrange a professional to get the job done efficiently.",
  },
  {
    question: "Do you work with businesses and property managers?",
    answer:
      "Absolutely. We serve individuals, homeowners, businesses, and property managers — providing reliable technicians for routine maintenance, repairs, installations, and property improvement projects of any scope.",
  },
  {
    question: "How do I request a service or get a quote?",
    answer: (
      <>
        Simply reach out via our contact form, email, or phone, or book directly through our online booking page at{" "}
        <a
          href="https://app.useflowgo.com/bookings/jax-technology"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-600 font-medium hover:text-cyan-700 underline underline-offset-2"
        >
          app.useflowgo.com/bookings/jax-technology
        </a>
        . Share the details of your installation, repair, or maintenance need and our team will guide you through assessment, scheduling, and completion.
      </>
    ),
  },
  {
    question: "Are your technicians qualified and vetted?",
    answer:
      "Yes. Every technician we work with is skilled, experienced, and vetted to ensure reliable, high-quality workmanship across all our service categories — from electrical and plumbing to CCTV, Starlink, AC, and POP installations.",
  },
];

const contactDetails = [
  {
    icon: Mail,
    label: "Email Us",
    value: "info@jax-technology.com",
    sub: "We'll respond within 24 hours",
    bg: "bg-cyan-50",
    color: "text-cyan-600",
  },
  {
    icon: Phone,
    label: "Call Us",
    value: "+233 59 823 9768",
    sub: "Mon–Fri, 9am–6pm",
    bg: "bg-purple-50",
    color: "text-purple-600",
  },
  {
    icon: Clock,
    label: "Support Hours",
    value: "9:00 AM – 6:00 PM",
    sub: "Monday to Friday",
    bg: "bg-pink-50",
    color: "text-pink-600",
  },
];

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border border-slate-100 rounded-2xl overflow-hidden bg-white hover:border-slate-200 transition-colors">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
      >
        <span className="text-sm md:text-base font-semibold text-slate-800">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="shrink-0"
        >
          <ChevronDown className={`w-5 h-5 transition-colors ${isOpen ? "text-cyan-500" : "text-slate-400"}`} />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 pb-6 text-sm text-slate-500 leading-relaxed border-t border-slate-100 pt-4">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  /*
   * This form used to post to Base44's hosted email service. With Base44 gone
   * there is no server to post to, and a static site has nowhere to keep an
   * API key safely, so the form hands the message to the visitor's own email
   * client instead.
   *
   * The trade-off, stated plainly: the message is only sent once the visitor
   * presses send in their mail app, and we never see it if they abandon it.
   * That is still better than the alternatives — a form that silently fails,
   * or a mail API key shipped to the browser for anyone to take. Wiring this
   * to a real sender later means replacing this one function.
   */
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const subject = `Contact form: ${form.subject}`;
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      "",
      "Message:",
      form.message,
    ].join("\n");

    window.location.href =
      `mailto:${CONTACT_EMAIL}` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    setLoading(false);
    setSubmitted(true);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  const toggleFaq = (i: number) => setOpenFaq(openFaq === i ? null : i);

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
            className="inline-block px-3 py-1 rounded-full bg-purple-50 text-purple-600 text-xs font-semibold uppercase tracking-wider mb-5"
          >
            Get In Touch
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.1]"
          >
            We'd love to <span className="gradient-text">hear from you</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 md:mt-6 text-lg text-slate-500 max-w-xl mx-auto"
          >
            Have a question, need a demo, or just want to say hello? Our team is ready to help.
          </motion.p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {contactDetails.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-start gap-4 p-6 rounded-2xl border border-slate-100 bg-white hover:shadow-md transition-all"
              >
                <div className={`w-11 h-11 rounded-xl ${item.bg} flex items-center justify-center shrink-0`}>
                  <item.icon className={`w-5 h-5 ${item.color}`} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-0.5">{item.label}</p>
                  <p className="text-sm font-bold text-slate-800">{item.value}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{item.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking QR */}
      <BookingQR />

      {/* Contact Form */}
      <section className="py-16 md:py-24 bg-slate-50/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl border border-slate-100 shadow-xl shadow-slate-100/60 p-8 md:p-12"
          >
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">Send us a message</h2>
              <p className="mt-2 text-sm text-slate-500">Fill in the form below and we'll get back to you as soon as possible.</p>
            </div>

            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center mb-5">
                    <CheckCircle2 className="w-8 h-8 text-emerald-500" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800">Almost there</h3>
                  <p className="mt-2 text-sm text-slate-500 max-w-xs">
                    Your email app should have opened with the message ready to go.
                    Press send there and we&apos;ll reply within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 px-6 py-2.5 rounded-full text-sm font-semibold text-white gradient-bg hover:opacity-90 transition-all"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-600 uppercase tracking-wider">Full Name</label>
                      <div className="relative">
                        <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                          type="text"
                          name="name"
                          required
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Jane Smith"
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400/40 focus:border-cyan-400 transition-all bg-slate-50 placeholder:text-slate-400"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-600 uppercase tracking-wider">Email Address</label>
                      <div className="relative">
                        <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                          type="email"
                          name="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          placeholder="jane@example.com"
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400/40 focus:border-cyan-400 transition-all bg-slate-50 placeholder:text-slate-400"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-600 uppercase tracking-wider">Subject</label>
                    <div className="relative">
                      <Tag className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input
                        type="text"
                        name="subject"
                        required
                        value={form.subject}
                        onChange={handleChange}
                        placeholder="How can we help?"
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400/40 focus:border-cyan-400 transition-all bg-slate-50 placeholder:text-slate-400"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-600 uppercase tracking-wider">Message</label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                      <textarea
                        name="message"
                        required
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell us more about your question or project..."
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400/40 focus:border-cyan-400 transition-all bg-slate-50 placeholder:text-slate-400 resize-none"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-semibold text-white gradient-bg hover:opacity-90 transition-all shadow-lg shadow-cyan-500/20 disabled:opacity-60"
                  >
                    {loading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-5">
              <Headphones className="w-4 h-4 text-purple-500" />
              <span className="text-xs font-medium text-slate-600">Frequently Asked Questions</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
              Got <span className="gradient-text">questions?</span>
            </h2>
            <p className="mt-4 text-lg text-slate-500">
              Find answers to the most common questions about Jax Technology and our apps.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                question={faq.question}
                answer={faq.answer}
                isOpen={openFaq === i}
                onToggle={() => toggleFaq(i)}
              />
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-10 p-6 rounded-2xl bg-slate-50 border border-slate-100 text-center"
          >
            <p className="text-sm text-slate-500">
              Still have questions?{" "}
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="font-semibold gradient-text hover:opacity-80 transition-opacity"
              >
                Send us a message
              </button>{" "}
              and we'll get back to you shortly.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}