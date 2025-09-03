import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Opinions from "./components/Opinions";
import Contact from "./components/Contact";
import About from "./components/About";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Menu from "./components/Menu";
import { FaWhatsapp } from "react-icons/fa";

export default function Website() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/10 via-secondary/10 to-white text-gray-900 antialiased">
      <Navbar />
      <Hero />
      <Menu/>
      <Gallery />
      <About />
      <Opinions />

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

      <Contact />
      <Footer />
  
      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/573104883365?text=Hola%20Bouch%C3%A9e%2C%20quiero%20hacer%20un%20pedido"
        className="fixed bottom-6 right-4 inline-flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 text-white shadow-lg hover:bg-emerald-600"
        aria-label="Chat por WhatsApp"
      >
        <FaWhatsapp className="w-7 h-7" />
      </a>
    </div>
  );
}


