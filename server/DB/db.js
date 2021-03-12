const {Pool} = require('pg');

const pool = new Pool(
    {
        user: 'alexander',
        password: '989991',
        host: 'localhost',
        port: 5432,
        database: 'perntodo'
    }
);

module.exports = {
    query: (text, params) => pool.query(text, params),
  }