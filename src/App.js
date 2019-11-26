import React from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './components/footer'
import Header from './components/header'
import Profile from './components/profile'
import Content from './containers/content'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Profile />
        <Content />
        <Footer />
      </div>
    );
  }
};

export default App
