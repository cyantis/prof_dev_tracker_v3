import React from 'react'

import './App.css';
import Footer from './components/Footer'
import Header from './components/Header'
import ProfileMenu from './components/ProfileMenu'
import Content from './containers/Content'


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ProfileMenu />
        <Content />
        <Footer />
      </div>
    );
  }
};

export default App
