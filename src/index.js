import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {setInput} from './containers/UserInput/reducer';
import thunk from 'redux-thunk';


const rootReducer = combineReducers({setInput});
const store = createStore(rootReducer, applyMiddleware(thunk));
ReactDOM.render(<Provider store = {store}>
                  <App />
                </Provider>  , document.getElementById('root'));
registerServiceWorker();
