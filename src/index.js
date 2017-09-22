import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
//import registerServiceWorker from './registerServiceWorker';

import rootReducer from './reducers';
//import { addCharacterById } from './actions';

const store = createStore(rootReducer);
// subscribe is an event listener that fires when the store is updated.
//store.subscribe( () => console.log('store ', store.getState()));
// we need to call this action creator
//store.dispatch(addCharacterById(2));

ReactDOM.render(
  <Provider store={store} >
      <App />
  </Provider>,
  document.getElementById('root'));
//registerServiceWorker();
