var express = require("express");
var app = express();

app.get('/',function get(req,res) {
  res.send('Hello World!');
}).listen(8080,function(){
    console.log('connected');
})
