import { HYDRATE } from "next-redux-wrapper";

// Actions
const SET_POSTS = "SET_POSTS";

// Reducer
const reducer = (state = {}, { type, payload }) => {
	switch (type) {
		case HYDRATE:
			return { ...state, ...payload };
		case SET_POSTS: {
			return payload;
		}
		default:
			return state;
	}
};

export default reducer;

// Action Creators
export const fetchedPosts = () => async (dispatch) => {
	try {
		const res = await fetch("https://jsonplaceholder.typicode.com/todos");
		const posts = await res.json();
		dispatch({
			type: SET_POSTS,
			payload: posts,
		});
	} catch (e) {
		console.log(e);
	}
};
