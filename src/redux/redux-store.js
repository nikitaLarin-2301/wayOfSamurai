import { combineReducers, createStore } from 'redux';
import { profileReducer } from './profileReducer.js';
import { dialogsReducer } from './dialogsReducer.js';
import { sidebarReducer } from './sidebarReducer.js';

const reducers = combineReducers( {
	profilePage: profileReducer,
	dialogsPage: dialogsReducer,
	sidebar: sidebarReducer,
} );

export const store = createStore( reducers );