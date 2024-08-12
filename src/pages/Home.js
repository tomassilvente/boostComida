import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Home = () => {
  return (
    <section className="relative text-center p-8 h-screen ">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        showArrows={false}
        interval={5000}
        className="h-full"
      >
        <div className='bg-black'>
          <img src="/images/hamburguesa1.jpg" alt="Hamburguesa 1" className="object-cover w-full h-[90vh] opacity-30" />
        </div>
        <div className='bg-black'>
          <img src="/images/hamburguesa2.jpg" alt="Hamburguesa 2" className="object-cover w-full h-[90vh] opacity-30" />
        </div>
        <div className='bg-black'>
          <img src="/images/hamburguesa3.jpg" alt="Hamburguesa 3" className="object-cover w-full h-[90vh] opacity-30" />
        </div>
      </Carousel>
      
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10">
        <h1 className="text-5xl md:text-6xl font-bold drop-shadow-lg">Bienvenidos a Tomás</h1>
        <p className="mt-4 text-xl drop-shadow-lg">Disfruta de las mejores hamburguesas hechas con amor.</p>
        <Link to="/catalog">
          <button className="mt-8 px-8 py-3 bg-[#8b6f61] text-white text-lg rounded-full shadow-lg hover:bg-[#5e412f] transition duration-300">
            Ver Nuestro Menú
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Home;
