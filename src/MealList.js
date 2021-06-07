import React from "react";
import Meal from "Meal";

const MealList = ({ mealData }) => {
	const nutrients = mealData.nutrients;
	return (
		<section className="nutrients">
			<h1>Macros</h1>
			<ul>
				<li>Calories: {parseInt(nutrients.calories)}</li>
				<li>Carbohydrates: {parseInt(nutrients.carbohydrates)}</li>
				<li>Fat: {parseInt(nutrients.fat)}</li>
				<li>Protein: {parseInt(nutrients.Protein)}</li>
			</ul>
		</section>
	);
};
export default MealList;
