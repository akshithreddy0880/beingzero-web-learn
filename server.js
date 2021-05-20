const express = require('express');
const mongoose=require('mongoose');
const courselib = require('./backend/lib/courselib');
const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json());




var url='mongodb+srv://akshith:@18H51A05j0@cluster0.3ureu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

var dboptions={ useNewUrlParser: true , useUnifiedTopology: true };
mongoose.connect(url,dboptions);
var  db= mongoose.connection;
db.on('connected',function(){
    console.log('mongo connected')
    // courseLib.createcourse({coursename:'mean'},function(err,saveobj){
    //     console.log(saveobj);
    
    //  })
});


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
app.listen(PORT, function () {
    console.log("Server Starting running on http://localhost:" + PORT);
})