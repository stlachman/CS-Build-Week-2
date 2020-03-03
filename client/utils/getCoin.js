const axios = require("axios");
const { devinToken, sethToken, nazifaToken } = require("./tokens.js");

function getCoinBalance(authToken) {
  //initialize
  axios({
    method: "get",
    url: "https://lambda-treasure-hunt.herokuapp.com/api/bc/get_balance/",
    headers: {
      Authorization: `Token ${authToken}`
    }
  })
    .then(res => {
      console.log(res.data);
    })
    .catch(err => console.log(err.Error));
}

if (process.argv[2] === "devin") {
  getCoinBalance(devinToken);
}

if (process.argv[2] === "seth") {
  getCoinBalance(sethToken);
}

if (process.argv[2] === "nazifa") {
  getCoinBalance(nazifaToken);
}
