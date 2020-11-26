import React from "react";
import ReactLogo from "assets/images/react-logo.svg";

const View = (props) => {
	return (
		<div className={"page page--home"}>
			<img className={"react-logo"} src={ReactLogo} alt="React Logo" />
		</div>
	);
};

export { View };
