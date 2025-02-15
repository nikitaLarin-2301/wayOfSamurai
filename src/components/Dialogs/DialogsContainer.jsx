import { Dialogs } from './Dialogs.jsx';
import { addMessageCreator, updateNewMessageTextCreator } from '../../redux/dialogsReducer.js';

export const DialogsContainer = ( props ) => {
	const state = props.store.getState().dialogsPage;

	const sendMessage = () => {
		props.store.dispatch( addMessageCreator() );
	};

	const updateNewMessageText = ( text ) => {
		props.store.dispatch( updateNewMessageTextCreator( text ) );
	};

	return <Dialogs
		dialogs={ state.dialogs }
		messages={ state.messages }
		newMessageText={ state.newMessageText }
		sendMessage={ sendMessage }
		updateNewMessageText={ updateNewMessageText } />;
};