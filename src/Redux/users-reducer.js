const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
        // {
        //     id: 1,
        //     followed: false,
        //     fullName: "Dmitry",
        //     status: 'I am a boss',
        //     location: {city: 'Minsk', country: 'Belarus'},
        //     photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Dmitri_Mendeleev.jpg'
        // },
        // {
        //     id: 2,
        //     followed: true,
        //     fullName: "Sasha",
        //     status: 'I am a boss too',
        //     location: {city: 'Moscow', country: 'Russia'},
        //     photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Dmitri_Mendeleev.jpg'
        // },
        // {
        //     id: 3,
        //     followed: false,
        //     fullName: "Andrey",
        //     status: 'I am a boss too',
        //     location: {city: 'Kiev', country: 'Ukraine'},
        //     photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Dmitri_Mendeleev.jpg'
        // },
        // {
        //     id: 4,
        //     followed: false,
        //     fullName: "Oleg",
        //     status: 'I am a boss too',
        //     location: {city: 'Krasnodar', country: 'Russia'},
        //     photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Dmitri_Mendeleev.jpg'
        // },
    ]
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state;
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users) => ({type: SET_USERS, users})

export default usersReducer;