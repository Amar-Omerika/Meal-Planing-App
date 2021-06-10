import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";

const Meal = ({ meal }) => {
	const [imageuRL, setImageURL] = useState("");
	useEffect(() => {
		fetch(
			`https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=5d18562865c34d779598cfa09921d69f&includeNutrition=false`
		)
			.then((response) => response.json())
			.then((data) => {
				setImageURL(data.image);
			})
			.catch(() => {
				console.log("Error");
			});
	}, [meal.id]);
	return (
		<article>
			<h1>{meal.title}</h1>
			<img src={imageuRL} />
			<ul className="instructions">
				<li>Preparation time: {meal.readyInMinutes} minutes</li>
				<li>Number of servings : {meal.servings}</li>
			</ul>
			<Button variant="contained" color="primary">
				<a href={meal.sourceUrl}>Go to Recipe</a>
			</Button>
		</article>
	);
};
export default Meal;
