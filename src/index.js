import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from "react-redux";
import { reducer as vehicleReducer } from "./reducers/vehicleReducer";
import { createStore, combineReducers } from "redux";

import 'bulma/css/bulma.css';
import './styles.scss';

// this combines everything into one giant main reducer,
// so our action types still need to be unique
const rootReducer = combineReducers({
    vehicle: vehicleReducer
  });

// create our store or "global state object"
const store = createStore(rootReducer);

const rootElement = document.getElementById('root');
ReactDOM.render(
    // gives all children components access to the store
    <Provider Store={store}>
        <App/>
    </Provider>, 
    rootElement
);
