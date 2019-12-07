import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import './index.css';
import App from './App';
import rootReducer from './reducers/rootReducer'
import Login from './components/accountComponents/Login'
import CreateAccount from './components/accountComponents/CreateAccount'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__

const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunk)),
);

ReactDOM.render(
  <Provider store={store}>
    <App />
    <Router>
      <Route path="/login" component={Login} />
      <Route path="/createAccount" component={CreateAccount} />
    </Router>
  </Provider>,
  document.getElementById('root')
);
