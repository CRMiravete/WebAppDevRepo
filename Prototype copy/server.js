const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.engine("ejs", require("ejs").renderFile);
app.set("view engine", "ejs");

let username;
let password;

app.post("/login", (req, res) => {

  username=req.body.username;
  password=req.body.password;
  res.render("login", {username});

  
  
})
app.get("/", (req, res) => {
    res.render("index");
  });
  
  app.listen(3000, (err) => {
    console.log("Listening on port 3000");
  });
