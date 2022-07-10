import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
}
const initialState: CounterState = {
  value: 0,
};

const counterSlice = createSlice({
  // Used for refrencing the slice
  // The name field and the key of reducer object are used to generate actionType string
  // like counter/incrementer
  name: "counter",
  initialState,
  reducers: {
    incremented: (state) => {
      // older way in classic redux
      // return { ...state, value: state.value + 1 };
      // New way in reduxtoolkit cuz of immer.js which makes it immutable under the hood
      state.value++;
    },
    amountAdded: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

/**
 * createSlice function's object (counterSlice) contains different fields in it :-
 * 1. reducer function that knows the logic to update state for the the cases we defined
 * 2. action creators for each of the different functions defined in the reducr field
 */
// Exporting actions
export const { incremented, amountAdded } = counterSlice.actions;

// Exporting reducer
export default counterSlice.reducer;
