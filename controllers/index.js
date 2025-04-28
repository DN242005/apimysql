const db = require('../models');
const User = db.User;

// Función para obtener usuarios
const getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los usuarios' });
  }
};

// Función para crear usuario
const postUser = async (req, res) => {
  try {
    const { name, email, age, comments } = req.body;
    const newUser = await User.create({ name, email, age, comments });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el usuario' });
  }
};

// Exportar las funciones
module.exports = {
  getUsers,
  postUser,
};
