const express = require('express');
const { engine } = require('express-handlebars');
const path = require('path');
const logger = require('morgan');
const handlebars = require('express-handlebars');
const cors = require('cors');
const helmet = require('helmet');

// Import routes
const indexRouter = require('./src/routes/index');

// Create Express app
const app = express();

// Set up Handlebars view engine
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'src/views'));
app.set('partials', path.join(__dirname, 'src/views/partials'));

// Set up middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(helmet());
app.use(express.static(path.join(__dirname, 'public')));
app.use((req, res, next) => {
  res.setHeader("Content-Security-Policy", "script-src 'self' https://trusted.cdn.com; object-src 'none';");
  next();
});

// Routes
app.use('/', indexRouter);

// Catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found'); //TODO: create a cool page to handle 404s
  err.status = 404;
  next(err);
});

// Error handler
app.use((err, req, res, next) => {
  // Set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Render the error page
  res.status(err.status || 500);
  res.render('error',{title:'Error Detected in KimioLink'});
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
