import { combineReducers } from "redux";
import { reducerLayout } from "./layout/reducer";
import { reducerContador } from "./contador/reducer";

const rootReducer = combineReducers({ reducerLayout, reducerContador });

export default rootReducer;
