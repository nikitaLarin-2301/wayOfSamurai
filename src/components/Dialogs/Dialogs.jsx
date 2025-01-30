import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const DialogItem = ( props ) => {
	const path = `/dialogs/${ props.id }`;

	return ( <div className={ s.dialog }>
		<NavLink activeClassName={ s.active } to={ path }>{ props.name }</NavLink>
	</div> );
};

const Message = ( props ) => {
	return ( <div className={ s.message }>{ props.message }</div> );
};

export const Dialogs = ( props ) => {

	const dialogs = [
		{ id: 1, name: 'Dimych' },
		{ id: 2, name: 'Nikita' },
		{ id: 3, name: 'Alex' },
		{ id: 4, name: 'Mihail' },
		{ id: 5, name: 'Sveta' },
		{ id: 6, name: 'Viktor' }
	];

	const messages = [
		{ id: 1, message: 'Hi' },
		{ id: 1, message: 'How is your it-kamasutra?' },
		{ id: 1, message: 'Yo' },
		{ id: 1, message: 'Yo' },
		{ id: 1, message: 'Yo' },
	];

	const dialogsElements = dialogs.map( dialog => <DialogItem name={ dialog.name } id={ dialog.id } /> );
	const messagesElements = messages.map( message => <Message message={ message.message } /> );

	return (
		<div className={ s.dialogs }>
			<div className={ s.dialogsItems }>
				{ dialogsElements }
			</div>
			<div className={ s.messages }>
				{ messagesElements }
			</div>
		</div> );
};

