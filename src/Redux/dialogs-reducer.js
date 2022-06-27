const ADD_MESSAGE = 'ADD-MESSAGE';

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
                message: action.newMessageBody
            }
            return {
                ...state,
                messagesData: [...state.messagesData, newMessage]
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


export default dialogsReducer;