import React from 'react';
import Header from "../Components/Header";
import Form from "../Components/Form";

function Hire() {
	return (
		<Header
			title={"Hire me because?"}
			rightContent={<Form/>}
			leftColumnTitle={"Get in touch!"}
			lefttColumnText={
				"If you are impressed with the content on this page and" +
				" my projects then feel free to contact me!"
			}
		/>
	);
}

export default Hire;
