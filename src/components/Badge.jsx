import React from "react";

export default function Badge({ children, variant = "none" }) {
  const base = "inline-flex items-center gap-1 rounded-full px-3 py-1 text-sm font-medium backdrop-blur shadow-none";
  const styles = {
    none: "bg-white/70 text-gray-900",
    silver: "bg-white/70 text-gray-900 ring-1 ring-gray-300",
    gold: "bg-white/80 text-gray-900 ring-1 ring-amber-400",
  };

  return (
    <span className={`${base} ${styles[variant] ?? styles.none}`}>
      {children}
    </span>
  );
}


