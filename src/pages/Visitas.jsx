import React, { useState } from "react";

const Visitas = () => {
    const [formData, setFormData] = useState({
        nombre: "",
        nick: "",
        email: "",
        contacto: "",
        pais: "",
        numero: "",
        usuarioRed: "",
    });
    const [selectedContact, setSelectedContact] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleContactChange = (e) => {
        const value = e.target.value;
        setSelectedContact(value);
        setFormData({ ...formData, contacto: value, pais: "", numero: "", usuarioRed: "" });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:5000/api/visitas", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                alert("¡Formulario enviado con éxito!");
                setFormData({
                    nombre: "",
                    nick: "",
                    email: "",
                    contacto: "",
                    pais: "",
                    numero: "",
                    usuarioRed: "",
                });
                setSelectedContact("");
            } else {
                alert("Error al enviar el formulario.");
            }
        } catch (error) {
            alert("Error en la conexión: " + error.message);
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-md">
            <h2 className="text-2xl font-bold text-center mb-6">Formulario de Visitas</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block font-medium text-gray-700">Nombre</label>
                    <input
                        type="text"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border border-gray-300 rounded-md"
                    />
                </div>
                <div>
                    <label className="block font-medium text-gray-700">Nick</label>
                    <input
                        type="text"
                        name="nick"
                        value={formData.nick}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border border-gray-300 rounded-md"
                    />
                </div>
                <div>
                    <label className="block font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border border-gray-300 rounded-md"
                    />
                </div>
                <div>
                    <label className="block font-medium text-gray-700">
                        ¿Cómo quieres que te contactemos?
                    </label>
                    <select
                        name="contacto"
                        value={selectedContact}
                        onChange={handleContactChange}
                        required
                        className="w-full p-2 border border-gray-300 rounded-md"
                    >
                        <option value="">Selecciona una opción</option>
                        <option value="whatsapp">WhatsApp</option>
                        <option value="facebook">Facebook</option>
                        <option value="instagram">Instagram</option>
                        <option value="telegram">Telegram</option>
                        <option value="x">X</option>
                    </select>
                </div>
                {selectedContact === "whatsapp" || selectedContact === "telegram" ? (
                    <>
                        <div>
                            <label className="block font-medium text-gray-700">País</label>
                            <input
                                type="text"
                                name="pais"
                                value={formData.pais}
                                onChange={handleChange}
                                required
                                placeholder="Ejemplo: +1, +52"
                                className="w-full p-2 border border-gray-300 rounded-md"
                            />
                        </div>
                        <div>
                            <label className="block font-medium text-gray-700">Número de Teléfono</label>
                            <input
                                type="text"
                                name="numero"
                                value={formData.numero}
                                onChange={handleChange}
                                required
                                placeholder="Ejemplo: 1234567890"
                                className="w-full p-2 border border-gray-300 rounded-md"
                            />
                        </div>
                    </>
                ) : null}
                {selectedContact === "facebook" ? (
                    <div>
                        <label className="block font-medium text-gray-700">Nombre de Usuario</label>
                        <input
                            type="text"
                            name="usuarioRed"
                            value={formData.usuarioRed}
                            onChange={handleChange}
                            required
                            placeholder="Ejemplo: JuanPerez"
                            className="w-full p-2 border border-gray-300 rounded-md"
                        />
                    </div>
                ) : null}
                {selectedContact === "instagram" ? (
                    <div>
                        <label className="block font-medium text-gray-700">Usuario</label>
                        <input
                            type="text"
                            name="usuarioRed"
                            value={formData.usuarioRed}
                            onChange={handleChange}
                            required
                            placeholder="Ejemplo: @JuanPerez"
                            className="w-full p-2 border border-gray-300 rounded-md"
                        />
                    </div>
                ) : null}
                {selectedContact === "x" ? (
                    <div>
                        <label className="block font-medium text-gray-700">Usuario en X</label>
                        <input
                            type="text"
                            name="usuarioRed"
                            value={formData.usuarioRed}
                            onChange={handleChange}
                            required
                            placeholder="Ejemplo: @Anxxxxxx"
                            className="w-full p-2 border border-gray-300 rounded-md"
                        />
                    </div>
                ) : null}
                <button
                    type="submit"
                    className="w-full py-2 px-4 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700"
                >
                    Enviar
                </button>
            </form>
        </div>
    );
};

export default Visitas;
