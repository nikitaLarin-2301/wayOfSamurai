import './index.css';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App.jsx';
import { store } from './redux/redux-store.js';

const rerenderEntireTree = ( state ) => {
	ReactDOM.render( <BrowserRouter>
		<App state={ state }
		     dispatch={ store.dispatch.bind( store ) }
		/>
	</BrowserRouter>, document.getElementById( 'root' ) );
};

rerenderEntireTree( store.getState() );

store.subscribe( () => rerenderEntireTree( store.getState() ) );