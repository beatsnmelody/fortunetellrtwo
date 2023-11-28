const { Pool } = require('pg');

const DB_URL = process.env.DATABASE_URL || 'https://localhost:5432/fortunetellr';

if (process.env.CI) {
    client = new Pool({
      host: 'localhost',
      port: 5432,
      user: 'postgres',
      password: 'postgres',
      database: 'postgres',
    });
  } else {
    // local / heroku client config
    client = new Pool(DB_URL);
  }


module.exports = client;