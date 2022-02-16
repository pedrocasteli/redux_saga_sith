import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import Contador from "./components/Contador";
import store from "./redux/store";
import "./index.css";

ReactDOM.render(
    <StrictMode>
        <Provider store={store}>
            <App />
            <Contador />
        </Provider>
    </StrictMode>,
    document.getElementById("root")
);
