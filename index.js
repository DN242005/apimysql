const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 8081;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Servidor corriendo correctamente');
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
