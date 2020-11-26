import { compose } from "redux";
import { connect } from "react-redux";
import { View } from "./view";
import { updateFormState, deleteState } from "../../../store/app/actions/index";

const mapStateToProps = (state) => {
	return {
		fullname: state.contactState.fullname,
		gender: state.contactState.gender,
		nat: state.contactState.nat,
		creator: state.contactState.creator,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		dispatchPage: (fullname, gender, nat, creator) =>
			dispatch(updateFormState(fullname, gender, nat, creator)),
		dispatchDeletePage: () => dispatch(deleteState()),
	};
};

const SearchForm = compose(connect(mapStateToProps, mapDispatchToProps))(View);

export { SearchForm };
