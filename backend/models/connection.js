const mysql = require("mysql2/promise");

const conn = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '123',
  database: 'teste_webmotors',
});

module.exports = {conn}