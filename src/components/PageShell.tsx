import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useReducedMotion } from "framer-motion";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
      return;
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname, hash]);
  return null;
}

export default function PageShell() {
  const location = useLocation();
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="min-h-screen bg-navy-deep text-ink">
      <ScrollToTop />
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 10, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: -8, filter: "blur(6px)" }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <Outlet />
        </motion.div>
      </AnimatePresence>
      <Footer />
    </div>
  );
}
