// backend/database.js
const mysql = require("mysql");
const dbConfig = {
  host: "localhost",
  user: "root",
  password: "",
  database: "tattoo_app",
};

const connection = mysql.createConnection(dbConfig);

connection.connect((err) => {
  if (err) throw err;
  console.log("Connected to the MySQL database.");
});

module.exports = connection;
