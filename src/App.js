import React, { Component } from 'react';
import './App.css';
import Layout from './components/Layout/Layout';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Layout />
        <h1>Sports app</h1>
      </div>
    );
  }
}

export default App;
