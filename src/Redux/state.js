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
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('state changed');
    },
    addPost() {
        let newPost = {
            id: 3,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        }
        this._state.profilePage.postsData.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    addMessage() {
        let newMessage = {
            id: 4,
            message: this._state.messagesPage.newMessageText
        }
        this._state.messagesPage.messagesData.push(newMessage);
        this._state.messagesPage.newMessageText = '';
        this._callSubscriber(this._state);
    },
    updateNewMessageText(newText) {
        this._state.messagesPage.newMessageText = newText;
        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    }
}

export default store;

window.store = store;