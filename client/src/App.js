import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'

import './App.css'

import Login from './components/accountComponents/Login'
import SignUp from './components/accountComponents/SignUp'
import Footer from './components/layoutComponents/Footer'
import Header from './components/layoutComponents/Header'
import Main from './containers/Main'


const App = props => {
    return (
      <div className="App">
        <Header />
        <Router>
          <PrivateRoute path="/" component={Main} />
          <Route path="/login" component={Login} />
        </Router>
        <Footer />
      </div>
    )
}

const isLoggedIn = () => {
  const user = localStorage.getItem('user_id') 
  return user
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
      isLoggedIn()
      ? <Component {...props} />
      : <Redirect to='/login' />
  )} />
)

export default App
