import { compose } from "redux";
import { connect } from "react-redux";
import { View } from "./view";
import { logout } from "../../../store/app/actions/index";

const mapStateToProps = (state) => {
	return {
		userName: state.authentication.user.name,
		fetching: state.authentication.fetching,
		avatar: state.authentication.user.picture,
		error: state.authentication.error,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		dispatchLogout: () => {
			dispatch(logout());
		},
	};
};

const UserMenu = compose(connect(mapStateToProps, mapDispatchToProps))(View);

export { UserMenu };
