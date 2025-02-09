import styles from './MyFriends.module.css';
import { Friend } from './Friend/Friend.jsx';

export const MyFriends = ( props ) => {
	const friendsElements = props.friends.map( friend => <Friend name={ friend.name }
	                                                             avatarUrl={ friend.avatarUrl }
	                                                             id={ friend.id } /> );

	return (
		<div className={ styles.friends }>
			{ friendsElements }
		</div>
	);
};
