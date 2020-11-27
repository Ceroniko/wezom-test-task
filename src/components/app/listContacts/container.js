import { compose } from "redux";
import { connect } from "react-redux";
import { View } from "./view";
import { updateListState } from "../../../store/app/actions/index";

const mapStateToProps = (state) => {
	return {
		dataSource: state.contacts.contact.results,
		fetching: state.contacts.fetching,
		current: state.contactState.currentList,
		pageSize: state.contactState.pageSizeList,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		dispatchPage: (current, size) =>
			dispatch(updateListState(current, size)),
	};
};

const ListContacts = compose(connect(mapStateToProps, mapDispatchToProps))(
	View
);

export { ListContacts };
