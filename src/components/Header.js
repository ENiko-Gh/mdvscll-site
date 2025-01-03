import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="bg-blue-600 text-white shadow-md p-4">
            <div className="container mx-auto flex items-center justify-between">
                {/* Logo y Nombre de la Empresa */}
                <div className="flex items-center space-x-4">
                    <img
                        src="ruta-del-logo.png"
                        alt="Logo"
                        className="h-10 w-10 rounded-full object-cover"
                    />
                    <div className="text-left">
                        <h1 className="text-lg font-bold">MDV&SCLL</h1>
                        <p className="text-sm italic">
                            Centro de Apoyo para Personas con Discapacidad
                        </p>
                    </div>
                </div>

                {/* Botón de menú hamburguesa */}
                <button
                    onClick={toggleMenu}
                    className="block md:hidden focus:outline-none ml-auto"
                    aria-label="Abrir menú"
                >
                    <svg
                        className="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>

                {/* Menú de navegación */}
                <nav
                    className={`${isOpen ? "block" : "hidden"
                        } absolute top-16 right-4 bg-white text-gray-800 shadow-md rounded-md md:block md:relative md:top-0 md:right-0 md:shadow-none`}
                >
                    <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 md:items-center">
                        <li>
                            <Link
                                to="/"
                                className="block px-4 py-2 md:p-0 hover:text-blue-300"
                                onClick={() => setIsOpen(false)}
                            >
                                Inicio
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/servicios"
                                className="block px-4 py-2 md:p-0 hover:text-blue-300"
                                onClick={() => setIsOpen(false)}
                            >
                                Servicios
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/calidad"
                                className="block px-4 py-2 md:p-0 hover:text-blue-300"
                                onClick={() => setIsOpen(false)}
                            >
                                Conformidad y Calidad
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/blog"
                                className="block px-4 py-2 md:p-0 hover:text-blue-300"
                                onClick={() => setIsOpen(false)}
                            >
                                Blog
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/contacto"
                                className="block px-4 py-2 md:p-0 hover:text-blue-300"
                                onClick={() => setIsOpen(false)}
                            >
                                Contacto
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
