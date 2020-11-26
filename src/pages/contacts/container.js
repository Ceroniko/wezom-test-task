import { compose } from "redux";
import { connect } from "react-redux";
import { View } from "./view";
import { updateContacts } from "store/app/actions";

const mapStateToProps = (state) => {
	return {
		seed: state.contacts.contact,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		updateContacts: (seed, size) => {
			dispatch(updateContacts(seed, size));
		},
	};
};

const PageContacts = compose(connect(mapStateToProps, mapDispatchToProps))(
	View
);

export { PageContacts };
