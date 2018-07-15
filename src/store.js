import { createStore } from "redux";
import manageTodo from "./reducers/manageTodo";

let store = createStore(
	manageTodo,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
