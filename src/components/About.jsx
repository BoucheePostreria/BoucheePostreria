import React from "react";
import Section from "./Section";
import Card from "./Card";

function About() {
  return (
    <Section id="sobre" title="Sobre Bouchée" subtitle="Tradición repostera, estética impecable y sabor inolvidable.">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <Card className="p-6">
          <p className="text-gray-700 leading-relaxed">
            En Bouchée elaboramos postres artesanales con ingredientes seleccionados. Cuidamos cada detalle —textura, equilibrio y presentación— para que cada bocado sea una experiencia. Trabajamos por encargo y personalizamos sabores, colores y mensajes para tu ocasión especial.
          </p>
          <ul className="mt-4 space-y-2 text-gray-700 text-sm">
            <li>• Atención para cumpleaños, bodas, baby showers y corporativos.</li>
            <li>• Opciones con menor azúcar y sin gluten por encargo.</li>
            <li>• Entregas puntuales y embalaje de regalo.</li>
          </ul>
        </Card>
        <div className="grid grid-cols-2 gap-4">
          <div className="h-40 rounded-2xl bg-gradient-to-br from-rose-100 to-pink-50" />
          <div className="h-40 rounded-2xl bg-gradient-to-br from-pink-100 to-rose-50" />
          <div className="h-40 rounded-2xl bg-gradient-to-br from-rose-50 to-pink-100" />
          <div className="h-40 rounded-2xl bg-gradient-to-br from-rose-100 to-pink-50" />
        </div>
      </div>
    </Section>
  );
}

export default About;
