import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom';
import { Provider } from "react-redux";
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers'

const storeWidthMiddleware = applyMiddleware(thunk)(createStore)

ReactDOM.render(
    <BrowserRouter>
    <Provider store={storeWidthMiddleware(reducers)}>
    <App />
    </Provider>

</BrowserRouter>
, document.getElementById('root'));

serviceWorker.unregister();
