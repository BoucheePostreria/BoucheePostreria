import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Opinions from "./components/Opinions";
import Contact from "./components/Contact";
import About from "./components/About";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Menu from "./components/Menu";
import BannerWsp from "./components/BannerWsp";
import BannerTwich from "./components/BannerTwich";
import { FaWhatsapp } from "react-icons/fa";

export default function Website() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/10 via-secondary/10 to-white text-gray-900 antialiased">
      <Navbar />
      <Hero />
      <Menu />
      <Gallery />
      <BannerTwich />
      <About />
      <Opinions />
      <BannerWsp />
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


