import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { MUDA_COR_AZUL, MUDA_COR_VERDE } from "./redux/layout/actionTypes";
import "./App.css";

const App = (props) => {
    const cor = useSelector((state) => state.reducerLayout.cor);
    const funcDispatch = useDispatch();

    // const [corRosa, setCorRosa] = useState("");
    // const [corVerde, setCorVerde] = useState("");

    return (
        <div className={`app ${cor}`}>
            <button
                className="botao"
                onClick={() => {
                    funcDispatch({ type: "MUDA_COR_ROSA", payload: "rosa" });
                }}
            >
                Rosa por 1 segundo
            </button>
            <button
                className="botao"
                onClick={() => {
                    funcDispatch({ type: MUDA_COR_AZUL, payload: "" });
                }}
            >
                RESET (azul)
                {/* Para passar os estados para Redux-Saga, eu tava olhando o vídeo do techsith de 17:46 minutos.
                Acho que esse é o melhor em termos de explicação */}
            </button>
            <button
                className="botao"
                onClick={() => {
                    funcDispatch({ type: MUDA_COR_VERDE, payload: "verde" });
                }}
            >
                Verde por 0.5s
            </button>
        </div>
    );
};

export default App;
