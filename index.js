const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT; // 👈🏻 Sin || 8081, solo process.env.PORT

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Servidor corriendo correctamente');
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
