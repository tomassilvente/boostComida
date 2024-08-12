// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-[#5e412f] p-4">
      <ul className="flex justify-center space-x-6">
        <li><Link to="/" className="text-white">Inicio</Link></li>
        <li><Link to="/catalog" className="text-white">Catálogo</Link></li>
        <li><Link to="/contact" className="text-white">Contacto</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
