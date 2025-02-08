import styles from './Dialogs.module.css';
import { DialogItem } from './DialogItem/DialogItem.jsx';
import { Message } from './Messages/Messages.jsx';

export const Dialogs = ( props ) => {
	const dialogsElements = props.state.dialogs.map( dialog => <DialogItem
		name={ dialog.name }
		id={ dialog.id } /> );

	const messagesElements = props.state.messages.map( message => <Message
		message={ message.message } /> );

	return (
		<div className={ styles.dialogs }>
			<div className={ styles.dialogsItems }>
				{ dialogsElements }
			</div>
			<div className={ styles.messages }>
				{ messagesElements }
			</div>
		</div> );
};

