const express = require("express");
const app = express();
const port = 3003;
const cors = require("cors");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Microservicio 2 en linea!");
});

app.listen(port, () => {
  console.log(`Servicio 2 en linea en http://localhost:${port}`);
});
