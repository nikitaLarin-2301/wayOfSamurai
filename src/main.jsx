import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App.jsx';
import { state } from './redux/state.js';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render( <BrowserRouter>
	<App state={ state } />
</BrowserRouter>, document.getElementById( 'root' ) );
