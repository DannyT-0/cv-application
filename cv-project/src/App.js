import "./App.css";
import React from "react";
import Header from "./Components/Header";
import Letter from "./Components/Letter";
import Basic from "./Components/Basic";
import Education from "./Components/Education";
import Work from "./Components/Work";

function App() {
	const [formInfo, setFormInfo] = React.useState({
		name: "",
		email: "",
		phoneNumber: "",
		collegeName: "",
		degree: "",
		schoolStart: "",
		schoolEnd: "",
		companyName: "",
		positionTitle: "",
		taskDescription: "",
		workStart: "",
		workEnd: "",
	});

	function handleChange(event) {
		const { name, value } = event.target;
		setFormInfo((prevState) => {
			return {
				...prevState,
				[name]: value,
			};
		});
	}

	console.log(formInfo);

	return (
		<div>
			<Header />
			<div className="page-container">
				<div className="main-container flex-child">
					<Basic
						onChange={handleChange}
						name={formInfo.name}
						email={formInfo.email}
						phoneNumber={formInfo.phoneNumber}
					/>
					<Education
						onChange={handleChange}
						collegeName={formInfo.collegeName}
						degree={formInfo.degree}
						schoolStart={formInfo.schoolStart}
						schoolEnd={formInfo.schoolEnd}
					/>
					<Work
						onChange={handleChange}
						companyName={formInfo.companyName}
						positionTitle={formInfo.positionTitle}
						taskDescription={formInfo.taskDescription}
						workStart={formInfo.workStart}
						workEnd={formInfo.workEnd}
					/>
				</div>
				<Letter
					name={formInfo.name}
					email={formInfo.email}
					phoneNumber={formInfo.phoneNumber}
					collegeName={formInfo.collegeName}
					degree={formInfo.degree}
					schoolStart={formInfo.schoolStart}
					schoolEnd={formInfo.schoolEnd}
					companyName={formInfo.companyName}
					positionTitle={formInfo.positionTitle}
					taskDescription={formInfo.taskDescription}
					workStart={formInfo.workStart}
					workEnd={formInfo.workEnd}
				/>
			</div>
		</div>
	);
}

export default App;
