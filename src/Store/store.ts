import { configureStore } from "@reduxjs/toolkit";

import counterSliceReducer from "./Features/counter/counterSlice";

/**
 * @configureStore is a wrapper around redux createStore function and automatically sets up a
 * store with right defaults (middleware) like redux devtools extension, redux-thunk etc.
 * It also removes the hassel of using combineReducer as we can pass multiple reducers in the
 * reducer object
 */

export const store = configureStore({
  reducer: {
    counter: counterSliceReducer,
  },
});

// Exporting types to make useDispatch and useSelector with the types we are providing
export type DispatchType = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
