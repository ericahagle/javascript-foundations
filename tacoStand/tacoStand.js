function createIngredient(name = 'unknown', price = 0.00) {
	var ingredient = {name: name, price: price};
	return ingredient;
}

function createTaco(name = 'custom', ingredients = []) {
	var taco = {name: name, ingredients: ingredients};
	return taco;
}

function addIngredientToTaco(taco, ingredient) {
	taco.ingredients.push(ingredient);
	return taco;
}

function calculatePrice(taco) {
	// taco includes name and [ingredients]
	// ingredient includes name and price
}

module.exports = {
  createIngredient,
	createTaco,
	addIngredientToTaco,
	calculatePrice
}
