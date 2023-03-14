import React from "react";

export default function Letter(props) {
	return (
		<div className="letter-container flex-child">
			<div className="basic-info-section">
				<h1>{props.name}</h1>
				<p>{props.email}</p>
				<p>{props.phoneNumber}</p>
			</div>
			<div className="education-info-section">
				<h3>{props.collegeName}</h3>
				<p>{props.degree}</p>
				<p>{props.schoolStart}</p>
				<p>{props.schoolEnd}</p>
			</div>
			<div className="work-info-section">
				<h3>{props.companyName}</h3>
				<p>{props.positionTitle}</p>
				<p>{props.taskDescription}</p>
				<p>{props.workStart}</p>
				<p>{props.workEnd}</p>
			</div>
		</div>
	);
}
