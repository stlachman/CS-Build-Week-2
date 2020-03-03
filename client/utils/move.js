const axios = require("axios");

const sleep = (milliseconds = 1000) =>
  new Promise(resolve => setTimeout(resolve, milliseconds));

function get(authToken, direction, nextRoomObject) {
  axios({
    method: "post",
    url: "https://lambda-treasure-hunt.herokuapp.com/api/adv/move/",
    headers: {
      Authorization: `Token ${authToken}`
    },
    data: {
      direction: nextDirection,
      ...nextRoomObject
    }
  })
    .then(res => {
      return res.data;
    })
    .catch(err => console.log(err.Error));
}

async function move(authToken, direction, nextRoomObject) {
  const result = await get(authToken, direction, nextRoomObject);
  await sleep(result.cooldown * 1000);
  return result;
}

module.exports = { move };
