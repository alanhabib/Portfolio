import React from "react";

const EditExpensePage = (props) => {
	return (
		<div>
			Edit expense with the id of {props.match.params.id}
		</div>
	)
};

export default EditExpensePage;