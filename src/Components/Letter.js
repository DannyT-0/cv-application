import React from "react";
import phoneIcon from "/path/to/phoneIcon.png";
import emailIcon from "/path/to/emailIcon.png";

const Letter = React.forwardRef((props, ref) => {
	return (
		<div className="letter-container flex-child" ref={ref}>
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
			<h2>Education</h2>
			{props.educationInfo.map((edu, index) => (
				<div key={index} className="education-info-section">
					<div className="left-side">
						<h3 className="college-output">{edu.collegeName}</h3>
						<p className="degree-output">{edu.degree}</p>
					</div>
					<div className="right-side">
						<p className="schoolStart-output">
							<strong>Start Date:</strong> {edu.schoolStart}
						</p>
						<p className="schoolEnd-output">
							<strong>End Date:</strong> {edu.schoolEnd}
						</p>
					</div>
				</div>
			))}
			<hr />
			<h2>Work Experience</h2>
			{props.workInfo.map((work, index) => (
				<div key={index} className="work-info-section">
					<div className="left-side">
						<h3 className="company-output">{work.companyName}</h3>
						<p className="position-output">{work.positionTitle}</p>
					</div>
					<div className="right-side">
						<p className="workStart-output">
							<strong>Start Date:</strong> {work.workStart}
						</p>
						<p className="workEnd-output">
							<strong>End Date:</strong> {work.workEnd}
						</p>
					</div>
					<div className="textarea-section">
						<p className="tasks-output">{work.taskDescription}</p>
					</div>
				</div>
			))}
			<hr />
			<h2>Projects</h2>
			{props.projects.map((project, index) => (
				<div key={index} className="project-info-section">
					<h3 className="project-name-output">{project.projectName}</h3>
					<p className="project-description-output">
						{project.projectDescription}
					</p>
					<p className="project-technologies-output">
						<strong>Technologies:</strong> {project.projectTechnologies}
					</p>
				</div>
			))}
			<hr />
			<h2>Skills</h2>
			<div className="skills-section">
				{props.skills.map((skill, index) => (
					<span key={index} className="skill-output">
						{skill}
					</span>
				))}
			</div>
		</div>
	);
});

export default Letter;
