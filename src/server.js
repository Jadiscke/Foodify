const express = require('express');
const nunjucks = require('nunjucks');
const data = require('./data');
const server = express();

const port = process.env.PORT || 3000;
const nunjucksConfigurations = {
  express: server,
  autoescape: true,
  noChace: true
}

server.use(express.static('public'));
server.set('view engine', 'njk');
nunjucks.configure('view',nunjucksConfigurations);
// routes


server.get('/', (req,res) => {
  const dataIndex = data.slice(0,6);
  return res.render('index', { dataIndex });
});

server.get('/about', (req,res) => {
  return res.render('about')
});

server.get('/recipes', (req, res) => {
  return res.render('recipes');
});

server.listen(port, () => {
  console.log(`Listening on PORT: ${3000}`);
});


