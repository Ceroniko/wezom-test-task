import { compose } from "redux";
import { connect } from "react-redux";
import { View } from "./view";
import { updateTableState } from "../../../store/app/actions/index";

const mapStateToProps = (state) => {
	return {
		dataSource: state.contacts.contact.results,
		fetching: state.contacts.fetching,
		current: state.contactState.currentTable,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		dispatchPage: (value) => dispatch(updateTableState(value)),
	};
};

const TableContacts = compose(connect(mapStateToProps, mapDispatchToProps))(
	View
);

export { TableContacts };
