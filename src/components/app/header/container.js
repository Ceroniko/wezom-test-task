import { compose } from "redux";
import { connect } from "react-redux";
import { View } from "./view";
import {
	request,
	requestContacts,
	logout,
} from "../../../store/app/actions/index";

const mapStateToProps = (state) => {
	return {
		logined: state.authentication.logined,
		name: state.authentication.user,
		contact: state.contacts.contact.results,
		error: state.authentication.error,
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
		dispatchLogout: () => {
			dispatch(logout());
		},
	};
};

const Header = compose(connect(mapStateToProps, mapDispatchToProps))(View);

export { Header };
