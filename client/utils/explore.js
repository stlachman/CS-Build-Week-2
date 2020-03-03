const fs = require("fs");

fs.writeFileSync(
  "./chicken.txt",
  JSON.stringify({ "1": { title: "Chicken" }, "2": { title: "Tacos" } })
);

let testRead = fs.readFileSync("./chicken.txt");

testRead = JSON.parse(testRead);

console.log(testRead["1"].title);
