import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import { Dialogs } from './components/Dialogs/Dialogs.jsx';
import { Header } from './components/Header/Header.jsx';
import { Music } from './components/Music/Music.jsx';
import { Navbar } from './components/Navbar/Navbar.jsx';
import { News } from './components/News/News.jsx';
import { Profile } from './components/Profile/Profile.jsx';
import { Settings } from './components/Settings/Settings.jsx';

export const App = () => {
	return (
		<BrowserRouter>
			<div className='app-wrapper'>
				<Header />
				<Navbar />
				<div className='app-wrapper-content'>
					<Route path='/profile' component={ Profile } />
					<Route path='/dialogs' component={ Dialogs } />
					<Route path='/news' component={ News } />
					<Route path='/music' component={ Music } />
					<Route path='/settings' component={ Settings } />
				</div>
			</div>
		</BrowserRouter> );
};




