import React from "react";
import { motion } from "framer-motion";

export default function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="py-20 px-6 md:px-10 lg:px-16 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        {title && (
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">{title}</h2>
        )}
        {subtitle && (
          <p className="mt-3 text-base md:text-lg text-gray-600">{subtitle}</p>
        )}
      </motion.div>
      {children}
    </section>
  );
}


