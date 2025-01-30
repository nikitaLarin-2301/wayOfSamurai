import s from './MyPost.module.css';
import { Post } from './Post/Post.jsx';

export const MyPosts = () => {
	return (
		<div>
			My posts
			<div>
				<textarea></textarea>
				<button>Add post</button>
			</div>

			<div className={ s.posts }>

				<Post message='Hi, how are you?' likeCount='15' />
				<Post message='It`s my first post' likeCount='20' />

			</div>
		</div>
	);
};

