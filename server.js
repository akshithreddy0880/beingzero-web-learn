const express = require('express');

const app = express();
app.use(express.static(__dirname + "/frontend"));

app.get("/", function (req, res) {
    let filepath2 = __dirname + "/frontend/html/home.html";

    res.sendFile(filepath2);
})
app.get("/resume", function (req, res) {
    let filepath = __dirname + "/frontend/html/resume.html";

    res.sendFile(filepath);
})
<<<<<<< HEAD
app.get("/crawler", function (req, res) {
    let filepath = __dirname + "/frontend/html/crawler.html";

    res.sendFile(filepath);
})
=======
>>>>>>> 126b4380cd1543d110111c3f123859097e3c86c2
app.get("/piechart", function (req, res) {
    let filepath = __dirname + "/frontend/html/piechart.html";

    res.sendFile(filepath);
})
app.get("/google", function (req, res) {
    let filepath1 = __dirname + "/frontend/html/google.html"
    res.sendFile(filepath1)
})
const PORT = process.env.PORT || 3000;
//it is changed
// Start the server
app.listen(PORT, function () {
    console.log("Server Starting running on http://localhost:" + PORT);
})