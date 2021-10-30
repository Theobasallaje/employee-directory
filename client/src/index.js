import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// Redux Setup 
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
// Reducers
import reducers from './reducers';

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// Redux Dev Tool

const composeEnhancers = (process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null) || compose;

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
//   trace: true, // (action) => { return ‘trace as string’; }
//   traceLimit: 25,
// }) || compose;

//Creating Centreal Store for State
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(reduxThunk))
);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));