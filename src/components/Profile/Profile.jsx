import { ProfileInfo } from './ProfileInfo/ProfileInfo.jsx';
import { MyPostsContainer } from './MyPosts/MyPostsContainer.jsx';

export const Profile = ( props ) => {
	return (
		<div>
			<ProfileInfo />
			<MyPostsContainer store={ props.store } />
		</div>
	);
};