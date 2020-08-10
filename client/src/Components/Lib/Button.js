import React from "react";
import {withStyles, makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import {blueGrey} from "@material-ui/core/colors";

const ColorButton = withStyles(theme => ({
	root: {
		color: theme.palette.getContrastText(blueGrey[500]),
		backgroundColor: blueGrey[500],
		"&:hover": {
			backgroundColor: blueGrey[700]
		}
	}
}))(Button);

const useStyles = makeStyles(theme => ({
	margin: {
		margin: theme.spacing(1)
	}
}));

export default function CustomizedButtons({buttonText}) {
	const classes = useStyles();

	return (
		<ColorButton
			fullWidth={true}
			variant="contained"
			color="primary"
			className={classes.margin}
		>
			{buttonText}
		</ColorButton>
	);
}
