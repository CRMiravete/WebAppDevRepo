const express = require("express");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.send("<h1>This is not an accesible path for you</h1>")
});

app.post("/login",(req,res)=>{
    var user = req.body.user;
    var password = req.body.password;
    //You would connect to a DB or 3rd party API to authenticate your user
    let authorization = {
        user: user,
        status: "unauthorized",
        statusCode: -1,
    };
    console.log(authorization);
    console.log(user);
    console.log(password);
    if(user === "Cristian" && password === "123"){
        console.log("Logged in");
        authorization.status = "Authorized";
        authorization.statusCode = 1;
    }else{
        console.log("Unauthorized access");
    }
    res.json(authorization);
});


app.listen(5000, ()=>{
    console.log("Listening to port 5000")
});