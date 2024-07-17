import React from "react";
import phoneIcon from "../phoneIcon.png";
import emailIcon from "../emailIcon.png";

const Letter = React.forwardRef((props, ref) => {
	return (
		<div className="letter-container flex-child" ref={ref}>
			{/* Basic Info Section */}
			<div className="basic-info-section">
				<h1 className="name-output">{props.basicInfo.name}</h1>
				<div className="basic-info-section-two">
					<div className="email-section">
						<img src={emailIcon} alt="email icon" className="email-icon" />
						<p className="email-output">{props.basicInfo.email}</p>
					</div>
					<div className="phone-section">
						<img src={phoneIcon} alt="phone icon" className="phone-icon" />
						<p className="phone-output">{props.basicInfo.phoneNumber}</p>
					</div>
					{props.basicInfo.website && (
						<div className="website-section">
							<p className="website-output">{props.basicInfo.website}</p>
						</div>
					)}
				</div>
			</div>
			<hr />

			{/* Education Section */}
			<h2>Education</h2>
			{props.educationInfo.map((edu, index) => (
				<div key={index} className="education-info-section">
					<div className="left-side">
						<h3 className="college-output">{edu.collegeName}</h3>
						<p className="degree-output">{edu.degree}</p>
					</div>
					<div className="right-side">
						<p className="school-dates-output">
							{edu.schoolStart} - {edu.schoolEnd}
						</p>
					</div>
				</div>
			))}
			{/* Current Education Input Preview */}
			{props.currentEducation.collegeName && (
				<div className="education-info-section">
					<div className="left-side">
						<h3 className="college-output">
							{props.currentEducation.collegeName}
						</h3>
						<p className="degree-output">{props.currentEducation.degree}</p>
					</div>
					<div className="right-side">
						<p className="school-dates-output">
							{props.currentEducation.schoolStart} -{" "}
							{props.currentEducation.schoolEnd}
						</p>
					</div>
				</div>
			)}
			<hr />

			{/* Work Experience Section */}
			<h2>Work Experience</h2>
			{props.workInfo.map((work, index) => (
				<div key={index} className="work-info-section">
					<div className="left-side">
						<h3 className="company-output">{work.companyName}</h3>
						<p className="position-output">{work.positionTitle}</p>
					</div>
					<div className="right-side">
						<p className="work-dates-output">
							{work.workStart} - {work.workEnd}
						</p>
					</div>
					<div className="textarea-section">
						<ul className="tasks-output">
							{work.taskDescription.split("\n").map((task, i) => (
								<li key={i}>{task}</li>
							))}
						</ul>
					</div>
				</div>
			))}
			{/* Current Work Input Preview */}
			{props.currentWork.companyName && (
				<div className="work-info-section">
					<div className="left-side">
						<h3 className="company-output">{props.currentWork.companyName}</h3>
						<p className="position-output">{props.currentWork.positionTitle}</p>
					</div>
					<div className="right-side">
						<p className="work-dates-output">
							{props.currentWork.workStart} - {props.currentWork.workEnd}
						</p>
					</div>
					<div className="textarea-section">
						<p className="tasks-output">{props.currentWork.taskDescription}</p>
					</div>
				</div>
			)}
			<hr />

			{/* Projects Section */}
			<h2>Projects</h2>
			{props.projects.map((project, index) => (
				<div key={index} className="project-info-section">
					<h3 className="project-name-output">{project.projectName}</h3>
					<ul className="project-description-output">
						{project.projectDescription.split("\n").map((desc, i) => (
							<li key={i}>{desc}</li>
						))}
					</ul>
					<p className="project-technologies-output">
						<strong>Technologies:</strong> {project.projectTechnologies}
					</p>
				</div>
			))}
			{/* Current Project Input Preview */}
			{props.currentProject.projectName && (
				<div className="project-info-section">
					<h3 className="project-name-output">
						{props.currentProject.projectName}
					</h3>
					<p className="project-description-output">
						{props.currentProject.projectDescription}
					</p>
					<p className="project-technologies-output">
						<strong>Technologies:</strong>{" "}
						{props.currentProject.projectTechnologies}
					</p>
				</div>
			)}
			<hr />

			{/* Skills Section */}
			<h2>Skills</h2>
			<div className="skills-section">
				{props.skills.map((skill, index) => (
					<span key={index} className="skill-output">
						{skill}
					</span>
				))}
				{props.currentSkill && (
					<span className="skill-output">{props.currentSkill}</span>
				)}
			</div>
		</div>
	);
});

export default Letter;
