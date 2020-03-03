const axios = require("axios");
const { devinToken, sethToken, nazifaToken } = require("./tokens.js");

function checkInventory(authToken) {
  //initialize
  axios({
    method: "post",
    url: "https://lambda-treasure-hunt.herokuapp.com/api/adv/status/",
    headers: {
      Authorization: `Token ${authToken}`
    }
  })
    .then(res => {
      console.log(res.data);
    })
    .catch(err => console.log(err));
}

if (process.argv[2] === "devin") {
  checkInventory(devinToken);
}

if (process.argv[2] === "seth") {
  checkInventory(sethToken);
}

if (process.argv[2] === "nazifa") {
  checkInventory(nazifaToken);
}
