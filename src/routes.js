const express = require('express');
const routes = express.Router();
const client = require('./client');
const admin = require('./admin');

routes.get('/',client.home);

routes.get('/about',client.about);

routes.get('/recipes',client.recipes);
routes.get('/recipes/:index', client.recipe);
routes.get('/admin', (req,res) => {
  return res.redirect('/admin/recipes')
});
routes.get("/admin/recipes", admin.index);
routes.get("/admin/recipes/create", admin.create); // Mostrar formulário de nova receita
routes.get("/admin/recipes/:id", admin.show); // Exibir detalhes de uma receita
routes.get("/admin/recipes/:id/edit", admin.showEdit);
routes.post("/admin/recipes", admin.post);
routes.put("/admin/recipes", admin.put);
module.exports = routes