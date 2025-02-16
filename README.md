![alt text](image.png)

## Alumno
### Edison Nicolas Guamialama Haro

## Tutor
### Ing. Paul Diaz


## Practicas  Pre-Profesionales 
## Empresa: 
### MILAGRO DE VIDA COMMUNITY SERVICES L.L.C

## Tecnologías Utilizadas
<!-- UL --> 
* Frontend: React.js + TypeScript

* Estilos: CSS (personalizado)

* ase de datos: MongoDB (local)

* Gestión de estado: useState, useEffect

* Despliegue: Entorno local de desarrollo


## Instalación y Ejecución

### Prerrequisitos  asegúrate de tener instalado:
<!-- UL --> 
* Node.js
* MongoDB
* Postman


### Instalar dependencias
npm install

### Ejecutar el proyecto
npm start 

## Clonar el repositorio

git clone https://github.com/ENiko-Gh/mdvscll-site.git






## Informe 

### Reunion 
En la reunión se realiza la presentación de la estructura del sitio web se realizó una exposición de las opciones que se tomara para la construcción de este sitio web opciones:
<!-- UL --> 
* Imcomers
* Portal
* Sitio web 
* Web corporativa 

la decisión de la web corporativa es para que en un futuro se pueda introducir un botón de estray para recibir pagos  
Primes bosquejo  se realizó una presentación  de la estructura  aquí explico  de cómo se iban a comportar nuestros usuario para determinar que estructura le íbamos a dar  ya que  no es  el diseño  no es el color no el tipo de foto  no  el color del botón  lo importantes era  enfocarnos en la estructura  en si la forma de ordenar  y mostrar  el contenido  dentro del sitio web  de forma que sea fácil de  utilizar para los usuarios  y sepan dónde están las cosas   y los más relevante como factor clave   es tener una buena usabilidad  y que esto es primordial porque  afectara al SEO de nuestro sitio web  ya que para mí es una herramienta fundamental  para en un futura poder ranquear  en Google o posesionar en la web 


index.html 
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
```

Header 
```js
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="App-header bg-blue-600 text-white px-4 py-2 shadow-md flex items-center justify-between">
            {/* Contenedor del logo y nombre de la empresa */}
            <div className="logo flex items-center">
                <img src="/assets/logo.png" alt="Logo" className="h-12 w-12" />
                <div className="ml-2">
                    <h1 className="text-xl font-bold">MILAGRO DE VIDA COMMUNITY & SERVICE.L.L.C</h1>
                    <p className="text-sm mt-1">Potenciamos habilidades, día a día, cosechando sonrisas, juntos por un mundo más inclusivo</p>
                </div>
            </div>
```


footer 
```js
import React from "react";

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white text-center py-4">
            <p>© 2025 MDV&SCLL - Todos los derechos reservados</p>
        </footer>
    );
};

export default Footer;

