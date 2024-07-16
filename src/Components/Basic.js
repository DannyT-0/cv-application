import React from "react";

export default function Basic(props) {
	return (
		<div>
			<form>
				<fieldset className="basic-info">
					<legend>Basic Information</legend>
					<input
						type="text"
						name="name"
						id="name"
						placeholder="Full Name"
						onChange={props.onChange}
						value={props.name}
					/>
					<input
						type="email"
						name="email"
						id="email"
						placeholder="Email"
						onChange={props.onChange}
						value={props.email}
					/>
					<input
						type="text"
						name="phoneNumber"
						id="phone"
						placeholder="Phone Number"
						onChange={props.onChange}
						value={props.phoneNumber}
					/>
					<input
						type="url"
						name="website"
						id="website"
						placeholder="Personal Website"
						onChange={props.onChange}
						value={props.website}
					/>
				</fieldset>
			</form>
		</div>
	);
}
