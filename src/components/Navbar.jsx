import React from "react";

function Navbar() {
  return (
    <nav className="bg-pink-200 p-4 flex justify-between items-center shadow-md">
      <h1 className="text-xl font-bold text-pink-800">🍰 Bouchee</h1>
      <ul className="flex gap-6 text-pink-900 font-medium">
        <li><a href="#hero">Inicio</a></li>
        <li><a href="#menu">Menú</a></li>
        <li><a href="#about">Nosotros</a></li>
        <li><a href="#footer">Contacto</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
