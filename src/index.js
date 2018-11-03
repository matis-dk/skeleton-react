// REACT
import React from 'react';
import ReactDOM from 'react-dom';

// REDUX
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';

// MODULES
import App from './js/app'

// SCSS STYLES
import './style/style.scss';

// REDUCERS
import reducer_notes from './js/reducers/reducer_notes';
import reducer_profile from './js/reducers/reducer_profile';

// REDUX STORE
const store = createStore(
    combineReducers({
        notes: reducer_notes,
        profile: reducer_profile
    }),
    applyMiddleware(
        createLogger()
    )
)

// HMR
if (module.hot) { module.hot.accept() }

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
