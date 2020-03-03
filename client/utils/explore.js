const fs = require("fs");
const axios = require("axios");

const authToken = "d71b66229716fe203b4b93fb703e2da285ab6f03";

fs.writeFileSync(
  "./chicken.txt",
  JSON.stringify({ "1": { title: "Chicken" }, "2": { title: "Tacos" } })
);

let visitedRooms = new Set();
let currentDirections = [];
let nextDirection;
let nextRoomObject;

while (visitedRooms.size < 500) {}

function reverseDirection(direction) {
  if (direction === "n") {
    return "s";
  } else if (direction === "s") {
    return "n";
  } else if (direction === "e") {
    return "w";
  } else if (direction === "w") {
    return "e";
  } else {
    return "Incorrect Direction yo!";
  }
}

let testRead = fs.readFileSync("./chicken.txt");

testRead = JSON.parse(testRead);

console.log(testRead["1"].title);
