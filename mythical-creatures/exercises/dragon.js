function createDragon(name, rider, temperment, timesEaten, hungry) {
	return {
			name: name,
			rider: rider,
			temperment: temperment,
			timesEaten: 0,
			hungry: true
	}
};

function greetRider(dragon) {
	return `Hi, ${dragon.rider}!`;
};

function eat(dragon) {
	dragon.timesEaten++;
	if (dragon.timesEaten >= 3) {
		dragon.hungry = false;
	}

	return dragon;
};

function findFireBreathers(allDragons) {
	var fireBreathers = [];
	for (var i = 0; i < allDragons.length; i++) {
		if (allDragons[i].temperment === "aggressive") {
			fireBreathers.push(allDragons[i]);
		}
	}

	return fireBreathers;
};

module.exports = {
  createDragon, 
  greetRider, 
  eat, 
  findFireBreathers
};