import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Chain {
  id: string;
  x: number;
  y: number;
  direction: number; // arrow dir
  length: number;    // chain segments
}

const initialState: Chain[] = [];

const chainSlice = createSlice({
  name: "chains",
  initialState,
  reducers: {
    addChain: (state, action: PayloadAction<Chain>) => { state.push(action.payload); },
    updateChain: (state, action: PayloadAction<Chain>) => {
      const i = state.findIndex(c => c.id === action.payload.id);
      if (i >= 0) state[i] = action.payload;
    },
    removeChain: (state, action: PayloadAction<string>) =>
      state.filter(c => c.id !== action.payload),
  },
});

export const { addChain, updateChain, removeChain } = chainSlice.actions;
export default chainSlice.reducer;
