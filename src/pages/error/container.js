import { compose } from "redux";
import { connect } from "react-redux";
import { View } from "./view";

const mapStateToProps = (state) => {
	return {
		user: state.contacts.contact.results,
		fetching: state.contacts.fetching,
	};
};

const mapDispatchToProps = null;

const PageError = compose(
	connect(mapStateToProps, mapDispatchToProps)
)(View);

export { PageError };
