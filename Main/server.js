const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const handleErrors = require('./src/middlewares/handleErrors');

const app = express();

app.use(express.static(path.join(`${__dirname}/dist`)));
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.sendFile(path.join(`${__dirname}/dist/index.html`));
  next();
});

app.use(handleErrors);

const port = 3000;

app.listen(port, () => {
  /* eslint-disable no-console */
  console.log('Server is running on port 3000');
});
