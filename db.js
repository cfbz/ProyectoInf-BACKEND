const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Conectar a la base de datos SQLite
const dbPath = path.resolve(__dirname, 'mi-base-datos.sqlite');
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Error al conectar a la base de datos', err);
  } else {
    console.log('Conectado a la base de datos SQLite');
  }
});

module.exports = db;