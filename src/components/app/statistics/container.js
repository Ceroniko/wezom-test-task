import { compose } from "redux";
import { connect } from "react-redux";
import { View } from "./view";

const mapStateToProps = (state) => {
	return { fetching: state.contacts.fetching };
};

const mapDispatchToProps = null;

const Statistics = compose(connect(mapStateToProps, mapDispatchToProps))(View);

export { Statistics };
