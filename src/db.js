const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "db_testapi",
});

connection.connect((err) => {
  if (err) {
    console.log("error :", err);
  }
});

module.exports = connection;
