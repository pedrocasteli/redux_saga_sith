import { DECREMENTA, INCREMENTA } from "./actionTypes";

const stateInicial = { contador: 0 };

export const reducerContador = (state = stateInicial, action) => {
    switch (action.type) {
        case DECREMENTA:
            return { ...state, contador: action.payload - 1 };
        case INCREMENTA:
            return { ...state, contador: action.payload + 1 };
        default:
            return state;
    }
};
