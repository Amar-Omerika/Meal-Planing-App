import React, { useState, useEffect } from "react";

const Meal = ({ meal }) => {
	const [imageuRL, setImageURL] = useState("");
	return (
		<article>
			<h1>{meal.title}</h1>
			<img src={imageuRL} />
			<ul>
				<li>Preparation time: {meal.readyInMinutes} minutes</li>
				<li>Number of servings : {meal.servings}</li>
			</ul>
			<a href={meal.sourceUrl}>Visit the Recipe</a>
		</article>
	);
};
export default Meal;
