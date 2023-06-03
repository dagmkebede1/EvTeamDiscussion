import mysql from "mysql2";
import table from "./tables.js";

// Database Connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "world",
});

// Establishing the connection
db.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Database connection established");
  }
});

//Creating the use table
db.query(table.user, (err, results) => {
  if (err) {
    console.log(err);
  } else {
    console.log("user table created successfully");
  }
});

export default db;
