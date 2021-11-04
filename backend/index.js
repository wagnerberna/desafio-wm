const express = require('express');
const cors = require('cors')
const app = express();
const bodyParser = require('body-parser');
const controller = require('./controllers/anuncios');
const PORT = 3000;

app.use(bodyParser.json());
app.use(cors())

app.use('/anuncios', controller.router);

app.listen(PORT, () => console.log(`Ouvindo porta: ${PORT}`));

module.exports = app;

