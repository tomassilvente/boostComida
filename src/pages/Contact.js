
import React from 'react';

const Contact = () => {
  return (
    <section className="min-h-screen p-8 bg-[#f7f4ef] flex items-center justify-center">
      <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-8">Contáctanos</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Nombre</label>
            <input className="w-full p-2 border border-gray-300 rounded" type="text" placeholder="Tu nombre" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Email</label>
            <input className="w-full p-2 border border-gray-300 rounded" type="email" placeholder="Tu email" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Mensaje</label>
            <textarea className="w-full p-2 border border-gray-300 rounded" rows="4" placeholder="Tu mensaje"></textarea>
          </div>
          <button className="bg-[#8b6f61] text-white p-2 rounded-lg w-full">Enviar</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
