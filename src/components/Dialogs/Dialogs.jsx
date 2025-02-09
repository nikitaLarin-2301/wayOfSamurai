import React from 'react';
import styles from './Dialogs.module.css';
import { DialogItem } from './DialogItem/DialogItem.jsx';
import { Message } from './Messages/Messages.jsx';

export const Dialogs = ( props ) => {
	const dialogsElements = props.state.dialogs.map( dialog => <DialogItem
		name={ dialog.name }
		id={ dialog.id } /> );

	const messagesElements = props.state.messages.map( message => <Message
		message={ message.message } /> );

	const newMessageElement = React.createRef();

	const addMessage = () => {
		props.addMessage();
	};

	const changeMessageText = () => {
		const text = newMessageElement.current.value;
		props.updateNewMessageText( text );
	};

	return ( <div className={ styles.dialogs }>
		<div className={ styles.dialogsItems }>
			{ dialogsElements }
		</div>
		<div className={ styles.messages }>
			{ messagesElements }
			<div>
				<textarea ref={ newMessageElement }
				          value={ props.state.newMessageText }
				          onChange={ changeMessageText } />
			</div>
			<div>
				<button onClick={ addMessage }>Send</button>
			</div>
		</div>
	</div> );
};

