const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const initialState = {
	dialogs: [
		{ id: 1, name: 'Dimych' },
		{ id: 2, name: 'Nikita' },
		{ id: 3, name: 'Alex' },
		{ id: 4, name: 'Mihail' },
		{ id: 5, name: 'Sveta' },
		{ id: 6, name: 'Viktor' }
	], messages: [
		{ id: 1, message: 'Hi' },
		{ id: 2, message: 'How is your it-kamasutra?' },
		{ id: 3, message: 'Yo' },
		{ id: 4, message: 'Yo' },
		{ id: 5, message: 'Yo' },
	],
	newMessageText: ''
};

export const dialogsReducer = ( state = initialState, action ) => {
	switch ( action.type ) {
		case ADD_MESSAGE: {
			const stateCopy = { ...state };

			const newMessage = {
				id: 6,
				message: stateCopy.newMessageText
			};
			stateCopy.messages.push( newMessage );
			stateCopy.newMessageText = '';
			return stateCopy;
		}
		case UPDATE_NEW_MESSAGE_TEXT: {
			const stateCopy = { ...state };
			stateCopy.newMessageText = action.newText;
			return stateCopy;
		}
		default:
			return state;
	}
};

export const addMessageCreator = () => {
	return {
		type: ADD_MESSAGE
	};
};

export const updateNewMessageTextCreator = ( text ) => {
	return {
		type: UPDATE_NEW_MESSAGE_TEXT,
		newText: text
	};
};