require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.engine("ejs", require("ejs").renderFile);
app.set("view engine", "ejs");

//const mongoUrl = "mongodb://127.0.0.1:27017/f1";
const user = process.env.DB_USER;
const pass = process.env.DB_PASS;
//                             the ${} must be declared after creating the .env file. MAKE SURE TO DECLARE THE URL IN BACKQUOTES (``)
const mongoUrl= `mongodb+srv://${user}:${pass}@cluster0.nb25gco.mongodb.net/f1_a?retryWrites=true&w=majority` ;  //This'll link it to my MongoDB server
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });

// Definition of a schema
const teamSchema = new mongoose.Schema({
  id: Number,
  code: String,
  label: String,
  country: String,
  url: String,
});
teamSchema.set("strictQuery", true);

const driverSchema = new mongoose.Schema({
  num: Number,
  code: String,
  forename: String,
  surname: String,
  dob: Date,
  nationality: String,
  url: String,
  team: teamSchema,
});
driverSchema.set("strictQuery", true);

const Team = mongoose.model("Team", teamSchema);
const Driver = mongoose.model("Driver", driverSchema);

let countries = [
  { code: "ENG", label: "England" },
  { code: "SPA", label: "Spain" },
  { code: "GER", label: "Germany" },
  { code: "FRA", label: "France" },
  { code: "MEX", label: "Mexico" },
  { code: "AUS", label: "Australia" },
  { code: "FIN", label: "Finland" },
  { code: "NET", label: "Netherlands" },
  { code: "CAN", label: "Canada" },
  { code: "MON", label: "Monaco" },
  { code: "THA", label: "Thailand" },
  { code: "JAP", label: "Japan" },
  { code: "CHI", label: "China" },
  { code: "USA", label: "USA" },
  { code: "DEN", label: "Denmark" },
];

let teamsRaw=[
  {code: "mercedes", label: "Mercedes", country: "GER"},
  {code: "aston_martin", label: "Aston Martin", country: "ENG"},
  {code: "alpine", label: "Alpine", country: "FRA"},
  {code: "hass_f1", label: "Hass F1 Team", country: "USA"},
];

let teams = []; //this'll apply the cache to the "if".
let drivers = [];

//   add the async after declaring the "await" in the query of the database
app.use("/", async (req,res,next)=>{
    if(teams.length === 0){
        //load info from DB:
        var teamsDB = await Team.find({}).exec(); //query the database
        if(!Array.isArray(teamsDB) || teamsDB.length === 0){ //If it is NOT (!) an array and it's empty
            //I have an empty array, I need to populate:
            await Team.insertMany(teamsRaw).then(()=>{
                console.log("Teams loaded")
            }).catch((error)=>{
                console.error(error);
            });
          // TO DO: load again records from the DB
          await Team.find({})
          .then((docs)=>{
            console.log("Found the following teams");
            console.log(docs);
            teams = docs;
          })
          .catch((error)=>{
            console.error(error);
          });
        }else{
            teams = teamsDB;
        }
    }
    next();
});

app.get("/", (req, res) => {
  //res.sendFile(__dirname + "/public/html/index.html");
  res.render("index",{countries,teams,drivers});
});

app.post("/driver", async (req, res) => {
  //GEt the information from the form.
  var team = await Team.findOne({code:{$eq: req.body.team}}).exec();
  var driver = new Driver( {
    num: req.body.num,
    code: req.body.code,
    forename: req.body.name,
    surname: req.body.lname,
    dob: req.body.dob,
    nationality: req.body.nation,
    url: req.body.url,
    team: team, 
  });
  driver.save();
  drivers.push(driver);
  
  /*
   await Driver.insertOne(driver)
  .then(()=>{
    console.log("Drivers saved");
    drivers.push(driver);
  })
  .catch((error)=>{
    console.error(error);
  });
  res.redirect("/");
  */
  res.redirect("/");
});

app.listen(3000, (err) => {
  console.log("Listening on port 3000");
});