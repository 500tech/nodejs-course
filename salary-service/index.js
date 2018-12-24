const express = require("express");
const auth = require("./auth.middleware");

const app = express();

const port = process.env.PORT || 8080;
app.listen(port)

app.get('/salary', auth({includeUser:true}), (req,res)=>{res.sendStatus(200)});
// app.get('/salary2', auth({includeUser:false}), (req,res)=>{res.sendStatus(200)});

// app.get('/salary', auth, (req,res)=>{res.sendStatus(200)});


// const jwt = require("jsonwebtoken");
// const userId = jwt.sign({data:"Michael"}, "TopSecretString", {expiresIn:'7d'})
// console.log(userId);