import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware} from 'redux';
import { Provider } from 'react-redux'
import rootReducer from './reducers'
import * as serviceWorker from './serviceWorker';

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);

serviceWorker.unregister();
