import "./App.css";
import React from "react";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Letter from "./Components/Letter";

function App() {
	return (
		<div>
			<Header />
			<div className="page-container">
				<Main />
				<Letter />
			</div>
		</div>
	);
}

export default App;
