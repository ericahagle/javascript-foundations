function createMeal(type, calorieGoal, dishes) {
	return {
		type: type,
		calorieGoal: calorieGoal,
		dishes: dishes || []
	};
}

function addDish(meal, dishes) {
	if (dishes.calories <= meal.calorieGoal) {
		meal.dishes.push(dishes);
		meal.calorieGoal = meal.calorieGoal - dishes.calories;
	};
	return meal;
}

function calculateCalories(meal) {
	var totalCalories = 0;
	for (var i = 0; i < meal.dishes.length; i++){
		totalCalories = totalCalories + meal.dishes[i].calories;
	};
	return `${meal.type} has a total of ${totalCalories} calories.`;
}


module.exports = {
	createMeal,
	addDish,
	calculateCalories
}
