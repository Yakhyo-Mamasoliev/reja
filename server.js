const express = require("express");
const app = express();
const http = require("http");
const fs = require("fs");

console.log("Web Serverni boshlash");

fs.readFile("database/user.json", "utf8", (err, data) => {
    if (err) {
        console.error("ERROR:", err);
    } else {
        user = JSON.parse(data);
    }
});

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("views", "views");
app.set("view engine", "ejs");

app.post("/create-item", (req, res) => {
    console.log(req.body);
    res.json({ test: "success" });
});

app.get("/author", (req, res) => {
    res.render("author", { user: user });
});

app.get("/", (req, res) => {
    res.render("harid");
});

const server = http.createServer(app);
const PORT = 3002;

server.listen(PORT, () => {
    console.log(`The server is working successfully on port: ${PORT}`);
});
