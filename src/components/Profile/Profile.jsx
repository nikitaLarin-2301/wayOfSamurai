import { MyPosts } from './MyPosts/MyPosts.jsx';
import { ProfileInfo } from './ProfileInfo/ProfileInfo.jsx';

export const Profile = ( props ) => {
	return (
		<div>
			<ProfileInfo />
			<MyPosts state={ props.state }
			         dispatch={ props.dispatch }
			/>
		</div>
	);
};