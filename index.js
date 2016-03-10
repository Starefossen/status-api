/* eslint no-console: 0 */
'use strict';

const express = require('express');
const cors = require('cors');
const compression = require('compression');
const errorHandler = require('api-error-handler');

const pingdom = require('./lib/pingdom');

const app = module.exports.app = express();

app.set('x-powered-by', false);
app.set('etag', false);
app.set('trust proxy', 1);

app.use(cors({ methods: ['GET'] }));
app.use(compression());

app.get('/favicon.ico', (req, res) => {
  res.set('Content-Type', 'image/x-icon');
  res.end();
});

app.get('/api/v1/checks', (req, res, next) => {
  pingdom.checks(['public'])
    .then(res.json.bind(res))
    .catch(next);
});

app.use(errorHandler());

if (!module.parent) {
  app.listen(8080);
  console.log('Server is listening for connections on port 8080');
}
