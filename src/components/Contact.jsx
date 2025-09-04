import React from "react";
import Section from "./Section";
import Card from "./Card";

function Contact() {
  return (
    <Section id="contacto" title="Contacto" subtitle="Resolvemos dudas y tomamos pedidos por WhatsApp o correo.">
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="p-6">
          <h4 className="font-semibold">Datos de contacto</h4>
          <ul className="mt-3 text-sm text-gray-700 space-y-2">
            <li>📱 WhatsApp: <a className="text-rose-700 hover:text-rose-800" href="https://wa.me/573104883365">+57 310 488 3365</a></li>
            <li>✉️ Correo: <a className="text-rose-700 hover:text-rose-800" href="mailto:boucheepostreria@gmail.com?subject=Pedido%20Bouch%C3%A9e">boucheepostreria@gmail.com</a></li>
            <li>📸 Instagram: <a className="text-rose-700 hover:text-rose-800" href="https://www.instagram.com/boucheepostreria?igsh=MTFuaThjYmVwMWtmdg==" target="_blank" rel="noreferrer">@boucheepostreria</a></li>
            <li>📺 Twitch: <a className="text-rose-700 hover:text-rose-800" href="https://www.twitch.tv/bouchee_postreria?sr=a" target="_blank" rel="noreferrer">bouchee_postreria</a></li>
            <li>⏰ Horario: Lun–Sáb · 9:00–18:00</li>
          </ul>
        </Card>
        <Card className="p-6">
          <h4 className="font-semibold">Formulario rápido</h4>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const data = new FormData(e.currentTarget);
              const msg = encodeURIComponent(
                `Hola Bouchée!\n\nNombre: ${data.get("nombre")}\nEvento: ${data.get("evento")}\nFecha: ${data.get("fecha")}\nDetalle: ${data.get("detalle")}`
              );
              window.open(`https://wa.me/573104883365?text=${msg}`, "_blank");
            }}
            className="mt-3 grid gap-3"
          >
            <input name="nombre" required placeholder="Tu nombre" className="rounded-xl border px-4 py-3" />
            <input name="evento" placeholder="Evento (cumpleaños, boda, etc.)" className="rounded-xl border px-4 py-3" />
            <input type="date" name="fecha" className="rounded-xl border px-4 py-3" />
            <textarea name="detalle" placeholder="¿Qué te gustaría pedir? sabores, tamaño, mensaje…" rows={4} className="rounded-xl border px-4 py-3" />
            <button type="submit" className="rounded-xl bg-rose-600 text-white px-5 py-3 hover:bg-rose-700">Enviar por WhatsApp</button>
          </form>
        </Card>
      </div>
    </Section>
  );
}

export default Contact;
