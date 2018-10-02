import React, { Component } from 'react';
import Footer from './components/footer'
import Navbar from './components/navbar'
import './App.css'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Footer />
      </div>
    );
  }
}

export default App;
