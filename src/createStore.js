export default function createStore(reducer) {
  // add your code here
  let state;
  
  function getState(){
    return state
  }

  function dispatch(action){
    return null
  }

  return {getState, dispatch}
}

function render() {
  const container = document.getElementById('container');
}
