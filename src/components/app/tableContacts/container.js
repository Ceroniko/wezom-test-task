import { compose } from "redux";
import { connect } from "react-redux";
import { View } from "./view";
import { updateTableState } from "../../../store/app/actions/index";

const mapStateToProps = (state) => {
	return {
		dataSource: state.contacts.contact.results,
		fetching: state.contacts.fetching,
		current: state.contactState.currentTable,
		pageSize: state.contactState.pageSizeTable,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		dispatchPage: (current, size) =>
			dispatch(updateTableState(current, size)),
	};
};

const TableContacts = compose(connect(mapStateToProps, mapDispatchToProps))(
	View
);

export { TableContacts };
