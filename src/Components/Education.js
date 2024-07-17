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
					value={props.currentEducation.collegeName}
				/>
				<input
					type="text"
					name="degree"
					id="degree"
					placeholder="Degree"
					onChange={props.onChange}
					value={props.currentEducation.degree}
				/>
				<input
					type="text"
					name="schoolStart"
					id="schoolStart"
					placeholder="Start Date"
					onChange={props.onChange}
					value={props.currentEducation.schoolStart}
				/>
				<input
					type="text"
					name="schoolEnd"
					id="schoolEnd"
					placeholder="End Date"
					onChange={props.onChange}
					value={props.currentEducation.schoolEnd}
				/>
				<div className="button-group">
					<button onClick={props.handleAdd}>Add</button>
					<button
						onClick={props.handleDelete}
						disabled={props.educationInfo.length === 0}
					>
						Delete Last Entry
					</button>
				</div>
			</fieldset>
		</form>
	);
}
