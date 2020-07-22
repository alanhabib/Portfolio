import React, {Fragment} from "react";
import oldCar from "../../../build/images/memories-from.jpg"

const Index = () => {
	return (
		<Fragment>
			<section className="about-me" id="about">
				<h2 className="section__title section__title--about">About me</h2>
				<p className="section__subtitle section__subtitle--about">Frontend developer based in Stockholm</p>

				<div className="about-me__body">
					<p>I am a self-learned software and web engineer dedicated to learn all about JavaScript for
						client-server architectures. After finishing my Bachelor's Degree in Finance, from Stockholm
						University, I worked as a financial adviser for a while until I felt the urge of changing lanes
						into programming. I ended up taking a Accelerated Learning Program that lasted for 3 months and
						continued studying programming for another 6 months until I landed my first Frontend developer
						position at a tech compnay in Stockholm.
					</p>
					<p>Today I work as a Frontend developer aspiring to become a fullstack developer in the near future.
						My aspirations means a lot of work in my spare time with the JavaScript language.
					</p>
					<h3>Future plan's - in correct order</h3>
					<ul>
						<li>Become a fullstack developer</li>
						<li>Become a senior developer</li>
						<li>Teach what I know</li>
						<li>Hold a platform for mentoring aspiring developer's</li>
					</ul>
				</div>
				<img src={oldCar} alt="Jane leaning against a bus" className="about-me__img"/>
			</section>
			<section className="my-services" id="services">
				<h2 className="section__title section__title--services">What I do</h2>
				<div className="services">
					<div className="service">
						<h3>Fronten Development</h3>
						<p>I create responsive websites that allow the user to experience your website in the best and
							most appropriate way suited to the device they are using. By working using progressive
							enhancement, your website is delivered with a responsive layout that can best make use of
							the space available on the smallest to largest devices.
						</p>
					</div>

					<div className="service">
						<h3>Application development</h3>
						<p>Apart from creating websites I also create applications using React Native. React Native
							combines the best parts of native development with React, a best-in-class JavaScript library
							for building user interfaces.
						</p>
					</div>
				</div>

				<a href="#" className="btn">My Work</a>
			</section>
		</Fragment>
	);
};

export default Index;

