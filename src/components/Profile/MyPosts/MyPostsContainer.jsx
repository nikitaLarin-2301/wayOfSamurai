import { addPostCreator, updateNewPostTextCreator } from '../../../redux/profileReducer.js';
import { MyPosts } from './MyPosts.jsx';
import { connect } from 'react-redux';

const mapStateToProps = ( state ) => {
	return {
		posts: state.profilePage.posts,
		newPostText: state.profilePage.newPostText
	};
};
const mapDispatchToProps = ( dispatch ) => {
	return {
		sendPost: () => dispatch( addPostCreator() ),
		updateNewPostText: ( text ) => dispatch( updateNewPostTextCreator( text ) )
	};
};

export const MyPostsContainer = connect( mapStateToProps, mapDispatchToProps )( MyPosts );