import React from 'react';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { render } from 'react-dom'

// Redux - libraries
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
// Redux - libraries - Custom ones 
import MyPageOneReducer from './MyPageOne/redux/reducers'

// Redux - create and initialize your Redux store here 
//         reducers are global in Redux; every action will go through all reducers every time 
const store = createStore(combineReducers({ MyPageOneState : MyPageOneReducer}))

render(
    // Allow your App component to use Redux Store
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
