import React, { useState } from "react";
import Section from "./Section";

function Gallery() {
    return (
        <Section id="galeria" title="Galería" subtitle="Un vistazo a nuestros acabados y estilos.">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
              <div className={`aspect-[4/3] w-full ${i%3===0 ? "bg-gradient-to-br from-rose-100 to-pink-50" : i%3===1 ? "bg-gradient-to-br from-pink-100 to-rose-50" : "bg-gradient-to-br from-rose-50 to-pink-100"}`} />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-black/20"></div>
              <div className="absolute bottom-3 left-3">
                <span className="text-xs bg-white/80 px-2 py-1 rounded-full backdrop-blur">Bouchée</span>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <a
            href="https://www.instagram.com/boucheepostreria?igsh=MTFuaThjYmVwMWtmdg==" 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border px-5 py-3 bg-white hover:bg-gray-50"
          >
            Ver más en Instagram
          </a>
        </div>
      </Section>
    );
}

export default Gallery;
