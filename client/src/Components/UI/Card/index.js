import React from 'react';
import "./styles.scss";

function Card(props) {
	return (
		<div className={"card"} {...props}>
			{props.children}
		</div>
	);
}

export default Card;
