
const mongoose = require("mongoose");

async function conectarBaseDeDatos() {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    throw new Error("No se encontró la variable MONGODB_URI");
  }

  await mongoose.connect(uri);

  console.log("Conectado a MongoDB:", mongoose.connection.name);
}

module.exports = conectarBaseDeDatos;



