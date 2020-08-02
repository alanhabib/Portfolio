import React from 'react';
import {Card} from "antd";

function Project({location, match}) {
	console.log("match", match);
	console.log("location", location);

	return (
		<div>
			<Card
				hoverable={true}
				title={location.project.title}
			>
				<p>{location.project.text}</p>
			</Card>
		</div>
	);
}

export default Project;
