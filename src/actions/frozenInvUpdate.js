// this file is an action center
// action creators return actions
// an action is an object
// that has at least 1 property: type
// The action (object with a type property)
    // is then going to be handed to the dispatch
    // the dispatch will send that action
    // to all reducers

export default (newValue)=>{
    return {
        type: "updateFrozen",
        payload: newValue
    }
}

// will be given to all the reducers!