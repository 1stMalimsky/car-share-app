import { createSlice } from "@reduxjs/toolkit";

const currentDate = new Date();

const initialState = {
    startDate: currentDate,
    endDate: "",
};

const dateSlice = createSlice({
    name: "dateHandler",
    initialState,
    reducers: {
        setStartDate: (state, action) => {
            state.startDate = action.payload;
        },
        setEndDate: (state, action) => {
            state.endDate = action.payload;
        },
    },
});


export const dateAction = dateSlice.actions;

export default dateSlice.reducer;