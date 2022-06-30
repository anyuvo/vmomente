import React from "react";
import profileReducer, {addPostActionCreator} from "./profile-reducer";

it('length of post should be incremented', () => {

    //1. test data
    let action = addPostActionCreator("HELLO");
    let state = {
        postsData: [
            {id: 1, message: "Hi, how are you?", likesCount: 10},
            {id: 2, message: "I am fine", likesCount: 12}
        ]
    };

    //2. action
    let newState = profileReducer(state, action);

    //3. expectation
    expect(newState.postsData.length).toBe(3);
});
