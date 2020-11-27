import {
	USER_LOGIN_REQUEST,
	USER_LOGIN_SUCCESS,
	USER_LOGIN_FAILURE,
	USER_LOGOUT,
} from "../types";

export function request(email) {
	return { type: USER_LOGIN_REQUEST, email };
}

export function requestSuccess(payload) {
	return { type: USER_LOGIN_SUCCESS, payload };
}

export function requestFailure(error) {
	return { type: USER_LOGIN_FAILURE, error };
}
export function logout() {
	return { type: USER_LOGOUT };
}
