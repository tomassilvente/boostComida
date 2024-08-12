
import React from 'react';
import './Catalog.css';

const products = [
  { id: 1, name: 'Cheeseburger', price: '$8500', description: 'Clásica Hamburguesa con patty de 200g y doble chedar', image: '/images/hamburguesa2.jpg' },
  { id: 2, name: 'Burguer Completa', price: '$10000', description: 'Doble patty de 200g con chedar, bacon, huevo frito y cebolla caramelizada', image: '/images/hamburguesa.jpg' },
  { id: 3, name: 'Lomito Completo', price: '$11000', description: 'Sánguche de lomo con jamón, queso, huevo, lechuga y tomate', image: '/images/hamburguesa1.jpg' },
  { id: 4, name: 'Sanguche de Milanesa Completo', price: '$10500', description: 'Sánguche de milanesa con jamón, queso, huevo, lechuga y tomate.', image: '/images/hamburguesa3.jpg' },

];

const Catalog = () => {
  return (
    <section className="catalog-section p-8">
      <h2 className="text-3xl font-cursive text-center text-brown mb-8">Nuestro Catálogo</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {products.map(product => (
          <div key={product.id} className="product-card bg-white p-6 rounded-lg shadow-lg">
            <img src={product.image} alt={product.name} className="w-full h-72 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-bold text-brown mb-2">{product.name}</h3>
            <p className="text-brown-light mb-4">{product.description}</p>
            <p className="text-brown font-bold">{product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Catalog;
