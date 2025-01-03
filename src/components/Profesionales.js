import React from 'react';

const Profesionales = ({ profesionales }) => {
    return (
        <div className="mb-8">
            <h2 className="text-2xl font-semibold text-center mb-6">Nuestros Profesionales</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {profesionales.slice(0, 4).map((profesional, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                        <img src={profesional.imagen} alt={profesional.nombre} className="rounded-full w-24 h-24 mx-auto mb-4" />
                        <h3 className="font-bold text-lg">{profesional.nombre}</h3>
                        <p className="text-sm">{profesional.titulo}</p>
                        <p className="text-sm mt-2">{profesional.descripcion}</p>
                        <p className="text-sm mt-2">Contacto: {profesional.contacto}</p>
                        <a href={profesional.redSocial} className="text-blue-500 mt-2 block">Conocer más</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Profesionales;
