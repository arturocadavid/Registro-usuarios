const express = require('express');
const router = express.Router();
const fs = require('fs');

// Ruta para obtener todas las personas
router.get('/', function(req, res, next) {
  fs.readFile('./data/personas.json', 'utf8', function(err, data) {
    if (err) throw err;
    res.json(JSON.parse(data));
  });
});

// Ruta para guardar una nueva persona
router.post('/', function(req, res, next) {
  const nombre = req.body.nombre;
  const cedula = req.body.cedula;
  const telefono = req.body.telefono;

  // Validar que los campos no estén vacíos
  if (!nombre || !cedula || !telefono) {
    res.status(400).send('Falta información');
    return;
  }

  // Validar que la cedula y el telefono sean números
  if (isNaN(cedula) || isNaN(telefono)) {
    res.status(400).send('La cedula y el telefono deben ser números');
    return;
  }

  // Leer el archivo de personas y agregar la nueva
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

module.exports = router;
