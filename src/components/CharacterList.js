import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { bindActionCreators } from 'redux';
import { addCharacterById } from '../actions';

class CharacterList extends Component {
  render() {
    console.log('this.props ', this.props);
    return (
      <div>
        <h4>Characters</h4>
        <ul className="list-group">
          {
            this.props.characters.map(character => {
              return (
                <li className="list-group-item" key={character.id} >
                  <div className="list-item" >{character.name}</div>
                  <div className="list-item right-button"
                        onClick={ () => this.props.addCharacterById(character.id)} >
                    +
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

// mapstateToProps takes the redux state and maps it to props in component.
function mapStateToProps(state) {
  //console.log('CharacterList state ', state);
  return {
    characters: state.characters
  };
}

// mapDispatchToProps binds action creators to our props on the component.
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({
//     addCharacterById
//   }, dispatch)
// }

export default connect(mapStateToProps, {addCharacterById} )(CharacterList);
