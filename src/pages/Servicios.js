import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Componente para el formulario de ingresar un profesional o conductor
const FormularioIngreso = ({ tipo, onSubmit }) => {
    const [password, setPassword] = useState('');
    const [isPasswordVerified, setIsPasswordVerified] = useState(false);
    const [formData, setFormData] = useState({
        imagen: '',
        titulo: '',
        descripcion: '',
        contacto: '',
        redSocial: ''
    });

    const handlePasswordSubmit = (e) => {
        e.preventDefault();
        // Verificación de la contraseña (esto debe mejorarse con un backend real)
        if (password === 'admin123') {  // Ejemplo de contraseña
            setIsPasswordVerified(true);
        } else {
            alert('Contraseña incorrecta');
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <div className="p-8">
            {!isPasswordVerified ? (
                <form onSubmit={handlePasswordSubmit}>
                    <label htmlFor="password" className="block mb-2">Contraseña:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="border p-2 mb-4"
                    />
                    <button type="submit" className="bg-blue-500 text-white p-2">Verificar</button>
                </form>
            ) : (
                <form onSubmit={handleFormSubmit}>
                    <h3 className="font-bold text-lg mb-4">{tipo} - Ingresar Datos</h3>
                    <label htmlFor="imagen" className="block mb-2">Imagen URL:</label>
                    <input
                        type="text"
                        id="imagen"
                        value={formData.imagen}
                        onChange={(e) => setFormData({ ...formData, imagen: e.target.value })}
                        className="border p-2 mb-4"
                    />
                    <label htmlFor="titulo" className="block mb-2">Título:</label>
                    <input
                        type="text"
                        id="titulo"
                        value={formData.titulo}
                        onChange={(e) => setFormData({ ...formData, titulo: e.target.value })}
                        className="border p-2 mb-4"
                    />
                    <label htmlFor="descripcion" className="block mb-2">Descripción:</label>
                    <textarea
                        id="descripcion"
                        value={formData.descripcion}
                        onChange={(e) => setFormData({ ...formData, descripcion: e.target.value })}
                        className="border p-2 mb-4"
                    />
                    <label htmlFor="contacto" className="block mb-2">Contacto:</label>
                    <input
                        type="text"
                        id="contacto"
                        value={formData.contacto}
                        onChange={(e) => setFormData({ ...formData, contacto: e.target.value })}
                        className="border p-2 mb-4"
                    />
                    <label htmlFor="redSocial" className="block mb-2">Red Social:</label>
                    <input
                        type="text"
                        id="redSocial"
                        value={formData.redSocial}
                        onChange={(e) => setFormData({ ...formData, redSocial: e.target.value })}
                        className="border p-2 mb-4"
                    />
                    <button type="submit" className="bg-green-500 text-white p-2">Ingresar</button>
                </form>
            )}
        </div>
    );
};

const Servicios = () => {
    const [profesionales, setProfesionales] = useState([]);
    const [conductores, setConductores] = useState([]);

    // Simulando la carga de los datos de los profesionales y conductores
    useEffect(() => {
        setProfesionales([
            { id: 1, nombre: "Psicólogo", imagen: "psicologo.jpg", titulo: "Psicólogo", descripcion: "Descripción breve...", contacto: "contacto@psicologo.com", redSocial: "@psicologo" },
            { id: 2, nombre: "Médico", imagen: "medico.jpg", titulo: "Médico", descripcion: "Descripción breve...", contacto: "contacto@medico.com", redSocial: "@medico" },
            { id: 3, nombre: "Terapista", imagen: "terapista.jpg", titulo: "Terapista", descripcion: "Descripción breve...", contacto: "contacto@terapista.com", redSocial: "@terapista" },
            { id: 4, nombre: "Fisioterapista", imagen: "fisioterapista.jpg", titulo: "Fisioterapista", descripcion: "Descripción breve...", contacto: "contacto@fisioterapista.com", redSocial: "@fisioterapista" }
        ]);
        setConductores([
            { id: 1, nombre: "Conductor 1", imagen: "conductor1.jpg", descripcion: "Descripción breve...", contacto: "conductor1@transporte.com", redSocial: "@conductor1" },
            { id: 2, nombre: "Conductor 2", imagen: "conductor2.jpg", descripcion: "Descripción breve...", contacto: "conductor2@transporte.com", redSocial: "@conductor2" }
        ]);
    }, []);

    const handleAddProfessional = (newProfessional) => {
        setProfesionales((prevState) => [newProfessional, ...prevState]);
        // Aquí puedes realizar una solicitud POST a tu base de datos "Profesionales"
        console.log("Nuevo Profesional:", newProfessional);
    };

    const handleAddDriver = (newDriver) => {
        setConductores((prevState) => [newDriver, ...prevState]);
        // Aquí puedes realizar una solicitud POST a tu base de datos "Transportistas"
        console.log("Nuevo Conductor:", newDriver);
    };

    return (
        <div className="relative min-h-screen p-8">
            <h1 className="text-3xl font-bold text-center mb-8">Nuestros Servicios</h1>
            <p className="text-center mb-4">
                En MDV&SCLL ofrecemos servicios personalizados para garantizar la integración y el desarrollo personal.
            </p>

            {/* Contenedor Profesionales */}
            <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Profesionales</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {profesionales.map((prof) => (
                        <div key={prof.id} className="bg-gray-100 p-4 rounded shadow">
                            <img src={prof.imagen} alt={prof.nombre} className="w-24 h-24 rounded-full mb-4" />
                            <h3 className="font-bold text-lg">{prof.titulo}</h3>
                            <p>{prof.descripcion}</p>
                            <p>{prof.contacto}</p>
                            <p>{prof.redSocial}</p>
                        </div>
                    ))}
                </div>
                <Link
                    to="/formulario-profesionales"
                    className="block mt-4 text-blue-500 hover:underline"
                >
                    Ingresar o Actualizar Profesional
                </Link>
            </div>

            {/* Contenedor Transporte */}
            <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Transporte</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {conductores.map((conductor) => (
                        <div key={conductor.id} className="bg-gray-100 p-4 rounded shadow">
                            <img src={conductor.imagen} alt={conductor.nombre} className="w-24 h-24 rounded-full mb-4" />
                            <h3 className="font-bold text-lg">{conductor.nombre}</h3>
                            <p>{conductor.descripcion}</p>
                            <p>{conductor.contacto}</p>
                            <p>{conductor.redSocial}</p>
                        </div>
                    ))}
                </div>
                <Link
                    to="/formulario-conductores"
                    className="block mt-4 text-blue-500 hover:underline"
                >
                    Ingresar o Actualizar Conductor
                </Link>
            </div>

            {/* Aquí llamamos al formulario para ingresar datos */}
            <FormularioIngreso tipo="Profesional" onSubmit={handleAddProfessional} />
            <FormularioIngreso tipo="Conductor" onSubmit={handleAddDriver} />
        </div>
    );
};

export default Servicios;
