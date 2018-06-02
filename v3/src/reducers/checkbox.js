import { TOGGLE_CHECKBOX } from "../actions";

const initialState = {
  key1: [],
  key2: []
}

export const checkbox = (state = initialState.key1, action) => {
  switch (action.type) {
    case TOGGLE_CHECKBOX:
      const value = action.name;
      const currentIndex = state.indexOf(value);
      const newChecked = [...state];

      if (currentIndex === -1) {
        newChecked.push(value);
      } else {
        newChecked.splice(currentIndex, 1);
      }

      console.log('newChecked', newChecked);
      return newChecked;
    default:
      return state;
  }
};
