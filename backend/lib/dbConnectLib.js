const mongoose=require('mongoose');
var dboptions={ useNewUrlParser: true , useUnifiedTopology: true };
const config=require("../config/config")
module.exports={
    connect:function(){
        mongoose.connect(config.mongoConnectionString,dboptions);
        var  db= mongoose.connection;
        db.on('connected',function(){
            console.log('mongo connected')
        });
    }
}