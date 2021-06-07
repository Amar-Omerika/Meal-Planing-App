import React from "react";
import Meal from "./Meal";

const MealList = ({ mealData }) => {
	const nutrients = mealData.nutrients;
	return (
		<main>
			<section className="nutrients">
				<h1>Macros</h1>
				<ul>
					<li>Calories: {parseInt(nutrients.calories)}</li>
					<li>Carbohydrates: {parseInt(nutrients.carbohydrates)}</li>
					<li>Fat: {parseInt(nutrients.fat)}</li>
					<li>Protein: {parseInt(nutrients.protein)}</li>
				</ul>
			</section>
			<section className="meals">
				{mealData.meals.map((meal) => {
					return <Meal key={meal.id} meal={meal} />;
				})}
			</section>
		</main>
	);
};
export default MealList;
