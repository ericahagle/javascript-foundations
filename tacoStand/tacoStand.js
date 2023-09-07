function createIngredient(name = 'unknown', price = 0.00) {
	var ingredient = {name: name, price: price};
	return ingredient;
}

function createTaco(name = 'custom', ingredients = []) {
	var taco = {name: name, ingredients: ingredients};
	return taco;
}



module.exports = {
  createIngredient,
	createTaco,
	// addIngredientToTaco,
	// calculatePrice
}
