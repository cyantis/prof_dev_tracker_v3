import React from 'react'

import './App.css';
import Footer from './components/layoutComponents/Footer'
import Header from './components/layoutComponents/Header'
import ProfileMenu from './components/layoutComponents/ProfileMenu'
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
