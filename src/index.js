import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux'     //import createStore class from redux 
import { Provider } from 'react-redux'


// Type selector
const tomandjerry = 'tomandjerry';
const motupatlu = 'motupatlu';
const dragon = 'dragon';
const subscription = 'subscription';

// Actions
export const tomandjerryAction = () => ({ type: tomandjerry })
export const motupatluAction = () => ({ type: motupatlu })
export const dragonAction = () => ({ type: dragon })
export const subscriptionAction = () => ({ type: subscription })

const initialValue = {
  state : 'https://cdn.clipart.email/512fb17773a38f7957ef9dcb4f084b73_turn-off-tv-clip-art-1-clip-art-vector-site-_300-300.png',
  isSubscribed: false,
}
// Reducer 
// Passed two parameters state and actions
const comedyReducer = (state = initialValue, actions) => {       
// Use switch case or you can use if condition
  switch (actions.type) {
    case subscription:
      return {
        state : 'https://cdn.clipart.email/512fb17773a38f7957ef9dcb4f084b73_turn-off-tv-clip-art-1-clip-art-vector-site-_300-300.png',
        isSubscribed : !state.isSubscribed
      }
    case tomandjerry:
      return {
        ...state,
        state : "https://img1.looper.com/img/gallery/the-untold-truth-of-tom-and-jerry/intro-1585167291.jpg"     
      }
    case motupatlu:
      return {
        ...state,
        state : "https://assetsds.cdnedge.bluemix.net/sites/default/files/styles/very_big_1/public/feature/images/motu.jpg?itok=XgIHAQ7r"    
      }
      case dragon:
        return {
          ...state,
          state : "https://nettv4u.com/imagine/22-11-2019/dragon-booster.jpg"    
        }
    default:
      return {
        ...state
      }
  }
}

let store = createStore(comedyReducer);     // stored the comedyReducer in store variable


ReactDOM.render(
  <Provider store = { store }>
    <App />
    </Provider>
  ,
  document.getElementById('root')
);

serviceWorker.unregister();
