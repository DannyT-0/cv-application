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
					value={props.currentWork.companyName || ""}
				/>
				<input
					type="text"
					name="positionTitle"
					id="positionTitle"
					placeholder="Title of Position"
					onChange={props.onChange}
					value={props.currentWork.positionTitle || ""}
				/>
				<textarea
					name="taskDescription"
					id="taskDescription"
					placeholder="Tasks"
					onChange={props.onChange}
					value={props.currentWork.taskDescription || ""}
				/>
				<input
					type="text"
					name="workStart"
					id="workStart"
					placeholder="Start Date"
					onChange={props.onChange}
					value={props.currentWork.workStart || ""}
				/>
				<input
					type="text"
					name="workEnd"
					id="workEnd"
					placeholder="End Date"
					onChange={props.onChange}
					value={props.currentWork.workEnd || ""}
				/>
				<div className="button-group">
					<button onClick={props.handleAdd}>Add</button>
					<button
						onClick={props.handleDelete}
						disabled={!props.workInfo || props.workInfo.length === 0}
					>
						Delete Last Entry
					</button>
				</div>
			</fieldset>
			{props.workInfo &&
				props.workInfo.map((work, index) => (
					<div key={index}>
						<p>
							{work.companyName} - {work.positionTitle}
						</p>
					</div>
				))}
		</form>
	);
}
