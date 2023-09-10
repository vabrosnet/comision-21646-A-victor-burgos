const express = require('express');
const app = express();

// importar variables de entorno
require('dotenv').config({path:'./.env'});
const port = process.env.PORT;

app.get('/', function (req, res) {
  res.send('Hello World');
})

app.listen(port, console.log(`Server listening in port ${port}`));