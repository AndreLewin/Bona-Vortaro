const express = require('express');
const helmet = require('helmet');
const app = express();
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

const kursojPriVortoj = require('./routes/kursoj-pri-vortoj');
const kursojPriAlternativoj = require('./routes/kursoj-pri-alternativoj');
const kursojPriTutakiro = require('./routes/kursoj-pri-tutakiro');


// Helmet for security
app.use(helmet());

// Make the content of ./public accessible from URL
// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// Use and configure body-parser for reading the body of HTTP requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// For debugging
app.use(function(err, req, res, next){
  console.error(err.stack);
  return res.status(err.status).json({ message: err.message });
});

// Use the webpack dev server as a middleware, so we can launch it from this file
const config = require('../webpack.dev.config');
const compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
  stats: {colors: true}
}));

// Configure Mongoose
mongoose.connect(process.env.DB_URI);
mongoose.Promise = global.Promise;

// Setting up routes
app.use('/api/vortoj', kursojPriVortoj);
app.use('/api/alternativoj', kursojPriAlternativoj);
app.use('/api/tutakiro', kursojPriTutakiro);

// Listen for requests
const listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

// Default route: send index.html, so the BrowserRouter can analyse
// and display the element depending on the URL (CSR)
app.get('*',function (req, res) {
  res.sendFile(path.join(__dirname + '/../public/index.html'));
});
