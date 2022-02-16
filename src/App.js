import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { MUDA_COR } from "./redux/layout/actionTypes";
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
                    funcDispatch({ type: "MUDA_COR", payload: "rosa" });
                }}
            >
                Rosa somente no último clique
            </button>
            <button
                className="botao"
                onClick={() => {
                    funcDispatch({ type: MUDA_COR, payload: "" });
                }}
            >
                RESET (azul)
                {/* Para passar os estados para Redux-Saga, eu tava olhando o vídeo do techsith de 17:46 minutos.
                Acho que esse é o melhor em termos de explicação */}
            </button>
            <button
                className="botao"
                onClick={() => {
                    funcDispatch({ type: MUDA_COR, payload: "verde" });
                }}
            >
                Verde em cada clique (3s)
            </button>
        </div>
    );
};

export default App;
