import React from "react";

export default function Badge({ children }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full border px-3 py-1 text-sm bg-white/70 backdrop-blur shadow-sm">
      {children}
    </span>
  );
}


