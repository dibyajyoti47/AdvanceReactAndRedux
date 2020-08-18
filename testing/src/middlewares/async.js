export default ( {dispatch} ) => next => action => { 
    // Check to see if the action 
    // has a promise on it's payload property
    // If it doesn't then send the action on to the next middleware
    if (!action.payload || !action.payload.then) {
        return next (action);
    }

    // we want to wait for the promise to resolve
    // (get it's data !!) and then create a new action 
    // with that data and dispatch it.

    action.payload.then (response => {
        debugger;
        const newAction = {...action, payload: response};
        dispatch (newAction);
    })
 }