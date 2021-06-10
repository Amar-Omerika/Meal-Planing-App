import React, { useState, useEffect } from "react";
import MealList from "./MealList";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import "./App.css";

const App = () => {
	const [mealData, setMealData] = useState(null);
	const [calories, setCalories] = useState(2000);
	const API_KEY = "5d18562865c34d779598cfa09921d69f";
	useEffect(() => {
		getMealData();
	}, []);

	const getMealData = async () => {
		const response = await fetch(
			`https://api.spoonacular.com/mealplanner/generate?apiKey=${API_KEY}&timeFrame=day&targetCalories=${calories}`
		);
		const data = await response.json();
		setMealData(data);
		console.log(data);
	};
	function handleChange(event) {
		setCalories(event.target.value);
	}
	return (
		<div className="App">
			<section className="controls">
				<TextField
					type="number"
					placeholder="calories"
					onChange={handleChange}
					id="standard-basic"
					label="Calories"
				/>
			</section>
			<Button variant="contained" color="primary" onClick={getMealData}>
				Get Daily Meal Plan
			</Button>

			{mealData && <MealList mealData={mealData} />}
		</div>
	);
};

export default App;
