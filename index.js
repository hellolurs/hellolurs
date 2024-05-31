const express = require('express');
const path = require('path');
const app = express();
const PortfolioData = require('./utils/data/portfolio.js');

const port = 3000;

//to use .html format instead of .ejs
app.engine('.html', require('ejs').__express);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

app.use(express.static(path.join(__dirname, 'assets')));

app.get('/', (req, res) => {
  const PortfolioDataArray = [];

  for (const key in PortfolioData) {
    if (Object.hasOwnProperty.call(PortfolioData, key)) {
      const element = PortfolioData[key];
      PortfolioDataArray.push(element);
    }
  }

  res.render('index', {route: 'home', data: PortfolioDataArray});
});

app.get('/about', (req, res) => {
  res.render('index', {route: 'about'});
});

app.get('/portfolio/:id', (req, res, next) => {
  const portoData = PortfolioData[req.params.id];

  if (portoData) {
    res.render('index', {
      route: 'detail',
      data: portoData,
    });
  } else {
    // next()
    res.status(404).send('404 - NOT FOUND');
  }
});

app.get('*', (req, res) => {
  res.status(404).send('404 - NOT FOUND');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

module.exports = app;
