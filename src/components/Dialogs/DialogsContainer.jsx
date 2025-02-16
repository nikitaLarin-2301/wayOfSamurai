import { Dialogs } from './Dialogs.jsx';
import { addMessageCreator, updateNewMessageTextCreator } from '../../redux/dialogsReducer.js';
import { connect } from 'react-redux';

const mapStateToProps = ( state ) => {
	return {
		dialogsPage: state.dialogsPage,
	};
};
const mapDispatchToProps = ( dispatch ) => {
	return {
		sendMessage: () => dispatch( addMessageCreator() ),
		updateNewMessageText: ( text ) => dispatch( updateNewMessageTextCreator( text ) ),
	};
};

export const DialogsContainer = connect( mapStateToProps, mapDispatchToProps )( Dialogs );