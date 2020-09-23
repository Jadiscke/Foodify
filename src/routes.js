const express = require('express');
const routes = express.Router();
const client = require('./app/controllers/client');
const admin = require('./app/controllers/admin');
const chefs = require('./app/controllers/admin/chefs');


routes.get('/',client.home);

routes.get('/about',client.about);

routes.get('/recipes',client.recipes);
routes.get('/recipes/:id', client.recipe);


// Admin
routes.get('/admin', (req,res) => {
  return res.redirect('/admin/recipes')
});
routes.get("/admin/recipes", admin.index);
routes.get("/admin/recipes/create", admin.create); // Mostrar formulário de nova receita
routes.get("/admin/recipes/:id", admin.show); // Exibir detalhes de uma receita
routes.get("/admin/recipes/:id/edit", admin.showEdit);
routes.post("/admin/recipes", admin.post);
routes.put("/admin/recipes", admin.put);
routes.delete("/admin/recipes", admin.delete);
module.exports = routes

// Chefs

routes.get("/admin/chefs", chefs.index);
routes.post("/admin/chefs", chefs.post);
routes.get("/admin/chefs/create", chefs.create);
routes.get("/admin/chefs/:id", chefs.show);