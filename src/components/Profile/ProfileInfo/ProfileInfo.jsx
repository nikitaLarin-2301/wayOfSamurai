import styles from './ProfileInfo.module.css';

export const ProfileInfo = () => {
	return (
		<div>
			<div>
				<img className={ styles.img }
				     src='https://www.shutterstock.com/image-photo/maldives-island-beach-tropical-landscape-600nw-2547983501.jpg' />
			</div>

			<div className={ styles.descriptionBlock }>
				ava + description
			</div>
		</div> );
};
