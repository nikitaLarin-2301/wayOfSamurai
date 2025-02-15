import styles from './MyFriends.module.css';
import { Friend } from './Friend/Friend.jsx';

export const MyFriends = ( props ) => {
	const friendsElements = props.friends.map( friend => <Friend key={ friend.id }
	                                                             id={ friend.id }
	                                                             name={ friend.name }
	                                                             avatarUrl={ friend.avatarUrl } /> );

	return (
		<div className={ styles.friends }>
			{ friendsElements }
		</div>
	);
};
