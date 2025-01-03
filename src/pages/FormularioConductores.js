import React from 'react';

const FormularioConductores = () => {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
                <h1 className="text-2xl font-bold mb-6 text-center">Formulario para Conductores</h1>
                <form>
                    {/* Nombre Completo */}
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="nombre">
                            Nombre Completo:
                        </label>
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            className="w-full p-2 border border-gray-300 rounded-md"
                            placeholder="Ingrese el nombre completo"
                        />
                    </div>

                    {/* Número de Teléfono */}
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="telefono">
                            Número de Teléfono:
                        </label>
                        <input
                            type="tel"
                            id="telefono"
                            name="telefono"
                            className="w-full p-2 border border-gray-300 rounded-md"
                            placeholder="Ingrese el número de teléfono"
                        />
                    </div>

                    {/* Licencia de Conducir */}
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="licencia">
                            Licencia de Conducir:
                        </label>
                        <input
                            type="text"
                            id="licencia"
                            name="licencia"
                            className="w-full p-2 border border-gray-300 rounded-md"
                            placeholder="Ingrese el número de licencia"
                        />
                    </div>

                    {/* Foto de Perfil */}
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="foto">
                            Foto de Perfil:
                        </label>
                        <input
                            type="file"
                            id="foto"
                            name="foto"
                            className="w-full p-2 border border-gray-300 rounded-md"
                            accept="image/*"
                        />
                    </div>

                    {/* Botón Enviar */}
                    <div className="text-center">
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                        >
                            Enviar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default FormularioConductores;
