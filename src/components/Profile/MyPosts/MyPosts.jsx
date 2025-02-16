import styles from './MyPost.module.css';
import { Post } from './Post/Post.jsx';

export const MyPosts = ( props ) => {
	const postElements = props.posts.map( post => <Post key={ post.id }
	                                                    message={ post.message }
	                                                    likesCount={ post.likesCount } /> );

	const onAddPost = () => {
		props.sendPost();
	};

	const onPostChange = ( e ) => {
		const text = e.target.value;
		props.updateNewPostText( text );
	};

	return (
		<div className={ styles.postsBlock }>
			<h3>My posts</h3>
			<div className={ styles.postControl }>
				<div>
					<textarea value={ props.newPostText }
					          onChange={ onPostChange } />
				</div>
				<div>
					<button onClick={ onAddPost }>Add post</button>
				</div>
			</div>

			<div className={ styles.posts }>
				{ postElements }
			</div>
		</div> );
};
