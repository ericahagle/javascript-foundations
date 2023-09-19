function createVampire(name, pet) {
  var vampire = {
    name: name,
    pet: pet || "bat",
    thirsty: true,
    ouncesDrank: 0
  }
  return vampire;
}

function encounterDeliciousVictim(vampire) {
  if (vampire.thirsty) {
    return "I WANT TO SUCK YOUR BLOOD!";
  } else {
    return "No thanks, I am too full.";
  }
}

function drink(vampire) {
  if (vampire.ouncesDrank < 50) {
    vampire.ouncesDrank = vampire.ouncesDrank + 10;
    if (vampire.ouncesDrank >= 50) {
      vampire.thirsty = false;
    }
  }
  return vampire;
}

function inquirePlace(locations, location) {
  for (var i = 0; i < locations.length; i++) {
    if (locations[i] === location) {
      return `Yes, I have spent some time in ${location}.`;
    }
  }
  return `No, I have never been to ${location}.`;
}

function findBatLovers(vampires) {
  var batLovers = [];
  for (var i = 0; i < vampires.length; i++) {
    if (vampires[i].pet === "bat") {
      batLovers.push(vampires[i].name);
    }
  }
  return batLovers;
}

module.exports = {
  createVampire,
  drink,
  findBatLovers,
  encounterDeliciousVictim,
  inquirePlace
}
