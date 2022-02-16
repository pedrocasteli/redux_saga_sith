import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { DECREMENTA, INCREMENTA } from "../redux/contador/actionTypes";
import "./Contador.css";

const Contador = () => {
    const contador = useSelector((state) => state.reducerContador.contador);
    const funcDispatch = useDispatch();

    // const [contador, setContador] = useState(0);

    const decrementaHandler = () => {
        funcDispatch({ type: DECREMENTA, payload: contador });
    };

    const incrementaHandler = () => {
        funcDispatch({ type: INCREMENTA, payload: contador });
    };

    return (
        <div className="contador">
            <div className="titulo">{contador}</div>
            <div>
                <button className="botao" onClick={decrementaHandler}>
                    Diminui somente no último clique (3s)
                </button>
                <button className="botao" onClick={incrementaHandler}>
                    Aumenta somente no último clique
                </button>
            </div>
        </div>
    );
};

export default Contador;
