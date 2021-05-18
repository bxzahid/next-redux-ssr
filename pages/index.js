import { useSelector } from "react-redux";
import { wrapper } from "../store";
import { fetchedPosts } from "../store/posts";

const HomePage = () => {
	const posts = useSelector(({ posts }) => posts.posts);

	return (
		<div>
			<pre>{JSON.stringify(posts, undefined, 4)}</pre>
		</div>
	);
};

export default HomePage

export const getServerSideProps = wrapper.getServerSideProps(
	async ({ store }) => {
		await store.dispatch(fetchedPosts());
	}
);
