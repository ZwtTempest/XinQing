const express = require("express");
const home = require("./router/home");
var app = express();
const cors = require("cors");
app.use(cors({
    origin:[
      "http://127.0.0.1:3001","http://localhost:3001","*"
    ],
    credentials:true
}))
app.use(express.static(__dirname+"/public"))
app.listen(3002);

app.use('/home',home);