// express - backend server quirsh uchun framework


console.log("Web Serverni boshlash");
const express = require("express");
const app = express(); //app ilovasini chaqiradi
const http = require("http");
const fs = require("fs");

fs.readFile("database/user.json", "utf8", (err, data) => {
    if (err) {
        console.log("ERROR:", err);
    } else {
        user = JSON.parse(data);
    }
});
// 4ta bosqichi bor

// Dynamic languages bo`lgabligiga ejs ishlayamiz, 

// 1 Kirish Code 
// Patter 2 xil, Artitectural, Design()
// har qanday browser keladigan request uchun public folder ochiq(uni ko`roliydi);
// keyinroq bu public folderiga css imagelarni yuklaymiz
app.use(express.static("public"));// all right, main , left frame is coming form static ezpress// Design patter, tashqi olamga yopqi, ochiq bo`lsa hack ing qiladi
app.use(express.json()); // json formatni objectga o`girib beradi, kirsihiga permission beradi
app.use(express.urlencoded({extended: true})); // html forumdan publish qilingan narsalarni express serverimiz qabul qilib oladi, pryamoy kiradi


//2: Seession code
// Sessionga bog`liq narsa yoziladi

// 3 View Code
// BSSR Backend Side Server Rendering
// Backendda frontni (html) yasab htmlga yuboramiz
// tp dp that we need to install ejs

app.set("views", "views");
app.set("view engine", "ejs"); // BSSR


// 4 Rooting code
// app.get("/hello", function(req, res) {
//     res.end("<h1>Hello World</h1>"); // "/hello" adresni shakllantiradi, local 300 dan keiyn slash vilan helloni tayp qilamiz
// });
// app.get("/gift", function(req, res) {
//     res.end("<h1>Sov`g`a bo`limi</h1>"); 
// });

app.post("/create-item", (req, res) => { // mutation qiladi, datani update qiladi
    console.log(req.body);
    res.json({ test: "success" });
});

app.get("/author", (req, res) => {
	res.render("author", { user: user });
});

app.get("/", function (req, res) {  // serverdan data chaqirvolish
    res.render("reja");
});


// make server
// all responses from users comes here (http.createServer(app);)
const server = http.createServer(app);
let PORT = 3000; 
server.listen(PORT, function (){
    console.log(`The server is working successfully on port: ${PORT}, http://localhost:${PORT}`);
});

// localhost:3000 meni serverim
// after changing the code, restart the code. 
// gitni initialize nega kerak, boshqa odam git install deb yozganda bizni dependencidagi packagelarni install qilib beradi

// master branch => for learning porpose, for us just. (later see again )
// develop branch 

// front-end development 2ga bo`linadi. 
// 1. Traditional, BSSR
// 2. Modern SPA

// REQUEST: Traditional API, REST API, GaphQL...

