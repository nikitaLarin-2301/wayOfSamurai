import styles from './MyPost.module.css';
import { Post } from './Post/Post.jsx';

export const MyPosts = ( props ) => {

	const postElements = props.posts.map( post => <Post message={ post.message }
	                                                    likesCount={ post.likesCount } /> );

	return (
		<div className={ styles.postsBlock }>
			<h3>My posts</h3>
			<div className={ styles.postControl }>
				<div>
					<textarea></textarea>
				</div>
				<div>
					<button>Add post</button>
				</div>
			</div>

			<div className={ styles.posts }>
				{ postElements }
			</div>
		</div>
	);
};
