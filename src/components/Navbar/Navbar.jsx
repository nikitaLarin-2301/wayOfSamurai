import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';

export const Navbar = () => {

	return (
		<nav className={ s.nav }>
			<div className={ s.item }>
				<NavLink activeClassName={ s.activeLink } to='/profile'>Profile</NavLink>
			</div>
			<div className={ s.item }>
				<NavLink activeClassName={ s.activeLink } to='/dialogs'>Dialogs</NavLink>
			</div>
			<div className={ s.item }>
				<NavLink activeClassName={ s.activeLink } to='/news'>News</NavLink>
			</div>
			<div className={ s.item }>
				<NavLink activeClassName={ s.activeLink } to='/music'>Music</NavLink>
			</div>
			<div className={ s.item }>
				<NavLink activeClassName={ s.activeLink } to='/settings'>Settings</NavLink>
			</div>
		</nav> );
};