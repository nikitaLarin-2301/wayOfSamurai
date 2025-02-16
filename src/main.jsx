import './index.css';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App.jsx';
import { store } from './redux/redux-store.js';
import { Provider } from 'react-redux';

ReactDOM.render( <BrowserRouter>
	<Provider store={ store }>
		<App store={ store } />
	</Provider>
</BrowserRouter>, document.getElementById( 'root' ) );
