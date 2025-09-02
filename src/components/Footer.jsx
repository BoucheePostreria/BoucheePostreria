import React from "react";

function Footer() {
  return (
    <footer
      id="contact"
      className="bg-pink-600 text-white py-6 text-center mt-10"
    >
      <p>&copy; {new Date().getFullYear()} Boucheé Pastelería. Todos los derechos reservados.</p>
      <p className="mt-2">📍 Calle Falsa 123, Bogotá - 📞 300 123 4567</p>
    </footer>
  );
}

export default Footer;
