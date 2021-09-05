import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import App from './App';
import {bankingReducer} from './reducers/bankingreducers';
import {Provider} from 'react-redux';
import {rootReducer} from './reducers/combinereducers';


const store = createStore(rootReducer)


ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>
,
document.getElementById("root")
);