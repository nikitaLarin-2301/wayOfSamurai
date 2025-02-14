import React from 'react';
import styles from './MyPost.module.css';
import { Post } from './Post/Post.jsx';
import { addPostCreator, updateNewPostTextCreator } from '../../../redux/state.js';

export const MyPosts = ( props ) => {
	const postElements = props.state.posts.map( post => <Post message={ post.message }
	                                                          likesCount={ post.likesCount } /> );

	const newPostElement = React.createRef();

	const addPost = () => {
		props.dispatch( addPostCreator() );
	};

	const onPostChange = () => {
		const text = newPostElement.current.value;
		props.dispatch( updateNewPostTextCreator( text ) );
	};

	return (
		<div className={ styles.postsBlock }>
			<h3>My posts</h3>
			<div className={ styles.postControl }>
				<div>
					<textarea ref={ newPostElement }
					          value={ props.state.newPostText }
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
