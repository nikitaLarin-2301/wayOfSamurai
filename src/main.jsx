import './index.css';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App.jsx';
import { store } from './redux/state.js';

const rerenderEntireTree = ( state ) => {
	ReactDOM.render( <BrowserRouter>
		<App state={ state }
		     dispatch={ store.dispatch.bind( store ) }
		/>
	</BrowserRouter>, document.getElementById( 'root' ) );
};

const state = store.getState();
rerenderEntireTree( state );

store.subscriber( rerenderEntireTree );