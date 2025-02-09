import s from './Post.module.css';

export const Post = ( props ) => {
	return (
		<div className={ s.item }>
			<img
				src='https://media.gq.com/photos/627d37fbbad17dc46fce8158/4:3/w_2507,h_1880,c_limit/MCDAVAT_FE021.jpg' />
			<p>
				{ props.message }
			</p>
			<div>
				<span>{ props.likesCount }</span>
			</div>
		</div>
	);
};

