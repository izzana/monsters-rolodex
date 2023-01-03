import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super(); //calling the constructor method

    this.state = { //creating a state
      monsters: [
        {
          name: 'Linda',
          id: '1ret576'
        },
        {
          name: 'Frank',
          id: '1rapr76'
        },
        {
          name: 'Jack',
          id: '1rewd46'
        },
        {
          name: 'Andrei',
          id: '1rnblo396'
        }
      ]
      
    }
  }

  render() {
    return (
      <div className="App">
        {
          this.state.monsters.map((monster) => {
            return <div key={monster.id}>
                <h1> {monster.name} </h1>
              </div>
          })
        }
      </div>
    );
  }
  
}

export default App;
