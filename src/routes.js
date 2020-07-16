const express = require('express');
const routes = express.Router();
const client = require('./client');
const admin = require('./admin');

routes.get('/',client.home);

routes.get('/about',client.about);

routes.get('/recipes',client.recipes);
routes.get('/recipes/:index', client.recipe);

routes.get("/admin/recipes", admin.index);
routes.get("/admin/recipes/:id", admin.show); // Exibir detalhes de uma receita

module.exports = routes