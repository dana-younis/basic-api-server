'use strict';
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const app = express();
const notFoundHndler = require('./error-handlers/404.js');
const errorHandler = require('./error-handlers/500.js');
const routeForFood = require('./routes/food.js');
const routeForClothes = require ('./routes/clothes.js');
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
app.use('/api/v1/food', routeForFood);
app.use('/api/v1/clothes', routeForClothes);

app.use('*', notFoundHndler);
app.use(errorHandler);

app.get('/', (req, res) => {
    res.send('Hello world');
  });

  module.exports = {
    server: app,
    start: (port) => {
      app.listen(port, () => console.log(`Listening on ${port}`));
    },
  };