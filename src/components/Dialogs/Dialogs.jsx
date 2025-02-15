import styles from './Dialogs.module.css';
import { DialogItem } from './DialogItem/DialogItem.jsx';
import { Message } from './Messages/Messages.jsx';

export const Dialogs = ( props ) => {
	const dialogsElements = props.dialogs.map( dialog => <DialogItem key={ dialog.id }
	                                                                 name={ dialog.name }
	                                                                 id={ dialog.id } /> );

	const messagesElements = props.messages.map( message => <Message key={ message.id }
	                                                                 message={ message.message } /> );

	const addMessage = () => {
		props.sendMessage();
	};

	const onMessageChange = ( e ) => {
		const text = e.target.value;
		props.updateNewMessageText( text );
	};

	return ( <div className={ styles.dialogs }>
		<div className={ styles.dialogsItems }>
			{ dialogsElements }
		</div>
		<div className={ styles.messages }>
			<div>{ messagesElements }</div>

			<div>
				<div>
				<textarea value={ props.newMessageText }
				          onChange={ onMessageChange } />
				</div>
				<div>
					<button onClick={ addMessage }>Send</button>
				</div>
			</div>
		</div>
	</div> );
};


