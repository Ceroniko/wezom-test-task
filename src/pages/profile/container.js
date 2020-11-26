import { compose } from "redux";
import { connect } from "react-redux";
import { View } from "./view";

const mapStateToProps = (state) => {
	return {
		user: state.authentication.user,
		fetching: state.authentication.fetching,
		error: state.authentication.error,
	};
};

const mapDispatchToProps = null;

const PageProfile = compose(connect(mapStateToProps, mapDispatchToProps))(View);

export { PageProfile };
