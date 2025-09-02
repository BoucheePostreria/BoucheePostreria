function Hero() {
  return (
    <section
      id="hero"
      className="h-[90vh] flex flex-col justify-center items-center text-center bg-gradient-to-r from-pink-100 to-pink-300"
    >
      <h2 className="text-4xl md:text-6xl font-extrabold text-pink-900">
        Bienvenido a Bouchee Postreria
      </h2>
      <p className="mt-4 text-lg md:text-xl text-pink-800 max-w-2xl">
        Los mejores postres artesanales hechos con amor 🍩🍪🍫
      </p>
      <button className="mt-6 px-6 py-3 bg-pink-600 text-white rounded-lg shadow hover:bg-pink-700 transition">
        Ver Menú
      </button>
    </section>
  );
}

export default Hero;
