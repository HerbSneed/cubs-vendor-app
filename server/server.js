const path = require('path');
const sequelize = require('./config/connection');
const compression = require('compression');
const express = require('express');
const routes = require('./routes');

const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');


const PORT = process.env.PORT || 3001;
const BASE_URL = process.env.NODE_ENV === 'production' ? 'https://us-chronicle-5f8b6391feb6.herokuapp.com/' : `http://localhost:${PORT}`;

app.use((req, res, next) => {
  // Set Content-Type header for HTML, CSS, and JavaScript files
  if (req.url.endsWith('.html')) {
    res.setHeader('Content-Type', 'text/html');
  } else if (req.url.endsWith('.css')) {
    res.setHeader('Content-Type', 'text/css');
  } else if (req.url.endsWith('.js')) {
    res.setHeader('Content-Type', 'application/javascript');
  }
  // Call the next middleware in the stack
  next();
});



app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/client', express.static(path.join(__dirname, 'client', 'dist')));
app.use(compression());


const startServer = async () => {
  app.use(express.json()); 
  app.use(express.urlencoded({ extended: false}));
  app.use(express.static(path.join(__dirname, 'public')));
  app.use('/api', routes);

  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/'))); 
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../client/index.html'));
    });
  } else {
    app.use(express.static(path.join(__dirname, '../client/')));
  }

  const force = process.env.FORCE_SYNC === 'true';

  try {
    await sequelize.sync({ force });
    app.listen(PORT, () => {
      console.info(`Server listening on port ${PORT}`);
    });
  } catch (error) {
    console.error(`Unable to connect to the database:`, error);
  }
};

startServer();
