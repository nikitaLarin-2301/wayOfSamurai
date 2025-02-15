const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const initialState = {
	posts: [
		{
			id: 1,
			message: 'Hi, how are you?',
			likesCount: 15,

		},
		{
			id: 2,
			message: 'It`styles my first post',
			likesCount: 20,
		},
	],
	newPostText: ''
};

export const profileReducer = ( state, action ) => {
	switch ( action.type ) {
		case ADD_POST:
			const newPost = {
				id: 3,
				message: state.newPostText,
				likesCount: 0,
			};

			state.posts.push( newPost );
			state.newPostText = '';
			return state;
		case UPDATE_NEW_POST_TEXT:
			state.newPostText = action.newText;
			return state;
		default:
			return state;
	}
};

export const addPostCreator = () => {
	return {
		type: ADD_POST
	};
};

export const updateNewPostTextCreator = ( text ) => {
	return {
		type: UPDATE_NEW_POST_TEXT,
		newText: text
	};
};