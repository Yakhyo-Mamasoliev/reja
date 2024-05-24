const http = require("http");
const mongodb = require("mongodb");

let db;
const connectionString = "mongodb+srv://john14:4gyt6uUaIwxkLNrD@cluster0.dbnprio.mongodb.net/" 

mongodb.connect(connectionString, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
},
(err, client) => {
    if(err) console.log("ERROR on connection MongoDB");
    else {
        console.log("MongoDB connection succeed");
        console.log(client);
        const app = require ("./app");
        const server = http.createServer(app);
        let PORT = 3000; 
        server.listen(PORT, function (){
            console.log(`The server is working successfully on port: ${PORT}, http://localhost:${PORT}`);
}); 
    }
});

