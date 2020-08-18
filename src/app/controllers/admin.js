const Recipe = require('../model/Recipe');
const Chef = require('../model/Chef');
const data = require('../../data.json');
const fs = require('fs');


exports.index = (req, res) => {
  Recipe.index( (recipes)=> {

    return res.render("admin/index", { recipes })
  })
}

exports.show =  (req,res) => {
  const { id } = req.params;
  const foundRecipe = data.recipes.find(function(recipe){
    return recipe.id == id
  });

  if(!foundRecipe){
    return res.send("RECIPE NOT FOUND");
  }
  
  

  const recipe = {
    ...foundRecipe,
  }
  return res.render('admin/recipe', {food: recipe});
}

exports.create =  (req, res) => {
  Chef.index((chefs)=>{
    return res.render("admin/create", { chefs })
  });
  
}

exports.post =  (req, res) => {

  Recipe.create(req.body, ()=>{
    return res.redirect("/admin/recipes")
  })
  
}

exports.put = (req, res) => {
  const { id } = req.body;
  let index = 0;
  const foundRecipe = data.recipes.find(function(recipe, foundIndex){
    if (recipe.id == id){
      index = foundIndex;
      return true
    }
  });

  if(!foundRecipe){
    return res.send("RECIPE NOT FOUND");
  }
  
  

  const recipe = {
    ...foundRecipe,
    ...req.body,
  }

  data.recipes[index] = recipe;

  fs.writeFile("src/data.json",JSON.stringify(data, null, 2), function(err){
    if(err) return res.send('Write File Error');
    console.log(data);    
    return res.redirect('/admin');
  });
}

exports.showEdit = (req,res) => {
  const { id } = req.params;
  const foundRecipe = data.recipes.find(function(recipe){
    return recipe.id == id
  });

  if(!foundRecipe){
    return res.send("RECIPE NOT FOUND");
  }
  
  

  const recipe = {
    ...foundRecipe,
  }
  return res.render('admin/edit', {food: recipe});
}

exports.delete =  (req,res) => {
  const { id } = req.body;
  const filteredArray = data.recipes.filter((recipe) => {
    return recipe.id != id
  });

  data.recipes =  filteredArray;
  fs.writeFile("src/data.json", JSON.stringify(data,null,2), function(err){
    if (err) return res.send("Write error!")

    return res.redirect("/admin")
  });
}