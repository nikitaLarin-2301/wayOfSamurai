import { MyPosts } from './MyPosts/MyPosts.jsx';
import { ProfileInfo } from './ProfileInfo/ProfileInfo.jsx';

export const Profile = ( props ) => {
	return (
		<div>
			<ProfileInfo />
			<MyPosts posts={ props.state.posts } />
		</div>
	);
};