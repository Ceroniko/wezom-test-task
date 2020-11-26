import {
	UPDATE_FORM_STATE,
	UPDATE_TABLE_STATE,
	DELETE_PAGE_STATE,
	UPDATE_LIST_STATE,
} from "../types";

const initialState = {
	fullname: "",
	gender: undefined,
	nat: undefined,
	creator: false,
	currentTable: 1,
	currentList: 1,
};

export function contactState(state = initialState, action) {
	switch (action.type) {
		case UPDATE_FORM_STATE:
			return {
				...state,
				fullname: action.fullname,
				gender: action.gender,
				nat: action.nat,
				creator: action.creator,
			};
		case UPDATE_TABLE_STATE:
			return {
				...state,
				currentTable: action.current,
			};
		case UPDATE_LIST_STATE:
			return {
				...state,
				currentList: action.current,
			};
		case DELETE_PAGE_STATE:
			return {
				...state,
				fullname: "",
				gender: undefined,
				nat: undefined,
				creator: false,
				currentTable: 1,
				currentList: 1,
			};
		default:
			return state;
	}
}
