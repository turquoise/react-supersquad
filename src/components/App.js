import React, { Component } from 'react';
import CharacterList from './CharacterList';
import HeroList from './HeroList';
import SquadStats from './SquadStats';
//import logo from './logo.svg';
import '../styles/index.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h2>SuperSquad</h2>
        <div className="row">
          <div className="col-sm-4">
            <CharacterList />
          </div>
          <div className="col-sm-4">
            <HeroList />
          </div>
          <div className="col-sm-4">
            <SquadStats />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
