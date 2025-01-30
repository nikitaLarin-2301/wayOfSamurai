import s from './ProfileInfo.module.css';

export const ProfileInfo = () => {
	return (
		<div>
			<div>
				<img
					src='https://www.shutterstock.com/image-photo/maldives-island-beach-tropical-landscape-600nw-2547983501.jpg' />
			</div>

			<div className={ s.descriptionBlock }>
				ava + description
			</div>
		</div> );
};
