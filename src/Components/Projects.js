import React from "react";

export default function Projects(props) {
	return (
		<form>
			<fieldset className="projects">
				<legend>Projects</legend>
				<input
					type="text"
					name="projectName"
					id="projectName"
					placeholder="Project Name"
					onChange={props.onChange}
					value={props.projectName}
				/>
				<textarea
					name="projectDescription"
					id="projectDescription"
					placeholder="Project Description"
					onChange={props.onChange}
					value={props.projectDescription}
				/>
				<input
					type="text"
					name="projectTechnologies"
					id="projectTechnologies"
					placeholder="Technologies Used"
					onChange={props.onChange}
					value={props.projectTechnologies}
				/>
				<button onClick={props.handleAdd}>Add</button>
			</fieldset>
		</form>
	);
}
