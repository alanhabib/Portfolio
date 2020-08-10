import React from 'react';
import Header from "../Components/Header";
import Form from "../Components/Form";

function Hire() {
	return (
		<Header
			title={"Contact me!"}
			rightContent={<Form/>}
			leftColumnTitle={"Get in touch!"}
			lefttColumnText={
				"If you like what you see or want to give feedback feel free to contact me!"
			}
		/>
	);
}

export default Hire;
