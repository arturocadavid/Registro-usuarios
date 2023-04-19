Registro de Personas

Este proyecto consiste en una aplicación web para el registro de personas utilizando Node.js y Express para el backend y HTML, CSS y JavaScript con jQuery para el frontend.

Estructura de la Aplicación
La estructura de la aplicación se compone de las siguientes carpetas y archivos:

/routes: Carpeta que contiene el archivo personas.js, donde se definen las rutas y métodos HTTP para el manejo de la API REST de personas.
/public: Carpeta que contiene el archivo index.html donde se encuentra la estructura HTML de la aplicación y el archivo style.css con los estilos CSS.
/views: Carpeta que contiene el archivo index.ejs, donde se renderiza la tabla de personas con la información registrada en la base de datos.
/app.js: Archivo principal de la aplicación que configura y ejecuta el servidor utilizando Express.
/personas.json: Archivo JSON que simula una base de datos para el registro de personas.

Desarrollo
En primer lugar, se definió la estructura del proyecto y se crearon las carpetas y archivos necesarios. Luego, se creó el archivo personas.json para simular una base de datos de personas con campos como nombre, cédula y teléfono.

Después, se implementó una aplicación que se comunica con el servidor utilizando el framework Express. En el archivo personas.js se definieron las rutas y métodos HTTP para el manejo de la información de las personas, como el método GET para obtener todas las personas registradas y el método POST para agregar una nueva persona.

Se creó la página web en el archivo index.html utilizando HTML, CSS y JavaScript con jQuery. La página contiene un formulario para el registro de personas y una tabla que muestra la información de todas las personas registradas.

Se creó el archivo index.ejs para renderizar la tabla de personas con la información obtenida de la base de datos. El archivo app.js configura y ejecuta el servidor, definiendo la ruta principal que renderiza la tabla de personas en la página web.

Ejecución
Para ejecutar la aplicación, es necesario tener instalado Node.js en el sistema. Luego, abrir una terminal en la carpeta del proyecto y ejecutar el siguiente comando:

   node main.js

Esto instalará las dependencias necesarias y ejecutará el servidor en el puerto 3000. Luego, abrir un navegador y acceder a la URL http://localhost:3000 para acceder a la página web de registro de personas.