import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import oldCar from "../../build/images/old_car.jpg"
import oldBus from "../../build/images/old_bus.jpg"
class Project extends Component {
	render() {
		return (
			<Fragment>
				<section className="intro">
					<h1 className="section__title section__title--intro">
						The title <strong>of my project</strong>
					</h1>
					<p className="section__subtitle section__subtitle--intro">A short subtitle</p>
					<img src={oldCar} alt="" className="intro__img"/>
				</section>

				<div className="portfolio-item-individual">
					<p>Voluptatibus, soluta blanditiis! Incidunt ea unde itaque illo molestiae eligendi sint culpa nobis
						voluptas sapiente voluptate, magnam ipsum eius earum?</p>
					<img src={oldBus} alt=""/>
					<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe et amet tenetur! Fugit sequi
						optio corrupti fugiat ducimus consequatur incidunt?</p>
					<p>Voluptatibus, soluta blanditiis! Incidunt ea unde itaque illo molestiae eligendi sint culpa
						nobis voluptas sapiente voluptate, magnam ipsum eius earum?</p>
				</div>
			</Fragment>
		);
	}
}

Project.propTypes = {};

export default Project;