import candyReducer from './reducers/candyReducer';
import countReducer from './reducers/countReducer';

export default function createStore(reducer) {
  // add your code here

  function getState(){
    return state
  }

  function dispatch(action){
    reducer(state, action)
  }

  return {getState, dispatch}
}

let candyStore = createStore(candyReducer);
candyStore.dispatch({type: '@@INIT'})
let countStore = createStore(countReducer);
countStore.dispatch({type: '@@INIT'})



function render() {
  const container = document.getElementById('container');
}
