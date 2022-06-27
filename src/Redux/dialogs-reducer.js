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
    ]
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 4,
                message: action.newMessageText
            }
            return {
                ...state,
                messagesData: [...state.messagesData, newMessage]
            };
        case UPDATE_NEW_MESSAGE_TEXT:
            return  {
                ...state,
                newMessageText: action.newText
            };
        default:
            return state;
    }
}

export const sendMessageCreator = (newMessageBody) => {
    return {
        type: ADD_MESSAGE,
        newMessageBody
    }
}

export const updateNewMessageBodyCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newText: text
    }
}

export default dialogsReducer;