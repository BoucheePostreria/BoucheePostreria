import React from "react";
import Card from "./Card";
import Section from "./Section";

function Menu() {
  return (
    <Section id="menu" title="Menú destacado" subtitle="Sabores que enamoran... Personalizamos diseños.">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {name: "Cupcakes Flores y Suculentas", desc: "Caja x6 o x12. Decoración premium."},
            {name: "Cheesecake Sabores Surtidos", desc: "Clásico, maracuyá o frutos rojos."},
            {name: "Pie Sabores Surtidos", desc: "Paleta de colores y sabores."},
            {name: "Merengues", desc: "Mix box para regalo."},
            {name: "Pave Tradicional", desc: "Mix box para regalo."},
          ].map((p, i) => (
            <Card key={i} className="p-6 flex flex-col">
              <div className="flex items-start justify-between">
                <h3 className="text-lg font-semibold">{p.name}</h3>
                <span className="text-xs rounded-full bg-rose-100 text-rose-700 px-2 py-1 uppercase tracking-wide">Popular</span>
              </div>
              <p className="mt-2 text-gray-600 text-sm flex-1">{p.desc}</p>
              <div className="mt-4 flex items-center justify-between">
                <a
                  href={`https://wa.me/573104883365?text=Hola%20Bouch%C3%A9e%2C%20quiero%20informaci%C3%B3n%20sobre%20${encodeURIComponent(p.name)}`}
                  className="text-rose-700 hover:text-rose-800 text-sm font-medium"
                >
                  Pedir ➜
                </a>
              </div>
            </Card>
          ))}
        </div>
      </Section>
  );
}

export default Menu;
