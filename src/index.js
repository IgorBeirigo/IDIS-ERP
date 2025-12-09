const express = require('express');
const cors = require('cors');
require('dotenv').config();

const sequelize = require('./config/database');
const userRoutes = require('./routes/userRoutes');
const User = require('./models/User'); // importa para registrar model

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 3000;

async function start() {
  try {
    await sequelize.authenticate();
    console.log('DB connected.');

    // SINCRONIZA MODELOS COM BANCO DE DADOS
    await sequelize.sync();
    console.log('Models synchronized.');

    app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
  } catch (err) {
    console.error('Unable to start server:', err);
  }
}

start();
