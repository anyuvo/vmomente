import React from "react";
import profileReducer, {addPostActionCreator} from "./profile-reducer";

let state = {
    postsData: [
        {id: 1, message: "Hi, how are you?", likesCount: 10},
        {id: 2, message: "I am fine", likesCount: 12}
    ]
};

it('length of post should be incremented', () => {

    //1. test data
    let action = addPostActionCreator("HELLO");

    //2. action
    let newState = profileReducer(state, action);

    //3. expectation
    expect(newState.postsData.length).toBe(3);
});

it('message of new post should be correct', () => {

    //1. test data
    let action = addPostActionCreator("HELLO");

    //2. action
    let newState = profileReducer(state, action);

    //3. expectation
    expect(newState.postsData[2].message).toBe("HELLO");
});

it('after deleting length of post should be decremented', () => {

    //1. test data
    let action = deletePost(1);

    //2. action
    let newState = profileReducer(state, action);

    //3. expectation
    expect(newState.postsData.length).toBe(1);
});
