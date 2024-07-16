import "./App.css";
import React, { useRef } from "react";
import { useReactToPrint } from "react-to-pdf";
import Header from "./Components/Header";
import Letter from "./Components/Letter";
import Basic from "./Components/Basic";
import Education from "./Components/Education";
import Work from "./Components/Work";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";

function App() {
	const [basicInfo, setBasicInfo] = React.useState({
		name: "",
		email: "",
		phoneNumber: "",
		website: "",
	});

	const [educationInfo, setEducationInfo] = React.useState([]);
	const [currentEducation, setCurrentEducation] = React.useState({
		collegeName: "",
		degree: "",
		schoolStart: "",
		schoolEnd: "",
	});

	const [workInfo, setWorkInfo] = React.useState([]);
	const [currentWork, setCurrentWork] = React.useState({
		companyName: "",
		positionTitle: "",
		taskDescription: "",
		workStart: "",
		workEnd: "",
	});

	const [projects, setProjects] = React.useState([]);
	const [currentProject, setCurrentProject] = React.useState({
		projectName: "",
		projectDescription: "",
		projectTechnologies: "",
	});

	const [skills, setSkills] = React.useState([]);
	const [currentSkill, setCurrentSkill] = React.useState("");

	function handleBasic(event) {
		const { name, value } = event.target;
		setBasicInfo((prevState) => ({
			...prevState,
			[name]: value,
		}));
	}

	function handleEducation(event) {
		const { name, value } = event.target;
		setCurrentEducation((prevState) => ({
			...prevState,
			[name]: value,
		}));
	}

	function handleAddEducation(e) {
		e.preventDefault();
		setEducationInfo((prevEducation) => [...prevEducation, currentEducation]);
		setCurrentEducation({
			collegeName: "",
			degree: "",
			schoolStart: "",
			schoolEnd: "",
		});
	}

	function handleDeleteEducation(index) {
		setEducationInfo((prevEducation) =>
			prevEducation.filter((_, i) => i !== index)
		);
	}

	function handleWork(event) {
		const { name, value } = event.target;
		setCurrentWork((prevState) => ({
			...prevState,
			[name]: value,
		}));
	}

	function handleAddWork(e) {
		e.preventDefault();
		setWorkInfo((prevWork) => [...prevWork, currentWork]);
		setCurrentWork({
			companyName: "",
			positionTitle: "",
			taskDescription: "",
			workStart: "",
			workEnd: "",
		});
	}

	function handleDeleteWork(index) {
		setWorkInfo((prevWork) => prevWork.filter((_, i) => i !== index));
	}

	function handleProjectChange(event) {
		const { name, value } = event.target;
		setCurrentProject((prevState) => ({
			...prevState,
			[name]: value,
		}));
	}

	function handleAddProject(e) {
		e.preventDefault();
		setProjects((prevProjects) => [...prevProjects, currentProject]);
		setCurrentProject({
			projectName: "",
			projectDescription: "",
			projectTechnologies: "",
		});
	}

	function handleDeleteProject(index) {
		setProjects((prevProjects) => prevProjects.filter((_, i) => i !== index));
	}

	function handleSkillChange(event) {
		setCurrentSkill(event.target.value);
	}

	function handleAddSkill(e) {
		e.preventDefault();
		if (currentSkill.trim() !== "") {
			setSkills((prevSkills) => [...prevSkills, currentSkill.trim()]);
			setCurrentSkill("");
		}
	}

	function handleDeleteSkill(index) {
		setSkills((prevSkills) => prevSkills.filter((_, i) => i !== index));
	}

	const componentRef = useRef();
	const handlePrint = useReactToPrint({
		content: () => componentRef.current,
	});

	return (
		<div>
			<Header />
			<div className="page-container">
				<div className="main-container flex-child">
					<Basic onChange={handleBasic} {...basicInfo} />
					<Education
						onChange={handleEducation}
						handleAdd={handleAddEducation}
						handleDelete={handleDeleteEducation}
						{...currentEducation}
					/>
					<Work
						onChange={handleWork}
						handleAdd={handleAddWork}
						handleDelete={handleDeleteWork}
						{...currentWork}
					/>
					<Projects
						onChange={handleProjectChange}
						handleAdd={handleAddProject}
						handleDelete={handleDeleteProject}
						{...currentProject}
					/>
					<Skills
						onChange={handleSkillChange}
						handleAdd={handleAddSkill}
						handleDelete={handleDeleteSkill}
						currentSkill={currentSkill}
					/>
					<button onClick={handlePrint}>Download PDF</button>
				</div>
				<Letter
					ref={componentRef}
					basicInfo={basicInfo}
					educationInfo={educationInfo}
					workInfo={workInfo}
					projects={projects}
					skills={skills}
				/>
			</div>
		</div>
	);
}

export default App;
