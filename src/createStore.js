
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

function candyReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_CANDY':
      return [...state, action.candy];
    default:
      return state;
  }
}

function countReducer(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT_COUNT':
      return state + 1;
    case 'DECREMENT_COUNT':
      return state - 1;
    default:
      return state;
  }
}
