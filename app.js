console.log("Web Serverni boshlash!");
const express = require("express");
const app = express();
const fs = require("fs");

let user;

fs.readFile("database/user.json", "utf8", (err, data) => {
  if (err) {
    console.log("err here", err);
  } else {
    user = JSON.parse(data);
  }
});

const db = require("./server").db();

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2: Session code
// 3: Views code
app.set("views", "views");
app.set("view engine", "ejs");

// 4: Routing kode

app.post("/create-item", (req, res) => {
  const new_reja = req.body.reja;
  console.log(req.body);
  db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {
    console.log(data.ops);
    res.json(data.ops[0]);
  });
});

app.get("/", function (req, res) {
  console.log("users entered /");
  db.collection("plans")
    .find()
    .toArray((err, data) => {
      if (err) {
        console.log(err);
        res.end("something went wrong");
      } else {
        res.render('reja', {items: data})
      }
    });
});

module.exports = app;

