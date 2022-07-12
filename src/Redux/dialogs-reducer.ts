const ADD_MESSAGE = 'ADD-MESSAGE';

type DialogType = {
    name: string,
    id: number
}
type MessageType = {
    id: number,
    message: string
}

let initialState = {
    dialogsData: [
        {name: "Andrey", id: 1},
        {name: "Oleg", id: 2},
        {name: "Irina", id: 3}
    ] as Array<DialogType>,
    messagesData: [
        {id: 1, message: "hi"},
        {id: 2, message: "how are you"},
        {id: 3, message: "ok ok"}
    ] as Array<MessageType>
}

export type InitialStateType = typeof initialState;

const dialogsReducer = (state = initialState, action: any): InitialStateType => {

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

type SendMessageCreatorActionType = {
    type: typeof ADD_MESSAGE,
    newMessageBody: string
}

export const sendMessageCreator = (newMessageBody: string): SendMessageCreatorActionType => {
    return {
        type: ADD_MESSAGE,
        newMessageBody
    }
}


export default dialogsReducer;