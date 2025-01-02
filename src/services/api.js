// src/services/api.js
import axios from 'axios';

// Función para enviar los datos del formulario al servidor
export const enviarFormulario = (data) => {
    // Realizamos una solicitud POST a la ruta de nuestro servidor donde almacenamos los datos
    return axios.post('http://localhost:5000/api/visitas', data);
};

// O si prefieres exportarlo como default, también puedes hacerlo así:
// export default enviarFormulario;
