const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT; // 🔥 Correcto, solo process.env.PORT

// Middlewares
app.use(cors());
app.use(express.json());

// Ruta principal
app.get('/', (req, res) => {
  res.send('Servidor corriendo correctamente');
});

// Ruta /api/users
app.get('/api/users', (req, res) => {
  res.json({
    message: 'Lista de usuarios criminalísticos',
    users: []
  });
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
