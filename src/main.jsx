import './index.css';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App.jsx';
import {
	addMessage, addPost, state, subscribe, updateNewMessageText, updateNewPostText
} from './redux/state.js';

const rerenderEntireTree = ( state ) => {
	ReactDOM.render( <BrowserRouter>
		<App state={ state }
		     addPost={ addPost }
		     updateNewPostText={ updateNewPostText }
		     addMessage={ addMessage }
		     updateNewMessageText={ updateNewMessageText }
		/>
	</BrowserRouter>, document.getElementById( 'root' ) );
};

rerenderEntireTree( state );
subscribe( rerenderEntireTree );
