require("dotenv").config();
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const db = require("./db");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/register", (req, res) => {
  const sql = "INSERT INTO user_registration (name, email, password) VALUES(?)";
  const values = [req.body.name, req.body.email, req.body.password];
  db.query(sql, [values], (err, data) => {
    if (err) {
      console.log(err);
      return res.status(400).json("ERROR");
    }
    return res.json(data);
  });
});

app.post("/login", (req, res) => {
  const sql =
    "SELECT * FROM user_registration WHERE email = ? AND password = ?";

  db.query(sql, [req.body.email, req.body.password], (err, data) => {
    if (err) {
      console.log(err);
      return res.status(400).json("ERROR");
    }
    if (data.length > 0) {
      return res.json(data[0]?.name);
    } else return res.json("Failed");
  });
});

app.listen(process.env.PORT, () => {
  console.log("Listening.....");
});
