let rerenderEntireTree = () => {
	console.log( 'State changed' );
};

export const subscribe = ( observer ) => {
	rerenderEntireTree = observer;
};

export const state = {
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
};

export const addPost = () => {
	const newPost = {
		id: 3,
		message: state.profilePage.newPostText,
		likesCount: 0,
	};

	state.profilePage.posts.push( newPost );
	state.profilePage.newPostText = '';
	rerenderEntireTree( state );
};

export const updateNewPostText = ( newText ) => {
	state.profilePage.newPostText = newText;
	rerenderEntireTree( state );
};

export const addMessage = () => {
	const newMessage = {
		id: 6,
		message: state.dialogsPage.newMessageText
	};
	state.dialogsPage.messages.push( newMessage );
	state.dialogsPage.newMessageText = '';
	rerenderEntireTree( state );
};

export const updateNewMessageText = ( newText ) => {
	state.dialogsPage.newMessageText = newText;
	rerenderEntireTree( state );
};