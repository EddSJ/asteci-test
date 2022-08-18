import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: {}
};

const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        storeData: (state, {payload}) => {
            state.data = payload;
        }
    }
})

export const { storeData } = dataSlice.actions;
export const getAllData = (state) => state.data.data;
export default dataSlice.reducer;