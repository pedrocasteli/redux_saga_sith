import { DECREMENTA, INCREMENTA } from "./actionTypes";

const stateInicial = { contador: 0 };

export const reducerContador = (state = stateInicial, action) => {
    switch (action.type) {
        case "DECREMENTA_SAGA":
            return { ...state, contador: state.contador - 1 };
        case "INCREMENTA_SAGA":
            return { ...state, contador: state.contador + 1 };
        default:
            return state;
    }
};
