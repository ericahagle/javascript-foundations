function createDragon(name, rider, temperment, timesEaten, hungry) {
	return {
			name: name,
			rider: rider,
			temperment: temperment,
			timesEaten: 0,
			hungry: true
	};
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

module.exports = {
  createDragon, 
  greetRider, 
  eat, 
  // findFireBreathers
}