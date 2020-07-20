const express = require('express');
const nunjucks = require('nunjucks');
const methodOverride = require('method-override');

const server = express();
const routes = require('./routes');

const port = process.env.PORT || 3000;
const nunjucksConfigurations = {
  express: server,
  autoescape: true,
  noChace: true
}

server.use(express.urlencoded({extended: true}))
server.use(methodOverride('_method'));
server.use(express.static('public'));
server.set('view engine', 'njk');
nunjucks.configure('view',nunjucksConfigurations);
// routes
server.use(routes);

server.listen(port, () => {
  console.log(`Listening on PORT: ${3000}`);
});


