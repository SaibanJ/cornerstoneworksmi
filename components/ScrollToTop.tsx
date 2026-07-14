"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-50 bg-[#C9A227] hover:bg-[#F0C040] text-black p-3 shadow-lg shadow-black/50 transition-all duration-200 hover:scale-110"
      aria-label="Scroll to top"
    >
      <ChevronUp size={22} />
    </button>
  );
}
