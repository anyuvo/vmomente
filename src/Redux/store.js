import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let store = {
    _state: {
        profilePage: {
            postsData: [
                {id: 1, message: "Hi, how are you?", likesCount: 10},
                {id: 2, message: "I am fine", likesCount: 12}
            ],
            newPostText: 'NEW TEXT'
        },

        messagesPage: {
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
            newMessageText: 'NEW MESSAGE'
        }
    },
    _callSubscriber() {
        console.log('state changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);

        this._callSubscriber(this._state);
    }
}

export default store;

window.store = store;