const axios = require("axios");
const { devinToken, sethToken, nazifaToken } = require("./tokens.js");

function changeName(authToken) {
  //initialize
  axios({
    method: "post",
    url: "https://lambda-treasure-hunt.herokuapp.com/api/adv/change_name/",
    headers: {
      Authorization: `Token ${authToken}`
    },
    data: {
      name: process.argv[2],
      confirm: "aye"
    }
  })
    .then(res => {
      console.log(res.data);
    })
    .catch(err => console.log(err.Error));
}

if (process.argv[2] === "devin") {
  changeName(devinToken);
}

if (process.argv[2] === "seth") {
  changeName(sethToken);
}

if (process.argv[2] === "nazifa") {
  changeName(nazifaToken);
}
