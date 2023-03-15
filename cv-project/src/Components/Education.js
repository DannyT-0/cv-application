import React from "react";

export default function Education(props) {
	return (
		<form>
			<fieldset className="education-info">
				<legend>Education Information</legend>
				<input
					type="text"
					name="collegeName"
					id="collegeName"
					placeholder="College Name"
					onChange={props.onChange}
				/>

				<input
					type="text"
					name="degree"
					id="degree"
					placeholder="Degree"
					onChange={props.onChange}
				/>

				<input
					type="text"
					name="schoolStart"
					id="schoolStart"
					placeholder="Start Date"
					onChange={props.onChange}
				/>
				<input
					type="text"
					name="schoolEnd"
					id="schoolEnd"
					placeholder="End Date"
					onChange={props.onChange}
				/>

				{/* <button>Submit</button> */}
			</fieldset>
		</form>
	);
}
