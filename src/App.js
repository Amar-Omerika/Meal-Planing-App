import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
	const [mealData, setMealData] = useState(null);
	const [calories, setCalories] = useState(2000);
	useEffect(() => {
		setMealData();
	}, []);

	const setMealData = async () => {};
	return (
		<div className="App">
			<section className="controls">
				<input
					type="number"
					placeholder="calories"
					onChange={setMealData}
				></input>
			</section>
		</div>
	);
};

export default App;
