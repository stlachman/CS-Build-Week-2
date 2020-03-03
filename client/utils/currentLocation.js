const axios = require("axios");
const { devinToken, sethToken, nazifaToken } = require("./tokens.js");

const sleep = (milliseconds = 1000) =>
  new Promise(resolve => setTimeout(resolve, milliseconds));

function get(authToken) {
  return axios({
    method: "get",
    url: "https://lambda-treasure-hunt.herokuapp.com/api/adv/init/",
    headers: {
      Authorization: `Token ${authToken}`
    }
  })
    .then(res => {
      return res.data;
    })
    .catch(err => {
      console.error(err);
    });
}
async function getStartingInfo(authToken) {
  const result = await get(authToken);
  await sleep(result.cooldown * 1000);
  return result;
}

module.exports = { getStartingInfo };
