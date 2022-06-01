import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import state, {subscribe, addPost, updateNewPostText} from "./Redux/state";

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = () => {
    root.render(
        <App
            state={state}
            addPost={addPost}
            updateNewPostText={updateNewPostText}
        />
    );
}

rerenderEntireTree(state);

subscribe(rerenderEntireTree);
