import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import staffReducer from '../reducer/index';
import userReducer from '../reducer/userReducer';

const rootReducer = combineReducers({
    person: staffReducer,
    user: userReducer
});

export default function generateStore() {
    const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
    return store;
}

