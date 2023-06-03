import db from "../dbConfig/config.js";

export const register = (req, res) => {
  // data coming from the user (request)
  let name = req.body.name;
  let email = req.body.email;

  // query language  for the database
  let q = `INSERT INTO User(name, email) VALUES (?)`;
  let value = [name, email];

  // inserting into the database
  db.query(q, [value], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
      res.json({
        msg: "User data inserted successfully",
      });
    }
  });
};

export const updateUser = (req, res) => {
  let { name, email } = req.body;
  let id = req.params.id;

  // let name = req.body.name
  // let email = req.body.email

  var sql = `UPDATE User SET name="${name}", email="${email}" WHERE id='${id}'`;

  db.query(sql, function (err, result) {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
      res.json({
        msg: "User Updated successfully !",
      });
    }
  });
};

export let getAllUsers = (req, res) => {
  db.query("SELECT * FROM User", function (err, result, fields) {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
      res.json({
        users: result,
      });
    }
  });
};

export let getSingleUser = (req, res) => {
  let id = req.params.id;

  let q = `SELECT * FROM User WHERE id='${id}'`;

  db.query(q, function (err, result, fields) {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
      res.json({
        user: result[0],
      });
    }
  });
};

export let deleteUser = (req, res) => {
  let id = req.params.id;

  var sql = `DELETE FROM User WHERE id='${id}'`;
  db.query(sql, function (err, result) {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
      res.json({
        msg: "User deleted successfully",
      });
    }
  });
};

// exports = {register}
