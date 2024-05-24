console.log("Web Serverni boshlash");
const express = require("express");
const res = require("express/lib/response");
const app = express();

// MongoDB ulash
const db = require("./server").db();

// Kirish code
app.use(express.static("public"));
app.use(express.json()); 
app.use(express.urlencoded({extended: true})); 

// 2: Seession code
// 3: Views Code
app.set("views", "views");
app.set("view engine", "ejs"); 

// 4 Rooting code
app.post("/create-item", (req, res) => { 
  //
});

app.get("/", function (req, res) { 
    res.render("reja");
});

