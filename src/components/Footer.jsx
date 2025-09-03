import React from "react";

function Footer() {
  return (
    <footer className="py-10 px-6 md:px-10 lg:px-20 border-t border-gray-100 text-sm">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
        <div>
          © {new Date().getFullYear()} Bouchée · Postería Exquisita · site by{" "}
          <a
            href="https://marceladj.github.io/MarcelaDJ/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-violet-600 hover:text-violet-700 hover:underline"
          >
            HoshiEngineering
          </a>
        </div>

        <div className="flex items-center gap-14">
          <a href="#menu" className="hover:text-rose-700">Menú</a>
          <a href="#galeria" className="hover:text-rose-700">Galería</a>
          <a href="https://www.instagram.com/boucheepostreria?igsh=MTFuaThjYmVwMWtmdg==" target="_blank" rel="noreferrer" className="hover:text-rose-700">Instagram</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
