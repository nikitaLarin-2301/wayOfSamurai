import { MyPosts } from './MyPosts/MyPosts.jsx';

export const Profile = () => {

	return (
		<div>
			<div>
				<img
					src='https://www.shutterstock.com/image-photo/maldives-island-beach-tropical-landscape-600nw-2547983501.jpg' />
			</div>

			<div>
				ava + description
			</div>

			<MyPosts />
		</div>
	);
};