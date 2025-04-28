// Controlador de usuarios

// Función para obtener usuarios (GET)
exports.getUsers = (req, res) => {
  res.json({
    message: "Lista de usuarios criminalísticos",
    users: []
  });
};

// Función para agregar usuario (POST)
exports.postUser = (req, res) => {
  const { name, email, age, comments } = req.body;
  res.status(201).json({
    message: "Usuario agregado correctamente",
    user: {
      name,
      email,
      age,
      comments
    }
  });
};
