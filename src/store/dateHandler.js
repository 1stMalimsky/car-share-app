import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    startDate: "",
    endDate: "",
};

const dateSlice = createSlice({
    name: "dateHandler",
    initialState,
    reducers: {
        setStartDate: (initialState, action) => {
            initialState.startDate = action.payload;
        },
        setEndDate: (initialState, action) => {
            initialState.endDate = action.payload;
        },
    },
});


export const dateActions = dateSlice.actions;

export default dateSlice.reducer;