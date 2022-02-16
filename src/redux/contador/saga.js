import { put, delay, takeLatest } from "redux-saga/effects";

import { DECREMENTA, INCREMENTA } from "./actionTypes";

function* funcIncrementa() {
    yield put({ type: "INCREMENTA_SAGA" });
}

function* funcDecrementa() {
    yield delay(1000);
    yield put({ type: "DECREMENTA_SAGA" });
}

export function* contadorSagas() {
    yield takeLatest(DECREMENTA, funcDecrementa);
    yield takeLatest(INCREMENTA, funcIncrementa);
}
