import { app } from "./app";
import { db } from "./db";

const forceStatus = `${process.env.STATUS}` === "ACTIVE"
const port = process.env.PORT || 3002;

// Modificar el "force" desde la variable de entorno, ACTIVE || IN_ACTIVE
db.sync({ alter: true }).then(async () => {
  try {
    app.listen(port, () => {
      console.log(`Escuchandoo en el puerto: http://localhost:${port}`);
    });
    await db.authenticate();
    console.log("Conexion a sequelize");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
});