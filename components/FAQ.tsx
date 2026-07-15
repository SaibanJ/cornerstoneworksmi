"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What types of roofing services do you offer?",
    answer:
      "We offer a full range of roofing services including roof replacement, roof repair, storm damage restoration, siding & exteriors (fascia, soffit, gutters), and insurance claim assistance. Whether it's routine maintenance or full storm recovery, we've got you covered.",
  },
  {
    question: "How do I know if my roof needs repairs?",
    answer:
      "Signs to watch for include missing or curling shingles, visible leaks or water stains inside your home, granules in your gutters, sagging areas, or damage after a storm. When in doubt, give us a call — we offer free estimates and will give you an honest assessment.",
  },
  {
    question: "Do you help with insurance claims?",
    answer:
      "Yes — and this is one of the most important things we do. We work for YOU, not the insurance company. We'll document the damage, help you file your claim, and make sure you get a fair settlement to cover the cost of repairs.",
  },
  {
    question: "What is your warranty policy?",
    answer:
      "We stand behind our work with a comprehensive warranty covering both materials and workmanship. Specific details vary by project and materials used and will be clearly outlined during your consultation.",
  },
  {
    question: "How do I schedule a free estimate?",
    answer:
      "Easy — call us at (517) 392-3496, email Cody@Cornerstoneworksmi.com, or fill out the contact form on this page. We'll get back to you quickly and schedule a time that works for you.",
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Yes, absolutely. Cornerstone Roofing & Restoration LLC is fully licensed and insured in Michigan. You can trust that every job is done safely, professionally, and with accountability.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 bg-[#0f0f0f]">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="text-[#C9A227] text-sm font-medium tracking-[0.3em] uppercase mb-3"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Got Questions?
          </p>
          <h2
            className="text-4xl sm:text-5xl font-bold uppercase text-white"
            style={{ fontFamily: "var(--font-oswald)" }}
          >
            Frequently Asked Questions
          </h2>
          <div className="gold-divider max-w-xs mx-auto mt-6" />
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`border transition-colors ${
                openIndex === i
                  ? "border-[#C9A227]/60 bg-[#111111]"
                  : "border-[#2a2a2a] bg-[#111111] hover:border-[#C9A227]/30"
              }`}
            >
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span
                  className="text-base font-medium text-white uppercase tracking-wide"
                  style={{ fontFamily: "var(--font-oswald)" }}
                >
                  {faq.question}
                </span>
                <ChevronDown
                  size={18}
                  className={`text-[#C9A227] flex-shrink-0 transition-transform duration-200 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === i && (
                <div
                  className="px-6 pb-5 text-gray-400 text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
