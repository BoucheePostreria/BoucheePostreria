import React from "react";
import Section from "./Section";
import Card from "./Card";

function About() {

  const images = [
    { src: "./images/merengue_txt.jpeg", alt: "Postre 1" },
    { src: "./images/pie_amarillos.jpg", alt: "Postre 2" },
    { src: "./images/tiramisu.png", alt: "Postre 3" },
    { src: "./images/oven.png", alt: "Postre 4" },
  ];

  return (
    <Section id="sobre" title="Sobre Bouchée" subtitle="Tradición repostera, estética impecable y sabor inolvidable.">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <Card className="p-6">
          <p className="text-gray-700 leading-relaxed">
            En Bouchée elaboramos postres artesanales con ingredientes seleccionados. Cuidamos cada detalle —textura, equilibrio y presentación— para que cada bocado sea una experiencia. Trabajamos por encargo, personalizamos sabores y colores para tu ocasión especial.
          </p>
          <ul className="mt-4 space-y-2 text-gray-700 text-sm">
            <li>• Atención para cumpleaños, bodas, baby showers y corporativos.</li>
            <li>• Opciones con menor azúcar y sin gluten por encargo.</li>
            <li>• Entregas puntuales y embalaje de regalo.</li>
          </ul>
        </Card>
        {/* Grid de imágenes */}
        <div className="grid grid-cols-2 gap-4">
          {images.map((img, i) => (
            <div key={i} className="h-40 rounded-2xl overflow-hidden relative">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
                onError={(e) => {
                  // ocultamos la imagen si falla
                  e.target.style.display = "none";
                  // mostramos el fallback (el div siguiente)
                  if (e.target.nextSibling) {
                    e.target.nextSibling.style.display = "flex";
                  }
                }}
              />
              {/* Fallback degradado */}
              <div className="absolute inset-0 hidden items-center justify-center bg-gradient-to-br from-rose-100 to-pink-50">
                <span className="text-gray-600 text-sm font-medium">
                  {img.alt}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </Section>
  );
}

export default About;
