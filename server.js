const express = require('express');
const mongoose=require('mongoose');
const courselib = require('./backend/lib/courselib');
const config=require('./backend/config/config');
const app = express();
const dbConnectLib=require('./backend/lib/dbConnectLib');
app.use(express.urlencoded({extended: true}));
app.use(express.json());



dbConnectLib.connect();




app.use(express.static(__dirname + "/frontend"));

app.get("/", function (req, res) {
    let filepath2 = __dirname + "/frontend/html/home.html";

    res.sendFile(filepath2);
})
app.get("/resume", function (req, res) {
    let filepath = __dirname + "/frontend/html/resume.html";

    res.sendFile(filepath);
})

app.get("/crawler", function (req, res) {
    let filepath = __dirname + "/frontend/html/crawler.html";

    res.sendFile(filepath);
})
app.get("/todo", function (req, res) {
    let filepath = __dirname + "/frontend/html/todolist.html";

    res.sendFile(filepath);
})
app.get("/tambola", function (req, res) {
    let filepath = __dirname + "/frontend/html/tambola.html";

    res.sendFile(filepath);
})


app.get("/piechart", function (req, res) {
    let filepath = __dirname + "/frontend/html/piechart.html";

    res.sendFile(filepath);
})
app.get("/google", function (req, res) {
    let filepath1 = __dirname + "/frontend/html/google.html"
    res.sendFile(filepath1)
})
const PORT = process.env.PORT || 3000;
app.get("/crud", courselib.getall);
app.delete("/crud/:idd", courselib.deleteone);
app.put("/crud/:idd", courselib.update);
app.post("/crud",courselib.addnewone);
//it is changed
// Start the server
app.listen(config.webPort, function () {
    console.log("Server Starting running on http://localhost:" + PORT);
})