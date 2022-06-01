let rerenderEntireTree = () => {
    console.log('state changed');
}

let state = {
    profilePage: {
        postsData: [
            {id: 1, message: "Hi, how are you?", likesCount: 10},
            {id: 2, message: "I am fine", likesCount: 12}
        ],
    },

    messagesPage: {
        dialogsData: [
            {name: "Andrey", id: 1},
            {name: "Oleg", id: 2},
            {name: "Irina", id: 3}
        ],
        messagesData: [
            {message: "hi", id: 1},
            {message: "how are you", id: 2},
            {message: "ok ok", id: 3}
        ]
    }
}

export const addPost = (postMessage) => {
    let newPost = {
        id: 3,
        message: postMessage,
        likesCount: 0
    }
    state.profilePage.postsData.push(newPost);
    rerenderEntireTree(state);
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}

export default state;