import React from "react";

export default function Work(props) {
	return (
		<form>
			<fieldset className="work-experience">
				<legend>Work Experience</legend>
				<input
					type="text"
					name="companyName"
					id="companyName"
					placeholder="Company Name"
					onChange={props.onChange}
				/>
				<input
					type="text"
					name="positionTitle"
					id="positionTitle"
					placeholder="Title of Position"
					onChange={props.onChange}
				/>
				<textarea
					name="taskDescription"
					id="taskDescription"
					placeholder="Tasks"
					onChange={props.onChange}
				/>
				<input
					type="text"
					name="workStart"
					id="workStart"
					placeholder="Start Date"
					onChange={props.onChange}
				/>
				<input
					type="text"
					name="workEnd"
					id="workEnd"
					placeholder="End Date"
					onChange={props.onChange}
				/>

				{/* <button>Submit</button> */}
			</fieldset>
		</form>
	);
}
