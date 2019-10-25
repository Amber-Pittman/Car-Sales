import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { reducer } from "./reducers/vehicleReducer";
import { createStore } from "redux";

import 'bulma/css/bulma.css';
import './styles.scss';



// create our store or "global state object"
const store = createStore(reducer);

const rootElement = document.getElementById('root');
ReactDOM.render(
    // gives all children components access to the store
    <Provider Store={store}>
        <App/>
    </Provider>, 
    rootElement
);
