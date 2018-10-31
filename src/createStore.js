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



function render() {
  const container = document.getElementById('container');
}
