const express = require('express');
const server = express();
const port = 4000;

// enable cross-origin resource sharing to proxy api requests
// from localhost:3000 to localhost:4000 in local dev env
const cors = require('cors');
server.use(cors());

// create logs for everything
const morgan = require('morgan');
server.use(morgan('dev'));

// handle application/json requests
server.use(express.json());

// here's our static files
const path = require('path');
server.use(express.static(path.join(__dirname, 'build')));

app.get('/', (req, res) => {
    res.status(200).send('Hello World!');
  })
  
  app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })

// here's our API
// server.use('/api', require('./api'));

// by default serve up the react app if we don't recognize the route
server.use((req, res, next) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// bring in the DB connection
// const { client } = require('./db');

// define a server handle to close open tcp connection after unit tests have run

// export server and handle for routes/*.test.js
module.exports = { server, handle };