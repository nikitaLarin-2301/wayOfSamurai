import { ProfileInfo } from './ProfileInfo/ProfileInfo.jsx';
import { MyPostsContainer } from './MyPosts/MyPostsContainer.jsx';

export const Profile = () => {
	return (
		<div>
			<ProfileInfo />
			<MyPostsContainer />
		</div>
	);
};