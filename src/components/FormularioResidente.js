import React, { useState } from 'react';

const FormularioResidente = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        telefono: '',
        correo: '',
        direccion: '',
        valoracionCentro: '',
        tipoResidencia: '',
        motivo: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Datos enviados:', formData);
        // Aquí puedes hacer la lógica de envío de datos a la base de datos.
    };

    return (
        <div className="max-w-lg mx-auto p-8">
            <h2 className="text-2xl font-semibold mb-6 text-center">Formulario de Registro para Ser Parte del Centro</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    name="nombre"
                    placeholder="Nombres y Apellidos"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border rounded-md"
                />
                <input
                    type="tel"
                    name="telefono"
                    placeholder="Teléfono de contacto"
                    value={formData.telefono}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border rounded-md"
                />
                <input
                    type="email"
                    name="correo"
                    placeholder="Correo Electrónico"
                    value={formData.correo}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border rounded-md"
                />
                <input
                    type="text"
                    name="direccion"
                    placeholder="Dirección"
                    value={formData.direccion}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border rounded-md"
                />
                <select
                    name="valoracionCentro"
                    value={formData.valoracionCentro}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border rounded-md"
                >
                    <option value="">Selecciona tu valoración del centro</option>
                    <option value="Profesional de la salud">Profesional de la salud</option>
                    <option value="Profesional volante">Profesional volante</option>
                    <option value="Residente interno">Residente interno</option>
                    <option value="Residente externo">Residente externo</option>
                    <option value="Personal apoyo">Personal de apoyo</option>
                    <option value="Personal administrativo">Personal administrativo</option>
                </select>
                <textarea
                    name="motivo"
                    placeholder="¿Por qué quieres pertenecer a este centro? (máximo 500 palabras)"
                    value={formData.motivo}
                    onChange={handleChange}
                    required
                    maxLength="500"
                    className="w-full p-3 border rounded-md"
                />
                <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-md">
                    Enviar
                </button>
            </form>
        </div>
    );
};

export default FormularioResidente;
