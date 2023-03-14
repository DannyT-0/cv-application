import React from "react";

export default function Main() {
	const [formInfo, setFormInfo] = React.useState({
		name: "",
		email: "",
		phoneNumber: "",
		collegeName: "",
		degree: "",
		schoolStart: "",
		schoolEnd: "",
		companyName: "",
		positionTitle: "",
		taskDescription: "",
		workStart: "",
		workEnd: "",
	});

	console.log(formInfo);

	function handleChange(event) {
		const { name, value } = event.target;
		setFormInfo((prevState) => {
			return {
				...prevState,
				[name]: value,
			};
		});
	}

	return (
		<form className="main-container flex-child">
			<fieldset className="basic-info">
				<legend>Basic Information</legend>
				<input
					type="text"
					name="name"
					id="name"
					placeholder="Full Name"
					value={formInfo.name}
					onChange={handleChange}
				/>

				<input
					type="email"
					name="email"
					id="email"
					placeholder="Email"
					value={formInfo.email}
					onChange={handleChange}
				/>

				<input
					type="text"
					name="phoneNumber"
					id="phone"
					placeholder="Phone Number"
					value={formInfo.phoneNumber}
					onChange={handleChange}
				/>
				<button>Submit</button>
			</fieldset>

			<fieldset className="education-info">
				<legend>Education Information</legend>
				<input
					type="text"
					name="collegeName"
					id="collegeName"
					placeholder="College Name"
					value={formInfo.collegeName}
					onChange={handleChange}
				/>

				<input
					type="text"
					name="degree"
					id="degree"
					placeholder="Degree"
					value={formInfo.degree}
					onChange={handleChange}
				/>

				<input
					type="text"
					name="schoolStart"
					id="schoolStart"
					placeholder="Start Date"
					value={formInfo.schoolStart}
					onChange={handleChange}
				/>
				<input
					type="text"
					name="schoolEnd"
					id="schoolEnd"
					placeholder="End Date"
					value={formInfo.schoolEnd}
					onChange={handleChange}
				/>

				<button>Submit</button>
			</fieldset>

			<fieldset className="work-experience">
				<legend>Work Experience</legend>
				<input
					type="text"
					name="companyName"
					id="companyName"
					placeholder="Company Name"
					value={formInfo.companyName}
					onChange={handleChange}
				/>
				<input
					type="text"
					name="positionTitle"
					id="positionTitle"
					placeholder="Position Title"
					value={formInfo.positionTitle}
					onChange={handleChange}
				/>
				<textarea
					name="taskDescription"
					id="taskDescription"
					placeholder="Tasks"
					value={formInfo.taskDescription}
					onChange={handleChange}
				/>
				<input
					type="text"
					name="workStart"
					id="workStart"
					placeholder="Start Date"
					value={formInfo.workStart}
					onChange={handleChange}
				/>
				<input
					type="text"
					name="workEnd"
					id="workEnd"
					placeholder="End Date"
					value={formInfo.workEnd}
					onChange={handleChange}
				/>

				<button>Submit</button>
			</fieldset>
		</form>
	);
}
