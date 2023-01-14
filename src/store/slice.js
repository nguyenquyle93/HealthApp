import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedDate: null,
};

export const dataSlice = createSlice({
  name: "tableData",
  initialState,
  reducers: {
    setSelectedDate: (state, action) => {
      state.selectedDate = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSelectedDate } = dataSlice.actions;

export default dataSlice.reducer;
