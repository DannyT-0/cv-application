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
					value={props.currentSkill || ""}
				/>
				<div className="button-group">
					<button onClick={props.handleAdd}>Add Skill</button>
					<button
						onClick={props.handleDelete}
						disabled={!props.skills || props.skills.length === 0}
					>
						Delete Last Skill
					</button>
				</div>
			</fieldset>
			{props.skills &&
				props.skills.map((skill, index) => (
					<div key={index}>
						<span>{skill}</span>
					</div>
				))}
		</form>
	);
}
