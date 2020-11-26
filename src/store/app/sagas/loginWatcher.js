import { takeEvery, put, call } from "redux-saga/effects";
import { USER_LOGIN_REQUEST } from "../types";
import { requestSuccess, requestFailure } from "../actions";

export function* loginWatcher() {
	yield takeEvery(USER_LOGIN_REQUEST, loginWorker);
}

function* loginWorker({ email }) {
	try {
		const payload = yield call(fetchUser, email);
		yield put(requestSuccess(payload.results[0]));
	} catch (e) {
		yield put(requestFailure(e));
	}
}

const fetchUser = (user) => {
	return fetch(
		`https://randomuser.me/api/1.3?seed=${user}&results=1`
	).then((response) => response.json());
};
