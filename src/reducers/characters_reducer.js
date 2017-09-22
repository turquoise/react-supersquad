import characters_json from '../data/characters.json';
import { ADD_CHARACTER, REMOVE_CHARACTER} from '../actions';
import { createCharacter } from './helpers';

function characters(state = characters_json, action) {
  switch (action.type) {
    case ADD_CHARACTER:
      let characters = state.filter( item => item.id !== action.id);
      console.log('characters ', characters);
      return characters;
    case REMOVE_CHARACTER:
      characters = [...state, createCharacter(action.id)];
      return characters;
    default:
      console.log('state ', state);
      return state;
  }
}

export default characters;
