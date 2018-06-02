import { TOGGLE_CHECKBOX } from "../actions";

export const checkbox = (state = {}, action) => {
  switch (action.type) {
    case TOGGLE_CHECKBOX:
      console.log("Reducer checkbox ", action.name);
      return state;
    default:
      return state;
  }
};
