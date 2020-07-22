import React from 'react';
import "./styles.scss"

function Index(props) {
	return (
		<header className={"header"}>
			<nav className={"headerMenu"}>
				<a href={"#"}>Home</a>
				<a href={"#"}>About</a>
				<a href={"#"}>Contact</a>
			</nav>
			<div>
				Social media links
			</div>
		</header>
	);
}

export default Index;
