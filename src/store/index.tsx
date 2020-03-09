import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import combinedReducers from 'store/reducers';

const middleware = [];

export default createStore(
    combinedReducers,
    composeWithDevTools(applyMiddleware(...middleware))
);
