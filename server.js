// Express Framework

console.log("Web Serverni boshlash");
const express = require("express");
const app = express(); //app ilovasini chaqiradi
const http = require("http");

// 4ta bosqichi bor

// 1 Kirish Code 
// har qanday browser keladigan request uchun public folder ochiq(uni ko`roliydi);
// keyinroq bu public folderiga css imagelarni yuklaymiz
app.use(express.static("public"));
app.use(express.json()); // json formatni objectga o`girib beradi.
app.use(express.urlencoded({extended: true})); // html forumdan publish qilingan narsalarni express serverimiz qabul qilib oladi

//2: Seession code
// Sessionga bog`liq narsa yoziladi

// 3 View Code
// BSSR Backend Side Server Rendering
// Backendda frontni (html) yasab htmlga yuboramiz
// tp dp that we need to install ejs

app.set("views", "views");
app.set("views engine", "ejs"); // BSSR


// 4 Rooting code
app.get("/hello", function(req, res) {
    res.end("<h1>Hello World</h1>"); // "/hello" adresni shakllantiradi, local 300 dan keiyn slash vilan helloni tayp qilamiz
});
app.get("/gift", function(req, res) {
    res.end("<h1>Sov`g`a bo`limi</h1>"); 
});

// make server
const server = http.createServer(app);
let PORT = 3000;
(app); // htpp is core model
server.listen(PORT, function (){
    console.log(`The server is working successfully on port: ${PORT}`);
});
// localhost:3000 meni serverim
// after changing the code, restart the code. 
// gitni initialize nega kerak, boshqa odam git install deb yozganda bizni dependencidagi packagelarni install qilib beradi


// master branch => for learning porpose, for us just. (later see again )
// develop branch 