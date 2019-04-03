const { Pool } = require('pg');
const { user, password } = require('./credentials');
/*
Example credentials.js:
module.exports = {
  user: '',
  password: '',
};
*/

const pool = new Pool({
  user,
  password,
  database: 'test',   // update
  host: 'localhost',
  port: 5432,
});

module.exports = {
  pool,
  query: (text, params) => pool.query(text, params),
};
