import React, { useState } from 'react';

const FormularioResidencia = () => {
    const [formData, setFormData] = useState({
        nombres: '',
        telefono: '',
        correo: '',
        direccion: '',
        valoracion: '',
        tipo: '',
        motivo: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes hacer la llamada para guardar los datos en MongoDB (base de datos "Residentes")
        console.log(formData);
        // Redirigir o mostrar un mensaje de éxito
    };

    return (
        <div className="p-8">
            <h2 className="text-3xl mb-6">Cómo ser parte del Centro</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="nombres"
                    value={formData.nombres}
                    onChange={handleInputChange}
                    placeholder="Nombres y Apellidos"
                    className="mb-4 p-2 w-full border rounded"
                />
                <input
                    type="text"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleInputChange}
                    placeholder="Teléfono"
                    className="mb-4 p-2 w-full border rounded"
                />
                <input
                    type="email"
                    name="correo"
                    value={formData.correo}
                    onChange={handleInputChange}
                    placeholder="Correo Electrónico"
                    className="mb-4 p-2 w-full border rounded"
                />
                <input
                    type="text"
                    name="direccion"
                    value={formData.direccion}
                    onChange={handleInputChange}
                    placeholder="Dirección"
                    className="mb-4 p-2 w-full border rounded"
                />
                <textarea
                    name="valoracion"
                    value={formData.valoracion}
                    onChange={handleInputChange}
                    placeholder="Valoración del Centro"
                    className="mb-4 p-2 w-full border rounded"
                />
                <select
                    name="tipo"
                    value={formData.tipo}
                    onChange={handleInputChange}
                    className="mb-4 p-2 w-full border rounded"
                >
                    <option value="">Selecciona un tipo</option>
                    <option value="profesional_salud">Profesional de la salud</option>
                    <option value="profesional_volante">Profesional volante</option>
                    <option value="residente_interno">Residente Interno</option>
                    <option value="residente_externo">Residente Externo</option>
                    <option value="personal_apoyo">Personal de Apoyo</option>
                    <option value="personal_administrativo">Personal Administrativo</option>
                </select>
                <textarea
                    name="motivo"
                    value={formData.motivo}
                    onChange={handleInputChange}
                    placeholder="¿Por qué quieres pertenecer al centro?"
                    maxLength="500"
                    className="mb-4 p-2 w-full border rounded"
                />
                <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-full">
                    Enviar
                </button>
            </form>
        </div>
    );
};

export default FormularioResidencia;
