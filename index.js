const path = require('path');
const express = require('express');
const mustacheExpress = require('mustache-express');
const helmet = require('helmet');
const qs = require('querystring');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const useragent = require('express-useragent');
const bodyParser = require('body-parser');
var compression = require('compression');
const app = express();

app.use(helmet());
// app.use(compression);
// app.use(cookieParser());
// app.use(useragent.express());
app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', `${__dirname}/build`);
const PORT = 3000;

const log = (message) => {
  console.log(message ? message : '');
};

app.use(bodyParser.json());

const html = (res) => {
  const data = {
    test: 'test',
  };

  res.render('index', data);
};

app.get(['/favicon.ico'], (req, res) => {
  res.status(204);
  res.send();
});

const staticOptions = {
  maxAge: '1m',
};

app.use(
  '/images',
  express.static(path.join(__dirname, '/build/images'), staticOptions)
);

app.use(
  '/assets',
  express.static(path.join(__dirname, '/build/assets'), staticOptions)
);

app.get(['/'], (req, res) => {
  const url = req.originalUrl;
  log(`GET ${url}`);
  return html(res);
});

app.get('*', (req, res) => {
  log(`* GET ${req.originalUrl}`);
  html(res);
});

app.listen(PORT);
log(`Server started on port ${PORT}.`);
