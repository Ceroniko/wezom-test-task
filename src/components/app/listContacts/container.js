import { compose } from "redux";
import { connect } from "react-redux";
import { View } from "./view";
import { updateListState } from "../../../store/app/actions/index";

const mapStateToProps = (state) => {
	return {
		dataSource: state.contacts.contact.results,
		fetching: state.contacts.fetching,
		current: state.contactState.currentList,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		dispatchPage: (value) => dispatch(updateListState(value)),
	};
};

const ListContacts = compose(connect(mapStateToProps, mapDispatchToProps))(
	View
);

export { ListContacts };
