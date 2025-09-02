import React from "react";

const items = [
  { name: "Cheesecake de frutos rojos", price: "$12.000" },
  { name: "Brownie con helado", price: "$10.000" },
  { name: "Tiramisú", price: "$15.000" },
  { name: "Tres leches", price: "$9.000" },
];

function Menu() {
  return (
    <section id="menu" className="py-16 px-8 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10">Nuestro Menú</h2>
      <div className="max-w-3xl mx-auto grid gap-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center bg-white p-4 rounded-lg shadow"
          >
            <span className="font-medium">{item.name}</span>
            <span className="text-pink-600 font-semibold">{item.price}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Menu;
