import { MyPosts } from './MyPosts/MyPosts.jsx';
import { ProfileInfo } from './ProfileInfo/ProfileInfo.jsx';

export const Profile = () => {

	return (
		<div>
			<ProfileInfo />
			<MyPosts />
		</div>
	);
};