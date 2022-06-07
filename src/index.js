import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from "./Redux/redux-store";

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = () => {
    root.render(
        <App store={store}/>
    );
}

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);

