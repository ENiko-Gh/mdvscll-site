// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('ruta-a-tu-imagen.jpg')" }}>
            <div className="absolute inset-0 bg-black opacity-50"></div> {/* Capa oscura sobre la imagen */}

            <div className="relative z-10 p-8 text-center text-white">
                <h2 className="text-3xl font-bold">Bienvenido a MDV&SCLL</h2>
                <p className="mt-4">Somos una empresa dedicada a soluciones para la inclusión y el bienestar.</p>

                <div className="mt-8">
                    <Link
                        to="/formulario"
                        className="bg-orange-500 hover:bg-orange-600 text-white p-2 rounded mr-4 transition duration-300 ease-in-out shadow-lg"
                    >
                        Conocer más
                    </Link>
                    <Link
                        to="/contacto"
                        className="bg-orange-500 hover:bg-orange-600 text-white p-2 rounded transition duration-300 ease-in-out shadow-lg"
                    >
                        Contactar
                    </Link>
                </div>

                {/* Breve Reseña */}
                <section className="mt-8 bg-gray-100 p-6 rounded shadow-md">
                    <h3 className="text-2xl font-semibold text-center mb-4">Sobre Nosotros</h3>
                    <p className="text-gray-700 text-center">
                        En MDV&SCLL, nos dedicamos a proporcionar soluciones inclusivas para el bienestar
                        y el desarrollo personal. Nuestro objetivo es construir un entorno accesible para todos.
                    </p>
                </section>
            </div>

            {/* Botón Flotante Inferior */}
            <Link
                to="/servicios"
                className="fixed bottom-4 right-4 bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-lg transition duration-300 ease-in-out"
            >
                ➡ Siguiente
            </Link>
        </div>
    );
};

export default Home;
