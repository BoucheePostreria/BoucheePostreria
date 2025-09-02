import React, { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-gray-100/90 border-b border-gray-200">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 lg:px-16 h-16">
        <a href="#home" className="font-extrabold tracking-tight text-xl text-gray-800">
          Bouchée <span className="text-rose-500">•</span> Postería Exquisita
        </a>
        
        {/* Menú de escritorio */}
        <div className="hidden md:flex items-center gap-6 text-sm">
          <a href="#menu" className="text-gray-700 hover:text-rose-600 font-medium">Menú</a>
          <a href="#galeria" className="text-gray-700 hover:text-rose-600 font-medium">Galería</a>
          <a href="#sobre" className="text-gray-700 hover:text-rose-600 font-medium">Sobre nosotros</a>
          <a href="#opiniones" className="text-gray-700 hover:text-rose-600 font-medium">Opiniones</a>
          <a href="#contacto" className="text-gray-700 hover:text-rose-600 font-medium">Contacto</a>
          <a
            href="https://wa.me/573104883365?text=Hola%20Bouch%C3%A9e%2C%20quiero%20hacer%20un%20pedido"
            className="ml-2 inline-flex items-center rounded-full px-4 py-2 bg-gray-700 text-white hover:bg-gray-800 shadow"
          >
            Hacer pedido
          </a>
        </div>

        {/* Menú móvil */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 hover:text-rose-600 p-3 bg-gray-200 rounded-lg border border-gray-300"
            aria-label="Abrir menú"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Menú móvil desplegable */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-6 py-6 space-y-4">
            <div className="text-sm text-gray-500 mb-2">Menú de navegación</div>
            <a href="#menu" className="block text-gray-700 hover:text-rose-600 font-medium py-2 border-b border-gray-100">🍰 Menú</a>
            <a href="#galeria" className="block text-gray-700 hover:text-rose-600 font-medium py-2 border-b border-gray-100">📸 Galería</a>
            <a href="#sobre" className="block text-gray-700 hover:text-rose-600 font-medium py-2 border-b border-gray-100">ℹ️ Sobre nosotros</a>
            <a href="#opiniones" className="block text-gray-700 hover:text-rose-600 font-medium py-2 border-b border-gray-100">⭐ Opiniones</a>
            <a href="#contacto" className="block text-gray-700 hover:text-rose-600 font-medium py-2 border-b border-gray-100">📞 Contacto</a>
            <div className="pt-4">
              <a
                href="https://wa.me/573104883365?text=Hola%20Bouch%C3%A9e%2C%20quiero%20hacer%20un%20pedido"
                className="block inline-flex items-center rounded-full px-6 py-3 bg-gray-700 text-white hover:bg-gray-800 shadow w-fit font-medium"
              >
                💬 Hacer pedido
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
