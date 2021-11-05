const mysql = require("mysql2/promise");
require('dotenv').config();

const conn = mysql.createPool({
  host: process.env.HOSTNAME,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: 'teste_webmotors',
});

module.exports = {conn}