import React, {Component} from 'react';
import axios from "axios";
import "./styles.scss";

class PlayerForm extends Component {

	constructor(props) {
		super(props);
		this.title = React.createRef();
		this.text = React.createRef();
	}

	emptyform = () => {
		this.title.current.value = "";
		this.text.current.value = "";
	};

	submitBlogPost = (event) => {
		event && event.preventDefault();
		axios.post(`http://localhost:4000/blogger`, {
			title: this.title.current.value,
			text: this.text.current.value
		})
			.then(response => console.log("## SUCCESS", response))
			.catch(err => console.log("ERROR IN POST", err))
	};

	render() {
		return (
			<form
				onSubmit={() => {
					this.submitBlogPost();
					this.emptyform();
				}}
				// action={"/blogger"}
				action={"localhost:4000/blogger"}
				className={"blogFormContainer"}
				method={"post"}
			>
				<ul>
					<li>
						<label htmlFor="name">Title:</label>
						<input ref={this.title} type="text" id="title" name="title"/>
					</li>
					<li>
						<label htmlFor="msg">Message:</label>
						<textarea ref={this.text} id="text" name="text"></textarea>
					</li>
					<li className="button">
						<button name={"action"} type="submit">Send your message</button>
					</li>
				</ul>
			</form>
		);
	};
}

export default PlayerForm;
