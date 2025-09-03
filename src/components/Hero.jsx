import React from "react";
import { motion } from "framer-motion";
import Badge from "./Badge";

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 -right-24 h-72 w-72 md:h-96 md:w-96 rounded-full bg-rose-200/50 blur-2xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 md:h-96 md:w-96 rounded-full bg-pink-200/50 blur-2xl" />
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 pt-12 pb-16 grid md:grid-cols-2 gap-10 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 10 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }} 
          className="text-center md:text-left"
        >
          <div className="flex items-center justify-center md:justify-start gap-4 mb-12">
            <Badge variant="silver">🎂 Repostería artesanal</Badge>
            <Badge variant="gold">✨ Hecho con amor</Badge>
          </div>
          
          {/* Imagen decorativa antes del título */}
          <div className="w-[300px] h-[300px] shrink-0 rounded-full overflow-hidden bg-red-500 mx-auto mt-20 self-start">
           <img 
            src="./images/hero.jpg" 
            alt="Bouchée Logo"
            className="!w-[300px] !h-[300px] object-contain"
           />
          </div>

          <h1 className="text-4xl md:text-6xl font-semibold leading-tight tracking-tight mb-4">
            Bouchée — Postería <span className="text-rose-600">Exquisita</span>
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Cupcakes, tortas y postres finos, elaborados con ingredientes de calidad y diseño impecable. Perfectos para regalos, eventos y antojos especiales.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start mb-6">
            <a
              href="https://wa.me/573104883365?text=Hola%20Bouch%C3%A9e%2C%20quiero%20cotizar%20un%20pedido"
              className="inline-flex items-center justify-center rounded-xl px-6 py-3 bg-rose-600 text-white hover:bg-rose-700 shadow"
            >
              💬 Cotizar por WhatsApp
            </a>
            <a
              href="#menu"
              className="inline-flex items-center justify-center rounded-xl px-6 py-3 bg-white border border-gray-200 hover:border-gray-300"
            >
              Ver menú
            </a>
          </div>
          <div className="text-sm text-gray-600">
            📍Tunja · Envíos locales · Entrega para eventos
          </div>
        </motion.div>

        {/* Visual gallery */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-3 gap-3 md:gap-4"
        >
          {[
            { src: "/images/merengue_acercamiento.jpeg", alt: "Merengue artesanal" },
            { src: "/images/pave.jpeg", alt: "Pavé tradicional" },
            { src: "/images/pie_arandanos.jpeg", alt: "Pie de arándanos" },
            { src: "/images/pie_limon.jpeg", alt: "Pie de limón" },
            { src: "/images/pie_mango.jpeg", alt: "Pie de mango" },
            { src: "/images/pie_oreo.jpeg", alt: "Pie de Oreo" }
          ].map((item, i) => (
            <div key={item.alt} className="aspect-square rounded-2xl overflow-hidden shadow-sm border border-gray-100 relative group">
              <img 
                src={item.src} 
                alt={item.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <div className={`absolute inset-0 ${i % 2 === 0 ? "bg-gradient-to-br from-rose-100 to-pink-50" : "bg-gradient-to-br from-pink-100 to-rose-50"}`} style={{ display: 'none' }}>
                <span className="absolute bottom-2 left-2 text-xs bg-white/80 px-2 py-1 rounded-full backdrop-blur">{item.alt}</span>
              </div>
              {/* Overlay con título */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <span className="absolute bottom-2 left-2 text-xs bg-white/90 px-2 py-1 rounded-full backdrop-blur font-medium">{item.alt}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
