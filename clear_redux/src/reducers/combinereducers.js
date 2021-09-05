import {combineReducers} from 'redux';

import {bankingReducer} from './bankingreducers';
import {authReducer} from './authreducers';

export const rootReducer = combineReducers({
    auth:authReducer,
    banking:bankingReducer
})