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

export const profileReducer = ( state = initialState, action ) => {
	switch ( action.type ) {
		case ADD_POST: {
			const stateCopy = { ...state };
			stateCopy.posts = [ ...state.posts ];
			const newPost = {
				id: 3,
				message: stateCopy.newPostText,
				likesCount: 0,
			};

			stateCopy.posts.push( newPost );
			stateCopy.newPostText = '';
			return stateCopy;
		}

		case UPDATE_NEW_POST_TEXT: {
			const stateCopy = { ...state };
			stateCopy.newPostText = action.newText;
			return stateCopy;
		}
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