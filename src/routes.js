const express = require('express');
const routes = express.Router();
const client = require('./client');

routes.get('/',client.home);

routes.get('/about',client.about);

routes.get('/recipes',client.recipes);
routes.get('/recipes/:index', client.recipe);

module.exports = routes