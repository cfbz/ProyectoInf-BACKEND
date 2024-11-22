const express = require('express');
const app = express();
const indexRoutes = require('./routes/index');
const { initializeDatabase } = require('./init-db');
const cors = require('cors');
app.use(cors());


initializeDatabase();

// Middleware para JSON
app.use(express.json());

// Definir rutas
app.use('/api', indexRoutes);

// Iniciar el servidor
const port = 3000;
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
