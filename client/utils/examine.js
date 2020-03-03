const axios = require("axios");
const { devinToken, sethToken, nazifaToken } = require("./tokens.js");

function examine(authToken) {
  //initialize
  axios({
    method: "post",
    url: "https://lambda-treasure-hunt.herokuapp.com/api/adv/examine/",
    headers: {
      Authorization: `Token ${authToken}`
    },
    data: {
      name: "well"
    }
  })
    .then(res => {
      console.log(res.data);
    })
    .catch(err => console.log(err.Error));
}

if (process.argv[2] === "devin") {
  examine(devinToken);
}

if (process.argv[2] === "seth") {
  examine(sethToken);
}

if (process.argv[2] === "nazifa") {
  examine(nazifaToken);
}
