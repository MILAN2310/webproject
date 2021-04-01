const path= require("path");
const http = require("http");
const express = require("express");
const app = express();
const name = "Milan Lakhani";

const port = 3000;
var request = require('request');

// console.log(__dirname);
// path cd.. and inner the other file 
    // console.log(path.join(__dirname,"../public"));

//calling to path 
    //const path1 =  path.join(__dirname,"../public");
    //console.log(path1);

// Builtin middleware
    //app.use(express.static(path1));

    app.get("/",(req,res) => {
        // app.use(express.static(path1));
        res.end("hello from the express by milan.");
    });
app.get("/about",(req,res) => {

    request(`http://api.openweathermap.org/data/2.5/weather?q=${name}&appid=a0d6c4e3fe5fd9eaacf2d0898e444e34`)
    .on("data",(chunk) =>{
        const objdata= JSON.parse(chunk);
        const arrdata = [objdata];

        console.log("connect");
        console.log(name);
        res.write(name);

        //console.log(arrdata[0].name);
    })
 
    .on("end",(err) => {
        if(err) return console.log("connect lose",err1);
        res.end();
    })
        // console.log(req.query);
        // res.end("hello from the about page.");
});

app.listen(port,() => {
    console.log(`listing port ${port}`);
}); 