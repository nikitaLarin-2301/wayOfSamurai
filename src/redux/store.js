import { profileReducer } from './profileReducer.js';
import { dialogsReducer } from './dialogsReducer.js';
import { sidebarReducer } from './sidebarReducer.js';

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
				{ id: 2, message: 'How is your it-kamasutra?' },
				{ id: 3, message: 'Yo' },
				{ id: 4, message: 'Yo' },
				{ id: 5, message: 'Yo' },
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

	subscribe( callback ) {
		this._callSubscriber = callback;
	},
	getState() {
		return this._state;
	},

	dispatch( action ) {
		this._state.profilePage = profileReducer( this._state.profilePage, action );
		this._state.dialogsPage = dialogsReducer( this._state.dialogsPage, action );
		this._state.sidebar = sidebarReducer( this._state.sidebar, action );

		this._callSubscriber( this._state );
	}
};



