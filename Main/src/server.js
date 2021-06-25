const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(`${__dirname}/dist`)));

app.use((req, res, next) => {
  res.sendFile(path.join(`${__dirname}/dist/index.html`));
  next();
});

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  /* eslint-disable no-console */
  console.log('Server is running on port 3000');
});
