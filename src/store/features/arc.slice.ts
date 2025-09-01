import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Arc {
  id: string;
  noteId: string;
  direction: number; // arrow dir
  size: number;      // distance
  length: number;    // duration
}

const initialState: Arc[] = [];

const arcSlice = createSlice({
  name: "arcs",
  initialState,
  reducers: {
    addArc: (state, action: PayloadAction<Arc>) => { state.push(action.payload); },
    updateArc: (state, action: PayloadAction<Arc>) => {
      const i = state.findIndex(a => a.id === action.payload.id);
      if (i >= 0) state[i] = action.payload;
    },
    removeArc: (state, action: PayloadAction<string>) =>
      state.filter(a => a.id !== action.payload),
  },
});

export const { addArc, updateArc, removeArc } = arcSlice.actions;
export default arcSlice.reducer;
