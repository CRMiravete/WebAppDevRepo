/*
console.log("Hello World")
const sw = require("star-wars-quotes");
console.log(sw());
*/
const heroes = require("superheroes");
const villains = require("supervillains");


console.log("Hero: " + heroes.random());

console.log("Villain: " + villains.random());

const fs = require("fs");
fs.readFile("input.txt", "utf-8", (err,fd) =>{
	console.log("error:" + err);
	console.log("Content of file: \n" + fd);
});