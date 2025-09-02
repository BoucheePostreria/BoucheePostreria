import React from "react";
import { motion } from "framer-motion";
import Section from "./components/Section";
import Card from "./components/Card";
import Badge from "./components/Badge";

export default function Website() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/10 via-secondary/10 to-white text-gray-900 antialiased">
             {/* NAVBAR */}
       <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-gray-100">
         <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 lg:px-16 h-14">
          <a href="#home" className="font-extrabold tracking-tight text-xl">
            Bouchée <span className="text-rose-500">•</span> Postería Exquisita
          </a>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#menu" className="hover:text-rose-600">Menú</a>
            <a href="#galeria" className="hover:text-rose-600">Galería</a>
            <a href="#sobre" className="hover:text-rose-600">Sobre nosotros</a>
            <a href="#opiniones" className="hover:text-rose-600">Opiniones</a>
            <a href="#contacto" className="hover:text-rose-600">Contacto</a>
            <a
              href="https://wa.me/573104883365?text=Hola%20Bouch%C3%A9e%2C%20quiero%20hacer%20un%20pedido"
              className="ml-2 inline-flex items-center rounded-full px-4 py-2 bg-rose-600 text-white hover:bg-rose-700 shadow"
            >
              Hacer pedido
            </a>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-24 -right-24 h-72 w-72 md:h-96 md:w-96 rounded-full bg-rose-200/50 blur-2xl" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 md:h-96 md:w-96 rounded-full bg-pink-200/50 blur-2xl" />
        </div>
                 <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 pt-12 pb-16 grid md:grid-cols-2 gap-10 items-center">
           <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center md:text-left">
             <div className="flex items-center justify-center md:justify-start gap-4 mb-12">
               <Badge variant="silver">🎂 Repostería artesanal</Badge>
               <Badge variant="gold">✨ Hecho con amor</Badge>
             </div>
             
             {/* Imagen decorativa antes del título */}
             <div className="w-6 h-6 mx-auto md:mx-0 mb-2 rounded-full overflow-hidden shadow-lg bg-red-500">
               <img 
                 src="./images/hero.jpg" 
                 alt="Bouchée Logo" 
                 className="w-full h-full object-cover"
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
              { src: "./images/merengue_acercamiento.jpeg", alt: "Merengue artesanal" },
              { src: "./images/pave.jpeg", alt: "Pavé tradicional" },
              { src: "./images/pie_arandanos.jpeg", alt: "Pie de arándanos" },
              { src: "./images/pie_limon.jpeg", alt: "Pie de limón" },
              { src: "./images/pie_mango.jpeg", alt: "Pie de mango" },
              { src: "./images/pie_oreo.jpeg", alt: "Pie de Oreo" }
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

      {/* MENU */}
      <Section id="menu" title="Menú destacado" subtitle="Sabores que enamoran. Personalizamos diseños y mensajes.">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {name: "Cupcakes firma", desc: "Caja x6 o x12. Decoración premium.", from: "desde $"},
            {name: "Tortas personalizadas", desc: "Diámetros 15–25 cm. Diseño a medida.", from: "desde $"},
            {name: "Cheesecake", desc: "Clásico, maracuyá o frutos rojos.", from: "desde $"},
            {name: "Macarons", desc: "Paleta de colores y sabores.", from: "desde $"},
            {name: "Brownies & blondies", desc: "Mix box para regalo.", from: "desde $"},
            {name: "Mesa dulce", desc: "Catering de postres para eventos.", from: "cotiza"},
          ].map((p, i) => (
            <Card key={i} className="p-6 flex flex-col">
              <div className="flex items-start justify-between">
                <h3 className="text-lg font-semibold">{p.name}</h3>
                <span className="text-xs rounded-full bg-rose-100 text-rose-700 px-2 py-1 uppercase tracking-wide">Popular</span>
              </div>
              <p className="mt-2 text-gray-600 text-sm flex-1">{p.desc}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-sm text-gray-700">{p.from}</span>
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

      {/* GALERÍA */}
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
            href="https://www.instagram.com/boucheepostreria?igsh=MTFuaThjYmVwMWtmdg==" target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border px-5 py-3 bg-white hover:bg-gray-50"
          >
            Ver más en Instagram
          </a>
        </div>
      </Section>

      {/* SOBRE */}
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

      {/* OPINIONES */}
      <Section id="opiniones" title="Opiniones" subtitle="Lo que dicen nuestros clientes">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {name: "María", text: "Los cupcakes más lindos y ricos que he probado."},
            {name: "Andrés", text: "Entrega puntual y diseño tal cual lo pedí. Excelente servicio."},
            {name: "Camila", text: "La torta de frutos rojos fue un hit en mi cumpleaños."},
          ].map((t, i) => (
            <Card key={i} className="p-6">
              <p className="text-gray-700">“{t.text}”</p>
              <div className="mt-4 text-sm text-gray-600">— {t.name}</div>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA STRIP */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
          <div className="rounded-2xl bg-gradient-to-r from-rose-600 to-pink-500 text-white p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow">
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold">¿Listx para endulzar tu evento?</h3>
              <p className="mt-2 text-white/90">Escríbenos por WhatsApp y armamos tu pedido personalizado.</p>
            </div>
            <a
              className="inline-flex items-center rounded-xl bg-white text-rose-700 px-6 py-3 hover:bg-gray-50"
              href="https://wa.me/573104883365?text=Hola%20Bouch%C3%A9e%2C%20quiero%20un%20presupuesto"
            >
              💬 Abrir WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <Section id="contacto" title="Contacto" subtitle="Resolvemos dudas y tomamos pedidos por WhatsApp o correo.">
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h4 className="font-semibold">Datos de contacto</h4>
            <ul className="mt-3 text-sm text-gray-700 space-y-2">
              <li>📱 WhatsApp: <a className="text-rose-700 hover:text-rose-800" href="https://wa.me/573104883365">+57 310 488 3365</a></li>
              <li>✉️ Correo: <a className="text-rose-700 hover:text-rose-800" href="mailto:boucheepostreria@gmail.com?subject=Pedido%20Bouch%C3%A9e">boucheepostreria@gmail.com</a></li>
              <li>📸 Instagram: <a className="text-rose-700 hover:text-rose-800" href="https://www.instagram.com/boucheepostreria?igsh=MTFuaThjYmVwMWtmdg==" target="_blank" rel="noreferrer">@boucheepostreria</a></li>
              <li>⏰ Horario: Lun–Sáb · 9:00–18:00</li>
            </ul>
          </Card>
          <Card className="p-6">
            <h4 className="font-semibold">Formulario rápido</h4>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const data = new FormData(e.currentTarget);
                const msg = encodeURIComponent(
                  `Hola Bouchée!\n\nNombre: ${data.get("nombre")}\nEvento: ${data.get("evento")}\nFecha: ${data.get("fecha")}\nDetalle: ${data.get("detalle")}`
                );
                window.open(`https://wa.me/573104883365?text=${msg}`, "_blank");
              }}
              className="mt-3 grid gap-3"
            >
              <input name="nombre" required placeholder="Tu nombre" className="rounded-xl border px-4 py-3" />
              <input name="evento" placeholder="Evento (cumpleaños, boda, etc.)" className="rounded-xl border px-4 py-3" />
              <input type="date" name="fecha" className="rounded-xl border px-4 py-3" />
              <textarea name="detalle" placeholder="¿Qué te gustaría pedir? sabores, tamaño, mensaje…" rows={4} className="rounded-xl border px-4 py-3" />
              <button type="submit" className="rounded-xl bg-rose-600 text-white px-5 py-3 hover:bg-rose-700">Enviar por WhatsApp</button>
            </form>
          </Card>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="py-10 px-6 md:px-10 lg:px-16 border-t border-gray-100 text-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
          <div>© {new Date().getFullYear()} Bouchée · Postería Exquisita</div>
          <div className="flex items-center gap-4">
            <a href="#menu" className="hover:text-rose-700">Menú</a>
            <a href="#galeria" className="hover:text-rose-700">Galería</a>
            <a href="https://www.instagram.com/boucheepostreria?igsh=MTFuaThjYmVwMWtmdg==" target="_blank" rel="noreferrer" className="hover:text-rose-700">Instagram</a>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/573104883365?text=Hola%20Bouch%C3%A9e%2C%20quiero%20hacer%20un%20pedido"
        className="fixed bottom-6 right-6 inline-flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 text-white shadow-lg hover:bg-emerald-600"
        aria-label="Chat por WhatsApp"
      >
        ✉️
      </a>
    </div>
  );
}


