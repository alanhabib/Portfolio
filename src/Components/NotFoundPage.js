import React from "react";
import {Link} from "react-router-dom";

const NotFoundPage = () => {
	return (
		<div>
			Not found page. 404! - <Link to={"/"}>Go home</Link>
		</div>
	)
};

export default NotFoundPage;