```

varios tipos de presentacioness
![alt text](image-4.png)
![pagvermovil](image-12.png)
![pagver3](image-7.png)
![alt text](image-6.png)
![alt text](image-3.png)
![home](image-8.png)


se realizó las pruebas dando click en el botón de "conocer más"  redirige al formulario visitas  
 estructura del Proyecto


 ### Estructura del sitio web
  
![Estructura1](Estrc1.png)
![Estructura2](Estrc2.png)
![Estructura3](Estrc2.png)


## Formulario de visitas 

![Form-visitas](image-2.png)

  se ingresa todos los campos requeridos y son obligatorios todos  al enviar  se verifica


![comfirmacion](image-5.png)

### Pagina Servicios
la siguiente página la lógica es un tanto diferente  ya que  tiene una descripción breve de nuestros servicios  y dos secciones Profesionales  contiene cuatro  contenedores los cuales cada semana  la cinta se actualiza automáticamente   y Transporte (conductores) dispone de dos  contenedores  donde se muestra una descripción del profesional del volante  de igual manera con cinta de actualización  automática cada cinco días 
![Servicios](Servicios.png)

dispone de tres enlaces para actualizar más profesionales o  conductores  estos redirige  a un  modal de contraseña  para que personal no autorizado ingrese 
![Modal](Psswd.png)
![Formulario](Form1.png)
este botón al dar click redirige a un formulario residentes este no dispone de contraseña para que todo el personal pueda ingresar  un formulario 
![Formulario](Rsdnt.png)

estas intercacciones con los formularios al momento de enviar , Guardar , Actualizar  se guardan en una base de datos 
que en la base de batos  se almacena sin ningun inconveniente 
![db1](image-1.png)

  de igual manera se verifica en Postman lo propio con Get y la dirección verificando que si muestra la acción del formulario

![Postman](image-9.png)

verificado y constatado que está funcionando correctamente a satisfacción temporal  de mi tutor empresarial 

### Pagina Calidad 


Esta pagina  es mas informativa donde se detalla el compromisa de la empresa comprometida con dar un excelente servicio 
implementar diversos elementos que resalten el compromiso con la calidad y transparencia de la organización. Aquí te dejo algunas sugerencias sobre lo que podrías incluir:

1. Introducción clara sobre la misión de calidad: resume la visión de la organización con respecto a la calidad.
Usa un tono amigable y accesible, resaltando que la calidad es uno de los valores fundamentales de la organización.
2. Certificaciones y estándares:
Certificaciones de calidad que la organización haya alcanzado o esté en proceso de obtener (por ejemplo, ISO, certificaciones de accesibilidad web, etc.).
### Testimonios 
Testimonios de familias, colaboradores o usuarios sobre cómo se han beneficiado de los servicios, destacando la satisfacción con la calidad de la atención.

4. Proceso de evaluación de calidad:

5. Gráficos o estadísticas:
Gráficos con indicadores clave de desempeño (KPIs) como tasa de satisfacción, tiempos de atención, número de usuarios satisfechos,
6. Proceso de mejora continua:
Compromiso con la mejora continua de los servicios a través de la retroalimentación
.

Los certificados de Acreditacion son documentos que  respaldan el procceso de la escencia de la Empresa  , el compromiso  con los  usuarios y  el respaldo de las empresas gubernamentales 
esto se mide por mendio de impacto de calidad 

![Calidad1](Calidad1.png)
![Calidad2](Calidad2.png)

este  cuadro estadistico se actualiza  cada ves que se obtiene mas informacion 

#### Conformidad 

### Resumen de archivos:


Normativas y Compromiso: Se enfoca en las normativas que siguen para garantizar la calidad.
Enfoque en el Usuario: Describe cómo la calidad está centrada en la experiencia del usuario.
Compromiso con la Ética: Habla sobre la ética profesional en la empresa.
Transparencia y Mejora Continua: Menciona el compromiso con la mejora constante y cómo mantienen informados a los usuarios sobre sus avances.

![Conformidad](confrm1.png)
![Conformidad](confrm2.png)
Contacto.js: Agrega un formulario de contacto.
Testimonios.js: Agrega testimonios dinámicos.
Satisfaccion.js: Muestra un gráfico de satisfacción.
Conformidad.js: Integra los componentes anteriores en la página de conformidad.

### Blog

Encabezado del Blog

Un título claro y atractivo, como "Blog de MDV&SCLL: Noticias y Recursos".
Una breve introducción que indique qué tipo de contenido se publicará y cómo puede beneficiar al visitante (familias, colaboradores, comunidad).
Lista de Artículos

Muestra una lista de artículos con un pequeño resumen de cada uno (entre 2 y 3 párrafos), lo que invita al lector a hacer clic y leer más.
Los artículos pueden estar organizados por categorías o temas: Historias de éxito, Consejos para padres, Noticias sobre la organización, Avances en el sector de habilidades diferentes, etc.
Filtros y Búsqueda

Implementa filtros para que los visitantes puedan buscar por temas o categorías específicas.
Un campo de búsqueda para facilitar el acceso a artículos específicos.
Artículos Recientes / Destacados

Al principio de la página, podrías resaltar los artículos más recientes o los más leídos. Esto atraerá a los usuarios a explorar más contenido.
Llamada a la Acción (CTA)

Al final de cada artículo o en una sección destacada, coloca un CTA, como "Suscríbete para recibir nuestras actualizaciones", o "Contacta con nosotros para más información", para que los visitantes se conecten más profundamente con la organización.
Testimonios y Casos de Estudio

Incluye historias de usuarios o familias que se hayan beneficiado de los servicios. Este contenido humaniza la organización y crea confianza.
Optimización para SEO

Asegúrate de que cada artículo esté optimizado para motores de búsqueda (SEO) mediante el uso de palabras clave relevantes, enlaces internos, y una estructura adecuada de encabezados (H1, H2, etc.).
Componentes para Mejorar la Navegación

Paginación: para que el usuario pueda navegar fácilmente entre artículos.
Etiquetas: Los artículos pueden tener etiquetas como "Familias", "Educación", "Inclusión", "Historias de Éxito" para ayudar a la clasificación.
Comentarios: permitir que los lectores comenten en los artículos (si es apropiado para tu enfoque) puede generar interacción y fortalecer la comunidad.

![Blog](blog.png)


Encabezado y descripción: Un título profesional y una pequeña introducción sobre lo que los usuarios pueden encontrar en el blog.
Barra de búsqueda: Permite que los visitantes busquen artículos específicos.
Artículos recientes: Se presentan tres ejemplos de artículos con botones que invitan a leer más. La idea es crear una visualización atractiva de los artículos.
Sección de artículos destacados: Puedes agregar una sección para mostrar artículos que desees destacar, como los más leídos o los más relevantes.
Llamada a la acción: Un botón de suscripción que invita a los usuarios a mantenerse conectados con el blog.


Funcionalidad de "Suscripción" y "Buscar":
Para la suscripción, puedes crear un formulario de captura de correos electrónicos, como mencioné en un mensaje anterior. Este formulario puede estar vinculado a un servicio de correo electrónico como Mailchimp.

La búsqueda se maneja con un campo de texto donde se filtran los artículos de acuerdo con lo que se escribe en el cuadro de búsqueda.

Resumen de Dónde Irían los Archivos:
Componente Blog.js: Es la página principal que muestra todos los artículos.
Componente ArticleCard.js: Componente que muestra el título y resumen de cada artículo.
Componente SearchBar.js: Componente que muestra la barra de búsqueda.
Archivo articles.js: Contiene los datos de los artículos (puedes reemplazarlo más tarde con una base de datos).
Componente Article.js: Muestra el artículo completo cuando se hace clic en .

Atributo aria-label en <nav>:
Añadí aria-label="Menú de navegación principal" al contenedor <nav> para proporcionar un contexto adicional sobre el propósito de la navegación a los usuarios de lectores de pantalla.

### Pasos para Integrar Google Analytics con React:
Google Analytics comenzará a rastrear las visitas al sitio y mostrará las estadísticas de las páginas visitadas.
Navegación a través de rutas (con React Router):

Como ya implementamos el seguimiento de las rutas usando el useEffect en el archivo App.js, cada vez que un usuario navega entre diferentes páginas, el evento se enviará a Google Analytics sin recargar la página, lo que es ideal para aplicaciones de una sola página (SPA).

Instalar React Router y Google Analytics:
 Para Google Analytics, no es necesario instalar nada si solo uso el código estándar de seguimiento en el archivo index.html.

Agregar Google Analytics al proyecto:
En el archivo public/index.html,  </head>, agregar  el siguiente código de seguimiento de Google Analytics.
hay  que crear  primero la cuenta  de Google Analytics

### crear cuenta

cuenta de Google Analytics, puedes crear una y obtener tu ID de seguimiento (debe ser algo como UA-XXXXX-Y):

Google Analytics permite hacer un seguimiento de las visitas de las páginas y otros eventos dentro de la aplicación.
### useEffect y useLocation ###
permiten que tu aplicación React registre eventos de navegación cuando cambia la ruta.
### gtag ####
se utiliza para enviar la información de navegación a Google Analytics, lo que permite obtener estadísticas sobre las páginas visitadas y el comportamiento de los usuarios.

Optimización para SEO: Añadir más metadatos y mejorar la estructura del contenido SEO.
 Los motores de búsqueda podrán indexar tu contenido más fácilmente, y las redes sociales tendrán una vista más atractiva al compartir los enlaces

 La carga diferida hace que la aplicación cargue más rápido, especialmente en dispositivos móviles.
### react-helmet

Instala react-helmet usando npm install react-helmet.
Crea el archivo src/utils/analytics.js con el código que te proporcioné.
Asegúrate de agregar el script de Google Analytics en tu archivo public/index.html.


## ¿Cómo hacerlo funcionar? Para que funcione, simplemente debes:

Obtener tu ID de seguimiento: Si no lo has hecho, ve a tu cuenta de Google Analytics y obtén el ID de seguimiento que tiene el formato UA-XXXXX-Y.
Reemplazar UA-XXXXX-Y en el código con tu ID de seguimiento en el archivo index.html.

Google Analytics: Después de integrar el código y reemplazar tu ID de seguimiento, puedes verificar el funcionamiento iniciando sesión en tu cuenta de Google Analytics. En el panel de administración, puedes ver el tráfico de tu sitio web en tiempo real.
SEO: Para verificar que los motores de búsqueda están indexando tu sitio correctamente, puedes usar herramientas como Google Search Console. Allí podrás ver cómo Google ve tu sitio.
Open Graph y Twitter Cards: Puedes usar herramientas como el Facebook Sharing Debugger y el Twitter Card Validator para verificar que las etiquetas Open Graph y Twitter Cards están funcionando correctamente.

### Padina Contacto

![map1](map1.png)
![map2](map2.png)
![map3](map3.png)



### Idiomas 
Los textos cambiarán automáticamente al idioma seleccionado.
Los usuarios podrán alternar entre inglés y español usando los botones de cambio de idioma.







## Codigos Utilizados
<!-- UL -->
* npm start   //http://localhost:3000
* npm install
* npm install express mongoose body-parser
* mongod
* sudo systemctl start mongodb
* brew services start mongodb-community
* netstat -ano | findstr :27017      /verificar si esta utilizando el puerto 27017
* npm install react-router-dom
* npm audit fix
* npm run build   //Construir el proyecto para producción: En tu proyecto                   //React,y se ejecuta  
* rm -rf node_modules
* npm install
* mkdir mdvscll-backend
* cd mdvscll-backend
* npm init -y
* npm install express mongoose cors body-parser   //Instalacion de las dependencias necesarias 
* touch server.js   // Crea un archivo principal
* node server.js  //Conexión a MongoDB exitosa
                   //Servidor corriendo en http://localhost:5000
* npm install cors
* npx nodemon server.js  //Si no funciona el normal
* npm install chart.js react-chartjs-2    //instala las dependencias necesarias para poder usar Chart.js 
* npm install react-helmet

### Para el Backend:
cd mdvscll/mdvscll-backend
npm install
node server.js

### Para el Frontend:
cd mdvscll-site
npm install
npm start

## clonar repositorio 

https://github.com/ENiko-Gh/mdvscll-site.git