import { put, delay, takeLatest } from "redux-saga/effects";

import { MUDA_COR_ROSA, MUDA_COR_VERDE, MUDA_COR_AZUL } from "./actionTypes";

function* mudaCorRosa() {
    yield put({ type: "MUDA_COR_ROSA_SAGA", payload: "rosa" });
    yield delay(1000);
    yield put({ type: MUDA_COR_AZUL, payload: "azul" });
}

function* mudaCorVerde() {
    yield put({ type: "MUDA_COR_VERDE_SAGA", payload: "verde" });
    yield delay(500);
    yield put({ type: MUDA_COR_AZUL, payload: "azul" });
}

export function* layoutSagas() {
    yield takeLatest(MUDA_COR_ROSA, mudaCorRosa);
    yield takeLatest(MUDA_COR_VERDE, mudaCorVerde);
}
