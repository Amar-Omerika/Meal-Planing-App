import React, { useState } from "react";
import "./App.css";

const App = () => {
	const [mealData, setMealData] = useState(null);
	const [calories, setCalories] = useState(2000);
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
		</div>
	);
};

export default App;
