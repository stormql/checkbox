import { TOGGLE_CHECKBOX } from "../actions";

const initialState = {
  key1: [],
  key2: []
}

export const checkbox = (state = initialState.key1, action) => {
  switch (action.type) {
    case TOGGLE_CHECKBOX:

    const value = action.name;

    // const { checked } = state;
    const currentIndex = state.indexOf(value);
    const newChecked = [...state];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    console.log('newChecked', newChecked);

/*
    Now go ahead and set the state...

    this.setState({
      checked: newChecked,
    });
*/




      console.log("Reducer checkbox ", action.name);
      return state;
    default:
      return state;
  }
};
