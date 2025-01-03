import React from 'react';

const Transporte = ({ vehiculos }) => {
    return (
        <div className="mb-8">
            <h2 className="text-2xl font-semibold text-center mb-6">Nuestro Transporte</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {vehiculos.slice(0, 2).map((vehiculo, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                        <img src={vehiculo.imagen} alt={vehiculo.titulo} className="w-full h-40 object-cover rounded-md mb-4" />
                        <h3 className="font-bold text-lg">{vehiculo.titulo}</h3>
                        <p className="text-sm mt-2">{vehiculo.descripcion}</p>
                        <p className="text-sm mt-2">Contacto: {vehiculo.contacto}</p>
                        <a href={vehiculo.redSocial} className="text-blue-500 mt-2 block">Conocer más</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Transporte;
