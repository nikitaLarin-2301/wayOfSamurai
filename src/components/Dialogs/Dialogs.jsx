import React from 'react';
import styles from './Dialogs.module.css';
import { DialogItem } from './DialogItem/DialogItem.jsx';
import { Message } from './Messages/Messages.jsx';
import { addMessageCreator, updateNewMessageTextCreator } from '../../redux/state.js';

export const Dialogs = ( props ) => {
	const dialogsElements = props.state.dialogs.map( dialog => <DialogItem
		name={ dialog.name }
		id={ dialog.id } /> );

	const messagesElements = props.state.messages.map( message => <Message
		message={ message.message } /> );

	const newMessageElement = React.createRef();

	const addMessage = () => {
		props.dispatch( addMessageCreator() );
	};

	const onMessageChange = ( e ) => {
		const text = e.target.value;
		props.dispatch( updateNewMessageTextCreator( text ) );
	};

	return ( <div className={ styles.dialogs }>
		<div className={ styles.dialogsItems }>
			{ dialogsElements }
		</div>
		<div className={ styles.messages }>
			<div>{ messagesElements }</div>

			<div>
				<div>
				<textarea ref={ newMessageElement }
				          value={ props.state.newMessageText }
				          onChange={ onMessageChange } />
				</div>
				<div>
					<button onClick={ addMessage }>Send</button>
				</div>
			</div>
		</div>
	</div> );
};


