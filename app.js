const express = require('express');
const app = express();
const fs = require('fs');

// Configuración de vistas
app.set('views', './views');
app.set('view engine', 'pug');

// Configuración de archivos estáticos
app.use(express.static('public'));

// Configuración de rutas
const personasRouter = require('./routes/personas');
app.use('/personas', personasRouter);

// Manejador para la ruta /personas que maneja solicitudes POST
app.post('/personas', (req, res) => {
  const nombre = req.body.nombre;
  const cedula = req.body.cedula;
  const telefono = req.body.telefono;

  // Validar que los campos no estén vacíos
  if (!nombre || !cedula || !telefono) {
    res.status(400).send('Falta información');
    return;
  }

  // Leer el archivo JSON y agregar la nueva persona
  fs.readFile('./data/personas.json', 'utf8', function(err, data) {
    if (err) throw err;

    let personas = JSON.parse(data);
    const nuevaPersona = {
      nombre: nombre,
      cedula: cedula,
      telefono: telefono
    };
    personas.push(nuevaPersona);

    // Guardar la nueva persona en el archivo JSON
    fs.writeFile('./data/personas.json', JSON.stringify(personas), function(err) {
      if (err) throw err;
      res.send('Persona agregada exitosamente');
    });
  });
});

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor iniciado en puerto ${PORT}`);
});

 