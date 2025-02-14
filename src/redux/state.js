const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

export const store = {
	_state: {
		profilePage: {
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
		},
		dialogsPage: {
			dialogs: [
				{ id: 1, name: 'Dimych' },
				{ id: 2, name: 'Nikita' },
				{ id: 3, name: 'Alex' },
				{ id: 4, name: 'Mihail' },
				{ id: 5, name: 'Sveta' },
				{ id: 6, name: 'Viktor' }
			], messages: [
				{ id: 1, message: 'Hi' },
				{ id: 1, message: 'How is your it-kamasutra?' },
				{ id: 1, message: 'Yo' },
				{ id: 1, message: 'Yo' },
				{ id: 1, message: 'Yo' },
			],
			newMessageText: ''
		},
		sidebar: {
			friends: [
				{
					id: 1, name: 'Alex',
					avatarUrl: 'https://m.media-amazon.com/images/S/pv-target-images/16627900db04b76fae3b64266ca161511422059cd24062fb5d900971003a0b70.jpg'
				},
				{
					id: 2, name: 'Nayomi',
					avatarUrl: 'https://m.media-amazon.com/images/S/pv-target-images/16627900db04b76fae3b64266ca161511422059cd24062fb5d900971003a0b70.jpg'
				},
				{
					id: 3, name: 'Jake',
					avatarUrl: 'https://m.media-amazon.com/images/S/pv-target-images/16627900db04b76fae3b64266ca161511422059cd24062fb5d900971003a0b70.jpg'
				},
			]
		}
	},
	_callSubscriber() {
		console.log( 'Нету подписчика' );
	},

	subscriber( callback ) {
		this._callSubscriber = callback;
	},
	getState() {
		return this._state;
	},

	dispatch( action ) {
		if ( action.type === ADD_POST ) {
			const newPost = {
				id: 3,
				message: this._state.profilePage.newPostText,
				likesCount: 0,
			};

			this._state.profilePage.posts.push( newPost );
			this._state.profilePage.newPostText = '';
			this._callSubscriber( this._state );
		}
		if ( action.type === UPDATE_NEW_POST_TEXT ) {
			this._state.profilePage.newPostText = action.newText;
			this._callSubscriber( this._state );
		}
		if ( action.type === ADD_MESSAGE ) {
			const newMessage = {
				id: 6,
				message: this._state.dialogsPage.newMessageText
			};
			this._state.dialogsPage.messages.push( newMessage );
			this._state.dialogsPage.newMessageText = '';
			this._callSubscriber( this._state );
		}
		if ( action.type === UPDATE_NEW_MESSAGE_TEXT ) {
			this._state.dialogsPage.newMessageText = action.newText;
			this._callSubscriber( this._state );
		}
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