import { createWrapper } from "next-redux-wrapper";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import posts from "./posts";

const middleware =
	process.env.NODE_ENV === "development"
		? composeWithDevTools(applyMiddleware(...[thunk]))
		: applyMiddleware(...[thunk]);

const makeStore = () =>
	createStore(
		combineReducers({
			posts,
		}),
		middleware
	);

export const wrapper = createWrapper(makeStore, { debug: true });
