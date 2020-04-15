// import { VisibilityFilters } from './actions'

const initialState = {
  state : 'initial'
  ,count : 0
}

function myReducer(state, action) {
  console.log("reducer.js - myReducer() called - action: " , action);  
  console.log("reducer.js - myReducer() called - old state: " , state);  
  if (typeof state === 'undefined') {
    return initialState
  }

  
  
  let myState = Object.assign({}, state);
  myState.count = (myState.count + 1);
  console.log("reducer.js - myReducer() called - new state: " , myState);  

  if (action.type == 'get_user') {
    console.log("reducer.js - myReducer() get_user type matched ");
    myState.users = action.users;
  }

  return myState;
}

// const todoApp = combineReducers({
//     visibilityFilter,
//     todos
//   })
  
export default myReducer
