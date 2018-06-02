import { combineReducers } from "redux";
import { checkbox } from "./checkbox";

export const getStateKey = state => {
  console.log(state.checkbox);
  // return [0,1,3];
  return state.checkbox;
}

const rootReducer = combineReducers({
  checkbox
});

export default rootReducer;
