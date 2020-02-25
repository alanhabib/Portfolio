import React, {Component} from 'react';
import styles from "./card.scss";
import PropTypes from 'prop-types';
import classNames from "classnames";

class Card extends Component {
	state = {
		toggleCard: false
	};

	toggle = (show) => {
		this.setState({
			toggleCard: show
		})
	};

	render() {
		return (
			<div className={styles.wrap}
				 onClick={() => {
					 this.toggle(true);
					 console.log("##toggle");
				 }}>
				{/*<h1>Hover card</h1>*/}
				<div className={styles.task}>
					<div className="abstract">
						<h3>Abstract</h3>
						<p>This is what you see by default.</p>
					</div>
					{this.state.toggleCard ? (
						<div className={styles.details}>
							<div className={styles.details__inner}>
								<h3>Details</h3>
								<p>This additional content gets revealed on hover.</p>
							</div>
						</div>
					) : null}
				</div>
			</div>
		);
	}
}

Card.propTypes = {};

export default Card;
