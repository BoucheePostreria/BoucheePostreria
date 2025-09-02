import React from "react";

export default function Card({ children, className = "" }) {
  return (
    <div className={`rounded-2xl shadow-sm bg-white border border-gray-100 ${className}`}>
      {children}
    </div>
  );
}


