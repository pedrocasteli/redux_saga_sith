import { MUDA_COR_AZUL, MUDA_COR_VERDE } from "./actionTypes";

const stateInicial = { cor: "" };

export const reducerLayout = (state = stateInicial, action) => {
    switch (action.type) {
        case MUDA_COR_AZUL:
        case MUDA_COR_VERDE:
            return { ...state, cor: action.payload };
        case "MUDA_COR_ROSA_SAGA":
            return { ...state, cor: action.payload };
        case "MUDA_COR_VERDE_SAGA":
            return { ...state, cor: action.payload };
        default:
            return state;
    }
};
