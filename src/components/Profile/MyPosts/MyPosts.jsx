import React from 'react';
import styles from './MyPost.module.css';
import { Post } from './Post/Post.jsx';

export const MyPosts = ( props ) => {
	const postElements = props.posts.map( post => <Post message={ post.message }
	                                                    likesCount={ post.likesCount } /> );

	const newPostElement = React.createRef();

	const onPostChange = () => {
		const text = newPostElement.current.value;
		props.updateNewPostText( text );
	};

	const addPost = () => {
		props.addPost();
	};

	return (
		<div className={ styles.postsBlock }>
			<h3>My posts</h3>
			<div className={ styles.postControl }>
				<div>
					<textarea ref={ newPostElement }
					          value={ props.newPostText }
					          onChange={ onPostChange } />
				</div>
				<div>
					<button onClick={ addPost }>Add post</button>
				</div>
			</div>

			<div className={ styles.posts }>
				{ postElements }
			</div>
		</div> );
};
