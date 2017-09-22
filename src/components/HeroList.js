import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeCharacterById } from '../actions';


class HeroList extends Component {
  render() {
    return (
      <div>
        <h4>Your Hero Squad</h4>
        <ul className="list-group">
          {
            this.props.heroes.map( hero => {
              return (
                <li className="list-group-item" key={hero.id}>
                  <div className="list-item">
                    <b>{ hero.name }</b>
                  </div>
                  <i>
                    <div>Strength: {hero.strength}</div>
                    <div>Intelligence: {hero.intelligence}</div>
                    <div>Speed: {hero.speed}</div>
                  </i>

                  <div className="list-item right-button"
                        onClick={ () => this.props.removeCharacterById(hero.id)}>
                    x
                  </div>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    heroes: state.heroes
  }
}


export default connect(mapStateToProps, { removeCharacterById })(HeroList);
