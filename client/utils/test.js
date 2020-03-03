const { getStartingInfo } = require("./currentLocation");
const axios = require("axios");
const { sethToken, nazifaToken, devinToken } = require("./tokens.js");
const { move } = require("./move.js");

// async function testingFunction() {
//   let result = await getStartingInfo(sethToken);
//   console.log(result);

//   let devinResults = await getStartingInfo(devinToken);
//   console.log(devinResults);
// }

// testingFunction();

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

function formatExits(exitsArray) {
  let exitsObject = {};
  exitsArray.forEach(exit => {
    exitsObject[exit] = "?";
  });
  return exitsObject;
}

//I was thinking something like
async function saveMap(authToken) {
  //set some global variables
  let startingInfo = await getStartingInfo(authToken);
  let currentRoomNumber = startingInfo.room_id;

  let map = {};
  let visitedRooms = new Set();
  let currentDirections = [];
  let direction;
  let nextRoomObject;

  //Adding first room to map and modifying the exits accordinly
  map[currentRoomNumber] = {
    ...startingInfo
  };
  map[currentRoomNumber].exits = formatExits(startingInfo.exits);

  //add room to visited rooms
  visitedRooms.add(currentRoomNumber);

  //blank if we don't know the room
  nextRoomObject = {};

  //setting exits to current exits so short writing
  let exits = map[currentRoomNumber].exits;

  if (exits["n"] && exits["n"] === "?") {
    currentDirections.push("n");
    nextDirection = "n";
  } else if (exits["s"] && exits["s"] === "?") {
    currentDirections.push("s");
    nextDirection = "s";
  } else if (exits["e"] && exits["e"] === "?") {
    currentDirections.push("e");
    nextDirection = "e";
  } else if (exits["w"] && exits["w"] === "?") {
    currentDirections.push("w");
    nextDirection = "w";
  } else {
    let lastDirection = currentDirections.pop();
    nextDirection = reverseDirection(lastDirection);
  }

  while (visitedRooms.size < 500) {
    let nextRoomData = await move(authToken, nextDirection, nextRoomObject);

    let newRoomID = res.data.room_id;

    if (!map[newRoomID]) {
      //initializing room in map
      map[newRoomID] = { ...res.data };

      //["n", "s"] => {"n": "?"}
      map[newRoomID].exits = formatExits(map[newRoomID].exits);

      //add this new room to the old room's exits
      map[newRoomID].exits[reverseDirection(nextDirection)] = currentRoomNumber;

      //add the old room to the new room's exits
      map[currentRoomNumber].exits[nextDirection] = newRoomID;
    }

    currentRoomNumber = newRoomID;

    //add the current room to visted rooms
    visitedRooms.add(currentRoomNumber);

    let exits = map[currentRoomNumber].exits;

    //if going north is unvisited
    nextRoomObject = {};

    if (exits["n"] && exits["n"] === "?") {
      currentDirections.push("n");
      nextDirection = "n";
    } else if (exits["s"] && exits["s"] === "?") {
      currentDirections.push("s");
      nextDirection = "s";
    } else if (exits["e"] && exits["e"] === "?") {
      currentDirections.push("e");
      nextDirection = "e";
    } else if (exits["w"] && exits["w"] === "?") {
      currentDirections.push("w");
      nextDirection = "w";
    } else {
      let lastDirection = currentDirections.pop();
      nextDirection = reverseDirection(lastDirection);
    }
  }
  //save map
}

saveMap(sethToken);
//get starting info

//then we need to get the map and write it to a file
//to get map - move directions
