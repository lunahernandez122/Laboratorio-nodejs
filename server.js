
require("dotenv").config();

const app = require("./src/index");
const conectarBaseDeDatos = require("./src/configurations/database");

const PORT = process.env.PORT || 3000;

async function iniciarServidor() {
  try {
    await conectarBaseDeDatos();

    app.listen(PORT, () => {
      console.log(`Servidor listo en http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Error al iniciar el servidor:", error.message);
    process.exit(1);
  }
}

iniciarServidor();
