const express = require("express");
const index = require("./router/index")
var app = express();
const cors = require("cors");
app.use(cors({
    origin:[
        "http://127.0.0.1:3001","http://localhost:3001"],
    credentials:true
}))
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(__dirname+"/public"));
app.listen(8000);
app.use("/index",index);
