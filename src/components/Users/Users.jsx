import styles from './Users.module.css';

export const Users = ( props ) => {

	if ( !props.users.length ) {
		props.setUsers(
			[
				{
					id: 1,
					photoUrl: 'https://ca-times.brightspotcdn.com/dims4/default/efbd91f/2147483647/strip/true/crop/1200x800+0+0/resize/1200x800!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fb5%2Fec%2Fd0a3ed234205bb2ea4b8837d0582%2Fhalo-101-2087-rt.jpg',
					fullName: 'Dmitry', status: 'I am boss', followed: false,
					location: {
						country: 'USA', city: 'Miami',
					}
				},
				{
					id: 2,
					photoUrl: 'https://ca-times.brightspotcdn.com/dims4/default/efbd91f/2147483647/strip/true/crop/1200x800+0+0/resize/1200x800!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fb5%2Fec%2Fd0a3ed234205bb2ea4b8837d0582%2Fhalo-101-2087-rt.jpg',
					fullName: 'Nikita', status: 'I am boss too', followed: true,

					location: {
						country: 'USA', city: 'Los Angeles',
					}
				},
				{
					id: 3,
					photoUrl: 'https://ca-times.brightspotcdn.com/dims4/default/efbd91f/2147483647/strip/true/crop/1200x800+0+0/resize/1200x800!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fb5%2Fec%2Fd0a3ed234205bb2ea4b8837d0582%2Fhalo-101-2087-rt.jpg',
					fullName: 'Alex', status: 'I am boss too', followed: false,
					location: {
						country: 'USA', city: 'Los Angeles',
					}
				}
			],
		);
	}

	return (
		<div>
			{
				props.users.map( u => (
					<div key={ u.id }>
						<span>
							<div>
								<img className={ styles.userPhoto } src={ u.photoUrl } />
							</div>
							<div>
								{ u.followed ?
									<button
										onClick={ () => props.unfollow( u.id ) }>Unfollow</button>
									: <button
										onClick={ () => props.follow( u.id ) }>Follow</button> }

							</div>
						</span>

						<span>
							<span>
								<div>{ u.fullName }</div>
								<div>{ u.status }</div>
							</span>
							<span>
								<div>{ u.location.country }</div>
								<div>{ u.location.city }</div>
							</span>
						</span>
					</div>
				) )
			}
		</div>
	);
};
