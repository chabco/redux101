import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


// 1. In order to use React with Redux, we need REACT-REDUX
import { Provider } from 'react-redux'; //glue between react and redux

// 2. create a REDUXS STORE so that
// 2-1. REDUX exists
// 2-2. the PROVIDER has that STORE
import { createStore } from 'redux';

// 3. reduces to populate the store
// 3-1. REDUCERS go into the ROOTREDUCER
// 3-2. Make individual reducers to go into the ROOTREDUCER`
import managerReducer from './reducers/managerReducers';

// 4. actually create the store (2) by passing it the managerReducer (3) which is made up of the individual reducers

const hMart = createStore(managerReducer);
// WE MADE A STORE HERE!!! ^^^

// Prover (1) is the component that glues REact and Redux together
// We hand the Provider to REactDom.render,
// and we hand the Provider a prop of store, with our stor


ReactDOM.render(
    <Provider store={hMart}>
        <App/>
    </Provider>,
    document.getElementById('root')
);