import { createSlice } from "@reduxjs/toolkit";

export const heardFromSlice = createSlice({
    name: 'heard-from',
    initialState: {
        value: []
    },
    reducers: {
        updateHeardFromData: (state, payload: any) => {
            state.value = payload;
        }
    }
});

export const { updateHeardFromData } = heardFromSlice.actions;

export default heardFromSlice.reducer;
