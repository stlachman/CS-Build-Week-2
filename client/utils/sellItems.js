const axios = require("axios");
const { devinToken, sethToken, nazifaToken } = require("./tokens.js");

function sellItems(authToken) {
  //initialize
  axios({
    method: "post",
    url: "https://lambda-treasure-hunt.herokuapp.com/api/adv/sell/",
    headers: {
      Authorization: `Token ${authToken}`
    },
    data: {
      name: "tiny treasure",
      confirm: "yes"
    }
  })
    .then(res => {
      console.log(res.data);
    })
    .catch(err => console.log(err.Error));
}

if (process.argv[2] === "devin") {
  sellItems(devinToken);
}

if (process.argv[2] === "seth") {
  sellItems(sethToken);
}

if (process.argv[2] === "nazifa") {
  sellItems(nazifaToken);
}
