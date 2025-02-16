import { combineReducers, createStore } from 'redux';
import { profileReducer } from './profileReducer.js';
import { dialogsReducer } from './dialogsReducer.js';
import { sidebarReducer } from './sidebarReducer.js';
import { usersReducer } from './usersReducer.js';

const reducersBatch = combineReducers( {
	profilePage: profileReducer,
	dialogsPage: dialogsReducer,
	sidebar: sidebarReducer,
	usersPage: usersReducer,
} );

export const store = createStore( reducersBatch );

