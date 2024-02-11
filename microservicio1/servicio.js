const express = require('express');
const app = express();
const port = 3001;
const cors = require('cors');

app.use(cors());

app.get('/', (req, res) => {
  res.send('MIcorservicio 1 en linea!');
});

app.listen(port, () => {
  console.log(`Servicio 1 en linea en http://localhost:${port}`);
});

