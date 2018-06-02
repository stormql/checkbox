import { combineReducers } from "redux";
import { checkbox } from "./checkbox";

export const getStateKey = state => {
  console.log(state);
  return [0,1,3];
}

const rootReducer = combineReducers({
  checkbox
});

export default rootReducer;
