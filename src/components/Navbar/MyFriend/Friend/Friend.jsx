import styles from './Friend.module.css';

export const Friend = ( props ) => {
	return (
		<div className={ styles.friendItem }>
			<img className={ styles.avatarImg } src={ props.avatarUrl } />
			<p className={ styles.name }>{ props.name }</p>
		</div>
	);
};
