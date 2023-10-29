const express = require("express");
const app = express();
const port=3000;
const bodyParser = require("body-parser");

//Get
app.set("view engine","ejs");
app.get('/',(req,res)=>{
    res.render('registration-form',{error:null})
})

//Post
app.use(bodyParser.urlencoded({extended: true}));
app.post('/greet',(req,res)=>{
    const name=req.body.name;
    res.render('succes',{name});
});