const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    postsData: [
        {id: 1, message: "Hi, how are you?", likesCount: 10},
        {id: 2, message: "I am fine", likesCount: 12}
    ],
    newPostText: 'NEW TEXT'
}

const profileReducer = (state = initialState, action) => {

    let stateCopy;

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 3,
                message: state.newPostText,
                likesCount: 0
            }
            stateCopy = {
                ...state,
                newPostText: '',
                postsData: [...state.postsData, newPost]
            };
            return stateCopy;
        case UPDATE_NEW_POST_TEXT:
            stateCopy = {
                ...state,
                newPostText: action.newText
            };
            return stateCopy;
        default:
            return state;
    }
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}

export default profileReducer;