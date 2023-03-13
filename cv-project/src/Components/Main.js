import React from "react";

export default function Main() {
	return (
		<form className="mainContainer">
			<fieldset className="basic-info">
				<legend>Basic Information</legend>
				<input type="text" name="name" id="name" placeholder="Full Name" />

				<input type="email" name="email" id="email" placeholder="Email" />

				<input type="text" name="phone" id="phone" placeholder="Phone Number" />
			</fieldset>

			<fieldset className="education-info">
				<legend>Education Information</legend>
				<input
					type="text"
					name="collegeName"
					id="collegeName"
					placeholder="College Name"
				/>

				<input type="text" name="degree" id="degree" placeholder="Degree" />

				<label>Start Date</label>
				<input type="date" name="startDate" id="startDate" />
				<label>End Date</label>
				<input type="date" name="endDate" id="endDate" />
			</fieldset>

			<fieldset className="work-experience">
				<legend>Work Experience</legend>
				<input
					type="text"
					name="companyName"
					id="companyName"
					placeholder="Company Name"
				/>
				<input
					type="text"
					name="positionTitle"
					id="positionTitle"
					placeholder="Position Title"
				/>
				<textarea
					name="taskDescription"
					id="taskDescription"
					placeholder="Tasks"
				/>
				<label>Start Date</label>
				<input type="date" name="startDateWork" id="startDateWork" />
				<label>End Date</label>
				<input type="date" name="endDateWork" id="endDateWork" />
			</fieldset>
		</form>
	);
}
