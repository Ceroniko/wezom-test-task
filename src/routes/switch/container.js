import { compose } from "redux";
import { connect } from "react-redux";
import { View } from "./view";

const mapStateToProps = (state) => {
	return {
		logined: state.authentication.logined,
	};
};

const mapDispatchToProps = null;

const Switch = compose(connect(mapStateToProps, mapDispatchToProps))(View);

export { Switch };
