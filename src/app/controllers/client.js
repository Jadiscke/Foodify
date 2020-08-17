const data = require("../data.json");


exports.home = (req,res) => {
  const dataIndex = data.recipes.slice(0,6);
  return res.render('index', { dataIndex });
}

exports.about = (req,res) => {
  return res.render('about')
}

exports.recipes =  (req, res) => {
  const dataIndex = data.recipes;
  return res.render('recipes', { dataIndex });
}

exports.recipe =  (req,res) => {
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
  return res.render('recipe', {food: recipe});
}