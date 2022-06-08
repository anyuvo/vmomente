const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogsData: [
        {name: "Andrey", id: 1},
        {name: "Oleg", id: 2},
        {name: "Irina", id: 3}
    ],
    messagesData: [
        {id: 1, message: "hi"},
        {id: 2, message: "how are you"},
        {id: 3, message: "ok ok"}
    ],
    newMessageText: ''
}

const dialogsReducer = (state = initialState, action) => {

    let stateCopy;

    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 4,
                message: state.newMessageText
            }
            stateCopy = {
                ...state,
                newMessageText: '',
                messagesData: [...state.messagesData, newMessage]
            };
            return stateCopy;
        case UPDATE_NEW_MESSAGE_TEXT:
            stateCopy = {
                ...state,
                newMessageText: action.newText
            };
            return stateCopy;
        default:
            return state;
    }
}

export const sendMessageCreator = () => {
    return {
        type: ADD_MESSAGE
    }
}

export const updateNewMessageBodyCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newText: text
    }
}

export default dialogsReducer;