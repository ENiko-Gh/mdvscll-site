// src/pages/Formulario.js
import React, { useState } from 'react';
import { enviarFormulario } from '../services/api';

const Formulario = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        mensaje: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await enviarFormulario(formData);
            alert('Formulario enviado correctamente');
        } catch (error) {
            alert('Error al enviar el formulario');
        }
    };

    return (
        <div>
            <h2 className="text-2xl font-bold">Formulario de Contacto</h2>
            <form onSubmit={handleSubmit}>
                <div className="mt-4">
                    <label htmlFor="nombre" className="block">Nombre:</label>
                    <input
                        type="text"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        className="p-2 w-full"
                    />
                </div>

                <div className="mt-4">
                    <label htmlFor="email" className="block">Correo Electrónico:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="p-2 w-full"
                    />
                </div>

                <div className="mt-4">
                    <label htmlFor="mensaje" className="block">Mensaje:</label>
                    <textarea
                        name="mensaje"
                        value={formData.mensaje}
                        onChange={handleChange}
                        className="p-2 w-full"
                    ></textarea>
                </div>

                <button type="submit" className="mt-4 p-2 bg-blue-500 text-white rounded">Enviar</button>
            </form>
        </div>
    );
};

export default Formulario;
