import "./App.css";
import React, { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import Header from "./Components/Header";
import Letter from "./Components/Letter";
import Basic from "./Components/Basic";
import Education from "./Components/Education";
import Work from "./Components/Work";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";

function App() {
	const [basicInfo, setBasicInfo] = useState({
		name: "",
		email: "",
		phoneNumber: "",
		website: "",
	});

	const [educationInfo, setEducationInfo] = useState([]);
	const [currentEducation, setCurrentEducation] = useState({
		collegeName: "",
		degree: "",
		schoolStart: "",
		schoolEnd: "",
	});

	const [workInfo, setWorkInfo] = useState([]);
	const [currentWork, setCurrentWork] = useState({
		companyName: "",
		positionTitle: "",
		taskDescription: "",
		workStart: "",
		workEnd: "",
	});

	const [projects, setProjects] = useState([]);
	const [currentProject, setCurrentProject] = useState({
		projectName: "",
		projectDescription: "",
		projectTechnologies: "",
	});

	const [skills, setSkills] = useState([]);
	const [currentSkill, setCurrentSkill] = useState("");

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

	function handleDeleteEducation() {
		setEducationInfo((prevEducation) => prevEducation.slice(0, -1));
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

	function handleDeleteWork() {
		setWorkInfo((prevWork) => prevWork.slice(0, -1));
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

	function handleDeleteProject() {
		setProjects((prevProjects) => prevProjects.slice(0, -1));
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

	function handleDeleteSkill() {
		setSkills((prevSkills) => prevSkills.slice(0, -1));
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
						currentEducation={currentEducation}
						educationInfo={educationInfo}
					/>
					<Work
						onChange={handleWork}
						handleAdd={handleAddWork}
						handleDelete={handleDeleteWork}
						currentWork={currentWork}
						workInfo={workInfo}
					/>
					<Projects
						onChange={handleProjectChange}
						handleAdd={handleAddProject}
						handleDelete={handleDeleteProject}
						currentProject={currentProject}
						projects={projects}
					/>
					<Skills
						onChange={handleSkillChange}
						handleAdd={handleAddSkill}
						handleDelete={handleDeleteSkill}
						currentSkill={currentSkill}
						skills={skills}
					/>
					<button onClick={handlePrint}>Download PDF</button>
				</div>
				<Letter
					ref={componentRef}
					basicInfo={basicInfo}
					currentEducation={currentEducation}
					educationInfo={educationInfo}
					currentWork={currentWork}
					workInfo={workInfo}
					currentProject={currentProject}
					projects={projects}
					currentSkill={currentSkill}
					skills={skills}
				/>
			</div>
		</div>
	);
}

export default App;
