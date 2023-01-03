import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super(); //calling the constructor method

    this.state = { //creating a state
      name: 'Yihua',
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hi {this.state.name}
          </p>
          <button onClick={() => {
            this.setState({name: 'André'})
          }}>
            Change name
          </button>
        </header>
      </div>
    );
  }
  
}

export default App;
