import './App.css';
import { Route } from 'react-router-dom';
import { Dialogs } from './components/Dialogs/Dialogs.jsx';
import { Header } from './components/Header/Header.jsx';
import { Music } from './components/Music/Music.jsx';
import { Navbar } from './components/Navbar/Navbar.jsx';
import { News } from './components/News/News.jsx';
import { Profile } from './components/Profile/Profile.jsx';
import { Settings } from './components/Settings/Settings.jsx';
import { Friends } from './components/Friends/Friends.jsx';

export const App = ( props ) => {
	return (
		<div className='app-wrapper'>
			<Header />
			<Navbar state={ props.state.sidebar } />

			<div className='app-wrapper-content'>
				<Route path='/profile'
				       render={ () => <Profile state={ props.state.profilePage }
				                               dispatch={ props.dispatch }
				       /> } />
				<Route path='/dialogs'
				       render={ () => <Dialogs state={ props.state.dialogsPage }
				                               dispatch={ props.dispatch }
				       /> } />
				<Route path='/news' render={ () => <News /> } />
				<Route path='/music' render={ () => <Music /> } />
				<Route path='/settings' render={ () => <Settings /> } />
				<Route path='/friends' render={ () => <Friends /> } />
			</div>
		</div>
	);
};



