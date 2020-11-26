import {
	USER_CONTACTS_REQUEST,
	USER_CONTACTS_SUCCESS,
	USER_CONTACTS_FAILURE,
	USER_CONTACTS_UPDATE,
} from "../types";

export function requestContacts(size) {
	return { type: USER_CONTACTS_REQUEST, size };
}

export function requestContactsSuccess(payload) {
	return { type: USER_CONTACTS_SUCCESS, payload };
}

export function requestContactsFailure(error) {
	return { type: USER_CONTACTS_FAILURE, error };
}

export function updateContacts(seed, size) {
	return { type: USER_CONTACTS_UPDATE, seed, size };
}
