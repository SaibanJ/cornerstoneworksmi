"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

function FacebookIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setLoading(false);

    if (res.ok) {
      setSubmitted(true);
    } else {
      setError("Something went wrong. Please call us at 517-392-3496.");
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="text-[#C9A227] text-sm font-medium tracking-[0.3em] uppercase mb-3"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Get In Touch
          </p>
          <h2
            className="text-4xl sm:text-5xl font-bold uppercase text-white"
            style={{ fontFamily: "var(--font-oswald)" }}
          >
            Request a Free Estimate
          </h2>
          <div className="gold-divider max-w-xs mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left — contact info */}
          <div className="space-y-8">
            <div>
              <h3
                className="text-2xl font-bold uppercase text-white mb-6"
                style={{ fontFamily: "var(--font-oswald)" }}
              >
                Let&apos;s Talk
              </h3>
              <div className="space-y-5">
                <a
                  href="tel:+15173923496"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 bg-[#C9A227]/10 border border-[#C9A227]/30 flex items-center justify-center flex-shrink-0 group-hover:bg-[#C9A227]/20 transition-colors">
                    <Phone size={18} className="text-[#C9A227]" />
                  </div>
                  <div>
                    <p
                      className="text-gray-500 text-xs uppercase tracking-wider"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      Call or Text
                    </p>
                    <p
                      className="text-white font-medium text-lg group-hover:text-[#C9A227] transition-colors"
                      style={{ fontFamily: "var(--font-oswald)" }}
                    >
                      517-392-3496
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:Cody@Cornerstoneworksmi.com"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 bg-[#C9A227]/10 border border-[#C9A227]/30 flex items-center justify-center flex-shrink-0 group-hover:bg-[#C9A227]/20 transition-colors">
                    <Mail size={18} className="text-[#C9A227]" />
                  </div>
                  <div>
                    <p
                      className="text-gray-500 text-xs uppercase tracking-wider"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      Email
                    </p>
                    <p
                      className="text-white font-medium group-hover:text-[#C9A227] transition-colors"
                      style={{ fontFamily: "var(--font-oswald)" }}
                    >
                      Cody@Cornerstoneworksmi.com
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#C9A227]/10 border border-[#C9A227]/30 flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} className="text-[#C9A227]" />
                  </div>
                  <div>
                    <p
                      className="text-gray-500 text-xs uppercase tracking-wider"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      Location
                    </p>
                    <p
                      className="text-white font-medium"
                      style={{ fontFamily: "var(--font-oswald)" }}
                    >
                      Michigan Center, MI 49254
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#C9A227]/10 border border-[#C9A227]/30 flex items-center justify-center flex-shrink-0">
                    <Clock size={18} className="text-[#C9A227]" />
                  </div>
                  <div>
                    <p
                      className="text-gray-500 text-xs uppercase tracking-wider"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      Business Hours
                    </p>
                    <p
                      className="text-white font-medium"
                      style={{ fontFamily: "var(--font-oswald)" }}
                    >
                      Sun – Fri: 9:00 AM – 6:00 PM
                    </p>
                    <p
                      className="text-gray-500 text-sm"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      Saturday: Closed
                    </p>
                  </div>
                </div>

                <a
                  href="https://www.facebook.com/profile.php?id=61590137027445"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 bg-[#C9A227]/10 border border-[#C9A227]/30 flex items-center justify-center flex-shrink-0 group-hover:bg-[#C9A227]/20 transition-colors">
                    <FacebookIcon size={18} />
                  </div>
                  <div>
                    <p
                      className="text-gray-500 text-xs uppercase tracking-wider"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      Social
                    </p>
                    <p
                      className="text-white font-medium group-hover:text-[#C9A227] transition-colors"
                      style={{ fontFamily: "var(--font-oswald)" }}
                    >
                      Find Us on Facebook
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Right — contact form */}
          <div className="bg-[#111111] border border-[#2a2a2a] p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-12 gap-4">
                <span className="text-[#C9A227] text-5xl">✝</span>
                <h3
                  className="text-2xl font-bold uppercase text-white"
                  style={{ fontFamily: "var(--font-oswald)" }}
                >
                  Message Sent!
                </h3>
                <p
                  className="text-gray-400 text-sm"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  Thank you for reaching out. Cody will get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    className="block text-gray-400 text-xs uppercase tracking-wider mb-2"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-[#0a0a0a] border border-[#2a2a2a] text-white px-4 py-3 text-sm focus:outline-none focus:border-[#C9A227] transition-colors"
                    style={{ fontFamily: "var(--font-inter)" }}
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label
                    className="block text-gray-400 text-xs uppercase tracking-wider mb-2"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-[#0a0a0a] border border-[#2a2a2a] text-white px-4 py-3 text-sm focus:outline-none focus:border-[#C9A227] transition-colors"
                    style={{ fontFamily: "var(--font-inter)" }}
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label
                    className="block text-gray-400 text-xs uppercase tracking-wider mb-2"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full bg-[#0a0a0a] border border-[#2a2a2a] text-white px-4 py-3 text-sm focus:outline-none focus:border-[#C9A227] transition-colors"
                    style={{ fontFamily: "var(--font-inter)" }}
                    placeholder="(517) 000-0000"
                  />
                </div>
                <div>
                  <label
                    className="block text-gray-400 text-xs uppercase tracking-wider mb-2"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    className="w-full bg-[#0a0a0a] border border-[#2a2a2a] text-white px-4 py-3 text-sm focus:outline-none focus:border-[#C9A227] transition-colors resize-none"
                    style={{ fontFamily: "var(--font-inter)" }}
                    placeholder="Tell us about your roofing needs..."
                  />
                </div>
                {error && (
                  <p className="text-red-400 text-sm" style={{ fontFamily: "var(--font-inter)" }}>
                    {error}
                  </p>
                )}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#C9A227] hover:bg-[#F0C040] disabled:opacity-60 disabled:cursor-not-allowed text-black font-bold py-4 text-base uppercase tracking-wider transition-colors"
                  style={{ fontFamily: "var(--font-oswald)" }}
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
