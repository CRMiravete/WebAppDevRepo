const express = require("express");
const app = express();
const bodyParser = require("body-parser");
//const https = require("https"); //This one won't be requiered as it's only used when we want to connect to a 3rd party.

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public")); //It will draw in ALL the elements of the afformentioned folder for its proper functionality.
app.engine("ejs", require("ejs").renderFile);
app.set("view engine", "ejs");

// TODO: configure the express server

const longContent =
  "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";

let posts = [];
let name;

app.get("/", (req, res) => {
  //res.sendFile(__dirname + "/public/html/index.html");
  res.render("index",{ name }); //It'll save the response
});

app.post("/login",(req,res) => {
  name = req.body.name;
  res.redirect("/home");
});

app.get("/home",(req,res) => {
  posts.push({title: "My title", content: longContent});
  //res.redirect("/"); //It'll keep the searchbar the same AFTER declaring the res.render line (21)
  res.render("home",{ name, posts });
});

app.listen(3000, (err) => {
  console.log("Listening on port 3000");
});