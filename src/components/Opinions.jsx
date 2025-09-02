import React from "react";
import Section from "./Section";
import Card from "./Card";

function Opinions() {
  return (
    <Section id="opiniones" title="Opiniones" subtitle="Lo que dicen nuestros clientes">
      <div className="grid md:grid-cols-3 gap-6">
        {[
          {name: "María", text: "Los cupcakes más lindos y ricos que he probado."},
          {name: "Andrés", text: "Entrega puntual y diseño tal cual lo pedí. Excelente servicio."},
          {name: "Camila", text: "La torta de frutos rojos fue un hit en mi cumpleaños."},
        ].map((t, i) => (
          <Card key={i} className="p-6">
            <p className="text-gray-700">"{t.text}"</p>
            <div className="mt-4 text-sm text-gray-600">— {t.name}</div>
          </Card>
        ))}
      </div>
    </Section>
  );
}

export default Opinions;
