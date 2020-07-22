import React, {Fragment} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const style = {
	cursor: "pointer",
	width: 46,
	height: 46,
	margin: "0 auto 28px auto"
};

function Card({title, text, image, picture, service, icon}) {
	const styleAtag = {
		width: "100%",
		height: "100%",
		background: image && `url(${picture}) no-repeat center center`,
		backgroundSize: "cover"
	};

	return (
		<div className={"sectionCenter"}>
			<a className={"service portfolio__item"}
			   style={styleAtag}
			   href="#"
			>
				{service && (
					<Fragment>
						<FontAwesomeIcon
							onClick={() => {
								console.log("#### SCROLLBUTTON");
							}}
							style={style}
							size={"lg"}
							icon={icon}/>
						<h4>{title}</h4>
						<p className={"sectionText"}>{text}</p>
					</Fragment>
				)}
			</a>
		</div>
	);
}

export default Card;
