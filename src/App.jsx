import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import About from "./components/About";
import WhatsAppButton from "./components/WhatsAppButton";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/10 via-secondary/5 to-white text-gray-900 antialiased">
      <Navbar />
      <Hero />
      <Menu />
      <About />
      <Footer />
      <WhatsAppButton className="!bg-green-500 !text-white hover:!bg-green-600" />
    </div>
  );
}

export default App;
