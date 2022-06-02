import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from "./Redux/state";

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = () => {
    root.render(
        <App
            state={store.getState()}
            dispatch={store.dispatch.bind(store)}
        />
    );
}

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);
