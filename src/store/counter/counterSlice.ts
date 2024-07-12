import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CounterState {
  count: number;
}

const initialState: CounterState = {
  count: 5,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addOne(state) {
      state.count++;
    },
    subtractOne(state) {
      if (state.count === 0) {
        return;
      }
      state.count--;
    },
    resetCount(state, action: PayloadAction<number>) {
      if (action.payload < 0) {
        action.payload = 0;
      }
      state.count = action.payload;
    },
  },
});

export const { addOne, resetCount, subtractOne } = counterSlice.actions;

export default counterSlice.reducer;