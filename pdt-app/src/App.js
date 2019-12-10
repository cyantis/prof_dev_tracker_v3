import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './App.css';
import Login from './components/accountComponents/Login'
import SignUp from './components/accountComponents/SignUp'
import Footer from './components/layoutComponents/Footer'
import Header from './components/layoutComponents/Header'
import Main from './containers/Main'


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Router>
          <Route path="/" component={Main} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
        </Router>
        <Footer />
      </div>
    );
  }
};

export default App
