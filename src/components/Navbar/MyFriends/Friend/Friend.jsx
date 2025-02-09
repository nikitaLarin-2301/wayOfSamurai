import styles from './Friend.module.css';
import { NavLink } from 'react-router-dom';

export const Friend = ( props ) => {
	const path = `/friend/${ props.id }`;
	return (
		<div className={ styles.friendItem }>
			<NavLink to={ path }>
				<img className={ styles.avatarImg } src={ props.avatarUrl } />
				<p className={ styles.name }>{ props.name }</p>
			</NavLink>
		</div>
	);
};
