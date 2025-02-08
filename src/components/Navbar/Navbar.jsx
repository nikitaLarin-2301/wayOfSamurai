import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';
import { MyFriends } from './MyFriend/MyFriends.jsx';

export const Navbar = ( props ) => {

	return (
		<nav className={ styles.nav }>
			<div className={ styles.links }>
				<div className={ styles.item }>
					<NavLink activeClassName={ styles.activeLink } to='/profile'>Profile</NavLink>
				</div>
				<div className={ styles.item }>
					<NavLink activeClassName={ styles.activeLink } to='/dialogs'>Dialogs</NavLink>
				</div>
				<div className={ styles.item }>
					<NavLink activeClassName={ styles.activeLink } to='/news'>News</NavLink>
				</div>
				<div className={ styles.item }>
					<NavLink activeClassName={ styles.activeLink } to='/music'>Music</NavLink>
				</div>
				<div className={ styles.item }>
					<NavLink activeClassName={ styles.activeLink } to='/settings'>Settings</NavLink>
				</div>
			</div>

			<div className={ styles.sidebar }>
				<NavLink activeClassName={ styles.activeLink } to='/friends'>Friends</NavLink>
				<MyFriends friends={ props.state.friends } />
			</div>
		</nav> );
};