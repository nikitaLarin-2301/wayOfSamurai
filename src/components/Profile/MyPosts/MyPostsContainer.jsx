import { addPostCreator, updateNewPostTextCreator } from '../../../redux/profileReducer.js';
import { MyPosts } from './MyPosts.jsx';

export const MyPostsContainer = ( props ) => {
	const state = props.store.getState().profilePage;

	const sendPost = () => {
		props.store.dispatch( addPostCreator() );
	};

	const updateNewPostText = ( text ) => {
		props.store.dispatch( updateNewPostTextCreator( text ) );
	};

	return <MyPosts newPostText={ state.newPostText }
	                posts={ state.posts }
	                sendPost={ sendPost }
	                updateNewPostText={ updateNewPostText } />;
};
