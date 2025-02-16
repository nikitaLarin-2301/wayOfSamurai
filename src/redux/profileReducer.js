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
	let stateCopy;
	switch ( action.type ) {
		case ADD_POST: {
			const body = state.newPostText;
			stateCopy = {
				...state,
				newPostText: '',
				posts: [ ...state.posts, { id: 3, message: body, likesCount: 0, } ]

			};
			return stateCopy;
		}

		case UPDATE_NEW_POST_TEXT: {
			stateCopy = {
				...state,
				newPostText: action.newText,
			};
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