
const emitActionEvent = ({ action, actions }) => {
  /*  Check if actions is array of action objects. */
  if (actions != null && actions.length && typeof actions !== 'function') {
    /* If actions match one of the action types defined with createEventEmitterMiddleware, dispatch a new event. */
    if (actions.includes(action.type)) {
      const event = new Event(action.type, { bubbles: true });
      window.dispatchEvent(event);
    }
  } else {
    console.error(`
      Actions need to be defined like an array of action types.
    `)
  }
  /* Add and dispatch event for each action. */
}

const createEventEmitterMiddleware = actions => ({ dispatch, getState }) => next => (action) => {
  if (typeof dispatch === 'function' || typeof getState === 'function') {
    emitActionEvent({ action, actions });

    /*  Execute action as usual. */
    return next(action);
  }

  console.error(`
    Dispatch or getState should be of type function.
  `)
}

/*
*   Add createEventEmitterMiddleware to your store with applyMiddleware, example:
*
*     const eventEmitterMiddleware = createEventEmitterMiddleware([
*     'IS_SOLVED',
*     'PAUSE_TIMER',
*   ]);
*   const enhancer = composeWithDevTools(applyMiddleware(
*     thunkMiddleWare,
*     eventEmitterMiddleware
*   ));
*
*   const store = createStore(persistedReducer, {}, enhancer);
*
* */

module.exports = createEventEmitterMiddleware;
