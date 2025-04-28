const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

// Importa las rutas
const userRoutes = require('./routes/userRoutes');

// Middlewares
app.use(cors());
app.use(express.json());

// Montar las rutas en '/api'
app.use('/api', userRoutes);

// Iniciar el servidor sdf
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
