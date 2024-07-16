import React from "react";

export default function Skills(props) {
	return (
		<form>
			<fieldset className="skills">
				<legend>Skills</legend>
				<input
					type="text"
					name="skill"
					id="skill"
					placeholder="Enter a skill"
					onChange={props.onChange}
					value={props.currentSkill}
				/>
				<button onClick={props.handleAdd}>Add Skill</button>
			</fieldset>
		</form>
	);
}
