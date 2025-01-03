import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div
            className="relative min-h-screen p-8"
            style={{
                backgroundImage: "url('/assets/images/background.jpg')", // Imagen desde public/assets
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
            }}
        >
            {/* Bienvenida */}
            <div className="text-center mb-8">
                <h1 className="text-4xl font-bold text-blue-900 mb-4">Bienvenido a MDV&SCLL</h1>
                <p className="text-lg text-gray-700">
                    Somos una empresa dedicada a soluciones para la inclusión y el bienestar.
                </p>
            </div>

            {/* Sobre Nosotros */}
            <div className="text-center mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Sobre Nosotros</h2>
                <p className="text-gray-700 max-w-3xl mx-auto">
                    En MDV&SCLL, nos dedicamos a proporcionar soluciones inclusivas para el bienestar y el desarrollo personal.
                    Nuestro objetivo es construir un entorno accesible para todos.
                </p>
            </div>

            {/* Botones */}
            <div className="flex justify-center space-x-4">
                <button
                    onClick={() => navigate("/visitas")}
                    className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full transition duration-300 ease-in-out"
                >
                    Conocer más
                </button>
                <button
                    onClick={() => navigate("/contacto")}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full transition duration-300 ease-in-out"
                >
                    Contactar
                </button>
            </div>

            {/* Botón "Siguiente" */}
            <button
                onClick={() => navigate("/servicios")}
                className="fixed bottom-4 right-4 bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-lg transition duration-300 ease-in-out"
                aria-label="Siguiente"
            >
                ➡ Siguiente
            </button>
        </div>
    );
};

export default Home;
