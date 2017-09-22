// import json into the rootReducer
import characters_json from '../data/characters.json';
import { ADD_CHARACTER} from '../actions';


function characters(state = characters_json, action) {
  switch (action.type) {
    case ADD_CHARACTER:
      let characters = state.filter( item => item.id !== action.id);
      console.log('characters ', characters);
      return characters;
    default:
      console.log('state ', state);
      return state;
  }

}

export default characters;
