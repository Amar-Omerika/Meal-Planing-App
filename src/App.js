import React, { useState, useEffect } from "react";
import MealList from "./MealList";
import "./App.css";

const App = () => {
	const [mealData, setMealData] = useState(null);
	const [calories, setCalories] = useState(2000);
	const API_KEY = " 5d18562865c34d779598cfa09921d69f";
	useEffect(() => {
		getMealData();
	}, []);

	const getMealData = async () => {
		const response = await fetch(
			"https://api.spoonacular.com/recipes/716429/information?includeNutrition=false"
		);
		const data = response.json();
		console.log(data);
	};
	function handleChange() {}
	return (
		<div className="App">
			<section className="controls">
				<input
					type="number"
					placeholder="calories"
					onChange={handleChange}
				></input>
			</section>
			<button onClick={getMealData}>Get Daily Meal Plan</button>
		</div>
	);
};

export default App;
