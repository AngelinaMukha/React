import React, {Component} from 'react';
import Dog from './Dog';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  render(){
  return (
    <div className="App">
      <Dog/>
      <div>
        <p>CUTE!</p>
      </div>
    </div>
  );
  }
}

export default App;
