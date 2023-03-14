import React from "react";

export default function Letter(props) {
	return (
		<div className="letter-container flex-child">
			<h1>{props.value}</h1>
		</div>
	);
}
