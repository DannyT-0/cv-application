import React from "react";
import phoneIcon from "/Users/danny/Desktop/the_odin_project/react-section/cv-application/cv-project/src/phoneIcon.png";
import emailIcon from "/Users/danny/Desktop/the_odin_project/react-section/cv-application/cv-project/src/emailIcon.png";

export default function Letter(props) {
	return (
		<div className="letter-container flex-child">
			<div className="basic-info-section">
				<h1 className="name-output">{props.name}</h1>
				<div className="basic-info-section-two">
					<div className="email-section">
						<img src={emailIcon} alt="email icon" className="email-icon" />
						<p className="email-output">{props.email}</p>
					</div>

					<div className="phone-section">
						<img src={phoneIcon} alt="phone icon" className="phone-icon" />
						<p className="phone-output">{props.phoneNumber}</p>
					</div>
				</div>
			</div>
			<hr />
			<h2>Education</h2>
			{props.isShown && (
				<div className="education-info-section">
					<div className="left-side">
						<h3 className="college-output">{props.collegeName}</h3>

						<p className="degree-output">{props.degree}</p>
					</div>
					<div className="right-side">
						<p className="schoolStart-output">
							<strong>Start Date:</strong>
							{props.schoolStart}
						</p>
						<p className="schoolEnd-output">
							<strong>End Date:</strong>
							{props.schoolEnd}
						</p>
					</div>
				</div>
			)}
			<hr />
			<h2>Work Experience</h2>
			<div className="work-info-section">
				<div className="left-side">
					<h3 className="company-output">{props.companyName}</h3>
					<p className="position-output">{props.positionTitle}</p>
				</div>
				<div className="right-side">
					<p className="workStart-output">
						<strong>Start Date:</strong>
						{props.workStart}
					</p>
					<p className="workEnd-output">
						<strong>End Date:</strong>
						{props.workEnd}
					</p>
				</div>
			</div>
			<div className="textarea-section">
				<p className="tasks-output">{props.taskDescription}</p>
			</div>
		</div>
	);
}
