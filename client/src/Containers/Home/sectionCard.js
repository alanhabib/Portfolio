import React from 'react';
import Card from "./card";
import {faCode} from "@fortawesome/free-solid-svg-icons";
import {faAndroid, faSketch} from "@fortawesome/free-brands-svg-icons";
import firstImage from "../../../images/m-blog-1.jpg";
import secondImage from "../../../images/m-blog-2.jpg";
import thirdImage from "../../../images/m-blog-3.jpg";

const cardText = "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of ";
const cardTitle = "Web development";

function SectionCard({text, title, secondText, button, buttonText, card, about, image, service, path}) {
	return (
		<section className={"section about"}>
			<div className={"sectionCenter"}>
				{about && <article>
					<img className={"portfolio_img"} src={image} alt={"mockImage of a woman"}/>
				</article>}
				<article className={"sectionContainer"}>
					<div className={"sectionTitle"}>
						<h2>{title}</h2>
					</div>
					{card && <Card
						image={image}
						picture={firstImage}
						text={cardText}
						title={cardTitle}
						service={service}
						icon={faCode}
					/>}
					{card && <Card
						image={image}
						picture={secondImage}
						text={cardText}
						title={cardTitle}
						service={service}
						icon={faAndroid}
					/>}
					{card && <Card
						icon={faSketch}
						image={image}
						picture={thirdImage}
						text={cardText}
						title={cardTitle}
						service={service}
					/>}
					{text && <span className={"sectionText"}>
						{text && text}
					</span>}
					{secondText && <span className={"sectionText"}>
						{secondText}
					</span>}
					{button && <a href={path} className={"linkButton"}>{buttonText}</a>}
				</article>
			</div>
		</section>
	);
}

export default SectionCard;
