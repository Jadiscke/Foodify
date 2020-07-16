const data = require('./data');


exports.index = (req, res) => {
  const dataIndex = data;
  res.render('admin/index', {dataIndex});
}

exports.show =  (req,res) => {
  const food = data[parseInt(req.params.id)];
  return res.render('admin/recipe', {food});
}