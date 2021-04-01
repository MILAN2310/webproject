const express = require("express");
const app = express();
const port=3000;

app.get("/",(req,res)=> {
    res.write("<h1>welcome to my home page.</h1>");
    res.write("welcome to my homeeee page.");
    res.send();
})

app.get("/about",(req,res)=> {
    res.send("welcome to my about page.");
})

app.get("/contact",(req,res)=>{ 
    res.status(200).send("welcome to my contact page.");
})

app.get("/temp",(req,res)=> {
    res.send([
    {
        id: 1,
        name : "milan",
    },
    {
        id: 1,
        name : "milan",
    },
    {
        id: 1,
        name : "milan",
    },
    {
        id: 1,
        name : "milan",
    }
    ]);
})

app.listen(port,() => {
    console.log(`Done no is ${port}`);
})