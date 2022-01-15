// DUX pattern
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// representative of shape of state inside of reducer-managed slice
interface CounterState {
  value: number;
}
//Define initial state's value
const initialState: CounterState = {
  value: 0,
};
// "slice" object containing counter logic takes 1 argument / first options field passed in - object name
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    // increment
    incremented(state) {
      // immer makes this function immutable under the hood
      state.value++;
    },
    amountAdded(state, action: PayloadAction<number>) {
      state.value += action.payload;
    }
  }
});

// above object generates the reducer functions and action creators inside of the reducers field... time to export
export const { incremented, amountAdded } = counterSlice.actions;
export default counterSlice.reducer;