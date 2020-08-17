const data = require('../../data.json');
const fs = require('fs');


exports.index = (req, res) => {
  const dataIndex = data.recipes;
  return res.render('admin/index', {dataIndex});
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
  return res.render('admin/create');
}

exports.post =  (req, res) => {

  const {image_url, title, ingredients,author, preparations, information} = req.body;

  const lastRecipe = data.recipes[data.recipes.length - 1];
  const id = lastRecipe ?  lastRecipe.id + 1 : 1;

  const data_send = {
    id,
    title,
    author,
    image_url,
    ingredients,
    preparations,
    information
  }
  

  data.recipes.push(data_send);
  

  fs.writeFile("src/data.json",JSON.stringify(data, null, 2), function(err){
    if(err) return res.send('Write File Error');
    console.log(data);    
    return res.redirect('/admin');
  });
  
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