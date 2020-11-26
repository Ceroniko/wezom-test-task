import {
	UPDATE_FORM_STATE,
	DELETE_PAGE_STATE,
	UPDATE_TABLE_STATE,
	UPDATE_LIST_STATE,
} from "../types";

export function updateFormState(fullname, gender, nat, creator) {
	return { type: UPDATE_FORM_STATE, fullname, gender, nat, creator };
}

export function updateTableState(current) {
	return { type: UPDATE_TABLE_STATE, current };
}

export function updateListState(current) {
	return { type: UPDATE_LIST_STATE, current };
}

export function deleteState() {
	return { type: DELETE_PAGE_STATE };
}
