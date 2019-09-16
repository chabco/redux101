// this is the ROOTREDUCER
// to make a ROOTREDUCER...
// 1. get a method from reduc called "combineReducer"
import { combineReducers } from 'redux';

// 2. Get each individual reducer
// the store is managed by this thing (ROOTREDUCER)
// the manager needs individual  departments.. the reducers
import frozenReducer from './frozenReducer';
import dairyReducer from './dairyReducer';
import meatReducer from './meatReducer';

// 3. call comebineReducers and hand it an object
// 3-1. EAch key in the object we pass to comebineReducers
// will be a piece of state in the redux STORE
// 3-2. Each value will be the value of the piece of state in the redux STORE

const managerReducer = combineReducers({
    frozen: frozenReducer,
    dairy: dairyReducer,
    meat: meatReducer
})

export default managerReducer;