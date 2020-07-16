const data = require('./data');


exports.index = (req, res) => {
  const dataIndex = data;
  res.render('admin/index', {dataIndex});
}