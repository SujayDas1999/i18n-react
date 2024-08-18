import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: localStorage.getItem("language") ?? "en-us",
};

export const languageSlice = createSlice({
  name: "language",
  initialState: initialState,
  reducers: {
    changeLanguage: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeLanguage } = languageSlice.actions;
export default languageSlice.reducer;
