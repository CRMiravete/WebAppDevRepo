const express= require("express");
const https = require("https");  
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public")); //It will draw in ALL the elements of the afformentioned folder for its proper functionality
app.engine("ejs", require("ejs").renderFile);
app.set("view engine", "ejs");
/*
app.get("/", (req, res)=> {
    res.write("Hello World"); //Depending on what´s written in the browser it will open it
    res.send();
});*/

app.get("/hello", (req, res)=> { //If the browser says "http://localhost:3000/hello" it'll open it like this
    res.write("<h1> Hello again backto you</h1>");
    res.write("<h2> Hello again backto you</h2>");
    res.write("<ul> Hello again backto you</ul>");
    res.write("<ol> Hello again backto you</ol>");
    res.send();
});

const fruits = [
    {name:"apple",qty:3}, 
    {name:"mango",qty:4}, 
    {name:"grape",qty:9}, 
    {name:"watermelon",qty:2},
];

//This is the link to the API  16/10/23
const url = "https://v2.jokeapi.dev/joke/Any?format=json";
const apiKey = "079c89a595c06b59580f7b0e9c8abb15";

app
.route("/")
.get((req,res)=> {
    res.render("index",{name: "Cristian", fruits: fruits}); //This is just one JSON type object. It has 2 keys
}) 
.post((req,res)=>{
    var fruit = req.body.fruit;
    var qty = req.body.qty; 
    fruits.push({name: fruit, qty: qty});
    res.redirect("/");
});

//Implementation of the API, where it will always be loceted inside the object specified 16/10/23
app.route("/joke").get((req,res) => {
    https.get(url , (response) =>{
        console.log(response.statusCode); //Check the status code
        if(response.statusCode == 200) { //If the response is correct, it will know if there was an error in the response
            response.on("data", (data)=>{ //
                var jokes = JSON.parse(data);
                console.log(jokes);
                res.setHeader("Content-Type", "text/html"); //Wrapping some metadata by the nature of the request
                jokes.jokes.forEach((joke) =>{
                    console.log(joke);
                    if(joke.type == "twopart"){
                        res.write("<h2>" + joke.setup + "</h2><br/><p>" + joke.delivery + "</p>");
                    }else{
                        res.write("<h2>" + joke.joke + "</h2>");
                    }
                    
                });
                res.send();
            });
        }
    });
});

/*
app.get("/",(req,res)=> {
    res.render("index",{name: "Cristian", fruits: fruits}); //This is just one JSON type object. It has 2 keys
}); 
*/                    //key   //value   //key   //value

app.get("/product",(req,res) => {
    console.log(__dirname);
    res.sendFile(__dirname + "/public/html/index.html");
});

app.get("/sellProduct",(req,res) => {
    var prodName = req.query.name;
    res.setHeader("Content-type", "text/html");
    res.write("<h2>This is a great product (from express) buy " + prodName + " </h2>");
    res.send();
});

app.use((err, req, res, next)=>{ //What´ll execute the error screen if the website crashes
    console.error(err.message);
    res.status(500).send("An error has occured. Sorry for the incovencience")
});

app.listen(3000, ()=> {
    console.log("Listening to port 3000");
});