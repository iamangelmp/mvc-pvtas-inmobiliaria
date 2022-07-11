import express from "express";
import userRouts from "./routes/userRouts.js";
import db from "./config/db.js";

//Crear la app
const app = express();

//habilita lectura de formulario
app.use(express.urlencoded({ extended: true }));

//conexión a BD
try {
  await db.authenticate();
  console.log({ conexion: true, status: 200 });
} catch (error) {
  console.log(error);
}

//Habilita Pug
app.set("view engine", "pug");
app.set("views", "./views");

//Carpeta publica
app.use(express.static("public"));

//Routing
app.use("/auth", userRouts);

//Definir el puerto
const port = 3000;
app.listen(port, () => {
  console.log("listening in port:", 3000);
});
