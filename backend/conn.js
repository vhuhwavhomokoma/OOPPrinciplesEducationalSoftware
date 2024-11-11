const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  password: 'admin',
  port: 5432,
  database: 'master_oop_db',
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
