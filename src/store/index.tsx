import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import combinedReducers from 'store/reducers';
import thunk from 'redux-thunk';

const middleware = [thunk];

export default createStore(
    combinedReducers,
    composeWithDevTools(applyMiddleware(...middleware))
);
