import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';
import { MyFriends } from './MyFriends/MyFriends.jsx';

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
				<div className={ styles.item }>
					<NavLink activeClassName={ styles.activeLink } to='/friends'>Friends</NavLink>
				</div>
				<MyFriends friends={ props.state.friends } />
			</div>
		</nav> );
};