import {
	USER_LOGIN_REQUEST,
	USER_LOGIN_SUCCESS,
	USER_LOGIN_FAILURE,
	USER_LOGOUT,
} from "../types";

const initialState = {
	error: "",
	user: "",
	fetching: false,
	logined: !!localStorage.getItem("auth"),
};

export function authentication(state = initialState, action) {
	switch (action.type) {
		case USER_LOGIN_REQUEST:
			return {
				...state,
				fetching: true,
				error: "",
			};
		case USER_LOGIN_SUCCESS:
			return {
				...state,
				user: action.payload,
				fetching: false,
				logined: true,
				error: "",
			};
		case USER_LOGIN_FAILURE:
			return {
				...state,
				fetching: false,
				error: action.error,
			};
		case USER_LOGOUT:
			return {
				...state,
				email: "",
				logined: false,
				error: "",
			};
		default:
			return state;
	}
}
