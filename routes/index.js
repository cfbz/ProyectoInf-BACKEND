const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');
const db = require('../init-db').db;

// Ruta principal para API
router.get('/api', homeController.getHome);

router.post('/create', homeController.createItem);

// Obtener todos los usuarios
router.get('/usuarios', (req, res) => {
    const query = 'SELECT * FROM Usuario';
    db.all(query, [], (err, rows) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.json(rows);
      }
    });
  });

  router.post('/usuario', (req, res) => {
    console.log(req.body); // Esto debe mostrar el cuerpo de la solicitud en la consola
    const { Nombre, Rol, Email, Pw } = req.body;
    const query = `
      INSERT INTO Usuario (Nombre, Rol, Email, Pw, Fecha_creacion)
      VALUES (?, ?, ?, ?, datetime('now'));
    `;
    db.run(query, [Nombre, Rol, Email, Pw], function (err) {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.json({ message: 'Usuario agregado', id: this.lastID });
      }
    });
  });
  
module.exports = router;
