import { compose } from "redux";
import { connect } from "react-redux";
import { View } from "./view";
import { request, requestContacts } from "../../../store/app/actions/index";

const mapStateToProps = (state) => {
	return {
		email: state.form.login,
		fetching: state.authentication.fetching,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		dispatchLogin: (email) => {
			dispatch(request(email));
		},
		dispatchContacts: (size) => {
			dispatch(requestContacts(size));
		},
	};
};

const ModalForm = compose(connect(mapStateToProps, mapDispatchToProps))(View);

export { ModalForm };
