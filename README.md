# event-emitter-middleware for use in Redux store 
#### A redux middleware module for emitting action events to event listeners outside of your application.
https://github.com/OscarBakker/event-emitter-middleware
#### Add createEventEmitterMiddleware to your store with applyMiddleware, example:

```
const actions = [
  'IS_SOLVED',
  'PAUSE_TIMER',
];

const eventEmitterMiddleware = createEventEmitterMiddleware(actions);
  
const enhancer = composeWithDevTools(applyMiddleware(
  thunkMiddleWare,
  eventEmitterMiddleware
));

const store = createStore(persistedReducer, {}, enhancer);

```
