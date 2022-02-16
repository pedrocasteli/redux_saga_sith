import { all, fork } from "redux-saga/effects";
import { layoutSagas } from "./layout/saga";
import { contadorSagas } from "./contador/saga";

export default function* rootSaga() {
    yield all([fork(layoutSagas), fork(contadorSagas)]);
}
