const express = require('express');
const cors = require('cors');
require('dotenv').config();

const router = require('../routes');

const app = express();
const port = process.env.PORT || 8081;

app.use(cors());
app.use(express.json());

app.use('/api', router); // Todas las rutas de la API estarán bajo /api

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
