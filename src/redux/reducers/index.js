import { combineReducers } from "redux";
import { productReducer } from "./productreducer";
const reducer=combineReducers({
    all:productReducer
});
export default reducer