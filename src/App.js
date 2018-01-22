import React, { Component } from 'react';
import logo from './logo.svg';
import { observer } from 'mobx-react'
import './App.css';

import List from './components/List'

@observer class App extends Component {
  componentWillMount(){
    console.log(this.props.store.getTasks());
    
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <List store={this.props.store} /> 
      </div>
    )
  }
}

export default App;
