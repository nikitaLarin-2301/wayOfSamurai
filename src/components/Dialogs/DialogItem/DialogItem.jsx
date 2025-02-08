import { NavLink } from 'react-router-dom';
import styles from './../Dialogs.module.css';

export const DialogItem = ( props ) => {
	const path = `/dialogs/${ props.id }`;

	return ( <div className={ styles.dialog }>
		<NavLink activeClassName={ styles.active } to={ path }>{ props.name }</NavLink>
	</div> );
};
