import s from './MyPost.module.css';
import { Post } from './Post/Post.jsx';

export const MyPosts = () => {

	const posts = [
		{ id: 1, message: 'Hi, how are you?', likesCount: 15 },
		{ id: 2, message: 'It`s my first post', likesCount: 20 },
	];

	const postElements = posts.map( post => <Post message={ post.message } likesCount={ post.likesCount } /> );

	return (
		<div className={ s.postsBlock }>
			<h3>My posts</h3>
			<div className={ s.postControl }>
				<div>
					<textarea></textarea>
				</div>
				<div>
					<button>Add post</button>
				</div>
			</div>

			<div className={ s.posts }>
				{ postElements }
			</div>
		</div>
	);
};

