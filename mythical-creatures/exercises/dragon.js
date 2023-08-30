function createDragon(name, rider, temperment) {
	return {name: name, rider: rider, temperment: temperment};
};

function greetRider(dragon) {
	return `Hi, ${dragon.rider}!`;
};



module.exports = {
  createDragon, 
  greetRider, 
  // eat, 
  // findFireBreathers
}