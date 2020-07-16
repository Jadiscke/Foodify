const data = require('./data');


exports.home = (req,res) => {
  const dataIndex = data.slice(0,6);
  return res.render('index', { dataIndex });
}

exports.about = (req,res) => {
  return res.render('about')
}

exports.recipes =  (req, res) => {
  const dataIndex = data;
  return res.render('recipes', { dataIndex });
}

exports.recipe =  (req,res) => {
  const food = data[parseInt(req.params.index)];
  return res.render('recipe', {food});
}