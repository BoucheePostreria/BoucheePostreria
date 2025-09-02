import React from "react";

function Navbar() {
  return (
	<nav className="bg-light shadow-md fixed w-full top-0 z-50">
	  <div className="container mx-auto flex justify-between items-center py-4 px-6">
	  <h1 className="font-display text-4xl md:text-6xl text-primary">🍰 Bouchée<span className="text-secondary">Exquisita</span></h1>
	  <ul className="flex gap-6 text-pink-900 font-medium">
		<li><a href="#hero">Inicio</a></li>
		<li><a href="#menu">Menú</a></li>
		<li><a href="#about">Nosotros</a></li>
		<li><a href="#footer">Contacto</a></li>
	  </ul>
	 </div>
	</nav>
  );
}

export default Navbar;
