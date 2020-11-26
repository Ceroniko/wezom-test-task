import {
	USER_CONTACTS_REQUEST,
	USER_CONTACTS_SUCCESS,
	USER_CONTACTS_FAILURE,
	USER_CONTACTS_UPDATE,
} from "../types";

const initialState = {
	error: "",
	contact: {
		results: [],
	},
	fetching: false,
};

export function contacts(state = initialState, action) {
	switch (action.type) {
		case USER_CONTACTS_REQUEST:
			return {
				...state,
				fetching: true,
			};
		case USER_CONTACTS_SUCCESS:
			return {
				...state,
				contact: action.payload,
				fetching: false,
			};
		case USER_CONTACTS_FAILURE:
			return {
				...state,
				fetching: false,
				error: action.error,
			};
		case USER_CONTACTS_UPDATE:
			return {
				...state,
				fetching: true,
			};
		default:
			return state;
	}
}
