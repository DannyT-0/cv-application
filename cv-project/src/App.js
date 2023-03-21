import "./App.css";
import React from "react";
import Header from "./Components/Header";
import Letter from "./Components/Letter";
import Basic from "./Components/Basic";
import Education from "./Components/Education";
import Work from "./Components/Work";

function App() {
	// const [formInfo, setFormInfo] = React.useState({
	// 	name: "",
	// 	email: "",
	// 	phoneNumber: "",
	// 	collegeName: "",
	// 	degree: "",
	// 	schoolStart: "",
	// 	schoolEnd: "",
	// 	companyName: "",
	// 	positionTitle: "",
	// 	taskDescription: "",
	// 	workStart: "",
	// 	workEnd: "",
	// });

	const [basicInfo, setBasicInfo] = React.useState({
		name: "",
		email: "",
		phoneNumber: "",
	});

	const [educationInfo, setEducationInfo] = React.useState({
		collegeName: "",
		degree: "",
		schoolStart: "",
		schoolEnd: "",
	});

	const [workInfo, setWorkInfo] = React.useState({
		companyName: "",
		positionTitle: "",
		taskDescription: "",
		workStart: "",
		workEnd: "",
	});

	const [isShown, setIsShown] = React.useState(false);

	function handleBasic(event) {
		const { name, value } = event.target;
		setBasicInfo((prevState) => {
			return {
				...prevState,
				[name]: value,
			};
		});
	}

	function handleEducation(event) {
		const { name, value } = event.target;
		setEducationInfo((prevState) => {
			return {
				...prevState,
				[name]: value,
			};
		});
	}

	function handleWork(event) {
		const { name, value } = event.target;
		setWorkInfo((prevState) => {
			return {
				...prevState,
				[name]: value,
			};
		});
	}

	function handleClick(e) {
		e.preventDefault();
		setIsShown((prevState) => !prevState);
	}

	console.log(educationInfo.collegeName);

	return (
		<div>
			<Header />
			<div className="page-container">
				<div className="main-container flex-child">
					<Basic
						onChange={handleBasic}
						name={basicInfo.name}
						email={basicInfo.email}
						phoneNumber={basicInfo.phoneNumber}
					/>
					<Education
						onChange={handleEducation}
						collegeName={educationInfo.collegeName}
						degree={educationInfo.degree}
						schoolStart={educationInfo.schoolStart}
						schoolEnd={educationInfo.schoolEnd}
						handleClick={handleClick}
					/>
					<Work
						onChange={handleWork}
						companyName={workInfo.companyName}
						positionTitle={workInfo.positionTitle}
						taskDescription={workInfo.taskDescription}
						workStart={workInfo.workStart}
						workEnd={workInfo.workEnd}
						handleClick={handleClick}
					/>
				</div>
				<Letter
					name={basicInfo.name}
					email={basicInfo.email}
					phoneNumber={basicInfo.phoneNumber}
					collegeName={educationInfo.collegeName}
					degree={educationInfo.degree}
					schoolStart={educationInfo.schoolStart}
					schoolEnd={educationInfo.schoolEnd}
					companyName={workInfo.companyName}
					positionTitle={workInfo.positionTitle}
					taskDescription={workInfo.taskDescription}
					workStart={workInfo.workStart}
					workEnd={workInfo.workEnd}
					isShown={isShown}
				/>
			</div>
		</div>
	);
}

export default App;
