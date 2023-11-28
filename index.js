import express from 'express';
import {fileURLToPath} from 'url';
// import path from 'path';

const __dirname = fileURLToPath(import.meta.url);

const server = express();
const port = process.env.port || 5000;

// enable cross-origin resource sharing to proxy api requests
// from localhost:3000 to localhost:4000 in local dev env
import cors from 'cors';
server.use(cors());

// create logs for everything
import morgan from 'morgan';
server.use(morgan('dev'));

// handle application/json requests
server.use(express.json());

// here's our API
// server.use('/api', require('./api'));

// bring in the DB connection
// const { client } = require('./db');

server.get('/', (req, res) => {
  // res.sendFile(__dirname + '/index.html');
  res.send('Hello World!');
  })
  
  server.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })