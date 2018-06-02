import { combineReducers } from "redux";
import { checkbox } from "./checkbox";

export const getStateKey = state => state.key1;

const rootReducer = combineReducers({
  checkbox
});

export default rootReducer;
