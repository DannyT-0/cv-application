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
					/>

					<input
						type="email"
						name="email"
						id="email"
						placeholder="Email"
						onChange={props.onChange}
					/>

					<input
						type="text"
						name="phoneNumber"
						id="phone"
						placeholder="Phone Number"
						onChange={props.onChange}
					/>
					{/* <button>Submit</button> */}
				</fieldset>
			</form>
		</div>
	);
}
