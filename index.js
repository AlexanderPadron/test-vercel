const express = require('express');
require('dotenv').config()
const app = express();

app.get('/', (req, res) => {
  const host = req.get('host');
  res.send(`El host es: ${host}`);
});

const port = process.env.PORT || 3000; // Puedes cambiar el número de puerto si lo deseas

app.listen(port, () => {
  console.log(`La aplicación está en ejecución en http://localhost:${port}`);
});
