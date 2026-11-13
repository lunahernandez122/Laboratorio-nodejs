
const Persona = require("../models/persona");

async function listarPersonas(req, res) {
  try {
    const personas = await Persona.find()
      .sort({ apellido: 1, nombre: 1 })
      .lean();

    res.render("personas/index", {
      titulo: "Listado de personas",
      personas: personas,
    });
  } catch (error) {
    console.error("Error al consultar las personas:", error);

    res.status(500).send("Error al consultar las personas.");
  }
}

module.exports = { listarPersonas };
