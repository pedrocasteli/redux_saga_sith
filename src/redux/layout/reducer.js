import { MUDA_COR } from "./actionTypes";

const stateInicial = { cor: "" };

export const reducerLayout = (state = stateInicial, action) => {
    switch (action.type) {
        case MUDA_COR:
            return { ...state, cor: action.payload };
        default:
            return state;
    }
};
