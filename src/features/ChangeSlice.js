import { createSlice } from "@reduxjs/toolkit";

export const ChangeSlice = createSlice({
  name: "change",
  initialState: {
    loading: false,
    error: null,
    name: "a",
  },
  reducers: {
    changeText: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { changeText } = ChangeSlice.actions;


export const changeReducer = ChangeSlice.reducer;
