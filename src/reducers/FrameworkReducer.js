import { createSlice } from "@reduxjs/toolkit";

export const frameworkSlice = createSlice({
  name: "framework",
  initialState: {
    value: "",
  },
  reducers: {
    setFramework: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setFramework } = frameworkSlice.actions;

export default frameworkSlice.reducer;
