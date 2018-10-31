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
let countStore = createStore(countReducer);



function render() {
  const container = document.getElementById('container');
}
