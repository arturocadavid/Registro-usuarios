const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');

// Servir archivos estáticos desde la carpeta "public"
app.use(express.static('public'));

// Configurar body-parser para leer datos de formularios HTML
app.use(bodyParser.urlencoded({ extended: false }));

// Ruta para mostrar el formulario de agregar persona
app.get('/index', function(req, res) {
  res.sendFile(__dirname + './index.html');
});

app.set('view engine', 'ejs');

// Ruta para procesar la solicitud POST del formulario de agregar persona
app.post('/personas', function(req, res) {
  // Leer el archivo de personas y agregar la nueva
  fs.readFile('./data/personas.json', 'utf8', function(err, data) {
    if (err) throw err;

    let personas = JSON.parse(data);
    const nuevaPersona = {
      nombre: req.body.nombre,
      cedula: req.body.cedula,
      telefono: req.body.telefono
    };

    personas.push(nuevaPersona);

    // Guardar la nueva persona en el archivo JSON
    fs.writeFile('./data/personas.json', JSON.stringify(personas), function(err) {
      if (err) throw err;
      res.redirect('/'); // Redirigir a la página principal
    });
  });
});

// Ruta para obtener todas las personas
app.get('/', function(req, res) {
  fs.readFile('./data/personas.json', 'utf8', function(err, data) {
    if (err) throw err;
    const personas = JSON.parse(data);
    console.log('La ruta del archivo JSON es:', __dirname + '/data/personas.json');
    res.render('index', { personas: personas });
  });
});

// Iniciar el servidor en el puerto 3000
app.listen(3000, function() {
  console.log('Servidor iniciado en el puerto 3000');
});
