let rerenderEntireTree = () => {
    console.log('state changed');
}

let state = {
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
}

export const addPost = () => {
    let newPost = {
        id: 3,
        message: state.profilePage.newPostText,
        likesCount: 0
    }
    state.profilePage.postsData.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export const addMessage = () => {
    let newMessage = {
        id: 4,
        message: state.messagesPage.newMessageText
    }
    state.messagesPage.messagesData.push(newMessage);
    state.messagesPage.newMessageText = '';
    rerenderEntireTree(state);
}

export const updateNewMessageText = (newText) => {
    state.messagesPage.newMessageText = newText;
    rerenderEntireTree(state);
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}

export default state;