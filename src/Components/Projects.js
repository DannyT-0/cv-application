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
					value={props.currentProject.projectName || ""}
				/>
				<textarea
					name="projectDescription"
					id="projectDescription"
					placeholder="Project Description"
					onChange={props.onChange}
					value={props.currentProject.projectDescription || ""}
				/>
				<input
					type="text"
					name="projectTechnologies"
					id="projectTechnologies"
					placeholder="Technologies Used"
					onChange={props.onChange}
					value={props.currentProject.projectTechnologies || ""}
				/>
				<div className="button-group">
					<button onClick={props.handleAdd}>Add</button>
					<button
						onClick={props.handleDelete}
						disabled={!props.projects || props.projects.length === 0}
					>
						Delete Last Entry
					</button>
				</div>
			</fieldset>
			{props.projects &&
				props.projects.map((project, index) => (
					<div key={index}>
						<p>{project.projectName}</p>
					</div>
				))}
		</form>
	);
}
