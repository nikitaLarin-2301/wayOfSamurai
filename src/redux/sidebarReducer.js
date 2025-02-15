const initialState = {
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
};

export const sidebarReducer = ( state = initialState, action ) => {
	return state;
};